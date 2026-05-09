#!/usr/bin/env python3
"""
Verify QIDs + fetch Commons hero images for the 14 newly added consoles.

For each console:
  1. Hit Wikidata Special:EntityData/{QID}.json
  2. If 404 / redirect → QID invalid, report
  3. If valid, extract:
     - English label (verify it's the right entity)
     - Aliases (matching language names)
     - P18 image (Commons filename for the hero shot)
  4. Print a TSV the patcher script can consume.

Usage:
    python3 scripts/qid_to_image.py
"""
from __future__ import annotations
import json
import sys
import time
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

# 14 newly added consoles + their best-guess QIDs
NEW_CONSOLES = [
    ("subor", "Q15880580"),
    ("ique-player", "Q1156870"),
    ("amiga-cd32", "Q303404"),
    ("watara-supervision", "Q1306305"),
    ("super-a-can", "Q2200012"),
    ("gamate", "Q3094980"),
    ("game-and-watch", "Q623316"),
    ("amiga-cdtv", "Q304244"),
    ("sega-pico", "Q716480"),
    ("fm-towns-marty", "Q1397617"),
    ("bandai-playdia", "Q1054572"),
    ("pc-fx", "Q1318935"),
    ("casio-loopy", "Q1047219"),
    ("tiger-rzone", "Q1320074"),
]


def fetch_entity(qid: str) -> dict | None:
    url = f"https://www.wikidata.org/wiki/Special:EntityData/{qid}.json"
    req = Request(url, headers={"User-Agent": "retro-chiba/qid-check"})
    try:
        with urlopen(req, timeout=15) as r:
            data = json.load(r)
        return data.get("entities", {}).get(qid)
    except HTTPError as e:
        if e.code == 404:
            return None
        print(f"  HTTP error {e.code} for {qid}", file=sys.stderr)
        return None
    except URLError as e:
        print(f"  Network error for {qid}: {e}", file=sys.stderr)
        return None


def extract(entity: dict) -> dict:
    labels = entity.get("labels", {})
    label_en = labels.get("en", {}).get("value", "")
    label_ja = labels.get("ja", {}).get("value", "")
    label_zh = (
        labels.get("zh", {}).get("value")
        or labels.get("zh-tw", {}).get("value")
        or labels.get("zh-hant", {}).get("value", "")
    )
    p18 = entity.get("claims", {}).get("P18", [])
    image_filename = ""
    if p18:
        try:
            image_filename = p18[0]["mainsnak"]["datavalue"]["value"]
        except (KeyError, IndexError):
            image_filename = ""
    return {
        "label_en": label_en,
        "label_ja": label_ja,
        "label_zh": label_zh,
        "image": image_filename,
    }


def main() -> int:
    print(f"{'slug':<22} {'qid':<12} {'image_or_status':<60} label_en")
    print("-" * 130)
    rows = []
    for slug, qid in NEW_CONSOLES:
        entity = fetch_entity(qid)
        if entity is None:
            status = "[QID INVALID OR 404]"
            print(f"{slug:<22} {qid:<12} {status:<60} —")
            rows.append((slug, qid, "", "INVALID", "", "", ""))
            continue
        info = extract(entity)
        if info["image"]:
            status = info["image"]
        else:
            status = "[no P18 image]"
        print(
            f"{slug:<22} {qid:<12} {status:<60} {info['label_en'] or '—'}"
        )
        rows.append((
            slug, qid, info["image"],
            "OK" if info["image"] else "NO_IMAGE",
            info["label_en"], info["label_ja"], info["label_zh"],
        ))
        time.sleep(0.4)  # be polite to wikidata

    # Also print machine-readable TSV for the patcher
    print("\n# TSV for patcher (slug<TAB>qid<TAB>commons_filename<TAB>status<TAB>label_en<TAB>label_ja<TAB>label_zh)")
    for r in rows:
        print("\t".join(r))
    return 0


if __name__ == "__main__":
    sys.exit(main())
