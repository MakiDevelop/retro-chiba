import type { Lang } from '../i18n/ui';

type HardwareVariant = {
  name: string;
  release?: string;
  type: string;
  note: string;
  slug?: string;
};

type VariantSeed = {
  name: string;
  release?: string;
  type: {
    'zh-tw': string;
    en: string;
  };
  note: {
    'zh-tw': string;
    en: string;
  };
  slug?: string;
};

const fallbackVariants: Record<string, VariantSeed[]> = {
  '3do': [
    {
      name: 'Panasonic FZ-1',
      release: '1993',
      type: { 'zh-tw': '首發旗艦機', en: 'Launch flagship model' },
      note: {
        'zh-tw': '最早上市、外型最像高階影音家電的 3DO。價格高昂，正好說明 3DO 授權模式的核心問題：硬體商要靠主機本身賺錢，成本很難像任天堂或 Sony 那樣壓低。',
        en: 'The first and most hi-fi-looking 3DO unit. Its high price captured the weakness of the 3DO licensing model: hardware makers needed profit on the console itself, so the price could not be pushed down like Nintendo or Sony hardware.',
      },
    },
    {
      name: 'Panasonic FZ-10',
      release: '1994',
      type: { 'zh-tw': '低成本改版', en: 'Cost-reduced revision' },
      note: {
        'zh-tw': '改成上掀式光碟蓋、成本更低、定位更像遊戲機。它是 3DO 試圖追上市場價格的版本，但推出時 PlayStation 與 Saturn 已經逼近。',
        en: 'A cheaper top-loading revision that looked more like a game console. It was 3DO’s attempt to meet the market on price, but PlayStation and Saturn were already approaching.',
      },
    },
    {
      name: 'GoldStar / Sanyo 3DO units',
      release: '1994-1995',
      type: { 'zh-tw': '授權製造機', en: 'Licensed manufacturer units' },
      note: {
        'zh-tw': '3DO 的特點不是單一硬體，而是授權多家公司製造。GoldStar、Sanyo 等版本讓平台看起來像影音規格聯盟，也讓品牌識別變得分散。',
        en: '3DO was less a single console than a licensed hardware platform. GoldStar and Sanyo units made it resemble a consumer-electronics standard, but also diluted the platform identity.',
      },
    },
  ],
  'apple-pippin': [
    {
      name: 'Bandai Pippin Atmark',
      release: '1996 JP',
      type: { 'zh-tw': '日本首發版', en: 'Japanese launch model' },
      note: {
        'zh-tw': 'Bandai 在日本推出的白色機種，定位介於遊戲機、網路終端與 Mac 衍生電腦之間。它的問題不是不能做事，而是市場不知道它到底該被拿來做什麼。',
        en: 'Bandai’s white Japanese model sat between game console, network terminal, and Mac-derived computer. Its problem was not capability, but a market that never knew what it was for.',
      },
    },
    {
      name: 'Bandai @WORLD',
      release: '1996 NA',
      type: { 'zh-tw': '北美黑色版', en: 'North American black model' },
      note: {
        'zh-tw': '北美版改成黑色外殼，強調上網與多媒體。定價與軟體陣容都不利，最後成為 90 年代 Apple 授權策略失焦的代表案例。',
        en: 'The black North American model emphasized internet and multimedia use. Its price and software library worked against it, making Pippin a symbol of Apple’s unfocused mid-1990s licensing era.',
      },
    },
  ],
  'atari-2600': [
    {
      name: 'Atari VCS Heavy Sixer',
      release: '1977',
      type: { 'zh-tw': '早期六開關重殼版', en: 'Early six-switch heavy shell' },
      note: {
        'zh-tw': 'Sunnyvale 早期生產的厚重木紋機，是收藏圈最有辨識度的 2600。六個實體開關把難度、彩色/黑白與遊戲選項都放在主機面板上。',
        en: 'The early Sunnyvale-made woodgrain unit is the most collectible 2600 shell. Six physical switches placed difficulty, color mode, and game options directly on the console face.',
      },
    },
    {
      name: 'Atari 2600 Jr.',
      release: '1986',
      type: { 'zh-tw': '晚期廉價小型版', en: 'Late budget compact model' },
      note: {
        'zh-tw': '大崩潰後才登場的小型改版，外型更像 80 年代後期玩具電子產品。它證明 2600 生命週期極長，即使任天堂已接管市場仍繼續販售。',
        en: 'A compact post-crash redesign with a late-1980s toy-electronics look. It showed how long the 2600 survived, still selling after Nintendo had taken over the market.',
      },
    },
    {
      name: 'Sears Video Arcade',
      release: '1977',
      type: { 'zh-tw': '百貨通路貼牌版', en: 'Department-store rebrand' },
      note: {
        'zh-tw': 'Atari 早期透過 Sears 貼牌打入家庭通路。這個版本提醒我們，主機戰爭一開始不只是技術競爭，也是在爭百貨公司與家庭客廳的貨架。',
        en: 'Atari used Sears branding to reach family retail channels. It is a reminder that console competition began not just as technology, but as a fight for department-store shelves and living rooms.',
      },
    },
  ],
  'atari-5200': [
    {
      name: 'Atari 5200 4-port',
      release: '1982',
      type: { 'zh-tw': '首發四手把埠版', en: 'Launch four-controller-port model' },
      note: {
        'zh-tw': '首發機有四個手把埠與特殊 RF 自動切換盒，但與 2600 不相容。龐大機身與複雜配件讓它看起來高階，也讓使用門檻變高。',
        en: 'The launch unit had four controller ports and a special automatic RF switch box, but no 2600 compatibility. Its large shell and complex setup made it look premium while raising friction.',
      },
    },
    {
      name: 'Atari 5200 2-port',
      release: '1983',
      type: { 'zh-tw': '簡化修正版', en: 'Simplified revision' },
      note: {
        'zh-tw': '縮成兩個手把埠並修正部分相容與連接問題，是 Atari 試圖降低混亂的版本。但 5200 的手把可靠度與市場定位問題已經很難挽回。',
        en: 'The two-port revision simplified the design and addressed some compatibility and hookup issues, but the 5200’s controller reliability and market-positioning problems were already severe.',
      },
    },
  ],
  'atari-7800': [
    {
      name: 'Atari 7800 ProSystem',
      release: '1986 wide release',
      type: { 'zh-tw': '延後上市主機', en: 'Delayed wide-release console' },
      note: {
        'zh-tw': '硬體原本 1984 年就準備好，卻因 Atari 易主與市場崩潰延到 1986 年才大規模上市。它帶著 2600 向下相容，卻錯過了任天堂重建市場的窗口。',
        en: 'The hardware was ready in 1984 but was delayed by Atari’s sale and the market crash until a 1986 wide release. It brought 2600 compatibility, but missed Nintendo’s market-rebuilding window.',
      },
    },
    {
      name: '7800 ProLine controller',
      release: '1986',
      type: { 'zh-tw': '雙按鍵手把', en: 'Two-button controller' },
      note: {
        'zh-tw': 'ProLine 手把支援雙按鍵街機遊戲，但握感常被玩家批評。歐洲後期改用 joypad 風格控制器，反而更接近 NES 之後的標準。',
        en: 'The ProLine controller supported two-button arcade games, but many players disliked the ergonomics. Later European joypad-style controllers felt closer to the post-NES standard.',
      },
    },
  ],
  'atari-jaguar': [
    {
      name: 'Atari Jaguar base console',
      release: '1993',
      type: { 'zh-tw': '64-bit 行銷主機', en: '64-bit marketed base console' },
      note: {
        'zh-tw': 'Jaguar 以「64-bit」作為核心宣傳，但多晶片架構難以開發，第三方支援不足。它是 Atari 最後一次試圖重回主機中心舞台。',
        en: 'Jaguar was marketed around “64-bit” power, but its multi-chip architecture was hard to develop for and third-party support stayed thin. It was Atari’s last major attempt to return to the console spotlight.',
      },
    },
    {
      name: 'Jaguar CD',
      release: '1995',
      type: { 'zh-tw': '光碟擴充底座', en: 'CD-ROM add-on' },
      note: {
        'zh-tw': '插在主機上方的 CD 擴充，外型像馬桶蓋是玩家圈長年梗。它來得太晚，軟體太少，無法改變 Jaguar 的命運。',
        en: 'A top-mounted CD add-on whose shape became a long-running joke among players. It arrived too late, with too little software, to alter Jaguar’s fate.',
      },
    },
  ],
  'atari-lynx': [
    {
      name: 'Atari Lynx I',
      release: '1989',
      type: { 'zh-tw': '橫向彩色掌機首版', en: 'Original color handheld' },
      note: {
        'zh-tw': '彩色背光、左右手翻轉與多人連線都很先進，但機身巨大、耗電驚人。它展現了 Atari 的工程野心，也暴露出掌機市場最在意的其實是續航與價格。',
        en: 'Backlit color, left/right flipping, and multiplayer link support were advanced, but the unit was huge and power-hungry. It showed Atari’s engineering ambition and the handheld market’s preference for battery life and price.',
      },
    },
    {
      name: 'Atari Lynx II',
      release: '1991',
      type: { 'zh-tw': '小型省電改版', en: 'Smaller efficiency revision' },
      note: {
        'zh-tw': '外型縮小、握持改善、電池表現較好，是多數玩家熟悉的 Lynx 版本。但此時 Game Boy 已靠低價與軟體庫建立不可動搖的優勢。',
        en: 'A smaller, more comfortable, and more efficient revision. It became the familiar Lynx model, but by then Game Boy had already built an overwhelming lead through price and library.',
      },
    },
  ],
  'atari-pong': [
    {
      name: 'Sears Tele-Games Pong',
      release: '1975',
      type: { 'zh-tw': '百貨通路版', en: 'Department-store launch version' },
      note: {
        'zh-tw': 'Atari 透過 Sears 在聖誕檔期販售 Home Pong，讓電視遊戲第一次成為美國家庭禮物。這個貼牌版本是家用電玩商業化的起點之一。',
        en: 'Atari sold Home Pong through Sears for the Christmas season, turning video games into a family gift item. This rebrand is one of the starting points of commercial home gaming.',
      },
    },
    {
      name: 'Atari Super Pong',
      release: '1976',
      type: { 'zh-tw': '多模式 Pong 機', en: 'Multi-mode Pong console' },
      note: {
        'zh-tw': '在單一 Pong 玩法上增加多種變體，代表第一世代主機的典型做法：不是換卡帶，而是在硬體內預先燒好多個球拍遊戲。',
        en: 'Added multiple Pong variants to the fixed-function formula. It reflects the first-generation pattern: no cartridges, just several paddle games built directly into the hardware.',
      },
    },
  ],
  'coleco-telstar': [
    {
      name: 'Coleco Telstar',
      release: '1976',
      type: { 'zh-tw': 'Pong 類首發機', en: 'Original Pong-style unit' },
      note: {
        'zh-tw': '使用 General Instrument AY-3-8500 晶片，是 70 年代 Pong 類主機爆發的代表。Coleco 靠低價與大量型號快速打進家庭市場。',
        en: 'Built around the General Instrument AY-3-8500 chip, it represents the 1970s Pong-console boom. Coleco used low prices and many variants to move quickly into homes.',
      },
    },
    {
      name: 'Telstar Arcade',
      release: '1977',
      type: { 'zh-tw': '三角形卡匣機', en: 'Triangular cartridge model' },
      note: {
        'zh-tw': '外型特殊，支援方向盤、光線槍與手把，並使用三角形卡匣。它比一般 Pong 機更接近後來可擴充主機的概念。',
        en: 'A distinctive triangular system with steering wheel, light gun, controller, and triangular cartridges. It moved closer to the expandable-console idea than most Pong machines.',
      },
    },
  ],
  'colecovision': [
    {
      name: 'Expansion Module #1',
      release: '1982',
      type: { 'zh-tw': 'Atari 2600 相容模組', en: 'Atari 2600 compatibility module' },
      note: {
        'zh-tw': '讓 ColecoVision 能跑 Atari 2600 卡帶，直接挑戰 Atari 的軟體護城河。它引發法律爭議，也凸顯早期主機相容性邊界仍未穩定。',
        en: 'Allowed ColecoVision to play Atari 2600 cartridges, directly challenging Atari’s software moat. The dispute around it showed how unsettled compatibility boundaries were in early console history.',
      },
    },
    {
      name: 'Coleco Adam',
      release: '1983',
      type: { 'zh-tw': '家用電腦擴充', en: 'Home-computer expansion' },
      note: {
        'zh-tw': '把 ColecoVision 擴成鍵盤、磁帶與印表機組成的家庭電腦。野心很大，但品質與上市問題嚴重，成為 Coleco 後期崩盤的重要原因。',
        en: 'Expanded ColecoVision into a home computer with keyboard, tape drive, and printer. Ambitious but troubled by quality and launch issues, it became a key factor in Coleco’s decline.',
      },
    },
  ],
  'dreamcast': [
    {
      name: 'Dreamcast VA0 / VA1 / VA2',
      release: '1998-2000',
      type: { 'zh-tw': '主機板修訂', en: 'Motherboard revisions' },
      note: {
        'zh-tw': 'Dreamcast 有多個主機板修訂，影響 GD-ROM、風扇與後來自製軟體相容性。收藏與維修圈常用 VA 版本判斷機器特性。',
        en: 'Dreamcast shipped with several board revisions affecting GD-ROM behavior, cooling, and later homebrew compatibility. Repair and collector communities often identify units by VA revision.',
      },
    },
    {
      name: 'Dreamcast Broadband Adapter',
      release: '2000',
      type: { 'zh-tw': '寬頻網路配件', en: 'Broadband network adapter' },
      note: {
        'zh-tw': '取代撥接 modem 的稀有配件，讓少數遊戲與瀏覽器可走寬頻。它象徵 Dreamcast 網路願景很早，但市場基礎還沒準備好。',
        en: 'A rare adapter replacing the dial-up modem with broadband networking for a small set of software. It shows how early Dreamcast’s online vision was, before the market was ready.',
      },
    },
    {
      name: 'Divers 2000 CX-1',
      release: '2000 JP',
      type: { 'zh-tw': '電視整合機', en: 'Television-integrated Dreamcast' },
      note: {
        'zh-tw': '日本限定的 Hello Kitty 風格電視整合 Dreamcast，外型極具收藏性。它是 Sega 末期仍願意做奇特硬體實驗的證據。',
        en: 'A Japan-only TV-integrated Dreamcast with a highly collectible design. It shows that Sega was still willing to attempt strange hardware experiments at the very end.',
      },
    },
  ],
  'game-com': [
    {
      name: 'Game.com original',
      release: '1997',
      type: { 'zh-tw': '觸控 PDA 風掌機', en: 'Touchscreen PDA-like handheld' },
      note: {
        'zh-tw': '有觸控筆、行事曆與通訊錄，甚至宣稱可上網。概念超前，但螢幕殘影、遊戲品質與市場定位讓它難以和 Game Boy 競爭。',
        en: 'Included stylus input, calendar, contacts, and even internet claims. The idea was ahead of its time, but ghosting, weak games, and confused positioning kept it from challenging Game Boy.',
      },
    },
    {
      name: 'Game.com Pocket Pro',
      release: '1999',
      type: { 'zh-tw': '小型單卡槽改版', en: 'Smaller single-slot revision' },
      note: {
        'zh-tw': '縮小機身並改成單卡槽，試圖變得更像真正掌機。它改善了外型，卻已無法扭轉 Tiger 在遊戲品質上的口碑。',
        en: 'A smaller one-cartridge-slot redesign that tried to feel more like a proper handheld. It improved the form factor, but could not repair Tiger’s reputation for game quality.',
      },
    },
  ],
  'game-gear': [
    {
      name: 'Sega Game Gear VA0 / VA1',
      release: '1990',
      type: { 'zh-tw': '彩色背光首版', en: 'Original backlit color model' },
      note: {
        'zh-tw': '彩色螢幕與 Master System 血統是最大武器，但六顆電池續航短也是最大弱點。它把「規格贏 Game Boy」與「市場輸 Game Boy」的矛盾說得很清楚。',
        en: 'Color backlight and Master System lineage were its biggest weapons, while six-AA battery life was its biggest weakness. It clearly shows the gap between beating Game Boy on specs and losing in the market.',
      },
    },
    {
      name: 'Game Gear TV Tuner',
      release: '1991',
      type: { 'zh-tw': '掌上電視配件', en: 'Portable TV tuner' },
      note: {
        'zh-tw': '把 Game Gear 變成可收類比電視的小螢幕，強化它作為多媒體掌機的形象。數位電視時代後實用性消失，但收藏辨識度很高。',
        en: 'Turned Game Gear into a small analog TV, strengthening its multimedia-handheld image. It lost practical use after the analog-TV era, but remains highly recognizable.',
      },
    },
    {
      name: 'Game Gear Micro',
      release: '2020 JP',
      type: { 'zh-tw': '迷你復刻紀念機', en: 'Miniature anniversary revival' },
      note: {
        'zh-tw': 'Sega 60 週年推出的超小型復刻機，更多是收藏玩具而非實用掌機。它說明 Game Gear 的今日價值已從競爭者轉為懷舊符號。',
        en: 'A tiny 60th-anniversary revival that works more as a collectible toy than a practical handheld. It shows how Game Gear’s modern value shifted from competitor to nostalgia symbol.',
      },
    },
  ],
  'gamecube': [
    {
      name: 'DOL-001',
      release: '2001',
      type: { 'zh-tw': '首發數位輸出版', en: 'Launch model with digital AV' },
      note: {
        'zh-tw': '早期 GameCube 保留 Digital AV Out，可輸出高品質色差訊號，是現代玩家追求畫質時最受歡迎的版本。後期改版移除此埠，讓 DOL-001 更有收藏價值。',
        en: 'Early GameCube units included Digital AV Out for high-quality component video, making them favored by modern players chasing image quality. Later revisions removed the port, raising DOL-001 desirability.',
      },
    },
    {
      name: 'Panasonic Q',
      release: '2001 JP',
      type: { 'zh-tw': 'DVD 播放整合機', en: 'DVD-player hybrid' },
      note: {
        'zh-tw': 'Panasonic 與任天堂合作的日本限定機，能播放標準 DVD，外型像高級影音設備。它補上 GameCube 本體刻意避開 DVD 的缺口。',
        en: 'A Japan-only Panasonic/Nintendo hybrid that played standard DVDs and looked like premium AV equipment. It filled the DVD gap Nintendo intentionally left in the base GameCube.',
      },
    },
    {
      name: 'Game Boy Player',
      release: '2003',
      type: { 'zh-tw': '掌機卡帶底座', en: 'Handheld cartridge base' },
      note: {
        'zh-tw': '裝在主機底部，可在電視上玩 Game Boy、GBC、GBA 卡帶。它把任天堂掌機軟體庫接到客廳，也是 GameCube 最實用的延伸硬體之一。',
        en: 'Attached under the console to play Game Boy, GBC, and GBA cartridges on TV. It connected Nintendo’s handheld library to the living room and became one of GameCube’s most useful expansions.',
      },
    },
  ],
  'intellivision': [
    {
      name: 'Intellivision Master Component',
      release: '1979',
      type: { 'zh-tw': '原始主機', en: 'Original console' },
      note: {
        'zh-tw': 'Mattel 以更強畫面、數字鍵盤手把與運動遊戲挑戰 Atari 2600。它是早期主機第一次明確用「更高階」定位對打市場龍頭。',
        en: 'Mattel challenged Atari 2600 with stronger visuals, numeric-keypad controllers, and sports games. It was one of the first consoles positioned explicitly as the premium alternative.',
      },
    },
    {
      name: 'Intellivision II',
      release: '1983',
      type: { 'zh-tw': '小型低成本版', en: 'Smaller cost-reduced model' },
      note: {
        'zh-tw': '白色小型化改版，降低製造成本，也改變手把連接方式。它推出時剛好遇上北美市場崩潰，未能延續前期氣勢。',
        en: 'A smaller white redesign that lowered costs and changed controller connections. It launched into the North American crash and could not extend the platform’s early momentum.',
      },
    },
    {
      name: 'System Changer / ECS',
      release: '1983',
      type: { 'zh-tw': '相容與電腦化擴充', en: 'Compatibility and computer expansions' },
      note: {
        'zh-tw': 'System Changer 支援 Atari 2600 遊戲，ECS 則把主機推向鍵盤與家用電腦。兩者都反映 1983 年前後廠商急著擴張用途的焦慮。',
        en: 'System Changer supported Atari 2600 games, while ECS pushed the console toward keyboard-based home computing. Both reflect the industry’s anxious expansion around 1983.',
      },
    },
  ],
  'magnavox-odyssey': [
    {
      name: 'Magnavox Odyssey 100 / 200',
      release: '1975',
      type: { 'zh-tw': '後繼專用機', en: 'Dedicated successors' },
      note: {
        'zh-tw': 'Odyssey 後續機種開始走向 Pong 類專用晶片設計，玩法更集中、設定更簡單。它們把第一台主機的實驗性轉成可量產的家庭商品。',
        en: 'Later Odyssey units moved toward dedicated Pong-style chip designs with simpler, more focused play. They converted the first console’s experimental spirit into mass-market home products.',
      },
    },
    {
      name: 'Shooting Gallery rifle',
      release: '1972',
      type: { 'zh-tw': '光線槍周邊', en: 'Light-gun accessory' },
      note: {
        'zh-tw': 'Odyssey 的步槍配件是家用主機光線槍玩法的早期祖先。它也顯示第一代主機仍大量依靠實體道具、透明膠片與桌遊式想像。',
        en: 'The Odyssey rifle is an early ancestor of home-console light-gun play. It also shows how first-generation consoles still relied on physical props, overlays, and board-game thinking.',
      },
    },
  ],
  'magnavox-odyssey-2': [
    {
      name: 'Philips Videopac G7000',
      release: '1978 EU',
      type: { 'zh-tw': '歐洲版本', en: 'European model' },
      note: {
        'zh-tw': 'Odyssey² 在歐洲以 Philips Videopac 品牌更有存在感。不同地區名稱差異，讓它成為早期主機全球化與品牌轉換的典型案例。',
        en: 'Odyssey² had a stronger European presence under the Philips Videopac name. Its regional naming differences make it a useful case of early console globalization and rebranding.',
      },
    },
    {
      name: 'The Voice of Odyssey²',
      release: '1982',
      type: { 'zh-tw': '語音合成模組', en: 'Speech-synthesis module' },
      note: {
        'zh-tw': '外接語音模組讓遊戲能播放合成語音，是 80 年代初家用主機追求「會說話」的代表配件。支援遊戲有限，但技術記憶點很強。',
        en: 'An add-on speech module that gave supported games synthesized voice, typical of the early-1980s fascination with talking hardware. Support was limited, but the technical identity was strong.',
      },
    },
  ],
  'master-system': [
    {
      name: 'Sega Mark III',
      release: '1985 JP',
      type: { 'zh-tw': '日本前身機', en: 'Japanese predecessor model' },
      note: {
        'zh-tw': 'Master System 在日本的原型是 Sega Mark III，支援卡帶與 Sega Card。它是 SG-1000 系列到海外 Master System 之間的橋。',
        en: 'The Japanese predecessor to Master System, supporting cartridges and Sega Cards. It bridged the SG-1000 line and the international Master System identity.',
      },
    },
    {
      name: 'Master System II',
      release: '1990',
      type: { 'zh-tw': '低成本改版', en: 'Cost-reduced revision' },
      note: {
        'zh-tw': '移除部分輸出與卡片功能，外型更小、成本更低。在歐洲、巴西等市場，這類低價改版讓 Master System 生命週期遠比日本與美國更長。',
        en: 'Removed some outputs and card support for a smaller, cheaper unit. In Europe and Brazil, this low-cost path helped Master System live far longer than in Japan or the U.S.',
      },
    },
    {
      name: 'Power Base Converter',
      release: '1989',
      type: { 'zh-tw': 'Mega Drive 相容轉接器', en: 'Mega Drive compatibility adapter' },
      note: {
        'zh-tw': '讓 Mega Drive 可玩 Master System 遊戲，延續 8-bit 軟體價值。它也說明 Sega 早期硬體架構之間有很強的血緣關係。',
        en: 'Allowed Mega Drive / Genesis to play Master System games, extending the 8-bit library’s value. It also shows the close hardware lineage in Sega’s early console family.',
      },
      slug: 'mega-drive',
    },
  ],
  'microvision': [
    {
      name: 'Microvision main unit',
      release: '1979',
      type: { 'zh-tw': '可換卡帶掌機本體', en: 'Interchangeable-cartridge handheld' },
      note: {
        'zh-tw': 'Microvision 的處理器在卡帶上，而主機像顯示與控制框架。這種設計讓它成為第一批可換遊戲掌機，但也帶來卡帶老化與維修困難。',
        en: 'Microvision placed the processor in the cartridge while the handheld acted as display and controls. That made it an early interchangeable-game handheld, but also created aging and repair issues.',
      },
    },
    {
      name: 'Block Buster cartridge',
      release: '1979',
      type: { 'zh-tw': '代表性首發卡帶', en: 'Signature launch cartridge' },
      note: {
        'zh-tw': '類 Breakout 玩法，是多數人認識 Microvision 的入口。受限於低解析 LCD，它的遊戲非常抽象，卻已經具備掌上可換遊戲的概念。',
        en: 'A Breakout-like game and the main entry point for many Microvision players. The low-resolution LCD made games abstract, but the concept of swappable handheld software was already there.',
      },
    },
  ],
  'n-gage': [
    {
      name: 'Nokia N-Gage',
      release: '2003',
      type: { 'zh-tw': '手機掌機混合首版', en: 'Phone-handheld hybrid launch model' },
      note: {
        'zh-tw': '結合 Symbian 手機與遊戲掌機，但換卡要拆電池，通話姿勢也被玩家嘲笑。它的方向很早，產品細節卻太不成熟。',
        en: 'Combined a Symbian phone and game handheld, but changing games required removing the battery and the phone posture became infamous. The direction was early; the product details were not ready.',
      },
    },
    {
      name: 'N-Gage QD',
      release: '2004',
      type: { 'zh-tw': '修正改版', en: 'Corrective revision' },
      note: {
        'zh-tw': '改善手感、改成熱插拔卡槽，修正首版最被批評的問題。可惜品牌傷害已經形成，手機遊戲真正爆發還要等 iPhone 時代。',
        en: 'Improved ergonomics and added easier card swapping, fixing the launch unit’s most criticized issues. The brand damage was already done, and mobile gaming’s real explosion would wait for iPhone.',
      },
    },
  ],
  'n64': [
    {
      name: 'Nintendo 64 original',
      release: '1996',
      type: { 'zh-tw': '卡匣式 3D 主機', en: 'Cartridge-based 3D console' },
      note: {
        'zh-tw': '堅持卡匣換來讀取快與任天堂式耐用性，也犧牲容量與第三方支援。這個取捨直接塑造 N64 少而精、第一方極強的平台氣質。',
        en: 'Staying with cartridges delivered fast loading and Nintendo durability, but sacrificed capacity and third-party support. That tradeoff shaped N64’s small, first-party-heavy library identity.',
      },
    },
    {
      name: '64DD',
      release: '1999 JP',
      type: { 'zh-tw': '磁碟擴充底座', en: 'Magnetic-disk expansion' },
      note: {
        'zh-tw': '延遲多年才在日本少量推出，搭配 Randnet 網路服務。它承載任天堂對可寫入媒體與網路社群的想像，但上市時機已經太晚。',
        en: 'Released late and in small numbers in Japan with the Randnet service. It carried Nintendo’s ideas for writable media and online community, but arrived far too late.',
      },
    },
    {
      name: 'iQue Player',
      release: '2003 CN',
      type: { 'zh-tw': '中國控制器整合版', en: 'China controller-integrated model' },
      note: {
        'zh-tw': '把 N64 硬體濃縮進手把，透過神遊品牌在中國發行。它既是任天堂進中國市場的特殊方案，也是 N64 架構晚期的奇妙重生。',
        en: 'Condensed N64 hardware into a controller shell for China under the iQue brand. It was both Nintendo’s unusual China-market strategy and a strange late-life rebirth of N64 architecture.',
      },
    },
  ],
  'neo-geo-aes': [
    {
      name: 'Neo Geo AES',
      release: '1990',
      type: { 'zh-tw': '家用豪華版', en: 'Luxury home system' },
      note: {
        'zh-tw': '幾乎把 MVS 街機搬回家，卡帶巨大、價格高昂。AES 不是大眾主機，而是「在家擁有街機」這個夢想的奢侈版本。',
        en: 'Brought the MVS arcade experience home almost directly, with huge cartridges and high prices. AES was not a mass console; it was the luxury form of owning the arcade at home.',
      },
    },
    {
      name: 'Neo Geo CD / CDZ',
      release: '1994 / 1995',
      type: { 'zh-tw': '光碟低價路線', en: 'CD-based lower-cost route' },
      note: {
        'zh-tw': '用便宜光碟取代昂貴卡帶，降低遊戲入手成本，但讀取時間破壞街機節奏。CDZ 改善速度，仍難以對抗 PlayStation 時代。',
        en: 'Used cheaper CDs instead of expensive cartridges, lowering software cost but adding load times that hurt arcade pacing. CDZ improved speed, but could not fight the PlayStation era.',
      },
    },
    {
      name: 'Neo Geo MVS',
      release: '1990',
      type: { 'zh-tw': '街機母系統', en: 'Arcade parent system' },
      note: {
        'zh-tw': 'AES 的軟體血統來自 MVS 多卡匣街機系統。理解 MVS，才知道 Neo Geo 為何不像一般家用主機，而更像街機文化的家庭分身。',
        en: 'AES software lineage came from the MVS multi-slot arcade system. Understanding MVS explains why Neo Geo feels less like a normal console and more like a home branch of arcade culture.',
      },
    },
  ],
  'neo-geo-pocket': [
    {
      name: 'Neo Geo Pocket',
      release: '1998',
      type: { 'zh-tw': '黑白首版', en: 'Monochrome launch model' },
      note: {
        'zh-tw': '黑白螢幕版壽命很短，很快被 Color 取代。它保留了優秀的微動搖桿，展現 SNK 對格鬥遊戲操作感的執著。',
        en: 'The monochrome model had a short life before Color replaced it. It already had the excellent clicky stick, showing SNK’s focus on fighting-game feel.',
      },
    },
    {
      name: 'Neo Geo Pocket Color',
      release: '1999',
      type: { 'zh-tw': '彩色主力版', en: 'Color mainline model' },
      note: {
        'zh-tw': '真正代表平台的版本，格鬥、SNK 角色與 Capcom 合作作品都集中在這裡。它口碑很好，但市場被 Game Boy Color 與 Pokémon 壓住。',
        en: 'The true representative version, carrying the fighting games, SNK characters, and Capcom collaborations. Its reputation was strong, but Game Boy Color and Pokémon controlled the market.',
      },
    },
  ],
  'pc-engine-cd-rom2': [
    {
      name: 'CD-ROM² System',
      release: '1988 JP',
      type: { 'zh-tw': '世界最早主機 CD-ROM 擴充', en: 'Earliest console CD-ROM add-on' },
      note: {
        'zh-tw': '讓 PC Engine 透過 Interface Unit 接上 CD-ROM，帶來語音、動畫與大容量音樂。它比 Mega-CD 與 PlayStation 更早把光碟帶進客廳遊戲。',
        en: 'Connected PC Engine to CD-ROM through the Interface Unit, bringing voice, animation, and large CD audio. It brought disc media into living-room games earlier than Mega-CD or PlayStation.',
      },
      slug: 'pc-engine',
    },
    {
      name: 'Super CD-ROM² / Arcade Card',
      release: '1991 / 1994',
      type: { 'zh-tw': '記憶體強化路線', en: 'Memory-upgrade path' },
      note: {
        'zh-tw': 'Super CD-ROM² 提高 RAM 規格，Arcade Card 又為格鬥與大型移植補更多記憶體。PC Engine CD 的生命週期很大程度靠這些卡片延長。',
        en: 'Super CD-ROM² raised RAM requirements, and Arcade Card added more memory for fighters and large ports. PC Engine CD’s long life depended heavily on these card upgrades.',
      },
    },
    {
      name: 'PC Engine Duo',
      release: '1991',
      type: { 'zh-tw': '一體化 CD 主機', en: 'Integrated CD console' },
      note: {
        'zh-tw': '把 PC Engine 與 Super CD-ROM² 整合成單一主機，減少線材與擴充底座。Duo 是今日玩家最容易理解的 PC Engine CD 形態。',
        en: 'Integrated PC Engine and Super CD-ROM² into one unit, reducing cables and add-on clutter. Duo is the most understandable PC Engine CD form for modern players.',
      },
    },
  ],
  'ps-vita': [
    {
      name: 'PS Vita PCH-1000',
      release: '2011 JP / 2012 WW',
      type: { 'zh-tw': 'OLED 首發機', en: 'OLED launch model' },
      note: {
        'zh-tw': '首版使用 OLED 螢幕、雙類比、背觸控與高規掌機設計。畫面至今仍被稱讚，但專用記憶卡與軟體定位問題削弱了普及。',
        en: 'The launch Vita used an OLED screen, dual analog sticks, rear touch, and premium handheld specs. The display is still admired, but proprietary memory cards and positioning hurt adoption.',
      },
    },
    {
      name: 'PS Vita PCH-2000',
      release: '2013',
      type: { 'zh-tw': '薄型 LCD 改版', en: 'Slim LCD revision' },
      note: {
        'zh-tw': '改用 LCD、機身更薄更輕、續航改善，並加入 1GB 內建儲存。它更適合日常攜帶，但少了 OLED 首版的高級感。',
        en: 'Switched to LCD, became thinner and lighter, improved battery life, and added 1GB internal storage. It was easier to live with, though less premium than the OLED launch model.',
      },
    },
    {
      name: 'PlayStation TV / Vita TV',
      release: '2013 JP',
      type: { 'zh-tw': '電視微主機', en: 'TV microconsole' },
      note: {
        'zh-tw': '把 Vita 架構接到電視，能跑部分 Vita、PSP、PS1 遊戲，也能 Remote Play PS4。相容限制太多，但概念很像後來雲端與串流盒。',
        en: 'Brought Vita hardware to TV, running some Vita, PSP, and PS1 games and supporting PS4 Remote Play. Compatibility limits hurt it, but the concept foreshadowed streaming boxes.',
      },
    },
  ],
  'ps3': [
    {
      name: 'PS3 Fat CECHA / CECHB',
      release: '2006',
      type: { 'zh-tw': '首發高成本版', en: 'High-cost launch models' },
      note: {
        'zh-tw': '早期 20GB / 60GB 機種含 PS2 硬體相容、讀卡機與大量連接埠，成本極高。它們最能代表 PS3 初期「什麼都要放」的豪華但失控策略。',
        en: 'Early 20GB / 60GB models included PS2 hardware compatibility, card readers, and many ports at very high cost. They best represent PS3’s early “include everything” luxury strategy.',
      },
    },
    {
      name: 'PS3 Slim',
      release: '2009',
      type: { 'zh-tw': '轉虧為盈改版', en: 'Turnaround slim revision' },
      note: {
        'zh-tw': '機身縮小、功耗降低、價格下降，搭配品牌從 PLAYSTATION 3 改成 PS3。這是 Sony 把災難開局拉回長期競爭的關鍵硬體。',
        en: 'Smaller, cooler, cheaper, and rebranded from PLAYSTATION 3 to PS3. This was the hardware turn that helped Sony recover from the disastrous launch period.',
      },
    },
    {
      name: 'PS3 Super Slim',
      release: '2012',
      type: { 'zh-tw': '長尾低成本版', en: 'Long-tail budget revision' },
      note: {
        'zh-tw': '改成滑蓋式光碟機、成本更低，支撐 PS3 晚期銷售。它的存在說明 PS3 最後靠降成本與龐大遊戲庫完成逆轉敘事。',
        en: 'Used a sliding disc door and lower-cost construction for the late-life market. It shows how PS3 ultimately leaned on cost reduction and a large library to complete its recovery story.',
      },
    },
  ],
  'ps4': [
    {
      name: 'PS4 CUH-1000 / CUH-1200',
      release: '2013',
      type: { 'zh-tw': '首發主力機', en: 'Launch mainline console' },
      note: {
        'zh-tw': 'x86 架構、開發友善、價格壓低，是 Sony 從 PS3 失誤中修正後的產品。它把訊息簡化成「給玩家的主機」，成功搶回世代主導權。',
        en: 'x86 architecture, developer friendliness, and a lower price made PS4 Sony’s correction after PS3. It simplified the message to “for the players” and retook generation leadership.',
      },
    },
    {
      name: 'PS4 Slim',
      release: '2016',
      type: { 'zh-tw': '小型化主流版', en: 'Slim mainstream revision' },
      note: {
        'zh-tw': '取代原版成為標準 PS4，體積、功耗與噪音都下降。對大多數家庭來說，Slim 才是 PS4 長期普及的真正樣貌。',
        en: 'Replaced the original as the standard PS4, reducing size, power use, and noise. For most households, Slim became the real long-term face of PS4.',
      },
    },
    {
      name: 'PS4 Pro',
      release: '2016',
      type: { 'zh-tw': '中世代 4K 強化版', en: 'Mid-generation 4K upgrade' },
      note: {
        'zh-tw': '主打 4K、HDR 與更高效能，是家用主機中世代升級常態化的關鍵案例。它也預告 PS5 Pro 與 Xbox One X 這類半代硬體路線。',
        en: 'Focused on 4K, HDR, and higher performance, making mid-generation console upgrades normal. It foreshadowed the PS5 Pro and Xbox One X style of half-step hardware.',
      },
    },
  ],
  'ps5': [
    {
      name: 'PS5 / PS5 Digital Edition',
      release: '2020',
      type: { 'zh-tw': '光碟與數位雙版本', en: 'Disc and digital launch models' },
      note: {
        'zh-tw': '首發即分成 Ultra HD Blu-ray 光碟版與無光碟數位版，核心性能相同。這是 Sony 第一次在首發日明確把實體收藏與純數位玩家分成兩條價格線。',
        en: 'Launched as Ultra HD Blu-ray and disc-less Digital Edition models with the same core performance. It was Sony’s first launch-day split between physical-media and all-digital buyers.',
      },
    },
    {
      name: 'PS5 Slim modular disc model',
      release: '2023',
      type: { 'zh-tw': '可拆光碟機小型版', en: 'Slim model with detachable disc drive' },
      note: {
        'zh-tw': '小型化後把光碟機變成可拆模組，Digital Edition 可後加官方光碟機。這讓 PS5 的實體/數位分歧從購買當下變成可調整選項。',
        en: 'The slim redesign made the disc drive detachable, letting Digital Edition owners add Sony’s official drive later. The physical/digital split became an adjustable choice rather than a permanent launch decision.',
      },
    },
    {
      name: 'PS5 Pro',
      release: '2024',
      type: { 'zh-tw': '中世代高效能版', en: 'Mid-generation performance model' },
      note: {
        'zh-tw': '官方於 2024 年 11 月推出，主打升級 GPU、進階光線追蹤與 PSSR AI 升頻。它延續 PS4 Pro 開始的半代升級策略。',
        en: 'Launched in November 2024 with an upgraded GPU, advanced ray tracing, and PSSR AI upscaling. It continues the mid-generation upgrade strategy that PS4 Pro normalized.',
      },
    },
  ],
  'psp': [
    {
      name: 'PSP-1000',
      release: '2004 JP / 2005 WW',
      type: { 'zh-tw': '首發厚機', en: 'Launch fat model' },
      note: {
        'zh-tw': '大螢幕、UMD、Memory Stick、多媒體播放，像把 PS2 時代的 Sony 客廳娛樂縮進掌中。厚重但高級感強，是 PSP 品牌形象的起點。',
        en: 'Large screen, UMD, Memory Stick, and multimedia playback made it feel like Sony shrank the PS2-era living room into a handheld. Thick but premium, it defined the PSP image.',
      },
    },
    {
      name: 'PSP-2000 / PSP-3000',
      release: '2007 / 2008',
      type: { 'zh-tw': '薄型與螢幕改良版', en: 'Slim and screen-improved revisions' },
      note: {
        'zh-tw': '2000 變薄變輕並支援電視輸出，3000 改善螢幕與麥克風。這兩代是多數玩家最熟悉、也是改機與記憶卡文化最活躍的 PSP。',
        en: 'The 2000 became thinner and added TV output; the 3000 improved the screen and microphone. These are the PSP models most players knew, and the center of memory-stick and custom-firmware culture.',
      },
    },
    {
      name: 'PSP Go',
      release: '2009',
      type: { 'zh-tw': '純數位滑蓋版', en: 'All-digital slider model' },
      note: {
        'zh-tw': '取消 UMD、改用內建儲存與下載遊戲，概念上很像未來掌機，但推出時 PSN、價格與既有 UMD 玩家都不支持它成功。',
        en: 'Removed UMD in favor of internal storage and downloads, conceptually ahead of its time. PSN maturity, price, and existing UMD owners all worked against it.',
      },
    },
  ],
  'saturn': [
    {
      name: 'Saturn Model 1 / Model 2',
      release: '1994 / 1996',
      type: { 'zh-tw': '前後期本體', en: 'Early and late console shells' },
      note: {
        'zh-tw': 'Model 1 橢圓按鍵、Model 2 圓形按鍵，是玩家辨識 Saturn 的基本分界。內部也有多種主機板修訂，影響維修與光碟機相容。',
        en: 'Model 1 has oval buttons; Model 2 has round buttons, the basic visual split for Saturn owners. Inside, several board revisions affect repair and optical-drive compatibility.',
      },
    },
    {
      name: 'Victor V-Saturn / Hitachi Hi-Saturn',
      release: '1995 JP',
      type: { 'zh-tw': '日本授權機', en: 'Japanese licensed models' },
      note: {
        'zh-tw': 'Sega 讓 Victor 與 Hitachi 推出授權 Saturn，外觀與品牌不同。這延續了日本家電廠共同推平台的思路，但海外玩家較少接觸。',
        en: 'Sega allowed Victor and Hitachi to sell licensed Saturn units with different branding and shells. It continued a Japanese consumer-electronics platform strategy rarely seen overseas.',
      },
    },
    {
      name: 'Saturn NetLink / Modem',
      release: '1996',
      type: { 'zh-tw': '撥接網路配件', en: 'Dial-up network accessory' },
      note: {
        'zh-tw': '讓 Saturn 支援瀏覽器、Email 與少數線上對戰。規模很小，但它是 Sega 從 Saturn 到 Dreamcast 網路主機路線的前奏。',
        en: 'Enabled browser, email, and a small set of online games. Limited as it was, it foreshadowed Sega’s path from Saturn experiments to Dreamcast’s online-first identity.',
      },
    },
  ],
  'sega-cd': [
    {
      name: 'Sega CD Model 1 / Mega-CD',
      release: '1991 JP / 1992 NA',
      type: { 'zh-tw': '側邊式光碟底座', en: 'Side-mounted CD base' },
      note: {
        'zh-tw': '搭配初代 Mega Drive / Genesis 的側邊擴充，外型像高階音響。它把 CD 音樂、動畫與 FMV 帶到 Sega 16-bit 生態。',
        en: 'A side-mounted base for the original Mega Drive / Genesis, styled like hi-fi equipment. It brought CD audio, animation, and FMV into Sega’s 16-bit ecosystem.',
      },
    },
    {
      name: 'Sega CD Model 2',
      release: '1993',
      type: { 'zh-tw': '低成本上掀版', en: 'Cost-reduced top-loader' },
      note: {
        'zh-tw': '搭配 Genesis Model 2 的較便宜版本，改成上掀式光碟機。它是北美玩家最常見的 Sega CD 形態。',
        en: 'A cheaper top-loading model designed around Genesis Model 2. It became the most familiar Sega CD form for North American players.',
      },
    },
    {
      name: 'Sega CDX / JVC X’Eye',
      release: '1994',
      type: { 'zh-tw': '一體化授權機', en: 'Integrated combo units' },
      note: {
        'zh-tw': '把 Genesis 與 Sega CD 做成單機，甚至可當音樂 CD 隨身機使用。價格偏高，但今日收藏價值很強。',
        en: 'Combined Genesis and Sega CD into one unit, sometimes usable as a portable audio CD player. Expensive then, highly collectible now.',
      },
    },
  ],
  'super-famicom': [
    {
      name: 'Super Famicom / SNES',
      release: '1990 JP / 1991 NA',
      type: { 'zh-tw': '日美外型分歧', en: 'Japanese and western shells' },
      note: {
        'zh-tw': '日本 Super Famicom 與歐版 SNES 外型圓潤，美版 SNES 則改成紫灰方正造型。這是任天堂少數同世代主機地區外觀差異極大的案例。',
        en: 'Japanese Super Famicom and European SNES used a rounded shell, while North America received the purple-gray angular design. It is one of Nintendo’s largest regional shell splits.',
      },
    },
    {
      name: 'SNS-101 / Super Famicom Jr.',
      release: '1997',
      type: { 'zh-tw': '晚期小型版', en: 'Late compact revision' },
      note: {
        'zh-tw': '小型低成本改版，省略部分輸出，但因 RGB 改造與清晰訊號受到玩家關注。它是 16-bit 世代長尾銷售的收尾機。',
        en: 'A compact cost-reduced late revision that omitted some outputs, but later drew attention for RGB mods and clean video. It closed out the 16-bit generation’s long tail.',
      },
    },
    {
      name: 'Satellaview / Super Game Boy',
      release: '1994 / 1994',
      type: { 'zh-tw': '衛星與掌機擴充', en: 'Satellite and handheld expansions' },
      note: {
        'zh-tw': 'Satellaview 在日本嘗試衛星下載節目式遊戲，Super Game Boy 則把 Game Boy 卡帶帶到電視上。兩者都擴張了超任不只是卡帶主機的想像。',
        en: 'Satellaview experimented with broadcast-style satellite downloads in Japan, while Super Game Boy brought Game Boy cartridges to TV. Both expanded SNES beyond a simple cartridge console.',
      },
      slug: 'game-boy',
    },
  ],
  'switch': [
    {
      name: 'Nintendo Switch HAC-001 / HAC-001(-01)',
      release: '2017 / 2019',
      type: { 'zh-tw': '混合主機首版與續航改版', en: 'Hybrid launch model and battery revision' },
      note: {
        'zh-tw': '首版定義 TV、桌上、掌機三模式；2019 年紅盒續航版換用更省電晶片。外觀幾乎不變，但日常體驗差異很明顯。',
        en: 'The launch model defined TV, tabletop, and handheld modes; the 2019 red-box revision used a more efficient chip for better battery life. The shell barely changed, but daily use improved.',
      },
    },
    {
      name: 'Nintendo Switch Lite',
      release: '2019',
      type: { 'zh-tw': '純掌機版', en: 'Handheld-only model' },
      note: {
        'zh-tw': '移除 TV 輸出與可拆 Joy-Con，變成更便宜、更堅固的掌機。Lite 證明 Switch 的混合概念可以拆開，只保留掌機市場也成立。',
        en: 'Removed TV output and detachable Joy-Con for a cheaper, sturdier handheld. Lite proved the Switch concept could be split apart and still work as a dedicated portable.',
      },
    },
    {
      name: 'Nintendo Switch OLED Model',
      release: '2021',
      type: { 'zh-tw': '螢幕與底座強化版', en: 'Screen and dock upgrade' },
      note: {
        'zh-tw': '改用 7 吋 OLED、改善支架、加入有線網路底座與更大儲存。性能不變，但掌機模式質感大幅提升。',
        en: 'Added a 7-inch OLED screen, better kickstand, wired-LAN dock, and more storage. Performance stayed the same, but handheld-mode quality improved substantially.',
      },
    },
  ],
  'switch-2': [
    {
      name: 'Nintendo Switch 2',
      release: '2025',
      type: { 'zh-tw': '次世代混合主機', en: 'Next-generation hybrid console' },
      note: {
        'zh-tw': '官方 2025 年 6 月 5 日上市，延續 TV、桌上、掌機三模式，螢幕放大到 7.9 吋 LCD，支援 4K 底座輸出、microSD Express 與 Switch 遊戲相容。',
        en: 'Officially released June 5, 2025, continuing TV, tabletop, and handheld modes with a larger 7.9-inch LCD, 4K dock output, microSD Express support, and Switch game compatibility.',
      },
    },
    {
      name: 'Joy-Con 2',
      release: '2025',
      type: { 'zh-tw': '磁吸式新手把', en: 'Magnetic new controllers' },
      note: {
        'zh-tw': 'Joy-Con 2 改為磁吸連接，並加入滑鼠式操作能力。這是 Switch 2 和初代 Switch 在體感與桌面操作想像上的最大差異。',
        en: 'Joy-Con 2 uses magnetic attachment and adds mouse-style controls. It is the clearest control difference between Switch 2 and the original Switch.',
      },
    },
    {
      name: 'Switch 2 Pro Controller / Camera',
      release: '2025',
      type: { 'zh-tw': '線上社交配件', en: 'Online-social accessories' },
      note: {
        'zh-tw': 'Pro Controller 延續傳統手把路線，Camera 則服務 GameChat 與視訊社交。Switch 2 的配件重點不只控制，也包含遠端同玩。',
        en: 'The Pro Controller continues the traditional pad line, while the camera supports GameChat and video-social play. Switch 2 accessories emphasize not just control, but remote togetherness.',
      },
    },
  ],
  'tapwave-zodiac': [
    {
      name: 'Tapwave Zodiac 1',
      release: '2003',
      type: { 'zh-tw': '32MB 入門版', en: '32MB entry model' },
      note: {
        'zh-tw': '以 Palm OS 為基礎，結合 PDA、音樂、影片與遊戲。Zodiac 1 規格較低，但已展現智慧型裝置與掌機合流的早期方向。',
        en: 'Palm OS-based and combining PDA, music, video, and games. Zodiac 1 had lower specs, but already pointed toward the convergence of smart devices and handheld gaming.',
      },
    },
    {
      name: 'Tapwave Zodiac 2',
      release: '2003',
      type: { 'zh-tw': '128MB 高階版', en: '128MB premium model' },
      note: {
        'zh-tw': '記憶體提升到 128MB，是玩家與收藏圈更常提到的版本。它的概念比市場早一步，卻被 PSP、DS 與手機浪潮夾殺。',
        en: 'Raised memory to 128MB and became the model more often remembered by players and collectors. Its concept was early, but PSP, DS, and phones squeezed it out.',
      },
    },
  ],
  'turbo-express': [
    {
      name: 'PC Engine GT / TurboExpress',
      release: '1990',
      type: { 'zh-tw': 'HuCard 直插掌機', en: 'HuCard-compatible handheld' },
      note: {
        'zh-tw': '能直接玩 PC Engine / TurboGrafx-16 HuCard，是「把家用主機縮成掌機」的早期夢想。價格與耗電極高，但技術震撼力很強。',
        en: 'Played PC Engine / TurboGrafx-16 HuCards directly, an early dream of shrinking a home console into a handheld. Price and battery drain were severe, but the technical impact was real.',
      },
      slug: 'pc-engine',
    },
    {
      name: 'TurboVision TV Tuner',
      release: '1991',
      type: { 'zh-tw': '掌上電視配件', en: 'Portable TV tuner' },
      note: {
        'zh-tw': '讓 TurboExpress 可收類比電視，延伸成高價掌上影音設備。它很符合 NEC 把 PC Engine 家族做成影音平台的想像。',
        en: 'Let TurboExpress receive analog TV, turning it into a premium portable AV device. It fit NEC’s broader imagination of PC Engine as a media hardware family.',
      },
    },
  ],
  'vectrex': [
    {
      name: 'Vectrex built-in monitor console',
      release: '1982',
      type: { 'zh-tw': '向量螢幕一體機', en: 'Built-in vector-monitor console' },
      note: {
        'zh-tw': '主機自帶黑白向量 CRT，不需要家中電視。這讓 Vectrex 在畫面線條與街機感上獨一無二，也讓它成為最不像一般主機的主機。',
        en: 'Included its own monochrome vector CRT instead of using a household TV. That gave Vectrex unique line art and arcade feel, making it one of the least conventional consoles ever sold.',
      },
    },
    {
      name: '3D Imager / Light Pen',
      release: '1983',
      type: { 'zh-tw': '立體與繪圖周邊', en: '3D and drawing accessories' },
      note: {
        'zh-tw': '3D Imager 用旋轉色盤做出立體效果，Light Pen 支援繪圖與輸入。兩者都展現 Vectrex 雖小眾，卻非常願意做實驗。',
        en: 'The 3D Imager used a spinning color wheel for stereoscopic effects, while the Light Pen enabled drawing input. Both show Vectrex as niche but highly experimental.',
      },
    },
  ],
  'virtual-boy': [
    {
      name: 'Virtual Boy retail unit',
      release: '1995',
      type: { 'zh-tw': '桌上式立體顯示機', en: 'Tabletop stereoscopic unit' },
      note: {
        'zh-tw': '不是掌機也不是頭戴式 VR，而是架在桌上的紅黑立體顯示器。定位尷尬、舒適度差，卻成為任天堂最有研究價值的失敗之一。',
        en: 'Neither handheld nor true head-mounted VR, but a tabletop red-and-black stereoscopic display. Awkward positioning and comfort issues made it one of Nintendo’s most instructive failures.',
      },
    },
    {
      name: 'Virtual Boy link cable',
      release: 'prototype',
      type: { 'zh-tw': '未正式普及配件', en: 'Unreleased support accessory' },
      note: {
        'zh-tw': '主機設計曾考慮連線對戰，但商業壽命太短，相關配件與遊戲支援沒有真正展開。這讓 Virtual Boy 更像未完成的實驗平台。',
        en: 'The system design considered linked play, but its commercial life was too short for the accessory and software support to develop. That makes Virtual Boy feel like an unfinished experiment.',
      },
    },
  ],
  'wii': [
    {
      name: 'Wii RVL-001',
      release: '2006',
      type: { 'zh-tw': '首發 GC 相容版', en: 'Launch model with GameCube compatibility' },
      note: {
        'zh-tw': '有 GameCube 手把與記憶卡插槽，可直接玩 GC 光碟。它把 Wii 的新客群策略與任天堂舊玩家資產接在一起。',
        en: 'Included GameCube controller and memory-card ports and could play GC discs. It connected Wii’s new-audience strategy with Nintendo’s existing player base.',
      },
      slug: 'gamecube',
    },
    {
      name: 'Wii RVL-101 / Wii Mini',
      release: '2011 / 2012',
      type: { 'zh-tw': '相容移除與低價版', en: 'Compatibility-reduced budget models' },
      note: {
        'zh-tw': 'RVL-101 拿掉 GameCube 相容，Wii Mini 甚至移除網路功能，主打低價長尾。這些版本說明 Wii 晚期已從創新機變成家庭入門玩具。',
        en: 'RVL-101 removed GameCube compatibility, while Wii Mini even removed online features for a low-price tail. These revisions show Wii’s late shift from innovation device to entry-family toy.',
      },
    },
    {
      name: 'Wii Balance Board / MotionPlus',
      release: '2007 / 2009',
      type: { 'zh-tw': '體感擴充', en: 'Motion-control expansions' },
      note: {
        'zh-tw': 'Balance Board 服務《Wii Fit》，MotionPlus 提高動作偵測精度。它們讓 Wii 從遙控器主機變成一整套客廳體感平台。',
        en: 'Balance Board powered Wii Fit, while MotionPlus improved motion precision. Together they turned Wii from a remote-controller console into a broader living-room motion platform.',
      },
    },
  ],
  'wii-u': [
    {
      name: 'Wii U Basic / Deluxe',
      release: '2012',
      type: { 'zh-tw': '8GB 與 32GB 首發版', en: '8GB and 32GB launch bundles' },
      note: {
        'zh-tw': '白色 Basic 8GB 與黑色 Deluxe 32GB 同時推出，差異主要在儲存與同梱。命名沒有清楚傳達這是新主機，成為 Wii U 行銷混亂的一部分。',
        en: 'White Basic 8GB and black Deluxe 32GB launched together, differing mainly in storage and bundle contents. The naming failed to clearly signal a new console, contributing to Wii U’s messaging problem.',
      },
    },
    {
      name: 'Wii U GamePad',
      release: '2012',
      type: { 'zh-tw': '第二螢幕核心手把', en: 'Second-screen core controller' },
      note: {
        'zh-tw': 'GamePad 是 Wii U 的核心，也是成本與定位壓力來源。它能做離電視遊玩與非對稱玩法，但多數第三方很難把它變成必要功能。',
        en: 'The GamePad was Wii U’s core idea and its cost/positioning burden. It enabled off-TV and asymmetric play, but most third parties struggled to make it essential.',
      },
    },
    {
      name: 'Wii U Pro Controller',
      release: '2012',
      type: { 'zh-tw': '傳統手把路線', en: 'Traditional controller route' },
      note: {
        'zh-tw': '為長時間遊玩與核心玩家準備的傳統手把，電池續航很長。它也承認不是所有遊戲都適合拿著大螢幕 GamePad 玩。',
        en: 'A traditional controller for long sessions and core players, with excellent battery life. It also admitted that not every game benefited from holding the large GamePad.',
      },
    },
  ],
  'wonderswan': [
    {
      name: 'WonderSwan',
      release: '1999',
      type: { 'zh-tw': '黑白橫直雙向掌機', en: 'Monochrome portrait/landscape handheld' },
      note: {
        'zh-tw': '由橫井軍平參與設計，支援橫向與直向握持，省電、低價。它在日本短暫打出空間，尤其靠 Bandai 授權與 Square 支援。',
        en: 'Designed with Gunpei Yokoi’s involvement, supporting both landscape and portrait play with low power and low price. It briefly found room in Japan through Bandai licenses and Square support.',
      },
    },
    {
      name: 'WonderSwan Color / SwanCrystal',
      release: '2000 / 2002',
      type: { 'zh-tw': '彩色與高畫質版', en: 'Color and better-screen revisions' },
      note: {
        'zh-tw': 'Color 讓平台追上彩色掌機需求，SwanCrystal 改善液晶殘影。它們提升體驗，但面對 GBA 已很難擴大市場。',
        en: 'Color met the market’s demand for color handhelds, and SwanCrystal improved LCD ghosting. They improved the experience, but GBA made expansion difficult.',
      },
    },
  ],
  'xbox': [
    {
      name: 'Xbox original',
      release: '2001',
      type: { 'zh-tw': '硬碟內建首代機', en: 'Original hard-drive console' },
      note: {
        'zh-tw': '內建硬碟與 Ethernet 是初代 Xbox 的關鍵差異，讓存檔、DLC 與 Xbox Live 有硬體基礎。它更像 PC 進入客廳，而不是傳統日系主機。',
        en: 'Built-in hard drive and Ethernet were the original Xbox’s key differences, enabling saves, DLC, and Xbox Live. It felt more like a PC entering the living room than a traditional Japanese console.',
      },
    },
    {
      name: 'Duke / Controller S',
      release: '2001 / 2002',
      type: { 'zh-tw': '手把路線修正', en: 'Controller course correction' },
      note: {
        'zh-tw': '首發 Duke 手把巨大，後來 Controller S 從日本版設計變成全球標準。這是 Xbox 很早學會用玩家回饋修正硬體的例子。',
        en: 'The launch Duke controller was huge; the smaller Japanese Controller S later became the global standard. It is an early example of Xbox correcting hardware based on player feedback.',
      },
    },
  ],
  'xbox-360': [
    {
      name: 'Xbox 360 Core / Premium / Elite',
      release: '2005-2007',
      type: { 'zh-tw': '早期 SKU 分層', en: 'Early SKU tiers' },
      note: {
        'zh-tw': 'Core 沒硬碟、Premium 有硬碟、Elite 加大容量與 HDMI，顯示 Xbox 很早就用 SKU 分層處理價格與客群。早期硬體也與三紅故障記憶綁在一起。',
        en: 'Core lacked a hard drive, Premium included one, and Elite added storage and HDMI, showing Xbox’s early use of SKU tiers. The early hardware is also tied to the Red Ring of Death memory.',
      },
    },
    {
      name: 'Xbox 360 S / E',
      release: '2010 / 2013',
      type: { 'zh-tw': '薄型與晚期版', en: 'Slim and late revisions' },
      note: {
        'zh-tw': '360 S 重新設計散熱、內建 Wi-Fi、支援 Kinect；360 E 則外型靠近 Xbox One。它們讓 360 從故障陰影中走向長尾平台。',
        en: '360 S redesigned cooling, added built-in Wi-Fi, and supported Kinect; 360 E moved visually closer to Xbox One. These revisions helped 360 move beyond its failure-prone reputation.',
      },
    },
    {
      name: 'Kinect / HD DVD Player',
      release: '2006 / 2010',
      type: { 'zh-tw': '影音與體感擴充', en: 'Media and motion add-ons' },
      note: {
        'zh-tw': 'HD DVD 外接機代表格式戰時代，Kinect 則把 360 推向體感家庭市場。兩者都反映 Microsoft 想讓 Xbox 超越傳統遊戲機。',
        en: 'The HD DVD add-on represents the format-war era, while Kinect pushed 360 toward family motion play. Both show Microsoft trying to move Xbox beyond a conventional game console.',
      },
    },
  ],
  'xbox-one': [
    {
      name: 'Xbox One + Kinect',
      release: '2013',
      type: { 'zh-tw': '首發客廳中樞版', en: 'Launch living-room hub model' },
      note: {
        'zh-tw': '首發強制綁 Kinect、主打 HDMI in 與電視整合，訊息偏離核心玩家。這個開局是 Xbox One 世代長期落後 PS4 的關鍵。',
        en: 'Launched with Kinect bundled and emphasized HDMI-in and TV integration, confusing core players. This opening explains much of Xbox One’s long struggle against PS4.',
      },
    },
    {
      name: 'Xbox One S',
      release: '2016',
      type: { 'zh-tw': '小型 4K 影音版', en: 'Slim 4K media revision' },
      note: {
        'zh-tw': '體積縮小、內建電源、支援 4K Blu-ray 與 HDR，是 Xbox One 真正成熟的硬體版本。它也修正了首發機過大的客廳盒子形象。',
        en: 'Smaller, with internal power supply, 4K Blu-ray, and HDR support. It was the first truly refined Xbox One hardware and corrected the oversized set-top-box image.',
      },
    },
    {
      name: 'Xbox One X',
      release: '2017',
      type: { 'zh-tw': '高效能 4K 版', en: 'High-performance 4K model' },
      note: {
        'zh-tw': '以當時最強主機性能主打原生 4K，是 Microsoft 用硬體工程重新建立聲量的產品。它也延續了中世代升級成為常態的趨勢。',
        en: 'Marketed as the most powerful console of its time for native 4K, it helped Microsoft rebuild attention through hardware engineering. It also reinforced mid-generation upgrades as normal.',
      },
    },
  ],
  'xbox-series-s': [
    {
      name: 'Xbox Series S 512GB',
      release: '2020',
      type: { 'zh-tw': '低價純數位次世代機', en: 'Low-cost all-digital next-gen model' },
      note: {
        'zh-tw': '以較弱 GPU、較小記憶體與無光碟機換取低價，主打 Game Pass 入口。它讓次世代門票變便宜，也讓開發者多一個效能基準要顧。',
        en: 'Traded GPU, memory, and disc drive for a low price, acting as a Game Pass entry point. It made next-gen cheaper while giving developers another performance target to support.',
      },
    },
    {
      name: 'Xbox Series S 1TB',
      release: '2023 / 2024',
      type: { 'zh-tw': '大容量改版', en: 'Larger-storage revisions' },
      note: {
        'zh-tw': '黑色 1TB 與後續白色 1TB 版本補上數位主機最痛的儲存問題。對 Game Pass 玩家來說，容量比外型更重要。',
        en: 'Black 1TB and later white 1TB versions addressed the biggest pain point of an all-digital console: storage. For Game Pass users, capacity mattered more than the shell color.',
      },
    },
  ],
  'xbox-series-x': [
    {
      name: 'Xbox Series X 1TB',
      release: '2020',
      type: { 'zh-tw': '高效能光碟版', en: 'High-performance disc model' },
      note: {
        'zh-tw': '塔型機身、12 TFLOPS GPU、光碟機與快速 SSD，是 Microsoft 的完整次世代規格主張。它和 Series S 組成高低雙 SKU 策略。',
        en: 'Tower-shaped shell, 12 TFLOPS GPU, disc drive, and fast SSD represented Microsoft’s full next-gen spec statement. It paired with Series S for a high/low SKU strategy.',
      },
    },
    {
      name: 'Series X Digital / Galaxy Black 2TB',
      release: '2024',
      type: { 'zh-tw': '數位與大容量版本', en: 'Digital and larger-storage options' },
      note: {
        'zh-tw': '2024 年新增白色 1TB 無光碟版與 2TB Galaxy Black 特別版，擴大 Series X 價格與容量選擇。Xbox 的本世代策略越來越像服務入口分層。',
        en: 'In 2024 Microsoft added a white 1TB all-digital Series X and a 2TB Galaxy Black special edition, widening price and storage choices. Xbox’s current strategy increasingly tiers access to a service ecosystem.',
      },
    },
  ],
};

const normalizeLang = (lang: Lang): 'zh-tw' | 'en' => (lang === 'en' ? 'en' : 'zh-tw');

export const getHardwareVariants = (slug: string, lang: Lang): HardwareVariant[] => {
  const variants = fallbackVariants[slug] ?? [];
  const localized = normalizeLang(lang);

  return variants.map((variant) => ({
    name: variant.name,
    release: variant.release,
    type: variant.type[localized],
    note: variant.note[localized],
    slug: variant.slug,
  }));
};

