# retro-chiba

懷舊電玩歷史館 — retro.chiba.tw（繁中／簡中／英／日）。
家用主機編年史 + 掌機支線 + 街機/PC 支線。純閱讀型（圖文 + 影片），AI 管理。

## 繼承聲明

繼承全域 `~/.claude/CLAUDE.md`。本檔僅為專案特化補充。

## 技術棧

| 層 | 技術 |
|----|------|
| 框架 | Astro 5 |
| 樣式 | Tailwind 3 + 自訂 CRT 主題 |
| i18n | Astro 原生 i18n（zh-tw 預設無前綴 / zh-cn / en / ja） |
| 部署 | rsync `dist/` → `chiba:/var/www/retro-chiba/` |
| Web server | nginx in `url-shortener-app` Docker container（chiba.tw VPS 共用） |

## 撞牆停手（專案特有）

- Astro build 連續兩次失敗
- 影像 pipeline（Wikimedia / Internet Archive / AI 生成）連續兩次無法取得
- 同個世代的內容寫作連續兩次卡關

## 安全紅線

- 影像版權：T1（Wikimedia 公版）和 T2（fair-use 引用，標註 © + 教育目的）以外，禁止直接 commit 來路不明的圖片
- 部署目標：chiba.tw（139.180.197.137），`ssh chiba`
- `~/Documents/.../docker-compose.prod.yml` 改動視為 YELLOW（會影響全 chiba.tw 系列）

## 開發指令

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # 預覽 build 結果
```

## 部署慣例

- 站靜態檔：`/var/www/retro-chiba/`（host）→ bind mount ro 進 `url-shortener-app` 容器
- nginx config：`/var/www/html/onion/docker/nginx/default.prod.conf`（host，掛入 ro）
- LE cert：`/etc/letsencrypt/live/retro.chiba.tw/`

## 內容結構（Phase B 之後）

```
src/content/
  generations/    # 9 個世代總覽（gen-1..gen-9）
  consoles/       # 各家用主機（fc, sfc, ps1, ...）
  handhelds/      # 掌機支線（gb, gba, psp, ds, vita, ...）
  arcade-pc/      # 街機/PC 支線
```

i18n 內容用 frontmatter `lang` 欄位 + `slug` 對應，或多語系子目錄（待 Phase B 決定）。

## 影像 pipeline（Phase B 之後）

frontmatter 範例：
```yaml
images:
  hero: { src: "wikimedia:File:...", license: "CC-BY-SA-3.0" }
  boxart: { src: "wikipedia:...", license: "fair-use", rationale: "educational-commentary" }
  era_mood: { src: "ai-generated:1985-japan-living-room-crt" }
```

build hook 自動下載 + cache + 寫 attribution。

## Lab Notes

(尚無，待累積)
