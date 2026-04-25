#!/usr/bin/env python3
"""
Fetch 4-language official names + manufacturer + first release date for the
curated console QID seed list. Output CSV at data/console-names.csv.

Usage: python3 scripts/fetch-console-names.py
"""
import csv
import json
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QID_FILE = ROOT / "data" / "console-qids.txt"
OUT_FILE = ROOT / "data" / "console-names.csv"
ENDPOINT = "https://query.wikidata.org/sparql"
UA = "retro-chiba/0.0.1 (https://retro.chiba.tw; makiakatsu@gmail.com)"


def load_seeds():
    seeds = []
    for line in QID_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = [p.strip() for p in line.split(",", 3)]
        if len(parts) < 4:
            continue
        qid, gen, kind, nick = parts
        seeds.append({"qid": qid, "gen": gen, "kind": kind, "nick": nick})
    return seeds


def build_query(qids):
    values = " ".join(f"wd:{q}" for q in qids)
    return f"""
SELECT ?qid ?en ?mul ?ja ?zh_tw ?zh_hant ?zh_cn ?zh_hans ?zh ?makerLabel ?devLabel ?firstRelease WHERE {{
  VALUES ?console {{ {values} }}
  OPTIONAL {{ ?console rdfs:label ?en      FILTER(LANG(?en) = "en") }}
  OPTIONAL {{ ?console rdfs:label ?mul     FILTER(LANG(?mul) = "mul") }}
  OPTIONAL {{ ?console rdfs:label ?ja      FILTER(LANG(?ja) = "ja") }}
  OPTIONAL {{ ?console rdfs:label ?zh_tw   FILTER(LANG(?zh_tw) = "zh-tw") }}
  OPTIONAL {{ ?console rdfs:label ?zh_hant FILTER(LANG(?zh_hant) = "zh-hant") }}
  OPTIONAL {{ ?console rdfs:label ?zh_cn   FILTER(LANG(?zh_cn) = "zh-cn") }}
  OPTIONAL {{ ?console rdfs:label ?zh_hans FILTER(LANG(?zh_hans) = "zh-hans") }}
  OPTIONAL {{ ?console rdfs:label ?zh      FILTER(LANG(?zh) = "zh") }}
  OPTIONAL {{
    ?console wdt:P176 ?maker .
    ?maker rdfs:label ?makerLabel FILTER(LANG(?makerLabel) = "en")
  }}
  OPTIONAL {{
    ?console wdt:P178 ?dev .
    ?dev rdfs:label ?devLabel FILTER(LANG(?devLabel) = "en")
  }}
  OPTIONAL {{ ?console wdt:P577 ?firstRelease . }}
  BIND(STRAFTER(STR(?console), "http://www.wikidata.org/entity/") AS ?qid)
}}
"""


def query(sparql):
    req = urllib.request.Request(
        ENDPOINT,
        data=sparql.encode("utf-8"),
        headers={
            "Accept": "application/sparql-results+json",
            "User-Agent": UA,
            "Content-Type": "application/sparql-query",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.load(resp)


def lit(b, key):
    return b.get(key, {}).get("value")


def first(*args):
    for a in args:
        if a:
            return a
    return ""


def main():
    seeds = load_seeds()
    print(f"loaded {len(seeds)} seed QIDs", file=sys.stderr)

    # Group QIDs into chunks of 50 to be polite
    chunks = [seeds[i : i + 50] for i in range(0, len(seeds), 50)]
    by_qid = {}
    earliest = {}
    for chunk in chunks:
        qids = [s["qid"] for s in chunk]
        sparql = build_query(qids)
        result = query(sparql)
        for b in result["results"]["bindings"]:
            qid = lit(b, "qid")
            # group: same QID may appear multiple times if multiple firstRelease values
            if qid not in by_qid:
                by_qid[qid] = b
            # track earliest release
            release = lit(b, "firstRelease") or ""
            if release:
                if qid not in earliest or release < earliest[qid]:
                    earliest[qid] = release

    rows = []
    for s in seeds:
        b = by_qid.get(s["qid"], {})
        mul = lit(b, "mul")
        rows.append(
            {
                "qid": s["qid"],
                "gen": s["gen"],
                "kind": s["kind"],
                "nickname_audit": s["nick"],
                "en": first(lit(b, "en"), mul),
                "ja": first(lit(b, "ja"), mul),
                "zh_tw": first(lit(b, "zh_tw"), lit(b, "zh_hant"), lit(b, "zh"), mul),
                "zh_cn": first(lit(b, "zh_cn"), lit(b, "zh_hans"), lit(b, "zh"), mul),
                "maker": first(lit(b, "makerLabel"), lit(b, "devLabel")),
                "first_release": (earliest.get(s["qid"], "") or "")[:10],
                "wikidata_url": f"https://www.wikidata.org/wiki/{s['qid']}",
            }
        )

    fieldnames = list(rows[0].keys())
    with OUT_FILE.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)

    print(f"wrote {len(rows)} rows to {OUT_FILE}", file=sys.stderr)

    # Audit summary
    missing = {
        "en": sum(1 for r in rows if not r["en"]),
        "ja": sum(1 for r in rows if not r["ja"]),
        "zh_tw": sum(1 for r in rows if not r["zh_tw"]),
        "zh_cn": sum(1 for r in rows if not r["zh_cn"]),
        "maker": sum(1 for r in rows if not r["maker"]),
        "first_release": sum(1 for r in rows if not r["first_release"]),
    }
    print(f"missing fields: {missing}", file=sys.stderr)


if __name__ == "__main__":
    main()
