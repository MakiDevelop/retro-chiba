#!/usr/bin/env python3
"""Convert data/console-names.csv → src/data/consoles.json"""
import csv
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "console-names.csv"
DST = ROOT / "src" / "data" / "consoles.json"

# Manual slug mapping for routes (kebab-case from English label)
SLUG_OVERRIDES = {
    "Q172742": "famicom",          # NES / Famicom
    "Q183259": "super-famicom",
    "Q10676":  "mega-drive",       # Genesis / Mega Drive
    "Q1057377": "pc-engine",
    "Q64428080": "neo-geo-aes",
    "Q1047516": "sega-cd",
    "Q200912": "saturn",
    "Q184198": "dreamcast",
    "Q132020": "xbox",
    "Q19610114": "switch",
    "Q122761124": "switch-2",
    "Q98967383": "xbox-series-s",
    "Q64513817": "xbox-series-x",
    "Q63184502": "ps5",
    "Q5014725": "ps4",
    "Q10683": "ps3",
    "Q10680": "ps2",
    "Q10677": "ps1",
    "Q184839": "n64",
    "Q14773": "gamecube",
    "Q673268": "wii",  # but Q673268 was wrong → Q8079
    "Q8079": "wii",
    "Q56942": "wii-u",
    "Q48263": "xbox-360",
    "Q13361286": "xbox-one",
    "Q186437": "game-boy",
    "Q203992": "game-boy-color",
    "Q188642": "game-boy-advance",
    "Q170323": "nintendo-ds",
    "Q203597": "nintendo-3ds",
    "Q170325": "psp",
    "Q188808": "ps-vita",
    "Q164651": "virtual-boy",
    "Q751719": "game-gear",
    "Q1065792": "wonderswan",
    "Q939881": "neo-geo-pocket",
    "Q336434": "n-gage",
    "Q753657": "atari-lynx",
    "Q966193": "turbo-express",
    "Q1475303": "microvision",
    "Q2498396": "game-com",
    "Q523532": "tapwave-zodiac",
    "Q209868": "master-system",
    "Q753600": "atari-7800",
    "Q11201": "atari-2600",
    "Q206261": "atari-2600",
    "Q743222": "atari-5200",
    "Q1061441": "intellivision",
    "Q1046862": "colecovision",
    "Q767631": "vectrex",
    "Q576932": "magnavox-odyssey-2",
    "Q744987": "magnavox-odyssey",
    "Q6390435": "atari-pong",
    "Q1064163": "coleco-telstar",
    "Q650601": "atari-jaguar",
    "Q229429": "3do",
    "Q15015195": "apple-pippin",
}


def slugify(s):
    return s.lower().replace(" ", "-").replace("/", "-").replace(".", "").replace(",", "")


def main():
    DST.parent.mkdir(parents=True, exist_ok=True)
    consoles = []
    with SRC.open(encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            qid = row["qid"]
            slug = SLUG_OVERRIDES.get(qid) or slugify(row["en"]) or qid.lower()
            consoles.append({
                "qid": qid,
                "slug": slug,
                "gen": row["gen"],
                "kind": row["kind"],
                "names": {
                    "en": row["en"],
                    "ja": row["ja"],
                    "zh-tw": row["zh_tw"],
                    "zh-cn": row["zh_cn"],
                },
                "maker": row["maker"],
                "first_release": row["first_release"],
                "wikidata": row["wikidata_url"],
            })
    with DST.open("w", encoding="utf-8") as f:
        json.dump(consoles, f, ensure_ascii=False, indent=2)
    print(f"wrote {len(consoles)} consoles to {DST}")


if __name__ == "__main__":
    main()
