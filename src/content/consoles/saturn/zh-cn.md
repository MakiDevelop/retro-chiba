---
lang: zh-cn
title: 世嘉 Saturn / セガサターン
qid: Q200912
gen: 5
kind: home
maker: Sega
release:
  jp: "1994-11-22"
  na: "1995-05-11"
  eu: "1995-07-08"
sales:
  official: "Sega 未公开精确终身数字"
  community: "全球约 926 万台（圈内共识，Twitter retro circles）：日本 580 万 / 北美 180 万 / 欧洲及其他 165 万"
  source: "Famitsu、业界报告、Sega 退出时数字推估"
specs:
  CPU: "双 Hitachi SH-2 @ 28.6 MHz（双 CPU 并行架构）"
  GPU: "VDP1（多边形/精灵）+ VDP2（背景滚动）双图形芯片"
  RAM: "2 MB（主）+ 1.5 MB（VRAM）+ 540 KB（音源）"
  分辨率: "352×240 至 704×448"
  音源: "Yamaha SCSP — 32 通道 PCM/FM"
  介质: "CD-ROM（最大 660 MB）"
images:
  hero:
    src: "/img/consoles/saturn-hero.jpg"
    alt: "Sega Saturn 日版 Mk1 主机 + 手柄"
    caption: "Sega Saturn 日版 Mk1，1994 年 11 月 22 日上市，44,800 日元。比 PS1 早 11 天，双 SH-2 + 双 VDP 的并行架构让 2D 表现极强，但对开发者极不友善。"
    license: PD
    author: "Evan-Amos"
    source_url: "https://commons.wikimedia.org/wiki/File:Sega-Saturn-JP-Mk1-Console-Set.jpg"
hardware_variants:
  - name: "Saturn Model 1（HST-3200 / MK-80000）"
    release: "1994 JP / 1995 NA"
    type: "初代椭圆按钮版"
    note: "1994 年 11 月 22 日日本上市的初代 Saturn 采椭圆 power/reset 按钮，日版灰壳、北美版黑壳。1995 年 5 月 11 日 E3 上 Tom Kalinske 宣布 Saturn 提前在北美上市（原订 9 月），这个 surprise launch 让部分零售商被排除、媒体与软件阵容都没准备好，隔天 Sony 用 $299 vs Saturn $399 把高价问题一次放大。"
  - name: "Saturn Model 2（MK-80200A）"
    release: "1996"
    type: "圆形按钮成本下降版"
    note: "1996 年推出的 Model 2 改为圆形 power/reset 按钮、简化主机板、CD 机构也较便宜。是大多数北美玩家认得的 Saturn 形象。Sega 试图用更低 BOM 成本应对 PS1 持续压低的价格，但北美 1996 年起软件阵容已经被 PlayStation 全面压制，硬件成本工程救不了平台。"
  - name: "Victor V-Saturn / Hitachi Hi-Saturn"
    release: "1995-1996 JP"
    type: "日本家电厂授权版"
    note: "Sega 授权 Victor（JVC）推出 V-Saturn（黑灰壳、JVC 品牌），Hitachi 推出 Hi-Saturn（部分版本内置 LCD 屏幕、KARAOKE 卡拉 OK 卡），延续日本家电厂共推平台的传统思路（FM Towns Marty / 3DO Real 同代）。海外几乎没上架，今日是日系收藏圈的高端标的。"
  - name: "Skeleton Saturn / 限定彩绘机"
    release: "1997-1998 JP"
    type: "透明壳与主题限定机"
    note: "Sega 在日本推出 Skeleton（透明壳）、Derby Stallion（马匹纹）、樱花大战彩绘、Hello Kitty 等限定 Saturn。日本 580 万台用户基数让限定周边有市场，这也是 Saturn 在日本第二势力的证据——海外 PS1 一面倒胜出，但日本玩家把 Saturn 当作 ADV、格斗、SHMUP 与街机的核心圈层平台。"
  - name: "Saturn NetLink Modem / Saturn Modem"
    release: "1996"
    type: "拨接网络配件"
    note: "NetLink Modem（北美 28.8k）与日本同等品让 Saturn 支持浏览器、Email 与少数线上对战（Daytona USA Net Link、Sega Rally、Virtual On）。Sega 同时与 PlanetWeb 合作做出 Saturn 浏览器。规模小、支持游戏少，但这是 Sega 从 Saturn 到 Dreamcast「家用主机网络化」路线的第一次正式试水温。"
notable_games:
  - "Virtua Fighter 2（Sega，1995）"
  - "Panzer Dragoon Saga（Team Andromeda，1998）"
  - "Nights into Dreams...（Sonic Team，1996）"
  - "Radiant Silvergun（Treasure，1998）"
  - "Saturn Bomberman（Hudson，1996）"
videos:
  - youtube: "cyv6ZehQyTQ"
    caption: "Sega Saturn 1995 launch 广告 'It's Out There'（HD 复刻版）"
    source: "YouTube 复刻档案"
---

1994 年 11 月 22 日，Sega 推出 Saturn，售价 44,800 日元——**比 PS1 早 11 天**。Sega 内部认为这是反攻的开始：1990 年代初 Mega-CD、32X 接连失败后，Saturn 是把所有资源赌上的旗舰机。架构选择了**双 Hitachi SH-2 + 双 VDP（VDP1 多边形/精灵 + VDP2 背景滚动）**——同时并行两颗 CPU、两颗 GPU 各做不同任务，理论上能榨出比 PS1 更高的算力。

但这个架构从第一天起就是**开发者的噩梦**。双 CPU 并行需要手写 SH-2 汇编、两颗 GPU 各有独立内存与管线、Sega 提供的 SDK 文档不完整、默认只有 BASIC 范例。铃木裕（Yu Suzuki，Virtua Fighter / Shenmue 之父）的内部团队能榨出极致表现，但**外部第三方做不到**。Saturn 的多边形是「四边形」（quadrilaterals）而非业界标准的「三角形」（triangles），这意味着 OpenGL 与 DirectX 跨平台移植几乎不可能——所有欧美第三方游戏都要为 Saturn 重写图形 pipeline。**Saturn 是史上第一台「对开发者的第一感受是『拒绝』的家用主机」**。

1995 年 5 月 11 日 E3 是 Saturn 海外的死亡时刻。Sega of America 的 Tom Kalinske 在主题演讲中**毫无预警地宣布 Saturn 在当天提前 4 个月在北美上市**——零售商没拿到货、玩家没看到广告、媒体没拿到评测机。隔天 Sony 的 Bernie Stolar 走上同个舞台只说一个字：**「$299」**（Saturn 是 $399）。**这是主机战史上最残忍的一句台词——一句话、100 美元差距、Saturn 北美命运被定格。**

但日本本土故事不同。Saturn 在日本卖了 **580 万台**（PS1 在日本是 2,200 万，但 Saturn 撑住了第二位置），**是 PS1 在日本最有力的对手**。日本第三方并未集体出走（不像北美），《Virtua Fighter 2》、《樱花大战》、《Nights into Dreams》、《Panzer Dragoon Saga》成为日本玩家心中的世代代表作。Sega 把 Saturn 变成日本玩家的「另类选择」——美式对战格斗、SHMUP（弹幕射击）、ADV（视觉小说）都集中在这台机器上。

中国大陆 Saturn 几乎完全空白——既不在水货狂潮范围（PS1 占满空间），也没有任何官方代理。极少数玩家通过日本水货管道接触过《樱花大战》、《Virtua Fighter》。商业上，Saturn 全球累计**约 926 万台**（社群共识数字，Sega 从未公布精确数字）——比 PS1 的 1 亿 240 万差远了，但比过去「彻底失败」的传统叙事温和许多。**Sega 在 1998 年放弃 Saturn 推出 Dreamcast，三年后退出硬件业务。**
