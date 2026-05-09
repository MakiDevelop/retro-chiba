#!/usr/bin/env python3
"""Last 3 lookups with longer sleeps and broader terms."""
from __future__ import annotations
import json, sys, time
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError

QUERIES = [
    ("casio-loopy", ["Casio Loopy console", "My Seal Computer SV-100", "ルーピー Casio"]),
    ("tiger-rzone", ["Tiger R-Zone HeadGear", "R-Zone handheld", "Tiger Electronics R-Zone"]),
    ("subor", ["Subor learning machine", "小霸王", "Subor electronics"]),
]


def search(term: str):
    params = {"action": "wbsearchentities", "search": term, "language": "en",
              "type": "item", "format": "json", "limit": "8"}
    url = f"https://www.wikidata.org/w/api.php?{urlencode(params)}"
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-last"})
    try:
        with urlopen(req, timeout=15) as r:
            return json.load(r).get("search", [])
    except HTTPError as e:
        print(f"  HTTP {e.code} for '{term}'", file=sys.stderr)
        return []


def fetch_p18(qid: str) -> str:
    url = f"https://www.wikidata.org/wiki/Special:EntityData/{qid}.json"
    req = Request(url, headers={"User-Agent": "retro-chiba/wikidata-last"})
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
    print(f"{'slug':<18} {'qid':<12} {'image':<50} label — desc")
    print("-" * 130)
    for slug, terms in QUERIES:
        found = False
        for term in terms:
            results = search(term)
            time.sleep(3.0)
            for r in results:
                desc = (r.get("description") or "").lower()
                if any(k in desc for k in ("console", "handheld", "video game",
                                           "ゲーム機", "famiclone", "learning machine",
                                           "electronic toy", "lcd game")):
                    qid = r["id"]
                    img = fetch_p18(qid)
                    time.sleep(3.0)
                    print(f"{slug:<18} {qid:<12} {img[:50]:<50} {r.get('label', '')} — {r.get('description', '')}")
                    found = True
                    break
            if found:
                break
        if not found:
            print(f"{slug:<18} [no clean match — top candidates from '{terms[0]}':]")
            for r in search(terms[0])[:5]:
                print(f"{'':<18} {r.get('id', ''):<12} {'':<50}    {r.get('label', '')} — {r.get('description') or ''}")
            time.sleep(3.0)


if __name__ == "__main__":
    main()
