export type ContactConfig = {
  brand: string;
  description: string;
  phone: { label: string; href: string; carrier: string };
  email: { label: string; href: string };
  region: string;
  hours: readonly string[];
  copyrightStartYear: number;
};

export const contacts: ContactConfig = {
  brand: 'АкваЛайнПрофи',
  description:
    'Монтаж и проектирование систем отопления, водоснабжения и канализации.',
  phone: {
    label: '+375 29 199-93-01',
    href: 'tel:+375291999301',
    carrier: 'A1',
  },
  email: { label: '1999301py@gmail.com', href: 'mailto:1999301py@gmail.com' },
  region: 'Работаем по Минску и Минской области.',
  hours: ['Пн–Пт: 9:00–18:00', 'Сб–Вс: по договорённости'],
  copyrightStartYear: 2027,
};

export const navigation = [
  { label: 'Услуги', href: '/services/' },
  { label: 'Статьи', href: '/articles/' },
  { label: 'Контакты', href: '/contacts/' },
];
