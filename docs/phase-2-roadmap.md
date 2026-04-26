# Phase 2 Roadmap — 風聞軼事 + 改版收錄

> 紀錄 Phase 1（補主機資訊版）完成後要回頭補的工作
> 維護：每次 Maki 提到「下一階段」、「之後再做」等指示時，補進這份檔
> 上次更新：2026-04-25

## 1. 風聞軼事 / 文化敘事

Phase 1 寫的「資訊版」每台主機只有一段中性事實描述。Phase 2 要補：

- **歷史事件**（Famicom 召回 / Saturn 北美 E3 突襲 / 3DO $699 上市…）
- **文化注解**（中華商場、小霸王、Tectoy 巴西、ファミコン店頭…）
- **insider 觀察**（Saturn 雙 CPU 對開發者 hostile、Mega Drive blast processing 行銷…）
- **4 語 tone 差異化**（en 考證 / ja archivist / zh-tw 童年 / zh-cn 山寨補位）

範例：Famicom / Master System / Atari 7800 / Super Famicom 已是 Phase 2 完整版。

## 2. 全世代「**改版收錄**」（2026-04-25 Maki 指示）

> Maki：「到時候全世代的主機把各款改版的圖和規格都收錄進來」

每台主機要收錄**所有地區版本與型號改版**——圖 + 規格 + 上市日期。

### Pattern

對每台主機：
- **hero**：文化代表性版本（通常日版 / 原始發行版）
- **gallery**：所有其他地區版 + 型號改版

### 已知重要改版清單（待補）

#### Gen 3
- **FC/NES**：JP Famicom Mk1 / US NES toaster / NES top-loader / AV Famicom（HVC-101，1993）
- **Master System**：JP Mark III / Master System / Master System II（slim）/ Tectoy 巴西多版
- **Atari 7800**：標準型 ProSystem（單一版本）

#### Gen 4
- **SFC/SNES**：✅ 日版 hero + 美版 gallery 已完成。**待補**：JP Super Famicom Jr.（1998 slim）/ Super NES（mini，model 2，1997）/ SNES Classic Mini（2017）
- **Mega Drive**：JP Mk1 / NA Genesis Mk1 / Mk2（JP/NA）/ Genesis 3（小型，Majesco）/ Nomad（手提）/ Tectoy 巴西多版本（仍在生產）
- **PC Engine**：CoreGrafx / CoreGrafx II / SuperGrafx / PC Engine GT（手提）/ PC Engine Duo / Duo-R / Duo-RX / TurboGrafx-16 / TurboDuo
- **Neo Geo AES**：AES 黑色版 / 金色限定版 / Neo Geo CD / CDZ / 卡帶與 CD 機種
- **Sega CD/Mega-CD**：Model 1（前載）/ Model 2（側堆）/ CDX / Wondermega / Multi-Mega

#### Gen 5
- **PS1**：SCPH-1000 / SCPH-1001（NA）/ SCPH-3000 / SCPH-5000 / SCPH-7000 / **PSone（SCPH-100, 2000 slim）**
- **N64**：原版灰 / Pikachu N64 / Funtastic colors（半透明六色）/ iQue Player（2003 中國神遊版）
- **Saturn**：JP Mk1 / NA Mk1 / JP Mk2 / NA Mk2 / Hi-Saturn（Hitachi）/ V-Saturn（Victor）
- **Dreamcast**：JP / NA / 各色限定版
- **3DO**：Panasonic FZ-1 / FZ-10 / GoldStar / Sanyo TRY / Creative 3DO Blaster
- **Apple Pippin**：Bandai @WORLD（JP）/ Atmark（NA）
- **Atari Jaguar**：標準黑 / Jaguar CD（外接）

#### Gen 6
- **PS2**：Original FAT / Slim（SCPH-70000，2004）/ Super Slim 不存在（PS2 沒）
- **Xbox**：標準綠 / Xbox Crystal（透明）/ Xbox Halo Special Edition
- **GameCube**：紫 / 黑 / 銀 / 橘 / Panasonic Q（DVD 版）
- **Dreamcast**：JP / NA / 各色限定版

#### Gen 7
- **PS3**：FAT / Slim（2009）/ Super Slim（2012）
- **Xbox 360**：Original Phat / Elite / Slim（2010）/ E（2013）
- **Wii**：原版 / Family Edition / Wii Mini

#### Gen 8
- **PS4**：FAT / Slim / Pro
- **Xbox One**：Original / S / X
- **Wii U**：Basic / Premium
- **Switch**：原版 / Lite（2019）/ OLED（2021）

#### Gen 9
- **PS5**：Original / Slim（2023）/ Pro（2024）/ Digital Edition
- **Xbox Series**：X / S（同代雙機，已分別獨立條目）
- **Switch 2**：（待 2025-2026 後續確認改版）

#### 掌機支線
- **Game Boy**：Original DMG / Pocket / Light（JP only）/ Color（已獨立 Q-ID）
- **Game Boy Advance**：原版 / SP / Micro
- **DS**：Original / Lite / DSi / DSi XL
- **3DS**：Original / XL / 2DS / New 3DS / New 3DS XL / New 2DS XL
- **PSP**：1000 / 2000 / 3000 / Go / Street（E-1000）
- **PS Vita**：1000（OLED）/ 2000（LCD）/ TV
- **N-Gage**：Classic / QD
- **WonderSwan**：Original / Color / Crystal
- **Neo Geo Pocket**：Mono / Color

### 工程影響

當前 schema 已支援 `images.gallery: imageRef[]`，但每個 gallery item 只有圖片資料，沒有「該改版的單獨規格 / 上市日期 / 銷量」欄位。

未來如需「每改版獨立規格表」，schema 要擴充：
```yaml
variants:
  - id: ps1-original
    name: { 'zh-tw': '原版 SCPH-1001', en: 'Original SCPH-1001' }
    release: { jp: '1994-12-03', na: '1995-09-09' }
    images: [ ... ]
    specs_delta: { weight: '1.5kg', dimensions: '...' }  # 與主規格的差異
  - id: psone-slim
    name: ...
```

**目前先用 gallery 圖片陣列搞定**，等 Phase 2 真要展開規格分眾時再 schema migration。

## 3. 還沒做但已知要補

- **Tailwind typography**：body prose 樣式陽春
- **每台主機影片**（廠商官方 retro YouTube 嵌入）
- **首頁時間軸視覺**：目前是清單式，可考慮做成真正時間軸（橫向 / 縱向）

## 4. 已完成基礎工程

### 影像 pipeline 自動化（2026-04-26）

`scripts/wikimedia.py` 已就位。在 console frontmatter `images.gallery` 加入：

```yaml
images:
  gallery:
    - src: "wikimedia:File:Nintendo-Famicom-AV-Console-Set.jpg"
      alt: "AV ファミコン HVC-101（1993）"
      caption: "AV Famicom（1993）—— 任天堂為延長 FC 壽命推出的小型重設計版"
      license: PD              # 留 placeholder，腳本會校正
```

然後跑：

```bash
# 先 dry run 看看會抓什麼
python3 scripts/wikimedia.py

# 實際執行：下載到 public/img/consoles/、改寫 frontmatter src 指向本地路徑
python3 scripts/wikimedia.py --apply
```

腳本會：
1. 從 Commons API 抓 license / author / source_url
2. 下載圖檔到 `public/img/consoles/<console-slug>-<commons-name>.jpg`
3. 重寫該 markdown：`src` 改成本地路徑，補齊 `license` / `author` / `source_url`
4. 4 語版本共用同一個圖檔（節省下載）
5. 已存在的圖檔 skip，re-run 安全

完成後可跑 `python3 scripts/optimize-images.py` 壓縮 jpg + `node scripts/generate-console-thumbs.mjs` 生 webp 縮圖。

### 已 Phase 2 完整清單（2026-04-26）

家用主機編年史 31 台 × 4 語（124 篇）全 Phase 2 敘事完成：
- **Gen 1**：Magnavox Odyssey / Atari Pong / Coleco Telstar
- **Gen 2**：Atari 2600 / Magnavox Odyssey² / Intellivision / Atari 5200 / ColecoVision / Vectrex
- **Gen 3**：Famicom / Master System / Atari 7800
- **Gen 4**：Super Famicom / Mega Drive / PC Engine / Neo Geo AES / Sega CD
- **Gen 5**：PS1 / N64 / Saturn / 3DO / Apple Pippin / Atari Jaguar
- **Gen 6**：PS2 / Xbox / GameCube / Dreamcast
- **Gen 7**：PS3 / Xbox 360 / Wii
- **Gen 8/9**：（Phase 1 階段，待後續批次升 Phase 2）

掌機支線 17 台 × 4 語（68 篇）為 Phase 1（commit 85a6e4c）。

### 4 語 tone 差異化已落實

- **en**: archival 敘事，社會脈絡（Senate 聽證、ESRB 起源等）
- **ja**: 1970-2000 年代日本廠商視角（Sony / Sega / 任天堂）
- **zh-tw**: 中華商場、光華商場、電玩通月刊、童年水貨
- **zh-cn**: 民間漢化文化（天幻網、漢化新世紀）、主機禁令空白、街機室拳皇文化
