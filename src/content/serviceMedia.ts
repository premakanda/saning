import type { IllustrationMedia } from './media';
function serviceImage(src: string, alt: string): IllustrationMedia {
  const base = src.replace(/\.webp$/, '');
  return {
    src,
    alt,
    width: 1448,
    height: 1086,
    srcSet:
      [480, 800, 1200]
        .map((width) => base + '-' + width + '.webp ' + width + 'w')
        .join(', ') +
      ', ' +
      src +
      ' 1448w',
    sizes:
      '(min-width: 75rem) 33.5rem, (min-width: 48rem) calc((100vw - 7rem) / 2), calc(100vw - 2rem)',
  };
}
const image0 = serviceImage(
  '/images/services/sewerage/internal-sewerage-cutaway-01.webp',
  'Разводка серых канализационных труб от душевой, унитаза, раковины и кухни, стояк',
);
const image1 = serviceImage(
  '/images/services/sewerage/external-sewerage-trench-01.webp',
  'Рыжие канализационные трубы в траншее рядом с домом и ревизионный колодец',
);
const image2 = serviceImage(
  '/images/services/sewerage/external-sewerage-septic-02.webp',
  'Рыжие трубы и ревизионный колодец, подключение к накопительной ёмкости',
);
const image3 = serviceImage(
  '/images/services/sanitary-installation/sanitary-bathroom-installation-01.webp',
  'Душевая, умывальник, унитаз и показанные подключения',
);
const image4 = serviceImage(
  '/images/services/sanitary-installation/sanitary-fixtures-montage-02.webp',
  'Ванна, душевая, кухонная мойка, унитаз, раковины, смесители',
);
const image5 = serviceImage(
  '/images/services/sanitary-installation/mixer-installation-detail-03.webp',
  'Хромированный смеситель с подводкой горячей и холодной воды',
);
const image6 = serviceImage(
  '/images/services/sanitary-installation/shower-cabin-installation-detail-04.webp',
  'Стеклянная душевая кабина, смеситель, поддон, детали подключений',
);
const image7 = serviceImage(
  '/images/services/sanitary-installation/fixtures-and-shower-set-05.webp',
  'Смеситель, встроенный душевой узел, душевая лейка, подключения',
);
type ServiceIllustrations = {
  hero: IllustrationMedia;
  sections: Record<string, readonly IllustrationMedia[]>;
};
export const serviceMedia: Partial<Record<string, ServiceIllustrations>> = {
  sewerage: {
    hero: image0,
    sections: { 'Наружная канализация': [image1, image2] },
  },
  'sanitary-installation': {
    hero: image3,
    sections: {
      'Раковины и мойки': [image4],
      'Ванны и душевые': [image6],
      Смесители: [image5, image7],
    },
  },
};
