import type { IconName } from '../components/Icon';
export type Service = {
  id: string;
  path: string;
  title: string;
  description: string;
  icon: IconName;
  sections: readonly string[];
  note?: string;
};
export const services: Service[] = [
  {
    id: 'heating',
    path: '/services/heating/',
    title: 'Монтаж систем отопления',
    description:
      'Газовые и электрические котлы, радиаторы отопления и водяной тёплый пол.',
    icon: 'heating',
    sections: [
      'Монтаж газовых и электрических котлов',
      'Монтаж радиаторов отопления',
      'Монтаж водяного тёплого пола',
    ],
  },
  {
    id: 'water-supply',
    path: '/services/water-supply/',
    title: 'Монтаж систем водоснабжения',
    description: 'Установка и замена смесителей, установка счётчиков воды.',
    icon: 'pipes',
    sections: [
      'Установка и замена смесителей в ванной комнате',
      'Установка и замена смесителей на кухне',
      'Монтаж смесителей в других помещениях',
      'Установка счётчиков воды',
    ],
    note: 'Условия поверки, пломбировки и допуска счётчиков к учёту не заявляются. Эти вопросы нужно уточнять отдельно.',
  },
  {
    id: 'sewerage',
    path: '/services/sewerage/',
    title: 'Монтаж систем канализации',
    description: 'Прокладка и монтаж канализационных труб.',
    icon: 'drain',
    sections: ['Прокладка и монтаж канализационных труб'],
  },
  {
    id: 'sanitary-installation',
    path: '/services/sanitary-installation/',
    title: 'Установка сантехнических приборов',
    description: 'Установка сантехнических приборов по согласованному перечню.',
    icon: 'faucet',
    sections: [],
    note: 'Конкретный перечень приборов уточняется. Позвоните, чтобы обсудить ваше оборудование и состав работ.',
  },
];
export const servicesIntro =
  'Выполняем комплекс работ по проектированию и монтажу систем отопления, водоснабжения и канализации в частных домах, квартирах и на дачных участках в Минске и Минской области.';
