#!/usr/bin/env python3
"""Retry the 6 consoles still missing or pending after wikidata_search.py."""
from __future__ import annotations
import json, sys, time
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError

# slug, search variants to try in order
QUERIES = [
    ("subor", ["Subor company", "Subor video game", "小霸王 Subor", "Subor SB-486"]),
    ("gamate", ["Gamate Bit Corporation", "Gamate handheld console", "Gamate"]),
    ("bandai-playdia", ["Bandai Playdia"]),
    ("pc-fx", ["PC-FX"]),
    ("casio-loopy", ["Casio Loopy", "My Seal Computer"]),
    ("tiger-rzone", ["Tiger R-Zone", "R-Zone Tiger Electronics"]),
]


def search(term: str) -> list[dict]:
    params = {"action": "wbsearchentities", "search": term, "language": "en",
              "type": "item", "format": "json", "limit": "5"}
    url = f"https://www.wikidata.org/w/api.php?{urlencode(params)}"
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-retry"})
    try:
        with urlopen(req, timeout=15) as r:
            return json.load(r).get("search", [])
    except HTTPError as e:
        print(f"  HTTP {e.code} for '{term}'", file=sys.stderr)
        return []


def fetch_p18(qid: str) -> str:
    url = f"https://www.wikidata.org/wiki/Special:EntityData/{qid}.json"
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-retry"})
    try:
        with urlopen(req, timeout=15) as r:
            data = json.load(r)
    except HTTPError:
        return ""
    p18 = data.get("entities", {}).get(qid, {}).get("claims", {}).get("P18", [])
    if not p18:
        return ""
    try:
        return p18[0]["mainsnak"]["datavalue"]["value"]
    except (KeyError, IndexError):
        return ""


def main():
    print(f"{'slug':<20} {'qid':<12} {'image':<55} label — desc")
    print("-" * 130)
    for slug, terms in QUERIES:
        found = False
        for term in terms:
            results = search(term)
            time.sleep(1.2)  # be very polite this round
            for r in results:
                desc = (r.get("description") or "").lower()
                # Strict: only match console / handheld / video game related
                if any(k in desc for k in ("console", "handheld", "video game",
                                           "ゲーム機", "subor", "famiclone", "bit corporation")):
                    qid = r["id"]
                    img = fetch_p18(qid)
                    time.sleep(1.2)
                    print(f"{slug:<20} {qid:<12} {img[:55]:<55} {r.get('label', '')} — {r.get('description', '')}")
                    found = True
                    break
            if found:
                break
        if not found:
            # Print top 3 candidates for human review
            print(f"{slug:<20} [no console-like match for any term — candidates:]")
            results = search(terms[0])
            time.sleep(1.2)
            for r in results[:5]:
                print(f"{'':<20} {r.get('id', ''):<12} {'':<55}    {r.get('label', '')} — {r.get('description') or ''}")


if __name__ == "__main__":
    main()
