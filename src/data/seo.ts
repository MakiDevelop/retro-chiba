import { localizedPath } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

export const siteOrigin = 'https://retro.chiba.tw';

export const featureSlugs = ['atari-crash', '16-bit-war', 'playstation-breakup', 'polygon-revolution'] as const;

export const featureSeo = {
  'atari-crash': {
    title: {
      'zh-tw': 'Atari 大崩潰',
      'zh-cn': 'Atari 大崩溃',
      en: 'The Atari Crash',
      ja: 'Atari ショック',
    },
    description: {
      'zh-tw': '從 Atari 2600 盛世到北美家用主機市場崩塌，解析 E.T. 迷思、第三方失控、零售信任崩壞，以及 NES 如何靠授權制度與品質標章重建市場。',
      'zh-cn': '从 Atari 2600 盛世到北美家用主机市场崩塌，解析 E.T. 迷思、第三方失控、零售信任崩坏，以及 NES 如何靠授权制度与品质标章重建市场。',
      en: 'A curated history of the 1983 North American video game crash: Atari 2600 oversupply, the E.T. myth, third-party chaos, retail distrust, and how NES rebuilt confidence.',
      ja: 'Atari 2600 の過熱から北米家庭用ゲーム市場の崩壊まで。E.T. 神話、第三方の乱立、小売の不信、NES が信頼を再構築した理由を整理する。',
    },
    keywords: ['Atari crash', 'video game crash 1983', 'Atari 2600', 'NES', 'E.T.', '任天堂', '紅白機'],
  },
  '16-bit-war': {
    title: {
      'zh-tw': '16-bit 戰爭',
      'zh-cn': '16-bit 战争',
      en: 'The 16-bit War',
      ja: '16-bit 戦争',
    },
    description: {
      'zh-tw': 'Mega Drive / Genesis 與 Super Famicom / SNES 的主機戰專題：Sonic vs Mario、Blast Processing、RPG 陣容、街機感、歐美與日本市場差異。',
      'zh-cn': 'Mega Drive / Genesis 与 Super Famicom / SNES 的主机战专题：Sonic vs Mario、Blast Processing、RPG 阵容、街机感、欧美与日本市场差异。',
      en: 'A special exhibit on Genesis vs SNES: Sonic vs Mario, Blast Processing, RPG libraries, arcade energy, and how Japan, North America, and Europe remembered the 16-bit war.',
      ja: 'Mega Drive / Genesis と Super Famicom / SNES の主機戦争。Sonic vs Mario、Blast Processing、RPG、アーケード感、地域差を扱う特集。',
    },
    keywords: ['Genesis vs SNES', 'Mega Drive', 'Super Famicom', 'Blast Processing', 'Sonic', 'Mario', '16-bit'],
  },
  'playstation-breakup': {
    title: {
      'zh-tw': 'PlayStation 誕生前夜',
      'zh-cn': 'PlayStation 诞生前夜',
      en: 'Before PlayStation',
      ja: 'PlayStation 前夜',
    },
    description: {
      'zh-tw': '任天堂與 Sony 的 SFC CD-ROM 合作破局專題：平台控制權、授權費、Philips 轉向、Ken Kutaragi，以及 PlayStation 如何從周邊計畫變成獨立主機。',
      'zh-cn': '任天堂与 Sony 的 SFC CD-ROM 合作破局专题：平台控制权、授权费、Philips 转向、Ken Kutaragi，以及 PlayStation 如何从周边计划变成独立主机。',
      en: 'The story before PlayStation: Nintendo and Sony’s SFC CD-ROM breakup, licensing control, the Philips pivot, Ken Kutaragi, and how an accessory became a console.',
      ja: 'PlayStation 前夜の物語。任天堂と Sony の SFC CD-ROM 破談、ライセンス支配、Philips への転換、久夛良木健、そして独立主機への転換を追う。',
    },
    keywords: ['PlayStation history', 'Nintendo Sony CD-ROM', 'Ken Kutaragi', 'Super Famicom CD-ROM', 'Philips CD-i', '任天堂', 'Sony'],
  },
  'polygon-revolution': {
    title: {
      'zh-tw': '多邊形革命',
      'zh-cn': '多边形革命',
      en: 'The Polygon Revolution',
      ja: 'ポリゴン革命',
    },
    description: {
      'zh-tw': 'PlayStation、Sega Saturn 與 Nintendo 64 的 3D 主機戰專題：光碟、卡匣、開發環境、街機血統、RPG 與 90 年代多邊形美學。',
      'zh-cn': 'PlayStation、Sega Saturn 与 Nintendo 64 的 3D 主机战专题：光盘、卡带、开发环境、街机血统、RPG 与 90 年代多边形美学。',
      en: 'A fifth-generation exhibit on PlayStation, Sega Saturn, and Nintendo 64: discs, cartridges, development tools, arcade heritage, RPGs, and 1990s polygon aesthetics.',
      ja: 'PlayStation、Sega Saturn、Nintendo 64 の第5世代特集。光ディスク、カートリッジ、開発環境、アーケード血統、RPG、90年代ポリゴン美学を扱う。',
    },
    keywords: ['PlayStation', 'Sega Saturn', 'Nintendo 64', '3D games', 'polygon graphics', 'fifth generation consoles'],
  },
} satisfies Record<(typeof featureSlugs)[number], {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  keywords: string[];
}>;

export function getFeaturePath(lang: Lang, slug: (typeof featureSlugs)[number]) {
  return localizedPath(lang, `features/${slug}/`);
}

export function makeUrl(path: string) {
  return new URL(path, siteOrigin).href;
}
