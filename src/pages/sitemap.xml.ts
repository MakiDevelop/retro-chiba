import { getCollection } from 'astro:content';
import { allLangs, localizedPath } from '../i18n/utils';
import { generations } from '../data/generations';
import { featureSlugs, siteOrigin } from '../data/seo';

const lastmod = '2026-04-30';

function urlEntry(path: string, priority = '0.7') {
  const loc = new URL(path, siteOrigin).href;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export async function GET() {
  const routes: Array<{ path: string; priority: string }> = [];

  for (const lang of allLangs) {
    routes.push({ path: localizedPath(lang), priority: '1.0' });

    for (const slug of featureSlugs) {
      routes.push({ path: localizedPath(lang, `features/${slug}/`), priority: '0.9' });
    }

    for (const gen of Object.keys(generations)) {
      routes.push({ path: localizedPath(lang, `generations/${gen}/`), priority: '0.8' });
    }
  }

  const consoleEntries = await getCollection('consoles');
  for (const entry of consoleEntries) {
    const slug = entry.id.split('/')[0];
    routes.push({ path: localizedPath(entry.data.lang, `consoles/${slug}/`), priority: '0.75' });
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => urlEntry(route.path, route.priority)),
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
