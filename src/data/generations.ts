import type { Lang } from '../i18n/ui';

export type GenKey = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'h';

interface GenInfo {
  period: string;
  titles: Record<Lang, string>;
  summaries: Record<Lang, string>;
}

export const generations: Record<GenKey, GenInfo> = {
  '1': {
    period: '1972–1983',
    titles: {
      'zh-tw': '第一世代　專屬機',
      'zh-cn': '第一世代　专属机',
      en: 'Generation 1 — Dedicated consoles',
      ja: '第1世代　専用機',
    },
    summaries: {
      'zh-tw': '從 Magnavox Odyssey 到 Atari Pong。家用主機從「電視配件」誕生，內建固定遊戲、無卡帶。Atari 大崩盤前的拓荒時代。',
      'zh-cn': '从 Magnavox Odyssey 到 Atari Pong。家用主机从「电视配件」诞生，内建固定游戏、无卡带。Atari 大崩盘前的拓荒时代。',
      en: 'From Magnavox Odyssey to Atari Pong. Home consoles were born as TV peripherals — built-in games, no cartridges. The pre-crash pioneering era.',
      ja: 'マグナボックス・オデッセイからアタリ Pong まで。家庭用ゲーム機が「テレビアクセサリ」として誕生した時代。内蔵ゲームのみ、カセットなし。アタリショック以前の開拓期。',
    },
  },
  '2': {
    period: '1976–1992',
    titles: {
      'zh-tw': '第二世代　卡帶誕生',
      'zh-cn': '第二世代　卡带诞生',
      en: 'Generation 2 — The cartridge arrives',
      ja: '第2世代　カセットの登場',
    },
    summaries: {
      'zh-tw': 'Atari 2600 開啟可換卡帶時代。Intellivision、ColecoVision 起而競爭。1983 年 E.T. 一案引爆 Atari 大崩盤，幾乎讓家用主機產業在北美消失。',
      'zh-cn': 'Atari 2600 开启可换卡带时代。Intellivision、ColecoVision 起而竞争。1983 年 E.T. 一案引爆 Atari 大崩盘，几乎让家用主机产业在北美消失。',
      en: 'Atari 2600 opens the swappable-cartridge era. Intellivision and ColecoVision compete. The 1983 E.T. fiasco triggers the crash that nearly erases home gaming in North America.',
      ja: 'Atari 2600 が交換式カセットの時代を開く。インテリビジョン、コレコビジョンが追随。1983 年「E.T.」事件がアタリショックの引き金となり、北米家庭用ゲーム機市場はほぼ消滅した。',
    },
  },
  '3': {
    period: '1983–2003',
    titles: {
      'zh-tw': '第三世代　8-bit 復興',
      'zh-cn': '第三世代　8-bit 复兴',
      en: 'Generation 3 — The 8-bit revival',
      ja: '第3世代　8 ビットの復興',
    },
    summaries: {
      'zh-tw': 'Atari 大崩盤後的廢墟上，任天堂用紅白機重建了家用主機產業；Sega 用 Master System 在歐洲撐住場面；Atari 7800 完成最後一搏。',
      'zh-cn': 'Atari 大崩盘后的废墟上，任天堂用红白机重建了家用主机产业；Sega 用 Master System 在欧洲撑住场面；Atari 7800 完成最后一搏。',
      en: 'On the ruins of the 1983 crash, Nintendo rebuilt the industry with the Famicom; Sega held Europe with the Master System; Atari 7800 made the final stand.',
      ja: '1983 年アタリショックの廃墟の上に、任天堂はファミコンで家庭用ゲーム機産業を再建した。セガはマスターシステムで欧州を支え、Atari 7800 が最後の戦いを見せた。',
    },
  },
  '4': {
    period: '1987–2004',
    titles: {
      'zh-tw': '第四世代　16-bit 戰爭',
      'zh-cn': '第四世代　16-bit 战争',
      en: 'Generation 4 — The 16-bit war',
      ja: '第4世代　16 ビット戦争',
    },
    summaries: {
      'zh-tw': '超任 vs Mega Drive 雙雄對決。Mode 7 縮放、PCM 音源、街機級畫面進入家庭。NEC PC Engine 在日本第三勢力崛起，Neo Geo AES 把街機原汁原味搬進客廳。',
      'zh-cn': '超任 vs Mega Drive 双雄对决。Mode 7 缩放、PCM 音源、街机级画面进入家庭。NEC PC Engine 在日本第三势力崛起，Neo Geo AES 把街机原汁原味搬进客厅。',
      en: 'SNES vs. Mega Drive — the great two-horse race. Mode 7 scaling, PCM audio, arcade-grade visuals at home. NEC PC Engine rises as a third force in Japan; Neo Geo AES brings raw arcade hardware into the living room.',
      ja: 'スーパーファミコン対メガドライブの二強時代。Mode 7、PCM 音源、アーケード級のグラフィックが家庭に。NEC PC エンジンが日本市場で第三極を形成し、Neo Geo AES がアーケード基板そのものをお茶の間に持ち込んだ。',
    },
  },
  '5': {
    period: '1993–2006',
    titles: {
      'zh-tw': '第五世代　多邊形革命',
      'zh-cn': '第五世代　多边形革命',
      en: 'Generation 5 — The polygon revolution',
      ja: '第5世代　ポリゴン革命',
    },
    summaries: {
      'zh-tw': 'CD-ROM 把容量從 MB 推到 GB。PS1 以 polygon 3D 開創新紀元，N64 卡帶死硬派抵抗，Saturn 在日本掀風但海外失利。Atari Jaguar、3DO、Pippin 各自殞落。',
      'zh-cn': 'CD-ROM 把容量从 MB 推到 GB。PS1 以 polygon 3D 开创新纪元，N64 卡带死硬派抵抗，Saturn 在日本掀风但海外失利。Atari Jaguar、3DO、Pippin 各自陨落。',
      en: 'CD-ROM pushes capacity from megabytes to gigabytes. PS1 ushers in polygon 3D, N64 holds out with cartridges, Saturn captures Japan but loses overseas. Atari Jaguar, 3DO, and Pippin all fall.',
      ja: 'CD-ROM が容量を MB から GB へ押し上げた。PlayStation がポリゴン 3D で新紀元を開き、N64 はカセット派の最後の砦となり、サターンは日本で気を吐くも海外で失速。Atari Jaguar、3DO、ピピンはそれぞれ消えていった。',
    },
  },
  '6': {
    period: '1998–2013',
    titles: {
      'zh-tw': '第六世代　DVD 與網路',
      'zh-cn': '第六世代　DVD 与网络',
      en: 'Generation 6 — DVD and the network',
      ja: '第6世代　DVD とネットワーク',
    },
    summaries: {
      'zh-tw': 'Dreamcast 第一個內建 modem，但 Sega 力盡退場。PS2 以 DVD 播放器吸引非玩家、累積 1.6 億台史上最多。Xbox 帶著 Halo 與線上服務切入，GameCube 死忠依舊。',
      'zh-cn': 'Dreamcast 第一个内建 modem，但 Sega 力尽退场。PS2 以 DVD 播放器吸引非玩家、累积 1.6 亿台史上最多。Xbox 带着 Halo 与在线服务切入，GameCube 死忠依旧。',
      en: 'Dreamcast was first to ship with a built-in modem — but Sega ran out of money and exited the hardware business. PS2 hit 160M units (still the record) by doubling as a DVD player. Xbox arrived with Halo and online services; GameCube kept its faithful.',
      ja: 'ドリームキャストが家庭用機初の内蔵モデムを搭載したが、セガはハード事業から撤退。PS2 は DVD プレーヤーとしての価値で非ゲーマー層を取り込み、累計 1 億 6,000 万台という史上最高記録を樹立。Xbox は Halo とオンラインサービスで参入、ゲームキューブは熱心なファンに支えられた。',
    },
  },
  '7': {
    period: '2004–2017',
    titles: {
      'zh-tw': '第七世代　HD 與動作感應',
      'zh-cn': '第七世代　HD 与动作感应',
      en: 'Generation 7 — HD and motion controls',
      ja: '第7世代　HD と体感操作',
    },
    summaries: {
      'zh-tw': 'Wii 用體感操作打破核心玩家圈邊界，賣破一億。PS3 以 Cell 處理器與 Blu-ray 押注次世代媒體。Xbox 360 以 Live 服務與多人遊戲整合定義線上時代。',
      'zh-cn': 'Wii 用体感操作打破核心玩家圈边界，卖破一亿。PS3 以 Cell 处理器与 Blu-ray 押注次世代媒体。Xbox 360 以 Live 服务与多人游戏整合定义在线时代。',
      en: 'Wii broke through the core-gamer wall with motion controls and crossed 100M. PS3 bet the future on the Cell processor and Blu-ray. Xbox 360 defined the online era with Live and integrated multiplayer.',
      ja: 'Wii が体感操作でコアゲーマー圏を超え、1 億台を突破。PS3 は Cell プロセッサと Blu-ray で次世代メディアに賭けた。Xbox 360 は Xbox Live とマルチプレイヤー統合でオンライン時代を定義。',
    },
  },
  '8': {
    period: '2012–現在',
    titles: {
      'zh-tw': '第八世代　平台與服務',
      'zh-cn': '第八世代　平台与服务',
      en: 'Generation 8 — Platforms and services',
      ja: '第8世代　プラットフォームとサービス',
    },
    summaries: {
      'zh-tw': 'PS4 以「給玩家、不是給觀眾」反擊 Xbox One，奪回中段市場。Wii U 體感熱潮褪去後失敗。Switch 把家用機與掌機合一，重新定義任天堂的下半場。',
      'zh-cn': 'PS4 以「给玩家、不是给观众」反击 Xbox One，夺回中段市场。Wii U 体感热潮褪去后失败。Switch 把家用机与掌机合一，重新定义任天堂的下半场。',
      en: 'PS4 hit back at Xbox One with "for the players" and reclaimed the mainstream. Wii U fell with the post-motion-controls hangover. Switch fused console and handheld, redefining Nintendo for the next decade.',
      ja: 'PS4 が「ゲーマーのために」というメッセージで Xbox One に反撃し、ミドル市場を奪還。Wii U は体感ブームの反動で失速。Switch が据え置きと携帯を融合させ、任天堂の後半戦を定義した。',
    },
  },
  '9': {
    period: '2020–現在',
    titles: {
      'zh-tw': '第九世代　SSD 與光線追蹤',
      'zh-cn': '第九世代　SSD 与光线追踪',
      en: 'Generation 9 — SSD and ray tracing',
      ja: '第9世代　SSD とレイトレーシング',
    },
    summaries: {
      'zh-tw': 'PS5 / Xbox Series 把 NVMe SSD、硬體光追、3D 音效搬進客廳。Switch 2 接棒。雲端遊戲在這代終於可用，但仍未取代主機本身。',
      'zh-cn': 'PS5 / Xbox Series 把 NVMe SSD、硬件光追、3D 音效搬进客厅。Switch 2 接棒。云游戏在这代终于可用，但仍未取代主机本身。',
      en: 'PS5 / Xbox Series brought NVMe SSDs, hardware ray tracing, and 3D audio into the living room. Switch 2 took over. Cloud gaming finally became usable — but did not replace the console itself.',
      ja: 'PS5 / Xbox Series が NVMe SSD、ハードウェアレイトレーシング、3D オーディオをお茶の間にもたらした。Switch 2 がバトンを引き継ぐ。クラウドゲーミングはこの世代でようやく実用化したが、本体そのものを置き換えるには至っていない。',
    },
  },
  h: {
    period: '1979–現在',
    titles: {
      'zh-tw': '掌機支線　口袋裡的世界',
      'zh-cn': '掌机支线　口袋里的世界',
      en: 'Handheld Branch — A world in your pocket',
      ja: '携帯機ライン　ポケットの中の世界',
    },
    summaries: {
      'zh-tw': '從 Microvision 開始，到 Game Boy 奠定範式，DS 雙螢幕創新，PSP 推極致硬體，Vita 與 3DS 各自完結篇。掌機與家用機平行演化，互相滲透。',
      'zh-cn': '从 Microvision 开始，到 Game Boy 奠定范式，DS 双屏创新，PSP 推极致硬件，Vita 与 3DS 各自完结篇。掌机与家用机平行演化，互相渗透。',
      en: 'From Microvision through Game Boy (which set the template), DS (dual-screen innovation), PSP (raw hardware push), to Vita and 3DS as final acts. Handhelds evolved in parallel with home consoles — and the two kept bleeding into each other.',
      ja: 'Microvision から始まり、ゲームボーイが基本形を確立。DS のデュアルスクリーン、PSP のハードウェア追求、Vita と 3DS がそれぞれの終章となった。携帯機は据え置き機と並行進化し、互いに浸食し合った。',
    },
  },
};

export const allGenKeys: GenKey[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'h'];
