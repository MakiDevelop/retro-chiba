# Arcade / PC 支線啟動計畫（Phase 1 + Phase 2）

> 起草：2026-04-27（Opus 4.7 1M session 結尾）
> 狀態：**草稿，下個 session 執行**
> 前置：家用機 38 台 × 4 語 + 掌機 17 台 × 4 語 = 68 + 220 篇 narrative 全部完成（Phase 2），17 台掌機 23 張 Wikimedia gallery 多語完成
> 命題：retro-chiba 從「家用機 + 掌機」雙軸擴成「家用機 + 掌機 + 街機 + PC」四軸

---

## 0. 為什麼分次做（context hygiene）

- 這個 session 已 56K+ tokens，cache 已退化
- 街機 + PC 是新支線，不是現有條目擴充——schema 改動 + 內容從零起
- 開新 session 起頭可以乾淨重建 prompt cache

---

## 1. Schema 改動（首要）

### 1a. `kind` enum 擴充

`src/content.config.ts:32`：

```typescript
// 現況
kind: z.enum(['home', 'handheld', 'hybrid', 'addon']),

// 改成
kind: z.enum(['home', 'handheld', 'hybrid', 'addon', 'arcade', 'pc']),
```

### 1b. 不開新 collection

理由：
- 同一個 `consoles` collection 已支援 4 語 + frontmatter + gallery + videos
- 加 `kind: arcade` 與 `kind: pc` 即可區分
- nav / 列表頁可用 `data.kind === 'arcade'` filter

### 1c. `gen` 欄位處理

家用機用 `gen: 1..9`，掌機用 `gen: h`。街機 / PC 怎麼分代？

**建議**：
- 街機用 `gen: a`（arcade，無世代分代——按廠商或年代分組）
- PC 用 `gen: p`（PC，同樣不分代）

→ `src/content.config.ts` 的 `gen` 也要從 `z.enum([...])` 加進新值
→ 確認 `src/pages/[lang]/generations/[gen].astro` 是否相容

---

## 2. 內容範圍（先選哪些）

### 街機（Phase 1 起手 8 台）

優先：對 retro-chiba 受眾（華人 / 日本懷舊愛好者）有意義的標誌性街機平台

| 平台 | 理由 |
|---|---|
| **Atari Pong / Pong arcade** (1972) | 商業化街機產業起點 |
| **Taito Space Invaders** (1978) | 日本街機現象 + 全球熱潮 |
| **Namco Pac-Man** (1980) | 史上最暢銷街機 + 日本廠搶到全球 |
| **Capcom CPS-1** (1988) | Street Fighter II + 90 年代街機霸權 |
| **Capcom CPS-2** (1993) | KOF 對手平台 + 90 年代日本街機文化 |
| **SNK Neo Geo MVS** (1990) | 100 in 1 街機板 + KOF / Samurai Shodown / Metal Slug |
| **Sega Model 2 / Model 3** (1993-96) | Virtua Fighter / Daytona / OutRun 2 — 3D 街機革命 |
| **Konami arcade**（System 16 / GX）| Gradius / Castlevania / Bemani 系列 |

可選擴充：Atari System I/II、Namco System 1/2、Taito F2、Williams、Cinematronics

### PC（Phase 1 起手 8 台）

優先：日系 PC（retro-chiba 主軸）+ 西方代表

| 平台 | 理由 |
|---|---|
| **NEC PC-98** (1982-2003) | 日本 PC 黃金時代 + 日系 RPG / 美少女遊戲核心平台 |
| **Sharp X68000** (1987-1993) | 日本 hardcore 玩家神機 + 街機完美移植 |
| **MSX / MSX2** (1983-90) | 日本中小學 PC + Metal Gear / Bomberman 起點 |
| **FM Towns** (1989-1997) | 富士通 + Towns Marty 多媒體 PC |
| **IBM PC / DOS** (1981-) | 西方 PC 遊戲基礎 |
| **Apple II** (1977-1993) | 北美 80 年代 PC 教育標配 |
| **Commodore 64** (1982-1994) | 西方 8-bit PC 之王（單機種銷量第一） |
| **Amiga 500/1200** (1985-1996) | 90 年代歐洲 PC 遊戲文化 |

可選擴充：ZX Spectrum、Atari ST、Acorn Archimedes、PC-88（PC-98 前身）、X1（Sharp）

### 工程量

**Phase 1**：8 + 8 = 16 台 × 4 語 = **64 篇** skeleton（每篇 100-200 字 + frontmatter）

**Phase 2**：16 台 × 4 語 = **64 篇 narrative 升級**（每篇 1000-1500 字，4 語 tone differentiation）

**Wikimedia gallery**：16 台 × 1-2 張 = 16-32 entries × 4 語 caption 翻譯

合計：**約 192 篇撰寫工作量**（比掌機 17 台略多）

---

## 3. 路由與導覽

### 3a. 列表頁

需新增（或擴充現有 `[gen].astro`）：
- `/[lang]/arcade/`（街機列表）
- `/[lang]/pc/`（PC 列表）

或者用 `/[lang]/generations/a/` + `/[lang]/generations/p/`（如果 `gen: a/p` 走 generations 路由）。

### 3b. 首頁 nav

`src/components/Nav.astro`（或 BaseLayout）加街機 / PC 連結。i18n key：

- `nav.arcade`：街機 / 街机 / Arcade / アーケード
- `nav.pc`：PC / 個人電腦 / 个人电脑 / Personal Computer / パソコン

### 3c. 既有頁不破壞

確認 `[gen].astro` 對 `gen: a/p` 不會 404 或顯示空頁。若有 hardcoded `[1-9, h]` filter 則需擴充。

---

## 4. 內容寫作模式（沿用既有 4 語 tone）

每台一致沿用 Phase 2 narrative 模式：
- **zh-tw**：繁中，中華商場 / 光華商場 / 神腦地下街 / 80-90 年代街機店懷舊
- **zh-cn**：簡中，大陸 80-90 年代電子遊戲廳 / 街機房 / PC-98 玩家社群視角
- **en**：archival / analytical
- **ja**：日本市場視角，常見店面（高田馬場、秋葉原、ゲーセン）

3-5 paragraphs per console，bold key phrases，重點：
- 廠商背景與商業策略
- 技術突破點
- 代表作 + 文化現象
- 商業結局 / 影響後續

---

## 5. 影像策略

### 5a. Hero（每台必有）

優先順序：
1. **Wikimedia Commons**（Evan-Amos 通常有 — 街機板 + 西方 PC 多）
2. 對日系 PC（PC-98 / X68000 / MSX / FM Towns）— Wikimedia 較少，需查日本廠商博物館或合理使用 fair-use
3. AI 生成（最後手段，標 `license: ai-generated`）

### 5b. Gallery（沿用 zh-tw 主動，後續批次到其他 3 語）

街機：街機板 / 街機框體 / 代表遊戲擷圖
PC：主機外觀 / 鍵盤 / 對應遊戲擷圖

工具：沿用 `scripts/wikimedia.py`（fetcher + 自動 attribution）+ 新建 `_add_arcade_pc_gallery.py` 批次

### 5c. 重要：版權注意

- 街機板照片 / PC 主機照片：Evan-Amos PD 通常 OK
- 遊戲擷圖：fair-use（教育引用）— 標 `rationale: educational-commentary`
- 街機框體照（個人攝影）：Wikimedia 有部分 CC-BY-SA

---

## 6. 撰寫順序建議（下個 session）

### Step 1（30 分鐘）：Schema + 路由先通

1. 改 `src/content.config.ts` enum
2. 確認 `[gen].astro` 對 `a` / `p` 不破
3. 建空目錄 `src/content/consoles/{capcom-cps2,nec-pc98}/` 各放 1 篇 zh-tw 試水
4. `npm run build` + 開 `localhost:4321/zh-tw/consoles/capcom-cps2/` 確認 routing OK

### Step 2（60-90 分鐘）：Phase 1 skeleton 16 台 × zh-tw

寫 16 台 × zh-tw skeleton（每篇 100-200 字 + frontmatter），先 commit。

### Step 3（後續 session）：Phase 2 narrative + 多語化

依先前掌機批次模式：
- 每台 zh-tw narrative 升級
- port 到 zh-cn / en / ja
- Wikimedia gallery 批次 + 多語化

預估：每個 session 完成 4-6 台 × 4 語 = 16-24 篇

---

## 7. 不在這次範圍內的（明確 OUT）

- **個別遊戲頁**（《Street Fighter II》《Final Fantasy V PC-98》等）— 留待第 5 軸
- **街機 / PC 雜誌專題**（Game Center 雜誌、Famitsu）— 留待後續
- **MAME / emulation 教學**— 不是 retro-chiba 主題
- **PC IBM 之外的工作站**（Sun / SGI 等）— 不是遊戲文化主軸

---

## 8. 開場 Step（下個 session 第一個動作）

```bash
# 1. 切到 retro-chiba
cd ~/GitHub/retro-chiba

# 2. 確認狀態
git log --oneline -5
git status

# 3. 讀這份計畫
cat docs/plans/arcade-pc-plan.md

# 4. 從 Step 1 schema 改起
```

memhall handoff（這 session 結尾應寫入）會帶你回來這份檔案。

---

## 9. 不撞牆檢查（Pre-flight）

- 開新 session 前確認：cap gateway 可用、ssh chiba 可達、Wikimedia API 通
- 撞牆條件：Astro build 連續兩次失敗 / Wikimedia 連續兩次無法取圖 / 同個平台寫作連續兩次卡關 → 停手請 Maki 介入

---

## Open Questions（執行前 Maki 拍板）

1. **PC-98 的章節要不要拆 PC-88 / PC-98 兩台**？（NEC 系列演進）
2. **Sega Model 2/3 要不要分兩台**？還是合一台「Sega 90s 3D 街機」
3. **街機板 vs 街機框體**——重點是「板」（CPS-2 板）還是「框體」（Capcom 大型體感框）？
4. **PC 要不要包含 Atari ST、Amstrad CPC、Acorn Archimedes**等英系？
5. **Bemani / 音樂街機**（DDR、IIDX、太鼓達人）獨立章節還是放在 Konami arcade 下？

→ 建議：開始時先選最小集（8+8），跑通流程後再決定要不要擴充。
