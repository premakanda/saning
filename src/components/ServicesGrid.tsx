import { Link } from 'react-router';
import { services } from '../content/services';
import { Icon } from './Icon';
import styles from './ServicesGrid.module.css';
import glow from './CardGlow.module.css';

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={styles.section}
    >
      <h2 id="services-heading">Наши услуги</h2>
      <p className={styles.lead}>
        Монтаж инженерных систем — от прокладки труб до подключения
        оборудования. Выберите направление и узнайте подробнее о составе работ.
      </p>
      <ul className={styles.grid}>
        {services.map((service) => (
          <li id={`service-${service.id}`} key={service.id}>
            <Link className={`${styles.card} ${glow.card}`} to={service.path}>
              <span className={`${glow.icon} ${glow.alwaysLit}`}>
                <Icon name={service.icon} large />
              </span>
              <h3>{service.title}</h3>
              <p className={styles.description}>
                {service.description.replace(/[.…]+$/u, '')}…
              </p>
              <span className={styles.details}>
                Подробнее
                <Icon name="arrow-up-right" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
