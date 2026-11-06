import { useRef, useState } from 'react';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { contacts } from '../config/contacts';
import { services } from '../content/services';
import { Icon } from '../components/Icon';
import { ContactForm } from '../components/ContactForm';
import { ContactModal } from '../components/ContactModal';
import { MessengerLinks } from '../components/MessengerLinks';
import { openContactModal } from '../lib/openContactModal';
import faucet from './images/faucet-1400.webp';
import faucetSmall from './images/faucet-700.webp';
import manifold from './images/manifold-1400.webp';
import manifoldSmall from './images/manifold-700.webp';
import styles from './DesignPreview.module.css';

export function loader({ params }: LoaderFunctionArgs): {
  concept: 'minimal' | 'engineering' | 'friendly';
} {
  const concept = params.concept;
  if (
    concept !== 'minimal' &&
    concept !== 'engineering' &&
    concept !== 'friendly'
  )
    throw new Response('Not Found', { status: 404 });
  return { concept };
}

const names = {
  minimal: 'Modern Minimal',
  engineering: 'Premium Engineering',
  friendly: 'Clean & Friendly',
};
const topics = [
  {
    title: 'Какие трубы выбрать для водоснабжения в частном доме',
    image: manifold,
    alt: 'Коллектор и трубы системы отопления',
  },
  {
    title: 'Как понять, что смеситель пора заменить',
    image: faucet,
    alt: 'Монтаж смесителя на раковине',
  },
  {
    title:
      'Тёплый пол или радиаторы: что учитывать при выборе системы отопления',
    image: manifold,
    alt: 'Распределительный коллектор системы отопления',
  },
];

export function meta() {
  return [
    { title: 'Дизайн-концепции | АкваЛайнПрофи' },
    { name: 'robots', content: 'noindex, nofollow' },
  ];
}

export default function DesignPreviewPage() {
  const { concept } = useLoaderData<typeof loader>();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    concept === 'engineering' ? 'dark' : 'light',
  );
  const menu = useRef<HTMLDetailsElement>(null);
  const photo = concept === 'engineering' ? manifold : faucet;
  return (
    <div
      className={`${styles.preview} ${styles[concept]}`}
      data-preview-theme={theme}
    >
      <aside className={styles.compare} aria-label="Сравнение дизайн-концепций">
        <span>Дизайн-превью · не для публикации</span>
        <nav aria-label="Варианты дизайна">
          {Object.entries(names).map(([key, name]) => (
            <a
              key={key}
              href={`/design-preview/${key}/`}
              aria-current={concept === key ? 'page' : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
      </aside>
      <header className={styles.header}>
        <a className={styles.logo} href="/">
          {contacts.brand}
        </a>
        <nav className={styles.desktopNav} aria-label="Навигация демонстрации">
          <a href="#preview-services">Услуги</a>
          <a href="#preview-articles">Статьи</a>
          <a href="#preview-contact">Контакты</a>
        </nav>
        <div className={styles.controls}>
          <a
            className={styles.headerPhone}
            href={contacts.phone.href}
            aria-label={`Позвонить: ${contacts.phone.label}`}
          >
            <Icon name="phone" />
            <span>{contacts.phone.label}</span>
          </a>
          <div className={styles.headerMessengers}>
            <MessengerLinks compact />
          </div>
          <button
            type="button"
            className={styles.iconButton}
            aria-label={
              theme === 'dark'
                ? 'Включить светлую тему'
                : 'Включить тёмную тему'
            }
            aria-pressed={theme === 'dark'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <details
            ref={menu}
            className={styles.mobileMenu}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && menu.current) {
                menu.current.open = false;
                menu.current.querySelector('summary')?.focus();
              }
            }}
          >
            <summary aria-label="Меню">
              <Icon name="menu" />
            </summary>
            <nav
              aria-label="Мобильная навигация демонстрации"
              onClick={(event) => {
                if (event.target instanceof HTMLAnchorElement && menu.current)
                  menu.current.open = false;
              }}
            >
              <a href="#preview-services">Услуги</a>
              <a href="#preview-articles">Статьи</a>
              <a href="#preview-contact">Контакты</a>
              <MessengerLinks />
            </nav>
          </details>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="preview-title">
          <div className={styles.heroCopy}>
            <h1 id="preview-title">
              Инженерные системы
              <br />
              <span>для вашего дома.</span>
            </h1>
            <div className={styles.heroIntro}>
              <p>
                {contacts.description} {contacts.region}
              </p>
              <div className={styles.heroActions}>
                <button
                  className={styles.primary}
                  type="button"
                  onClick={openContactModal}
                >
                  Вызвать мастера <Icon name="arrow-up-right" />
                </button>
                <a className={styles.secondary} href="#preview-services">
                  Наши услуги
                </a>
              </div>
            </div>
          </div>
          <figure className={styles.heroPhoto}>
            <img
              src={photo}
              srcSet={
                concept === 'engineering'
                  ? `${manifoldSmall} 700w, ${manifold} 1400w`
                  : `${faucetSmall} 700w, ${faucet} 1400w`
              }
              sizes={
                concept === 'minimal'
                  ? '(min-width: 85rem) 1216px, 90vw'
                  : '(min-width: 52rem) 45vw, 90vw'
              }
              alt={
                concept === 'engineering'
                  ? 'Коллектор с трубами системы отопления'
                  : 'Монтаж смесителя на раковине'
              }
              width={1400}
              height={concept === 'engineering' ? 935 : 937}
              fetchPriority="high"
            />
            <figcaption>
              Иллюстрация монтажа · фото из предоставленного набора, не
              портфолио компании
            </figcaption>
          </figure>
          {concept === 'engineering' && (
            <nav
              className={styles.systemIndex}
              aria-label="Направления инженерных систем"
            >
              {services.map((service) => (
                <a key={service.id} href={`#preview-service-${service.id}`}>
                  <Icon name={service.icon} />
                  {service.title}
                </a>
              ))}
            </nav>
          )}
        </section>
        <section
          id="preview-services"
          className={styles.services}
          aria-labelledby="preview-services-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="preview-services-title">
              Четыре направления.
              <br />
              Одна точка контакта.
            </h2>
            <p>
              Для частных домов, квартир и дачных участков в Минске и Минской
              области.
            </p>
          </div>
          <ul className={styles.serviceGrid}>
            {services.map((service) => (
              <li
                id={`preview-service-${service.id}`}
                key={service.id}
                className={styles.serviceCard}
              >
                <Icon name={service.icon} large />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a href={service.path} className={styles.serviceLink}>
                  Подробнее{' '}
                  <span className={styles.srOnly}>
                    об услуге «{service.title}»
                  </span>
                  <Icon name="arrow-up-right" />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section
          className={styles.approach}
          aria-labelledby="preview-approach-title"
        >
          <div className={styles.approachImage}>
            <img
              src={concept === 'engineering' ? faucet : manifold}
              srcSet={
                concept === 'engineering'
                  ? `${faucetSmall} 700w, ${faucet} 1400w`
                  : `${manifoldSmall} 700w, ${manifold} 1400w`
              }
              sizes="(min-width: 52rem) 45vw, 90vw"
              width={1400}
              height={concept === 'engineering' ? 937 : 935}
              alt={
                concept === 'engineering'
                  ? 'Соединения смесителя при установке'
                  : 'Трубные соединения и коллектор системы отопления'
              }
              loading="lazy"
            />
            <p>Детали монтажа · иллюстративное фото</p>
          </div>
          <div className={styles.approachCopy}>
            <h2 id="preview-approach-title">
              Хороший результат
              <br />
              начинается с деталей.
            </h2>
            <p>
              Перед началом работ важно обсудить задачу, материалы и ожидаемый
              результат.
            </p>
            <ul>
              <li>
                <Icon name="wrench" />
                <div>
                  <h3>Понятный состав работ</h3>
                  <p>Какие операции нужны и какие материалы потребуются.</p>
                </div>
              </li>
              <li>
                <Icon name="valve" />
                <div>
                  <h3>Обсуждение условий</h3>
                  <p>Объём монтажа, особенности объекта и факторы стоимости.</p>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <h3>Прямой контакт</h3>
                  <p>
                    Уточнить детали можно по телефону {contacts.phone.label}.
                  </p>
                </div>
              </li>
            </ul>
            <p className={styles.disclosure}>
              Критерии выбора мастера. Без неподтверждённых гарантий, стажа и
              отзывов.
            </p>
          </div>
        </section>
        <section
          id="preview-articles"
          className={styles.articles}
          aria-labelledby="preview-articles-title"
        >
          <div className={styles.sectionHeading}>
            <h2 id="preview-articles-title">
              Разобраться.
              <br />
              Выбрать. Подготовиться.
            </h2>
            <p>
              Пример оформления будущих статей. Материалы ещё не опубликованы.
            </p>
          </div>
          <ul className={styles.articleGrid}>
            {topics.map((topic) => (
              <li key={topic.title}>
                <figure>
                  <img
                    src={topic.image}
                    srcSet={
                      topic.image === faucet
                        ? `${faucetSmall} 700w, ${faucet} 1400w`
                        : `${manifoldSmall} 700w, ${manifold} 1400w`
                    }
                    sizes="(min-width: 40rem) 30vw, 90vw"
                    alt={topic.alt}
                    width={1400}
                    height={topic.image === faucet ? 937 : 935}
                    loading="lazy"
                  />
                </figure>
                <h3>{topic.title}</h3>
                <p className={styles.disclosure}>
                  Тема в подготовке · иллюстративная обложка
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="preview-contact"
          className={styles.contact}
          aria-labelledby="preview-contact-title"
        >
          <div>
            <h2 id="preview-contact-title">
              Расскажите,
              <br />
              что нужно вашему дому.
            </h2>
            <p>
              Свяжитесь с нами — ответим на вопросы, рассчитаем предварительную
              стоимость работ и проконсультируем по выбору решения.
            </p>
            <a className={styles.largePhone} href={contacts.phone.href}>
              {contacts.phone.label}
            </a>
            <p>
              {contacts.phone.carrier} · {contacts.hours[0]}
              <br />
              {contacts.hours[1]}
            </p>
            <a href={contacts.email.href}>{contacts.email.label}</a>
          </div>
          <div className={styles.formPanel}>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <a className={styles.logo} href="/">
            {contacts.brand}
          </a>
          <p>{contacts.description}</p>
          <p>{contacts.region}</p>
          <MessengerLinks includeInstagram />
        </div>
        <nav aria-label="Навигация в футере демонстрации">
          <a href="/services/">Услуги</a>
          <a href="/articles/">Статьи</a>
          <a href="/contacts/">Контакты</a>
        </nav>
        <address>
          <a href={contacts.phone.href}>
            {contacts.phone.carrier} {contacts.phone.label}
          </a>
          <a href={contacts.email.href}>{contacts.email.label}</a>
          <span>{contacts.hours.join(' · ')}</span>
        </address>
        <p className={styles.footerBottom}>
          © {contacts.brand} · {names[concept]} · демонстрация, не
          опубликованный сайт
        </p>
      </footer>
      <ContactModal />
    </div>
  );
}
