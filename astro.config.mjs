// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://retro.chiba.tw',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'zh-cn', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
