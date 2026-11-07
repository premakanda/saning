import { Link } from 'react-router';
import styles from './HomePage.module.css';
import glow from '../components/CardGlow.module.css';
import { ServicesGrid } from '../components/ServicesGrid';
import { Hero } from '../components/Hero';
import { ProcessSteps } from '../components/ProcessSteps';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { ContactForm } from '../components/ContactForm';
import { Illustration } from '../components/Illustration';
import { Icon } from '../components/Icon';
import { contacts } from '../config/contacts';
import { media } from '../content/media';
import { pageMeta } from '../lib/seo';
export function meta() {
  return pageMeta(
    'Монтаж отопления, водоснабжения и канализации в Минске',
    'Проектирование и монтаж систем отопления, водоснабжения и канализации в Минске и Минской области. Котельные, радиаторы, тёплый пол и сантехническое оборудование.',
    '/',
    false,
    media.hero,
  );
}
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Hero />
      <ServicesGrid />
      <section
        id="about"
        className={styles.section}
        aria-labelledby="approach-title"
      >
        <h2 id="approach-title">
          Инженерные системы под задачи вашего объекта
        </h2>
        <p className={styles.lead}>
          Каждый дом и квартира отличаются планировкой, расположением
          оборудования и точками подключения. Поэтому перед монтажом важно
          продумать схему трубопроводов, доступ к запорной арматуре, размещение
          коллекторов и возможность дальнейшего обслуживания системы.
        </p>
        <ul className={styles.principles}>
          <li className={glow.card}>
            <span className={`${glow.icon} ${glow.alwaysLit}`}>
              <Icon name="pipes" large />
            </span>
            <h3>Продуманная компоновка</h3>
            <p>
              Размещение оборудования и узлов с учётом доступа для эксплуатации
              и обслуживания.
            </p>
          </li>
          <li className={glow.card}>
            <span className={`${glow.icon} ${glow.alwaysLit}`}>
              <Icon name="wrench" large />
            </span>
            <h3>Понятный состав работ</h3>
            <p>
              Обсуждаем, какие материалы, подключения и этапы нужны именно на
              вашем объекте.
            </p>
          </li>
          <li className={glow.card}>
            <span className={`${glow.icon} ${glow.alwaysLit}`}>
              <Icon name="check" large />
            </span>
            <h3>От монтажа до проверки</h3>
            <p>
              Предусматриваем контроль герметичности и работоспособности
              смонтированных участков.
            </p>
          </li>
        </ul>
      </section>
      <section
        className={`${styles.section} ${styles.detail} ${styles.articleBand} ${glow.card} ${glow.alwaysLit}`}
        aria-labelledby="detail-title"
      >
        <Illustration image={media.implementation} showCaption={false} />
        <div>
          <h2 id="detail-title">От идеи до реализации</h2>
          <p className={styles.lead}>
            Монтаж отопления и водоснабжения включает не только трубы и
            оборудование. Важны также коллекторы, насосные группы, фильтры,
            клапаны, правильная организация контуров и доступность узлов для
            обслуживания.
          </p>
          <Link className={styles.detailLink} to="/services/">
            Перейти к услугам <Icon name="arrow-up-right" />
          </Link>
        </div>
      </section>
      <ProcessSteps />
      <ArticlesPreview />
      <section
        id="faq"
        className={`${styles.section} ${styles.faqSection}`}
        aria-labelledby="faq-title"
      >
        <h2 id="faq-title">Частые вопросы</h2>
        <div className={styles.faq}>
          <details>
            <summary>Какие сантехнические работы можно заказать?</summary>
            <p>
              Четыре подтверждённых направления перечислены на странице{' '}
              <Link to="/services/">«Услуги»</Link>. Конкретный состав работ
              обсуждается отдельно.
            </p>
          </details>
          <details>
            <summary>От чего зависит стоимость?</summary>
            <p>
              От вида и объёма работ, состояния коммуникаций, доступности
              оборудования и необходимых материалов.
            </p>
          </details>
          <details>
            <summary>В каких районах вы работаете?</summary>
            <p>{contacts.region}</p>
          </details>
        </div>
      </section>
      <section
        id="contacts"
        className={`${styles.section} ${styles.contact}`}
        aria-labelledby="home-contact-title"
      >
        <div className={styles.formPanel}>
          <h2 id="home-contact-title">Свяжитесь с нами</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
