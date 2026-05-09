#!/usr/bin/env python3
"""
Search Wikidata for the correct QID + Commons image (P18) of each new console.

For each console name, hits wbsearchentities, prints top candidates so a human
(or follow-up code) can pick the right one. Also fetches P18 for the top result
when it looks like a video-game-console / handheld entity.

Usage:
    python3 scripts/wikidata_search.py
"""
from __future__ import annotations
import json
import sys
import time
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

SEARCH_URL = "https://www.wikidata.org/w/api.php"
ENTITY_URL = "https://www.wikidata.org/wiki/Special:EntityData/{qid}.json"

# (slug, search_term, hint_words_for_console)
QUERIES = [
    ("subor", "Subor SB-486 learning machine", ["console", "famicom clone", "subor"]),
    ("ique-player", "iQue Player", ["nintendo", "console", "ique"]),
    ("amiga-cd32", "Amiga CD32", ["console", "commodore", "cd32"]),
    ("watara-supervision", "Watara Supervision", ["handheld", "console", "watara"]),
    ("super-a-can", "Super A'Can", ["console", "funtech", "a'can"]),
    ("gamate", "Gamate handheld", ["handheld", "bit corporation"]),
    ("game-and-watch", "Game & Watch", ["nintendo", "handheld"]),
    ("amiga-cdtv", "Amiga CDTV", ["console", "commodore", "cdtv"]),
    ("sega-pico", "Sega Pico", ["sega", "console"]),
    ("fm-towns-marty", "FM Towns Marty", ["fujitsu", "console"]),
    ("bandai-playdia", "Bandai Playdia", ["bandai", "console"]),
    ("pc-fx", "PC-FX NEC console", ["nec", "console"]),
    ("casio-loopy", "Casio Loopy", ["casio", "console"]),
    ("tiger-rzone", "Tiger R-Zone", ["tiger electronics", "handheld"]),
]


def search(term: str, limit: int = 5) -> list[dict]:
    params = {
        "action": "wbsearchentities",
        "search": term,
        "language": "en",
        "type": "item",
        "format": "json",
        "limit": str(limit),
    }
    url = f"{SEARCH_URL}?{urlencode(params)}"
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-search"})
    with urlopen(req, timeout=15) as r:
        data = json.load(r)
    return data.get("search", [])


def fetch_p18(qid: str) -> str:
    url = ENTITY_URL.format(qid=qid)
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-search"})
    try:
        with urlopen(req, timeout=15) as r:
            data = json.load(r)
    except (HTTPError, URLError):
        return ""
    entity = data.get("entities", {}).get(qid, {})
    p18 = entity.get("claims", {}).get("P18", [])
    if not p18:
        return ""
    try:
        return p18[0]["mainsnak"]["datavalue"]["value"]
    except (KeyError, IndexError):
        return ""


def score_match(result: dict, hints: list[str]) -> int:
    """Higher = more likely to be the right console entity."""
    desc = (result.get("description") or "").lower()
    label = (result.get("label") or "").lower()
    score = 0
    for h in hints:
        if h.lower() in desc:
            score += 3
        if h.lower() in label:
            score += 1
    # Strongly prefer explicit "console" / "handheld" / "video game"
    for kw in ("video game console", "home video game console",
               "handheld game console", "game console", "video game"):
        if kw in desc:
            score += 5
    # Penalize unrelated descriptions
    for bad in ("politician", "footballer", "asteroid", "species",
                "company", "born ", "actor"):
        if bad in desc:
            score -= 5
    return score


def main() -> int:
    print(f"{'slug':<22} {'qid':<12} {'p18 image':<55} label / desc")
    print("-" * 140)
    tsv_rows = []
    for slug, term, hints in QUERIES:
        results = search(term)
        if not results:
            print(f"{slug:<22} {'—':<12} {'[no search results]':<55} —")
            tsv_rows.append((slug, "", "", "NOT_FOUND"))
            continue
        # Score each candidate, pick best
        best = max(results, key=lambda r: score_match(r, hints))
        # If best score is too low, surface all candidates for human pick
        best_score = score_match(best, hints)
        qid = best.get("id", "")
        label = best.get("label", "")
        desc = best.get("description") or ""
        image = fetch_p18(qid) if qid else ""
        time.sleep(0.4)
        marker = "✓" if best_score >= 5 else "?"
        print(f"{slug:<22} {qid:<12} {image[:55]:<55} {marker} {label} — {desc}")
        tsv_rows.append((slug, qid, image, "OK" if best_score >= 5 else "REVIEW"))
        # Show alternatives if uncertain
        if best_score < 5:
            for alt in results:
                if alt.get("id") == qid:
                    continue
                print(f"{'':<22} {alt.get('id', ''):<12} {'  alt':<55}    {alt.get('label', '')} — {alt.get('description') or ''}")

    print("\n# TSV (slug<TAB>qid<TAB>commons_image<TAB>status)")
    for r in tsv_rows:
        print("\t".join(r))
    return 0


if __name__ == "__main__":
    sys.exit(main())
