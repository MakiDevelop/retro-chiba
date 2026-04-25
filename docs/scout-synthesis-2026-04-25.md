# Scout Synthesis — retro.chiba.tw 素材 / 法律 / 內容戰略

> Session: `2026-04-25-retro-chiba-scout`
> Sources: `~/Documents/agent-council/2026-04-25-retro-chiba-scout/{max,grok}-answer.md`
> Synthesis 引用 evidence ID（不引 agent 名，CLAUDE.md §4 C4）

## Evidence ID 對照

- `E-M{n}` → Max answer 中的 footnote `[^n]`（精確法律 / 授權 / 銷量 citation）
- `E-Gxxx` → Grok answer 中的段落（社群 / 即時 / insider）

---

## 1. 確定的決策（不再討論）

### 1.1 世代分類採 Wikipedia 1–9（E-M75, E-M77）

| 世代 | 期間 | 代表機 |
|---|---|---|
| 1 | 1972–1983 | Magnavox Odyssey, Atari Pong |
| 2 | 1976–1992 | Atari 2600, Intellivision |
| 3 | 1983–2003 | FC/NES, Master System |
| 4 | 1987–2004 | SFC/SNES, Mega Drive |
| 5 | 1993–2006 | PS1, N64, Saturn |
| 6 | 1998–2013 | PS2, GameCube, Dreamcast, Xbox |
| 7 | 2004–2017 | PS3, Xbox 360, Wii |
| 8 | 2012–現在 | PS4, Xbox One, Wii U |
| 9 | 2020–現在 | PS5, Xbox Series, Switch 2 |

**掌機支線獨立分類，不納入世代排序**（IGN/Polygon 慣例，E-M75）。

### 1.2 4 語官方名稱 → 走 Wikidata SPARQL（E-M64）

不要手動 typing。`wd:Q8076` (家用主機) + `rdfs:label@zh-tw/zh-cn/en/ja` 可一次拉完。CSV 匯出，build-time 注入 content collection。
**注意**：Wikidata `zh` 標籤簡繁混雜，需人工 audit。

### 1.3 模擬器：不嵌入 ✅

Grok 確認社群默契一致（E-G3b, E-G3c）：純 web 模擬器嵌入「灰但可接受」，但不值得為了一個功能踩 Nintendo DMCA 雷區。Maki 原決定正確。

---

## 2. 影像來源戰略（六層）

### Tier 0｜禁區（不要碰）

- ❌ Nintendo 任何 ROM / 直接 asset / press kit 截圖（E-M15, E-M16, E-M17, E-G3a Vimm's Lair 持續被 DMCA）
- ❌ Sega Retro / SmashWiki / Sonic Retro 上的「fair use 媒體」直接搬到自家站（E-M38, E-M39 — 它們的 fair use 宣稱不延伸授權）
- ❌ Bandai Namco 任何素材（E-M33, E-M34 ToU 嚴限 personal-only）
- ❌ X 上隨手轉發的封面圖（無溯源 = 高風險）

### Tier 1｜公版安全（最優先）

- **Wikidata SPARQL**：抓主機 entity + 4 語 label + 鏈到 Wikimedia 圖（E-M64）
- **Wikimedia Commons 硬體照片**：CC-BY-SA 居多（E-M2, E-M5）
  - 安全 category：`Category:Famicom_and_variants`（E-M2）
  - 注意：「Retro_gaming」category 太 fan，需逐檔審（E-M4）
- **Sega Retro 全站**：CC-BY 4.0（**文字 + 媒體**，E-M36, E-M37）— 唯一可大量引用的 fan wiki

### Tier 2｜教育引用 fair use（標 rationale）

- **VGHF Library**（archive.gamehistory.org）：30,000+ 策展檔案，2025/1 開放（E-M14, E-G5-bonus）— 列為「**幕後參考資料庫 No.1**」
- **Wikipedia fair use 模板**：`Template:Non-free use rationale video game cover`（E-M72）— 直接複製此格式
- **Internet Archive Famitsu** 雜誌（E-M6, E-M7, E-M8）：日本灰色地帶但廠商未 takedown，可引用單頁附 source link

### Tier 3｜社群 archivist（X 帳號，需個別問權限或標來源）

- **英文**：@classicgameads（E-G2a, curated by @C64tone）、@VGArtAndTidbits（自掃）
- **日文**：@oroti_famicom（archivist 等級）、@Neo_Geo_Forever、@ItsFantasticAC
- **中文**：@WestCityPcGame1（PC 老廣告）

實務：用「Fair use, source: @handle/status/xxx」標註，不直接 host 圖檔，能 deep-link 就 deep-link。

### Tier 4｜AI 生成（補空缺，不取代真掃描）

社群態度（E-G2c）：purist 反對 AI 取代真掃描，但「補空缺 / 風格化插畫」OK。

實作：
- 工具：`mcp__llm-hub__generate_image` (Nano Banana 2 / Flux)
- Prompt 加：`"official 1980s magazine scan style, authentic print texture, no AI artifacts"`（E-G2c 社群推薦話術）
- 圖底下強制標：`AI-generated illustration | Created with [Tool]`（E-M-D3）

### Tier 5｜Maki 自有

收藏實機照、自己拍的家裡客廳 CRT 場景。版權自有，最自由。

---

## 3. 影片戰略

### 嵌入規則

| 來源 | 嵌入 | 風險 |
|---|---|---|
| 廠商官方 YouTube（Sega / Nintendo / Sony / Xbox / Capcom JP / Konami JP）| ✅ | 低（E-M-B1） |
| Fan-uploaded TV CM 合輯 | ❌ | 高 — 隨時被 takedown 變空框（E-M-B2, E-G3a） |
| 連結（hyperlink）到 fan video | ✅ | 低（不嵌入頁就不會空框） |
| ROM 截圖直接發 | ⚠️ | 改用廠商 press kit 或現有 fair use 截圖（E-M-D2） |

### 法律支撐

- **US**：Richardson v. Townsquare Media 確認「嵌入官方影片合法」（E-M41, E-M42）
- **TW**：§52 + §65 主從關係 + 標出處（E-M43, E-M44）
- **JP**：2025/10 東京地院判「未授權轉載截圖侵權」(E-M45)，但**嵌入 ≠ 轉載**，仍有空間。日文版頁面要更謹慎。

---

## 4. Metadata 戰略

### 主路徑：IGDB（E-M46, E-M47）

- 免費，4 req/s
- Twitch Developer Console 申請 Client ID + Secret
- 涵蓋規格 + 代表作 + 多語名稱
- build-time 拉資料寫成 JSON cache

### 補充路徑

- **MobyGames**（E-M48）：歷史最完整，720 req/hr 免費
- **Hasheous + RomM**（E-G2b, E-G5-1）：**2025-26 社群最熱 metadata 革命** — 雖然主要服務 ROM hash → metadata，但其資料層（基於 IGDB + No-Intro/Redump）可作為**輔助查證**。**Phase C 後**考慮整合，初期不強求。

### 銷量：dual quote 模式

- **官方財報**為主（E-M55-63）：FC 6,191 萬 / SFC 4,910 萬 / PS1 1.024 億 / PS2 1.6 億 / N64 3,292 萬 / DC 1,060 萬 / GameCube 2,174 萬
- **圈內共識**為輔（E-G4a）：Saturn 9.26M、Dreamcast 9M、PS Vita「niche 成功」
- 寫法：「官方數據 X 萬，圈內 archivist 共識更接近 Y 萬（理由：日本長尾）」

### VGChartz 不單獨引用

E-M54 點明 VGChartz 是估值，僅可作趨勢輔助。

---

## 5. 名稱與 tone（4 語版本）

### 主機正名（E-G4b, E-G4c）

| 機器 | 英文版偏好 | 中文版 | 日文版 |
|---|---|---|---|
| Famicom/NES | NES（北美語境）/ Famicom（日本語境） | 紅白機 / FC（**禁用**「家庭電腦」） | ファミコン |
| Mega Drive/Genesis | Mega Drive（全球）/ Genesis（NA only） | Mega Drive / 世嘉 MD | メガドライブ |
| TG-16/PC Engine | **PC Engine**（國際 purist 共識） | PC Engine | PCエンジン |

### 口吻差異化（E-G1b）

| 語版 | 切角 | 範例風格 |
|---|---|---|
| en | 冷靜歷史考證 + preservation 角度 | "Released in October 1985, the NES revived..." |
| ja | archivist 深度（原型機、店頭、廣告）| 「店頭デモで流れていたのは…」 |
| zh-tw | 童年回憶 + 廣告/包裝視覺 | 「打開那盒紅白機的瞬間…」 |
| zh-cn | 童年回憶（小紅書感）+ 山寨文化注釋 | 「老子強強堂、小霸王學習機…」 |

### 最容易被吐槽的雷（E-G4c）

1. ファミコン 翻「家庭電腦」
2. Genesis/Mega Drive、TG-16/PC Engine 同篇混用
3. 中翻英太 sentimental
4. 日文版缺店頭廣告 / 原型機細節

→ **每語版用 native speaker 校對 tone + 專名一次性 lock 對照表**（從 Wikidata SPARQL 開始）

---

## 6. 法律標註 template（4 語站底部最小版）

`<figcaption>` 三型（E-M-D3 + E-M72 對齊 Wikipedia 慣例）：

```html
<!-- CC 授權 -->
<figcaption class="img-meta">
  © {Author} ·
  <a href="{source}">{Source name}</a> ·
  <span class="license">CC-BY-SA 4.0</span>
</figcaption>

<!-- Fair use -->
<figcaption class="img-meta">
  {圖說} · © {Rights Holder} ·
  Used under fair use for historical/educational commentary ·
  <a href="{source}">Source</a>
</figcaption>

<!-- AI 生成 -->
<figcaption class="img-meta">
  AI-generated illustration · {Tool}
</figcaption>
```

每個 frontmatter 對應一行：

```yaml
images:
  hero:
    src: wikimedia:File:Nintendo-Famicom-Console-Set-FL.jpg
    license: CC-BY-SA-3.0
    author: "Evan-Amos"
  boxart:
    src: archive:famitsu-0147/page42.jpg
    license: fair-use
    rationale: educational-commentary
    rights_holder: "Square / 任天堂"
  era_mood:
    src: ai-generated:1985-japan-living-room-crt
    tool: "Flux 1.1 Pro"
```

build hook 自動產生 `<figcaption>` HTML。

---

## 7. 參考站（互相借鑑，不抄）

- **Sega Retro**（E-M36, E-M37）：條目格式可作主機詳情頁範本，且 CC-BY 4.0 文字可量化引用
- **VGHF Library**（E-M14）：純閱讀型 + 學術氣質的 UX 範本
- **Hardcore Gaming 101**（E-M53, E-M74）：深度文章質感參考（無 API，不抓資料）

**Maki 站的差異化機會**（E-G2a, E-G5-2）：
- 真正的 4 語覆蓋（其他英文站幾乎沒中文）
- 「**官方復刻 vs 社群 homebrew**」對比專題（最近 PLAION Neo-Geo AES+ / SEGA Mega Drive 60+ 新作 是時代信號）

---

## 8. Phase B 行動清單（Gen 3 vertical slice）

### Step 1｜內容 schema 定型
- [ ] `src/content/config.ts` 用 zod 定義 generations / consoles / handhelds / arcade-pc collection
- [ ] frontmatter 含：`wikidata_qid`、`names: {zh-tw, zh-cn, en, ja}`、`images.{hero, boxart, era_mood}`、`videos[]`、`sales: {official, community}`

### Step 2｜抓 4 語對照表
- [ ] 跑一次 Wikidata SPARQL（手動從 query.wikidata.org），存 `data/console-names.csv`
- [ ] zh 簡繁人工 audit

### Step 3｜Gen 3 三台主機 vertical slice
- [ ] FC/NES：hero from Wikimedia, boxart from VGHF/Famitsu, 廣告影片從 任天堂 JP YouTube
- [ ] Master System：hero from Sega Retro CC-BY 4.0
- [ ] MSX（可選）：第三世代邊緣案

### Step 4｜image pipeline 雛形
- [ ] build hook 解析 frontmatter `src:` 前綴（`wikimedia:` / `archive:` / `ai-generated:` / `vghf:` / `archivist:`）
- [ ] 第一版只支援 `wikimedia:` + `ai-generated:`，其他先手動下載

### Step 5｜頁面組件
- [ ] 世代總覽頁（時間軸 + 主機卡片）
- [ ] 主機詳情頁（hero / 規格表 / 銷量 dual quote / 代表作 / 影片嵌入 / 廣告畫廊）

### Step 6｜部署 + 4 語切換驗證
- [ ] rsync 部署
- [ ] 四語頁面內容對得上 schema
- [ ] image fair-use rationale 全部標到位

---

## 9. 不做（明確記下避免未來繞回）

- ❌ 不做 ROM hash → metadata 對應功能（Hasheous 已做完，不重造輪子）
- ❌ 不做模擬器嵌入（Maki 原決定 + 社群默契）
- ❌ 不做 ROM 直連 / mirror
- ❌ 不靠 VGChartz 單一銷量
- ❌ 不抄 Sonic Retro / SmashWiki 的 fair-use 媒體（它們的宣稱不延伸授權）
- ❌ 不在中文版用「家庭電腦」
- ❌ 不嵌入 fan-uploaded CM 合輯

---

## 10. Surprise / 前瞻機會

1. **「官方復刻 vs 社群 homebrew」專題**（E-G5-2）：目前無人做，PLAION Neo-Geo AES+ 是時代信號。Phase C 後納入計畫。
2. **VGHF Library 引用導覽**（E-G5-bonus）：每篇主機條目最後一段「延伸閱讀：VGHF Library 上的相關 archive」，把 Maki 站定位為「導引到第一手資料」的入口而非取代品。
3. **Hasheous + RomM 整合**（E-G2b）：Phase C 之後可以提供「玩家自查 hash → 對應主機 / 遊戲」嵌入工具，但**初期不做**。

---

## 引用對照（footnote → evidence）

詳細 references 見：
- Max footnotes 1-77：`max-answer.md` 第 312-467 行
- Grok 段落 1a/1b/2a/2b/2c/3a/3b/3c/4a/4b/4c/5：`grok-answer.md`
