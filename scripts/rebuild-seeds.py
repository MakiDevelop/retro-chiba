#!/usr/bin/env python3
"""
Rebuild data/console-qids.txt by searching Wikidata for each entry.

Input:  data/console-seeds.tsv  (gen, kind, search_term, expected_keyword)
Output: data/console-qids.txt   (QID,gen,kind,nickname)

Strategy:
  For each row, query wbsearchentities with search_term; filter results whose
  description contains "console" or "platform"; pick top match. If none, mark
  with FIXME comment.
"""
import csv
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SEED_TSV = ROOT / "data" / "console-seeds.tsv"
OUT_FILE = ROOT / "data" / "console-qids.txt"
UA = "retro-chiba/0.0.1 (https://retro.chiba.tw)"


def search(term):
    url = (
        "https://www.wikidata.org/w/api.php?"
        + urllib.parse.urlencode(
            {
                "action": "wbsearchentities",
                "search": term,
                "language": "en",
                "type": "item",
                "limit": 5,
                "format": "json",
            }
        )
    )
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.load(resp).get("search", [])


def pick(results, keyword):
    """Pick the result whose description suggests it's a console/platform."""
    keep = [
        "console", "platform", "system", "handheld", "gaming",
        "video game", "computer", "arcade",
    ]
    keyword_l = keyword.lower()
    # First: exact label match + game-related description
    for r in results:
        if r.get("label", "").lower() == keyword_l:
            desc = (r.get("description") or "").lower()
            if any(k in desc for k in keep):
                return r
    # Second: any result with game-related description
    for r in results:
        desc = (r.get("description") or "").lower()
        if any(k in desc for k in keep):
            return r
    return None


def main():
    if not SEED_TSV.exists():
        print(f"Missing seed file: {SEED_TSV}", file=sys.stderr)
        sys.exit(1)

    rows = []
    fixmes = []
    with SEED_TSV.open(encoding="utf-8") as f:
        reader = csv.reader(f, delimiter="\t")
        for line in reader:
            if not line or line[0].startswith("#"):
                continue
            if len(line) < 4:
                continue
            gen, kind, term, nick = line[0], line[1], line[2], line[3]
            try:
                res = search(term)
            except Exception as e:
                print(f"  search error for {term}: {e}", file=sys.stderr)
                fixmes.append((term, nick, "search-error"))
                continue

            top = pick(res, term)
            if not top:
                fixmes.append((term, nick, "no-match"))
                rows.append(("FIXME", gen, kind, nick))
                print(f"  FIXME: {term} ({nick})", file=sys.stderr)
            else:
                qid = top["id"]
                desc = (top.get("description") or "")[:60]
                rows.append((qid, gen, kind, nick))
                print(f"  {qid} <- {term} | {desc}", file=sys.stderr)
            time.sleep(0.15)

    # Write output organized by gen
    lines = ["# Curated Wikidata Q-IDs for retro.chiba.tw",
             "# Format: QID,gen,kind,nickname",
             "# Auto-rebuilt by scripts/rebuild-seeds.py",
             ""]
    current_gen = None
    gen_titles = {
        "1": "# Gen 1 (1972-1983)", "2": "# Gen 2 (1976-1992)",
        "3": "# Gen 3 (1983-2003)", "4": "# Gen 4 (1987-2004)",
        "5": "# Gen 5 (1993-2006)", "6": "# Gen 6 (1998-2013)",
        "7": "# Gen 7 (2005-2017)", "8": "# Gen 8 (2012-)",
        "9": "# Gen 9 (2020-)", "h": "# Handhelds (獨立支線)",
    }
    for qid, gen, kind, nick in rows:
        if gen != current_gen:
            current_gen = gen
            lines.append("")
            lines.append(gen_titles.get(gen, f"# {gen}"))
        lines.append(f"{qid},{gen},{kind},{nick}")
    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"\nwrote {len(rows)} rows to {OUT_FILE}", file=sys.stderr)
    if fixmes:
        print(f"FIXMES: {len(fixmes)}", file=sys.stderr)
        for term, nick, reason in fixmes:
            print(f"  {reason}: {term} ({nick})", file=sys.stderr)


if __name__ == "__main__":
    main()
