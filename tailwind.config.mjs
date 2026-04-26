import typography from '@tailwindcss/typography';

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
      typography: ({ theme }) => ({
        crt: {
          css: {
            '--tw-prose-body': 'rgb(232 217 184 / 0.85)',
            '--tw-prose-headings': theme('colors.crt.amber'),
            '--tw-prose-lead': 'rgb(232 217 184 / 0.78)',
            '--tw-prose-links': theme('colors.crt.amber'),
            '--tw-prose-bold': theme('colors.crt.amber'),
            '--tw-prose-counters': 'rgb(232 217 184 / 0.65)',
            '--tw-prose-bullets': 'rgb(204 140 0 / 0.7)',
            '--tw-prose-hr': 'rgb(90 74 48 / 0.45)',
            '--tw-prose-quotes': 'rgb(232 217 184 / 0.92)',
            '--tw-prose-quote-borders': 'rgb(204 140 0 / 0.45)',
            '--tw-prose-captions': 'rgb(232 217 184 / 0.62)',
            '--tw-prose-code': theme('colors.crt.amber'),
            '--tw-prose-pre-code': 'rgb(232 217 184 / 0.9)',
            '--tw-prose-pre-bg': 'rgb(21 17 13 / 0.9)',
            '--tw-prose-th-borders': 'rgb(90 74 48 / 0.55)',
            '--tw-prose-td-borders': 'rgb(90 74 48 / 0.35)',
            '--tw-prose-invert-body': 'rgb(232 217 184 / 0.85)',
            '--tw-prose-invert-headings': theme('colors.crt.amber'),
            '--tw-prose-invert-lead': 'rgb(232 217 184 / 0.78)',
            '--tw-prose-invert-links': theme('colors.crt.amber'),
            '--tw-prose-invert-bold': theme('colors.crt.amber'),
            '--tw-prose-invert-counters': 'rgb(232 217 184 / 0.65)',
            '--tw-prose-invert-bullets': 'rgb(204 140 0 / 0.7)',
            '--tw-prose-invert-hr': 'rgb(90 74 48 / 0.45)',
            '--tw-prose-invert-quotes': 'rgb(232 217 184 / 0.92)',
            '--tw-prose-invert-quote-borders': 'rgb(204 140 0 / 0.45)',
            '--tw-prose-invert-captions': 'rgb(232 217 184 / 0.62)',
            '--tw-prose-invert-code': theme('colors.crt.amber'),
            '--tw-prose-invert-pre-code': 'rgb(232 217 184 / 0.9)',
            '--tw-prose-invert-pre-bg': 'rgb(21 17 13 / 0.9)',
            '--tw-prose-invert-th-borders': 'rgb(90 74 48 / 0.55)',
            '--tw-prose-invert-td-borders': 'rgb(90 74 48 / 0.35)',
            color: 'rgb(232 217 184 / 0.85)',
            lineHeight: '1.9',
            '> * + *': {
              marginTop: '1.1em',
            },
            a: {
              color: theme('colors.crt.amber'),
              textDecorationThickness: '0.08em',
              textUnderlineOffset: '0.24em',
              transition: 'color 150ms ease, text-shadow 150ms ease',
            },
            'a:hover': {
              color: '#ffcb4d',
              textShadow: '0 0 10px rgba(255, 176, 0, 0.22)',
            },
            h2: {
              fontFamily: theme('fontFamily.pixel').join(', '),
              fontSize: '1.15rem',
              lineHeight: '1.9',
              marginTop: '2.75em',
              marginBottom: '1.1em',
            },
            h3: {
              fontFamily: theme('fontFamily.pixel').join(', '),
              fontSize: '0.95rem',
              lineHeight: '1.85',
              marginTop: '2.25em',
              marginBottom: '0.95em',
            },
            h4: {
              fontFamily: theme('fontFamily.pixel').join(', '),
              fontSize: '0.8rem',
              lineHeight: '1.8',
              marginTop: '2em',
              marginBottom: '0.85em',
            },
            p: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            ul: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            ol: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            li: {
              marginTop: '0.35em',
              marginBottom: '0.35em',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '3px',
              paddingLeft: '1rem',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.9em',
              padding: '0.18rem 0.38rem',
              borderRadius: '0.32rem',
              border: '1px solid rgb(90 74 48 / 0.55)',
              backgroundColor: 'rgb(21 17 13 / 0.72)',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              fontFamily: theme('fontFamily.mono').join(', '),
              border: '1px solid rgb(90 74 48 / 0.45)',
              borderRadius: '0.75rem',
              boxShadow: 'inset 0 0 0 1px rgb(255 176 0 / 0.06)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              border: 'none',
              padding: '0',
              fontSize: '0.92em',
            },
            strong: {
              color: theme('colors.crt.amber'),
              fontWeight: '700',
            },
            hr: {
              marginTop: '2.4em',
              marginBottom: '2.4em',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
