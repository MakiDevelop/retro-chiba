#!/usr/bin/env python3
"""Down-resize hero JPGs in public/img/ to web-friendly size + quality.
   Idempotent — re-running on already-optimized images is a no-op.
   Strategy: longest edge ≤ 1600px, JPEG quality 82, progressive."""
import sys
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
TARGET_DIR = ROOT / "public" / "img"
MAX_EDGE = 1600
QUALITY = 82


def optimize(p: Path):
    before = p.stat().st_size
    img = Image.open(p)
    img = ImageOps.exif_transpose(img)
    if img.mode != "RGB":
        img = img.convert("RGB")
    w, h = img.size
    longest = max(w, h)
    if longest > MAX_EDGE:
        scale = MAX_EDGE / longest
        img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    img.save(p, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    after = p.stat().st_size
    print(f"  {p.name}: {before/1024:.0f} KB → {after/1024:.0f} KB ({100*after/before:.0f}%) [{img.size[0]}×{img.size[1]}]")


def main():
    files = list(TARGET_DIR.rglob("*.jpg")) + list(TARGET_DIR.rglob("*.jpeg"))
    if not files:
        print("no jpg files found", file=sys.stderr)
        return
    for f in files:
        try:
            optimize(f)
        except Exception as e:
            print(f"  {f.name}: ERROR {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
