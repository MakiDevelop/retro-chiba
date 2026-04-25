/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        crt: {
          bg: '#0a0a0a',
          panel: '#15110d',
          amber: '#ffb000',
          'amber-dim': '#cc8c00',
          green: '#00ff41',
          dim: '#5a4a30',
          text: '#e8d9b8',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Noto Sans Mono CJK TC"', 'monospace'],
        body: ['"Noto Sans TC"', '"Noto Sans SC"', '"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
