export type IllustrationMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
};
export const media = {
  implementation: {
    src: '/images/approach/idea-to-implementation-800.webp',
    srcSet:
      '/images/approach/idea-to-implementation-480.webp 480w, /images/approach/idea-to-implementation-800.webp 800w, /images/approach/idea-to-implementation-1200.webp 1200w',
    sizes:
      '(min-width: 75rem) 32rem, (min-width: 48rem) calc((100vw - 8rem) / 2), calc(100vw - 5rem)',
    alt: 'От проекта к монтажу: чертёж инженерных систем и иллюстрация котельной с котлом, бойлером и коллекторами',
    width: 800,
    height: 450,
  },
  articles: {
    src: '/images/articles/engineering-systems-800.webp',
    srcSet:
      '/images/articles/engineering-systems-480.webp 480w, /images/articles/engineering-systems-800.webp 800w, /images/articles/engineering-systems-1200.webp 1200w',
    sizes:
      '(min-width: 75rem) 32rem, (min-width: 48rem) calc((100vw - 8rem) / 2), calc(100vw - 5rem)',
    alt: 'Иллюстрация инженерных систем дома: водоснабжение, радиатор, тёплый пол и канализация',
    width: 800,
    height: 450,
  },
  hero: {
    src: '/images/hero/engineering-boiler-room.webp',
    alt: 'Иллюстрация современной котельной с котлом, бойлером и коллекторами отопления',
    width: 1536,
    height: 1024,
  },
  heating: {
    src: '/images/services/heating/heating-overview.webp',
    srcSet:
      '/images/services/heating/heating-overview-480.webp 480w, /images/services/heating/heating-overview-800.webp 800w, /images/services/heating/heating-overview-1200.webp 1200w, /images/services/heating/heating-overview.webp 1448w',
    sizes:
      '(min-width: 75rem) 33.5rem, (min-width: 48rem) calc((100vw - 7rem) / 2), calc(100vw - 2rem)',
    alt: 'Иллюстрация отопления дома: котёл, радиаторы, коллектор и контуры тёплого пола',
    width: 1448,
    height: 1086,
  },
  waterSupply: {
    src: '/images/services/water-supply/water-supply-overview.webp',
    srcSet:
      '/images/services/water-supply/water-supply-overview-480.webp 480w, /images/services/water-supply/water-supply-overview-800.webp 800w, /images/services/water-supply/water-supply-overview-1200.webp 1200w, /images/services/water-supply/water-supply-overview.webp 1448w',
    sizes:
      '(min-width: 75rem) 33.5rem, (min-width: 48rem) calc((100vw - 7rem) / 2), calc(100vw - 2rem)',
    alt: 'Иллюстрация водоснабжения дома: счётчики, фильтры, коллекторы и подключения сантехники',
    width: 1448,
    height: 1086,
  },
} satisfies Record<string, IllustrationMedia>;
export type MediaKey = keyof typeof media;
