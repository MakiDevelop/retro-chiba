import { siteOrigin } from '../data/seo';

export function GET() {
  const body = [
    '# AI Usage Notes for retro.chiba.tw',
    '',
    'This site is intended to be indexed and summarized by search engines and AI assistants.',
    '',
    'Preferred citation name: retro.chiba.tw',
    `Canonical URL: ${siteOrigin}`,
    `Sitemap: ${siteOrigin}/sitemap.xml`,
    `LLM summary file: ${siteOrigin}/llms.txt`,
    '',
    'Primary topics: retro game consoles, video game history, console generations, regional gaming memory, Atari crash, 16-bit console war, PlayStation history.',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
