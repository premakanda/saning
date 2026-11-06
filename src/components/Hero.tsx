import { openContactModal } from '../lib/openContactModal';
import { contacts } from '../config/contacts';
import { services } from '../content/services';
import { Icon } from './Icon';
import styles from './Hero.module.css';
import layout from './SiteLayout.module.css';
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <h1 id="hero-title">
          Инженерные системы
          <br />
          <span>для комфорта</span>
          <br />
          вашего дома.
        </h1>
        <p className={styles.description}>{contacts.description}</p>
        <div className={styles.ctaGroup}>
          <button
            className={layout.primary}
            type="button"
            onClick={openContactModal}
          >
            Вызвать мастера <Icon name="arrow-up-right" />
          </button>
          <a className={styles.secondary} href="#services">
            Наши услуги <Icon name="arrow-up-right" />
          </a>
        </div>
        <p className={styles.region}>
          <Icon name="check" />
          {contacts.region}
        </p>
      </div>
      <nav className={styles.directions} aria-label="Четыре направления услуг">
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
      <p className={styles.caption}>3D-иллюстрация инженерной системы</p>
    </section>
  );
}
