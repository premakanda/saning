import type { MetaDescriptor } from 'react-router';
import { contacts } from '../config/contacts';

export function absoluteUrl(path: string) {
  return new URL(path, import.meta.env.VITE_SITE_URL).href;
}
export function pageMeta(
  title: string,
  description: string,
  path: string,
  noindex = false,
): MetaDescriptor[] {
  const canonical = absoluteUrl(path);
  return [
    { title: `${title} | ${contacts.brand}` },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:title', content: `${title} | ${contacts.brand}` },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: 'website' },
    ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
  ];
}
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
