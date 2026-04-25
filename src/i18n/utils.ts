import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const raw = (ui[lang][key] as string) ?? (ui[defaultLang][key] as string);
    if (!vars) return raw;
    return raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
  };
}

export function localizedPath(lang: Lang, path: string = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) return '/' + clean;
  return ('/' + lang + '/' + clean).replace(/\/+/g, '/').replace(/\/$/, '/');
}

export const allLangs: Lang[] = ['zh-tw', 'zh-cn', 'en', 'ja'];
