---
lang: zh-cn
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
  community: "估计 50 万机板（1993-2003，全平台）"
  source: "Capcom 1995-2003 年报 + 街机收藏圈访谈"
specs:
  CPU: "Motorola 68000 @ 16 MHz + Z80 @ 3.58 MHz（音效）"
  GPU: "客制化 sprite + tile 引擎"
  RAM: "2 MB Work + 4 MB Sprite"
  分辨率: "384 × 224"
  色域: "4,096 色"
  音源: "Q-Sound 立体声（Capcom 自家规格）+ OKI MSM6295 PCM"
  介质: "ROM A-Board + B-Board（程式分离 + 加密）"
notable_games:
  - "Super Street Fighter II Turbo（Capcom，1994）"
  - "Marvel vs. Capcom（Capcom，1998）"
  - "X-Men vs. Street Fighter（Capcom，1996）"
  - "Vampire Savior / Darkstalkers 3（Capcom，1997）"
  - "Cadillacs and Dinosaurs（Capcom，1993）"
curation:
  thesis: "Capcom CPS-2 是 1990 年代格斗游戏黄金期的核心硬体。它从前代 CPS-1 升级两个关键：色域从 256 色扩到 4,096 色（让 Street Fighter Alpha 系列、Vampire Savior 的精细 sprite 动画得以成立），以及 ROM 加密（防止盗版机板大量复制）——后者让 Capcom 从每台机板上能持续抽授权金 10 年。"
  turning_point: "1993 年 8 月上市时 Capcom 同步推出 ROM 加密与「Suicide Battery」防复制机制——A-Board 内建加密金钥存在电池供电的 RAM 中，电池没电后机板就「自杀」变砖块。这个设计让 1990 年代盗版工厂复制 CPS-2 的成本拉到无法回本，但也意味著 2010 年代之后大量原版 CPS-2 机板因为电池漏液而永久失能——是收藏圈最痛的 retro 议题之一。"
  local_memory: "在华人圈是「1990 年代电玩中心格斗区的标准配备」。台北、台中、香港、深圳的电玩店里每一台《Street Fighter II Turbo》《Vampire Savior》《Marvel vs. Capcom》都跑在 CPS-2 上——是 1990 年代华人圈玩家对「街机格斗」记忆的硬体实体。"
curated_games:
  - title: "Super Street Fighter II Turbo（1994）"
    reason: "CPS-2 平台代表作。Capcom 把 Street Fighter II 系列做到极致的版本，连 Akuma（豪鬼）首次在街机正式登场，至今仍是格斗圈经典。"
  - title: "Marvel vs. Capcom（1998）"
    reason: "把 Marvel 漫画角色与 Capcom 自家角色融合的 crossover 格斗。CPS-2 后期的代表作，也是漫画 IP 进入街机格斗的早期成功案例。"
  - title: "Vampire Savior（1997）"
    reason: "Darkstalkers 系列第三作，CPS-2 sprite 动画精细度的巅峰展示。每个角色 200+ 影格的动画流畅度，1997 年仍未被任何 32-bit 主机完全复制。"
related_consoles:
  - slug: "neo-geo-aes"
    label: "Neo Geo AES"
    note: "同期竞争者。Neo Geo 走「街机与家用同卡」路线，CPS-2 走「街机专属 + 加密 + 后续移植 SFC/PS1」路线。CPS-2 销量远超 Neo Geo，但 Neo Geo 因家用版本至今在收藏圈地位更高。"
  - slug: "ps1"
    label: "PlayStation"
    note: "1990 年代后期 CPS-2 软体的家用移植主场。《Street Fighter Alpha》《Marvel vs. Capcom》全都先 CPS-2 街机后 PS1 家用——这条移植轨道是 Capcom 1990 年代营收结构的核心。"
  - slug: "saturn"
    label: "Sega Saturn"
    note: "另一个 CPS-2 移植主场（特别在日本）。Saturn 的 4 MB RAM 卡能完整重现 CPS-2 sprite 动画，所以日本玩家普遍认为 Saturn 移植比 PS1 更精确。"
hardware_variants:
  - name: "CPS-2 A-Board"
    release: "1993-08"
    type: "主机板（含加密）"
    note: "通用 A-Board 配可换 B-Board（卡带式游戏卡板），让街机营运商换游戏不需换整机。但 A-Board 内建 Suicide Battery，电池漏液后整机板报废。"
  - name: "CPS-2 B-Board（游戏卡板）"
    release: "1993-2003"
    type: "可换式 ROM 卡板"
    note: "Capcom 1993-2003 在 CPS-2 上推出 50+ 款游戏，每款都是独立 B-Board。后期收藏圈为了抢救 dead boards，发展出 phoenix edition（拆解加密）非官方破解版。"
---

1993 年 8 月，Capcom 推出 **CPS-2（Capcom Play System 2）**——前代 CPS-1（Street Fighter II 1991 上市的硬体）的继承者。它在格斗黄金期把 Capcom 推到街机巅峰。

技术上 CPS-2 是 16-bit 升级版：68000 CPU 从 12 MHz 拉到 16 MHz、色域从 256 色扩到 4,096 色、音源升级成 Q-Sound 立体声（Capcom 自家规格，需特殊耳机才听得出 3D 定位）。但**真正改变产业的是 ROM 加密 + Suicide Battery 设计**。

CPS-2 的程式 ROM 用 Capcom 自家加密芯片保护，加密金钥存在 A-Board 内建电池供电的 SRAM 里。**电池没电 → SRAM 失忆 → 加密金钥消失 → 整块机板永久报废**。这个设计在 1990 年代让盗版工厂完全无法经济复制 CPS-2，**Capcom 因此从每台机板抽到 10 年稳定授权金**。

代价是：2010 年代后大量原版 CPS-2 机板因为电池漏液或耗尽而集体报废——收藏圈为了抢救出现了 **Phoenix Edition**（非官方拆解加密 + 重烧 ROM 的修复版）。**至今仍可运作的原版 CPS-2 机板数量持续减少**，是 retro 圈最痛的硬体议题之一。

平台软体阵容是 1990 年代格斗黄金期的核心：**Super Street Fighter II Turbo（1994）**、**Vampire Savior（1997）**、**Marvel vs. Capcom（1998）**、**X-Men vs. Street Fighter（1996）**——这些游戏在华人圈电玩中心的格斗区占据绝对主场约 8 年。

CPS-2 一直生产到 2003 年才正式停产，整条产品线生涯 10 年、推出超过 50 款游戏。它是 Capcom 从《Street Fighter II》（1991）爆红开始的硬体事业最赚钱的阶段——后续 CPS-3（1996）和 Naomi 共生的 2000 年代街机板，再也没有达到 CPS-2 的市场规模。
