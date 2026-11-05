import { services } from '../content/services';
import { Icon } from './Icon';
import styles from './ServicesGrid.module.css';

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={styles.section}
    >
      <h2 id="services-heading">Основные направления услуг</h2>
      <ul className={styles.grid}>
        {services.map((service) => (
          <li
            id={`service-${service.id}`}
            key={service.id}
            className={styles.card}
          >
            <Icon name={service.icon} large />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.path}>
              Подробнее<span className={styles.srOnly}>: {service.title}</span>{' '}
              <Icon name="arrow-up-right" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
