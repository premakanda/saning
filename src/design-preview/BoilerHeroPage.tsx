import { useRef, useSyncExternalStore } from 'react';
import { contacts, navigation } from '../config/contacts';
import { services } from '../content/services';
import { Icon } from '../components/Icon';
import { MessengerLinks } from '../components/MessengerLinks';
import { ContactModal } from '../components/ContactModal';
import { openContactModal } from '../lib/openContactModal';
import {
  boilerThemeBootstrap,
  getBoilerTheme,
  subscribeBoilerTheme,
  toggleBoilerTheme,
} from './boilerTheme';
import scene from './images/domestic-boiler-scene-v2.png';
import styles from './BoilerHero.module.css';

export function meta() {
  return [
    { title: `Первый экран · Premium Engineering | ${contacts.brand}` },
    { name: 'robots', content: 'noindex, nofollow' },
  ];
}

export default function BoilerHeroPage() {
  const theme = useSyncExternalStore(
    subscribeBoilerTheme,
    getBoilerTheme,
    () => 'dark',
  );
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <div
      className={styles.page}
      data-boiler-theme={theme}
      suppressHydrationWarning
    >
      <script dangerouslySetInnerHTML={{ __html: boilerThemeBootstrap }} />
      <div className={styles.scene} aria-hidden="true">
        <img
          src={scene}
          width={1672}
          height={941}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <header className={styles.header}>
        <a
          className={styles.brand}
          href="/"
          aria-label={`${contacts.brand} — главная`}
        >
          <svg
            className={styles.brandMark}
            viewBox="0 0 36 44"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M18 2C14 9 4 19 4 27a14 14 0 0 0 28 0C32 19 22 9 18 2Z"
              fill="currentColor"
            />
            <path
              d="M12 29v-7a6 6 0 0 1 12 0v7M12 25h12"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span>
            Аква<span className={styles.brandAccent}>Лайн</span>Профи
          </span>
        </a>
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a
            href={contacts.phone.href}
            className={styles.phone}
            aria-label={`Позвонить: ${contacts.phone.label}`}
          >
            <Icon name="phone" />
            <span>
              {contacts.phone.label}
              <small>{contacts.phone.carrier} · Минск и область</small>
            </span>
          </a>
          <div className={styles.messengers}>
            <MessengerLinks compact />
          </div>
          <button
            className={styles.iconButton}
            type="button"
            onClick={toggleBoilerTheme}
            aria-label={
              theme === 'dark'
                ? 'Включить светлую тему'
                : 'Включить тёмную тему'
            }
            aria-pressed={theme === 'dark'}
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
            <summary aria-label="Открыть меню">
              <Icon name="menu" />
            </summary>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={contacts.phone.href}>{contacts.phone.label}</a>
              <MessengerLinks />
            </nav>
          </details>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <section className={styles.hero} aria-labelledby="boiler-title">
          <div className={styles.copy}>
            <h1 id="boiler-title">
              Инженерные системы
              <br />
              <span>для комфорта</span>
              <br />
              вашего дома.
            </h1>
            <p className={styles.description}>{contacts.description}</p>
            <div className={styles.ctaGroup}>
              <button
                className={styles.primary}
                type="button"
                onClick={openContactModal}
              >
                Вызвать мастера <Icon name="arrow-up-right" />
              </button>
              <a className={styles.secondary} href="/services/">
                Наши услуги <Icon name="arrow-up-right" />
              </a>
            </div>
            <p className={styles.region}>
              <Icon name="check" />
              {contacts.region}
            </p>
          </div>
          <nav
            className={styles.directions}
            aria-label="Четыре направления услуг"
          >
            {services.map((service) => (
              <a href={service.path} key={service.id}>
                <span className={styles.directionIcon}>
                  <Icon name={service.icon} />
                </span>
                <span>{service.title}</span>
                <Icon name="arrow-up-right" />
              </a>
            ))}
          </nav>
        </section>
      </main>
      <p className={styles.previewNote}>
        Превью первого экрана · 3D-иллюстрация, не фотография объекта. Знак
        капли — эскиз. Основной сайт и остальные блоки не изменены.
      </p>
      <ContactModal />
    </div>
  );
}
