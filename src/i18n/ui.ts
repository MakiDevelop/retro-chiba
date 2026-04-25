export const languages = {
  'zh-tw': '繁中',
  'zh-cn': '简中',
  en: 'EN',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'zh-tw';

export const ui = {
  'zh-tw': {
    'site.title': '懷舊電玩歷史館',
    'site.tagline': '從 Magnavox Odyssey 到 PS5，家用主機半世紀編年史',
    'soon.heading': '建造中',
    'soon.body': '這座館正在搭建。第一個展廳：第三世代（FC / NES / Master System）。敬請期待。',
    'soon.signature': '— 千葉熊',
  },
  'zh-cn': {
    'site.title': '怀旧电玩历史馆',
    'site.tagline': '从 Magnavox Odyssey 到 PS5，家用主机半世纪编年史',
    'soon.heading': '建造中',
    'soon.body': '这座馆正在搭建。第一个展厅：第三世代（FC / NES / Master System）。敬请期待。',
    'soon.signature': '— 千叶熊',
  },
  en: {
    'site.title': 'Retro Console Museum',
    'site.tagline': 'A half-century chronicle of home consoles, from Magnavox Odyssey to PS5',
    'soon.heading': 'Under Construction',
    'soon.body': 'This museum is being built. First exhibit: Generation 3 (FC / NES / Master System). Stay tuned.',
    'soon.signature': '— Chibakuma',
  },
  ja: {
    'site.title': 'レトロゲーム歴史館',
    'site.tagline': 'マグナボックス オデッセイから PS5 まで、家庭用ゲーム機の半世紀年代記',
    'soon.heading': '建設中',
    'soon.body': 'この博物館は建設中です。最初の展示室：第3世代（ファミコン / NES / マスターシステム）。お楽しみに。',
    'soon.signature': '— 千葉熊',
  },
} as const;
