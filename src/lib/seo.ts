import type { MetaDescriptor } from 'react-router';
import { contacts } from '../config/contacts';
import type { IllustrationMedia } from '../content/media';

export function absoluteUrl(path: string) {
  return new URL(path, import.meta.env.VITE_SITE_URL).href;
}
export function pageMeta(
  title: string,
  description: string,
  path: string,
  noindex = false,
  image?: IllustrationMedia,
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
    ...(image
      ? [
          { property: 'og:image', content: absoluteUrl(image.src) },
          { property: 'og:image:alt', content: image.alt },
          { property: 'og:image:width', content: String(image.width) },
          { property: 'og:image:height', content: String(image.height) },
        ]
      : []),
    ...(noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []),
  ];
}
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
