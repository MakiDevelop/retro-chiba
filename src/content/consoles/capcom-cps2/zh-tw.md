---
lang: zh-tw
title: Capcom CPS-2
qid: Q1024169
gen: a
kind: arcade
maker: Capcom
release:
  jp: "1993-08-01"
  na: "1993-09-01"
  eu: "1993-09-01"
sales:
  official: ""
  community: "估計 50 萬機板（1993-2003，全平台）"
  source: "Capcom 1995-2003 年報 + 街機收藏圈訪談"
specs:
  CPU: "Motorola 68000 @ 16 MHz + Z80 @ 3.58 MHz（音效）"
  GPU: "客製化 sprite + tile 引擎"
  RAM: "2 MB Work + 4 MB Sprite"
  解析度: "384 × 224"
  色域: "4,096 色"
  音源: "Q-Sound 立體聲（Capcom 自家規格）+ OKI MSM6295 PCM"
  媒介: "ROM A-Board + B-Board（程式分離 + 加密）"
notable_games:
  - "Super Street Fighter II Turbo（Capcom，1994）"
  - "Marvel vs. Capcom（Capcom，1998）"
  - "X-Men vs. Street Fighter（Capcom，1996）"
  - "Vampire Savior / Darkstalkers 3（Capcom，1997）"
  - "Cadillacs and Dinosaurs（Capcom，1993）"
curation:
  thesis: "Capcom CPS-2 是 1990 年代格鬥遊戲黃金期的核心硬體。它從前代 CPS-1 升級兩個關鍵：色域從 256 色擴到 4,096 色（讓 Street Fighter Alpha 系列、Vampire Savior 的精細 sprite 動畫得以成立），以及 ROM 加密（防止盜版機板大量複製）——後者讓 Capcom 從每台機板上能持續抽授權金 10 年。"
  turning_point: "1993 年 8 月上市時 Capcom 同步推出 ROM 加密與「Suicide Battery」防複製機制——A-Board 內建加密金鑰存在電池供電的 RAM 中，電池沒電後機板就「自殺」變磚塊。這個設計讓 1990 年代盜版工廠複製 CPS-2 的成本拉到無法回本，但也意味著 2010 年代之後大量原版 CPS-2 機板因為電池漏液而永久失能——是收藏圈最痛的 retro 議題之一。"
  local_memory: "在華人圈是「1990 年代電玩中心格鬥區的標準配備」。台北、台中、香港、深圳的電玩店裡每一台《Street Fighter II Turbo》《Vampire Savior》《Marvel vs. Capcom》都跑在 CPS-2 上——是 1990 年代華人圈玩家對「街機格鬥」記憶的硬體實體。"
curated_games:
  - title: "Super Street Fighter II Turbo（1994）"
    reason: "CPS-2 平台代表作。Capcom 把 Street Fighter II 系列做到極致的版本，連 Akuma（豪鬼）首次在街機正式登場，至今仍是格鬥圈經典。"
  - title: "Marvel vs. Capcom（1998）"
    reason: "把 Marvel 漫畫角色與 Capcom 自家角色融合的 crossover 格鬥。CPS-2 後期的代表作，也是漫畫 IP 進入街機格鬥的早期成功案例。"
  - title: "Vampire Savior（1997）"
    reason: "Darkstalkers 系列第三作，CPS-2 sprite 動畫精細度的巔峰展示。每個角色 200+ 影格的動畫流暢度，1997 年仍未被任何 32-bit 主機完全複製。"
related_consoles:
  - slug: "neo-geo-aes"
    label: "Neo Geo AES"
    note: "同期競爭者。Neo Geo 走「街機與家用同卡」路線，CPS-2 走「街機專屬 + 加密 + 後續移植 SFC/PS1」路線。CPS-2 銷量遠超 Neo Geo，但 Neo Geo 因家用版本至今在收藏圈地位更高。"
  - slug: "ps1"
    label: "PlayStation"
    note: "1990 年代後期 CPS-2 軟體的家用移植主場。《Street Fighter Alpha》《Marvel vs. Capcom》全都先 CPS-2 街機後 PS1 家用——這條移植軌道是 Capcom 1990 年代營收結構的核心。"
  - slug: "saturn"
    label: "Sega Saturn"
    note: "另一個 CPS-2 移植主場（特別在日本）。Saturn 的 4 MB RAM 卡能完整重現 CPS-2 sprite 動畫，所以日本玩家普遍認為 Saturn 移植比 PS1 更精確。"
hardware_variants:
  - name: "CPS-2 A-Board"
    release: "1993-08"
    type: "主機板（含加密）"
    note: "通用 A-Board 配可換 B-Board（卡帶式遊戲卡板），讓街機營運商換遊戲不需換整機。但 A-Board 內建 Suicide Battery，電池漏液後整機板報廢。"
  - name: "CPS-2 B-Board（遊戲卡板）"
    release: "1993-2003"
    type: "可換式 ROM 卡板"
    note: "Capcom 1993-2003 在 CPS-2 上推出 50+ 款遊戲，每款都是獨立 B-Board。後期收藏圈為了搶救 dead boards，發展出 phoenix edition（拆解加密）非官方破解版。"
---

1993 年 8 月，Capcom 推出 **CPS-2（Capcom Play System 2）**——前代 CPS-1（Street Fighter II 1991 上市的硬體）的繼承者。它在格鬥黃金期把 Capcom 推到街機巔峰。

技術上 CPS-2 是 16-bit 升級版：68000 CPU 從 12 MHz 拉到 16 MHz、色域從 256 色擴到 4,096 色、音源升級成 Q-Sound 立體聲（Capcom 自家規格，需特殊耳機才聽得出 3D 定位）。但**真正改變產業的是 ROM 加密 + Suicide Battery 設計**。

CPS-2 的程式 ROM 用 Capcom 自家加密晶片保護，加密金鑰存在 A-Board 內建電池供電的 SRAM 裡。**電池沒電 → SRAM 失憶 → 加密金鑰消失 → 整塊機板永久報廢**。這個設計在 1990 年代讓盜版工廠完全無法經濟複製 CPS-2，**Capcom 因此從每台機板抽到 10 年穩定授權金**。

代價是：2010 年代後大量原版 CPS-2 機板因為電池漏液或耗盡而集體報廢——收藏圈為了搶救出現了 **Phoenix Edition**（非官方拆解加密 + 重燒 ROM 的修復版）。**至今仍可運作的原版 CPS-2 機板數量持續減少**，是 retro 圈最痛的硬體議題之一。

平台軟體陣容是 1990 年代格鬥黃金期的核心：**Super Street Fighter II Turbo（1994）**、**Vampire Savior（1997）**、**Marvel vs. Capcom（1998）**、**X-Men vs. Street Fighter（1996）**——這些遊戲在華人圈電玩中心的格鬥區佔據絕對主場約 8 年。

CPS-2 一直生產到 2003 年才正式停產，整條產品線生涯 10 年、推出超過 50 款遊戲。它是 Capcom 從《Street Fighter II》（1991）爆紅開始的硬體事業最賺錢的階段——後續 CPS-3（1996）和 Naomi 共生的 2000 年代街機板，再也沒有達到 CPS-2 的市場規模。
