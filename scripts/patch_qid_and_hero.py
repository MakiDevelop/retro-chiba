#!/usr/bin/env python3
"""
Patch the 14 newly-added consoles:
  1. Replace placeholder QIDs in markdown frontmatter + consoles.json with verified values.
  2. Insert `images.hero` block with `wikimedia:File:...` placeholder so wikimedia.py
     can fetch the actual file on its next run.

Usage:
    python3 scripts/patch_qid_and_hero.py        # dry-run (show diff summary)
    python3 scripts/patch_qid_and_hero.py --apply
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# slug -> (old_qid, new_qid, commons_image_or_None)
PATCHES = {
    "subor":              ("Q15880580", "Q11035338", None),
    "ique-player":        ("Q1156870",  "Q285025",   "Nintendo-N64-iQue-Player-FL.jpg"),
    "amiga-cd32":         ("Q303404",   "Q695161",   "Amiga-CD32-wController-L.jpg"),
    "watara-supervision": ("Q1306305",  "Q732683",   "Watara-Supervision-Tilted.jpg"),
    "super-a-can":        ("Q2200012",  "Q2475188",  "Super-ACan-Console-set-h.jpg"),
    "gamate":             ("Q3094980",  "Q2395462",  "Gamate.jpg"),
    "game-and-watch":     ("Q623316",   "Q215034",   "Game-and-watch-ball.png"),
    "amiga-cdtv":         ("Q304244",   "Q955368",   "CDTV.jpg"),
    "sega-pico":          ("Q716480",   "Q1374482",  "Kids Computer Pico-01.jpg"),
    "fm-towns-marty":     ("Q1397617",  "Q923987",   "FM-Towns-Marty-Console-Set.jpg"),
    "bandai-playdia":     ("Q1054572",  "Q1198088",  "Bandai-Playdia-Set-R.jpg"),
    "pc-fx":              ("Q1318935",  "Q1136902",  "PC-FX-Console-Set.png"),
    "casio-loopy":        ("Q1047219",  "Q661952",   "Casio-Loopy-Console-Set.png"),
    "tiger-rzone":        ("Q1320074",  "Q7273280",  "Tiger-RZone-Headset.jpg"),
}

LANG_FILES = ("zh-tw.md", "zh-cn.md", "en.md", "ja.md")


def patch_markdown(path: Path, old_qid: str, new_qid: str,
                   commons_image: str | None, apply: bool) -> tuple[bool, list[str]]:
    """Returns (changed, log_lines)."""
    text = path.read_text(encoding="utf-8")
    log: list[str] = []
    new_text = text

    # 1. Replace qid in frontmatter
    qid_pattern = re.compile(rf"^qid: {re.escape(old_qid)}\s*$", re.MULTILINE)
    if qid_pattern.search(new_text):
        new_text = qid_pattern.sub(f"qid: {new_qid}", new_text)
        log.append(f"  qid: {old_qid} -> {new_qid}")
    else:
        log.append(f"  [!] qid line not found (expected '{old_qid}')")

    # 2. Insert images.hero block before notable_games:
    if commons_image:
        # Already has images.hero? skip
        if re.search(r"^images:\s*\n\s+hero:", new_text, re.MULTILINE):
            log.append(f"  hero: already present, skipped")
        else:
            hero_block = (
                f"images:\n"
                f"  hero:\n"
                f"    src: \"wikimedia:File:{commons_image}\"\n"
                f"    license: PD\n"
            )
            ng = re.search(r"^notable_games:", new_text, re.MULTILINE)
            if ng:
                pos = ng.start()
                new_text = new_text[:pos] + hero_block + new_text[pos:]
                log.append(f"  + hero block inserted (commons: {commons_image})")
            else:
                log.append(f"  [!] no notable_games anchor; cannot insert hero")

    changed = new_text != text
    if changed and apply:
        path.write_text(new_text, encoding="utf-8")
    return changed, log


def patch_consoles_json(apply: bool) -> tuple[int, list[str]]:
    path = ROOT / "src/data/consoles.json"
    text = path.read_text(encoding="utf-8")
    log: list[str] = []
    new_text = text
    n = 0
    for slug, (old_qid, new_qid, _img) in PATCHES.items():
        if old_qid == new_qid:
            continue
        old_block = f'"qid": "{old_qid}"'
        new_block = f'"qid": "{new_qid}"'
        if old_block in new_text:
            new_text = new_text.replace(old_block, new_block)
            log.append(f"  consoles.json: {slug} qid {old_qid} -> {new_qid}")
            n += 1
        # Also update wikidata URL
        old_url = f'"wikidata": "https://www.wikidata.org/wiki/{old_qid}"'
        new_url = f'"wikidata": "https://www.wikidata.org/wiki/{new_qid}"'
        if old_url in new_text:
            new_text = new_text.replace(old_url, new_url)
            log.append(f"  consoles.json: {slug} wikidata URL -> {new_qid}")
    if apply and new_text != text:
        path.write_text(new_text, encoding="utf-8")
    return n, log


def main():
    apply = "--apply" in sys.argv
    print(f"Mode: {'APPLY' if apply else 'DRY-RUN'}\n")

    consoles_dir = ROOT / "src/content/consoles"
    total_changed = 0
    for slug, (old_qid, new_qid, commons_image) in PATCHES.items():
        slug_dir = consoles_dir / slug
        if not slug_dir.exists():
            print(f"[SKIP] {slug} (directory not found)")
            continue
        print(f"=== {slug}  qid {old_qid} -> {new_qid}  hero: {commons_image or '(none)'}")
        for fname in LANG_FILES:
            fpath = slug_dir / fname
            if not fpath.exists():
                print(f"  {fname}: missing")
                continue
            changed, log_lines = patch_markdown(
                fpath, old_qid, new_qid, commons_image, apply)
            for line in log_lines:
                print(f"  {fname}:{line[2:] if line.startswith('  ') else line}")
            if changed:
                total_changed += 1

    print()
    n_json, json_log = patch_consoles_json(apply)
    for line in json_log:
        print(line)
    print(f"\nTotal markdown files {'patched' if apply else 'would-patch'}: {total_changed}")
    print(f"consoles.json entries updated: {n_json}")
    if not apply:
        print("\n→ Re-run with --apply to write changes.")


if __name__ == "__main__":
    main()
