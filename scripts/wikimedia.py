#!/usr/bin/env python3
"""Wikimedia Commons fetcher for console gallery images.

Scans src/content/consoles/**/*.md frontmatter for `wikimedia:File:Foo.jpg`
entries, queries Wikimedia Commons API for the actual image URL plus license
metadata, downloads the image to public/img/consoles/, and rewrites the
frontmatter src to the local path.

Idempotent: already-downloaded files (matched by deterministic local filename)
are skipped on subsequent runs. Re-runs only fetch new entries.

Usage:
    python3 scripts/wikimedia.py            # dry run, list what would be done
    python3 scripts/wikimedia.py --apply    # actually download + rewrite

Frontmatter convention:
    images:
      gallery:
        - src: "wikimedia:File:SNES-Mod1-Console-Set.jpg"
          alt: "SNES NA model 1"
          caption: "..."
          license: PD            # placeholder, will be overwritten if Commons differs
          # author / source_url / source_url filled in by this script

After running with --apply, the gallery entry above becomes:
    - src: "/img/consoles/super-famicom-snes-mod1-console-set.jpg"
      alt: "SNES NA model 1"
      caption: "..."
      license: PD                # confirmed / corrected from Commons
      author: "Evan-Amos"
      source_url: "https://commons.wikimedia.org/wiki/File:SNES-Mod1-Console-Set.jpg"
"""

from __future__ import annotations

import argparse
import re
import sys
import time
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Optional
from urllib.parse import quote

try:
    import requests
except ImportError:
    print("ERROR: requests not installed. Run: pip install requests", file=sys.stderr)
    sys.exit(1)


ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "src" / "content" / "consoles"
IMG_DIR = ROOT / "public" / "img" / "consoles"
COMMONS_API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "retro-chiba-fetcher/1.0 (https://retro.chiba.tw; makiakatsu@gmail.com)"

# Map Commons LicenseShortName values to retro-chiba schema enum
LICENSE_MAP = {
    "Public domain": "PD",
    "PD": "PD",
    "CC0": "PD",
    "CC BY-SA 4.0": "CC-BY-SA-4.0",
    "CC BY-SA 3.0": "CC-BY-SA-3.0",
    "CC BY-SA 2.0": "CC-BY-SA-2.0",
    "CC BY 4.0": "CC-BY-4.0",
}


@dataclass
class CommonsMeta:
    direct_url: str
    license_enum: str           # mapped to retro-chiba schema
    license_raw: str            # what Commons returned
    author: Optional[str]
    source_url: str             # the File: page on Commons


def commons_lookup(filename: str) -> Optional[CommonsMeta]:
    """Query Commons API for image metadata. filename is e.g. 'SNES-Mod1-Console-Set.jpg'."""
    params = {
        "action": "query",
        "titles": f"File:{filename}",
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
        "format": "json",
        "formatversion": "2",
    }
    headers = {"User-Agent": USER_AGENT}
    resp = requests.get(COMMONS_API, params=params, headers=headers, timeout=15)
    resp.raise_for_status()
    data = resp.json()
    pages = data.get("query", {}).get("pages", [])
    if not pages or pages[0].get("missing"):
        return None
    info = pages[0].get("imageinfo", [])
    if not info:
        return None
    ii = info[0]
    extmd = ii.get("extmetadata", {})
    license_raw = extmd.get("LicenseShortName", {}).get("value", "")
    license_enum = LICENSE_MAP.get(license_raw, "fair-use")
    author_raw = extmd.get("Artist", {}).get("value", "")
    author = strip_html(author_raw) if author_raw else None
    return CommonsMeta(
        direct_url=ii["url"],
        license_enum=license_enum,
        license_raw=license_raw,
        author=author,
        source_url=f"https://commons.wikimedia.org/wiki/File:{quote(filename)}",
    )


def strip_html(s: str) -> str:
    """Crude tag stripper for Commons Artist field which often contains HTML."""
    s = re.sub(r"<[^>]+>", "", s)
    return unicodedata.normalize("NFKC", s).strip()


def slugify_filename(commons_filename: str, console_slug: str) -> str:
    """Deterministic local filename: <console-slug>-<lowercased-commons-name>."""
    base = commons_filename.lower()
    base = re.sub(r"[^a-z0-9.-]+", "-", base)
    base = re.sub(r"-+", "-", base).strip("-")
    return f"{console_slug}-{base}"


# Match `wikimedia:File:NAME.ext` strings across the document.
WIKIMEDIA_RE = re.compile(r"\bwikimedia:File:([A-Za-z0-9._\-' ()]+\.[A-Za-z0-9]{3,4})")


@dataclass
class Hit:
    """A single wikimedia: reference found in a markdown file."""
    md_path: Path
    console_slug: str
    raw_marker: str          # the original "wikimedia:File:Foo.jpg"
    commons_filename: str    # "Foo.jpg"
    target_local_path: str   # "/img/consoles/foo-bar.jpg" (web-relative)
    target_disk_path: Path   # absolute disk path under public/


def scan() -> list[Hit]:
    hits: list[Hit] = []
    for md in sorted(CONTENT_DIR.rglob("*.md")):
        text = md.read_text(encoding="utf-8")
        console_slug = md.parent.name
        for m in WIKIMEDIA_RE.finditer(text):
            commons_filename = m.group(1)
            local_basename = slugify_filename(commons_filename, console_slug)
            disk_path = IMG_DIR / local_basename
            web_path = f"/img/consoles/{local_basename}"
            hits.append(Hit(
                md_path=md,
                console_slug=console_slug,
                raw_marker=m.group(0),
                commons_filename=commons_filename,
                target_local_path=web_path,
                target_disk_path=disk_path,
            ))
    return hits


def download(url: str, dest: Path):
    headers = {"User-Agent": USER_AGENT}
    with requests.get(url, headers=headers, stream=True, timeout=60) as r:
        r.raise_for_status()
        dest.parent.mkdir(parents=True, exist_ok=True)
        tmp = dest.with_suffix(dest.suffix + ".part")
        with open(tmp, "wb") as f:
            for chunk in r.iter_content(chunk_size=64 * 1024):
                f.write(chunk)
        tmp.replace(dest)


def rewrite_markdown(hit: Hit, meta: CommonsMeta):
    """Rewrite the wikimedia: marker to the local path, preserving alt/caption around it.
    Also patch license / author / source_url on the same imageRef block if missing.
    """
    text = hit.md_path.read_text(encoding="utf-8")

    # 1. Swap the src marker.
    new_text = text.replace(
        f'"{hit.raw_marker}"',
        f'"{hit.target_local_path}"',
    )
    # also handle single-quoted form
    new_text = new_text.replace(
        f"'{hit.raw_marker}'",
        f"'{hit.target_local_path}'",
    )
    # bare-form (no quotes) - rarer but handle
    new_text = new_text.replace(hit.raw_marker, hit.target_local_path)

    # 2. Patch the imageRef block this src belongs to: ensure license / author /
    #    source_url reflect Commons. Conservative — only inject if the field is
    #    not already present in this gallery item block.
    #
    # An imageRef block is a list item starting with `- src: ...` and continuing
    # until the next `- ` at the same indentation level OR the closing `---`.
    # We do a lightweight in-place patch around the just-rewritten src line.
    lines = new_text.splitlines(keepends=True)
    src_idx = None
    for i, line in enumerate(lines):
        if hit.target_local_path in line and ("src:" in line or "src :" in line):
            src_idx = i
            break
    if src_idx is None:
        hit.md_path.write_text(new_text, encoding="utf-8")
        return

    # Find indent of the src line (this is a list-item continuation).
    src_line = lines[src_idx]
    indent_match = re.match(r"^(\s+)", src_line)
    indent = indent_match.group(1) if indent_match else "      "

    # Find end of this list item: next line at same `- ` level or dedent past indent.
    end_idx = len(lines)
    for j in range(src_idx + 1, len(lines)):
        ln = lines[j]
        if not ln.strip():
            continue
        ln_indent_match = re.match(r"^(\s*)", ln)
        ln_indent = ln_indent_match.group(1) if ln_indent_match else ""
        # End of imageRef block: hit a new `- src:` (gallery sibling) or closing fence.
        if ln.strip().startswith("- src:") and len(ln_indent) < len(indent):
            end_idx = j
            break
        if ln.startswith("---") or ln.startswith("notable_games:") or ln.startswith("videos:"):
            end_idx = j
            break

    block = "".join(lines[src_idx:end_idx])

    def has_field(field: str) -> bool:
        return re.search(rf"^{re.escape(indent)}{field}:", block, flags=re.MULTILINE) is not None

    inserts = []
    if not has_field("license"):
        inserts.append(f"{indent}license: {meta.license_enum}\n")
    if meta.author and not has_field("author"):
        inserts.append(f'{indent}author: "{meta.author}"\n')
    if not has_field("source_url"):
        inserts.append(f'{indent}source_url: "{meta.source_url}"\n')

    if inserts:
        # Insert immediately after the src line.
        lines = lines[:src_idx + 1] + inserts + lines[src_idx + 1:]

    hit.md_path.write_text("".join(lines), encoding="utf-8")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--apply", action="store_true",
                    help="Actually download and rewrite. Default is dry run.")
    ap.add_argument("--throttle", type=float, default=1.0,
                    help="Seconds between Commons API calls (default 1.0)")
    args = ap.parse_args()

    hits = scan()
    if not hits:
        print("No `wikimedia:File:...` markers found in src/content/consoles/")
        print("Add gallery entries with `src: \"wikimedia:File:Foo.jpg\"` and re-run.")
        return

    print(f"Found {len(hits)} wikimedia: markers across {len({h.md_path for h in hits})} files.")

    seen_files = set()  # commons_filename → already processed this run
    skipped_existing = 0
    fetched = 0
    failed = 0

    for hit in hits:
        if hit.commons_filename in seen_files:
            # Same Commons file referenced from multiple md (i.e. 4-language siblings).
            # Image was already downloaded earlier in this run; just rewrite this md.
            if args.apply and hit.target_disk_path.exists():
                meta = commons_lookup(hit.commons_filename)
                if meta:
                    rewrite_markdown(hit, meta)
            continue

        if hit.target_disk_path.exists():
            print(f"  [skip-existing] {hit.commons_filename} → {hit.target_disk_path.name}")
            skipped_existing += 1
            seen_files.add(hit.commons_filename)
            if args.apply:
                meta = commons_lookup(hit.commons_filename)
                if meta:
                    rewrite_markdown(hit, meta)
            continue

        print(f"  [{('apply' if args.apply else 'dry')}] {hit.commons_filename} → {hit.target_disk_path.name}")
        if not args.apply:
            seen_files.add(hit.commons_filename)
            continue

        try:
            meta = commons_lookup(hit.commons_filename)
            if meta is None:
                print(f"    ERROR: not found on Commons", file=sys.stderr)
                failed += 1
                continue
            print(f"    license: {meta.license_raw} → {meta.license_enum}")
            if meta.author:
                print(f"    author:  {meta.author}")
            download(meta.direct_url, hit.target_disk_path)
            rewrite_markdown(hit, meta)
            fetched += 1
            seen_files.add(hit.commons_filename)
            time.sleep(args.throttle)
        except Exception as e:
            print(f"    ERROR: {e}", file=sys.stderr)
            failed += 1

    print()
    print(f"Summary: fetched={fetched}, skipped-existing={skipped_existing}, failed={failed}")
    if not args.apply:
        print("(dry run — re-run with --apply to actually download)")


if __name__ == "__main__":
    main()
