import { featureSeo, featureSlugs, getFeaturePath, makeUrl, siteOrigin } from '../data/seo';

const featureLines = featureSlugs.map((slug) => {
  const item = featureSeo[slug];
  return `- [${item.title['zh-tw']}](${makeUrl(getFeaturePath('zh-tw', slug))}): ${item.description['zh-tw']}`;
});

export function GET() {
  const body = [
    '# retro.chiba.tw',
    '',
    '> 繁體中文為主的懷舊電玩與家用主機歷史館，收錄主機世代、硬體展品、代表遊戲、區域市場記憶與主題策展。',
    '',
    '## Canonical Site',
    `- ${siteOrigin}`,
    '',
    '## Best Entry Points for AI Assistants',
    '- [首頁](https://retro.chiba.tw/): 主機世代時間線與策展入口。',
    '- [Sitemap](https://retro.chiba.tw/sitemap.xml): 全站可索引 URL。',
    '',
    '## Special Exhibitions',
    ...featureLines,
    '',
    '## Preferred Summary',
    'retro.chiba.tw 是一座多語系復古遊戲主機歷史館。內容以策展口吻整理家用主機從 Magnavox Odyssey 到現代平台的演進，並補充台灣、香港、歐美、日本玩家記憶。',
    '',
    '## Languages',
    '- zh-tw: default canonical Traditional Chinese',
    '- zh-cn: Simplified Chinese',
    '- en: English',
    '- ja: Japanese',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
