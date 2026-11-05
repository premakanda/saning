import { PhotoSlot } from './PhotoSlot';
import { openContactModal } from '../lib/openContactModal';
import styles from '../pages/HomePage.module.css';
import layout from './SiteLayout.module.css';
import { contacts } from '../config/contacts';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div>
        <p className={styles.eyebrow}>
          Для квартиры и частного дома · черновик
        </p>
        <h1 id="hero-title">
          Сантехнические работы.
          <br />
          <span>От установки до инженерных систем.</span>
        </h1>
        <p className={styles.lead}>{contacts.description}</p>
        <div className={styles.actions}>
          <button
            className={layout.primary}
            type="button"
            onClick={openContactModal}
          >
            Вызвать мастера
          </button>
          <a href="#services">Посмотреть направления ↓</a>
        </div>
        <p className={styles.note}>
          {contacts.region}{' '}
          <a href={contacts.phone.href}>
            {contacts.phone.carrier} {contacts.phone.label}
          </a>
        </p>
      </div>
      <PhotoSlot label="Фотография процесса монтажа" priority />
    </section>
  );
}
