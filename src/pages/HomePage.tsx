import styles from './HomePage.module.css';
import { ServicesGrid } from '../components/ServicesGrid';
import { Hero } from '../components/Hero';
import { ProcessSteps } from '../components/ProcessSteps';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { contacts } from '../config/contacts';
import { pageMeta } from '../lib/seo';
export function meta() {
  return pageMeta('Сантехнические работы', contacts.description, '/');
}
export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Hero />
      <ServicesGrid />
      <section
        className={`${styles.section} ${styles.audience}`}
        aria-labelledby="audience-title"
      >
        <h2 id="audience-title">
          Для квартиры
          <br />и частного дома
        </h2>
        <div className={styles.audienceList}>
          <div>
            <Icon name="faucet" large />
            <div>
              <h3>Для квартиры</h3>
              <p>
                Замена сантехники, подключение оборудования, работы с
                водоснабжением и отоплением — по согласованному перечню.
              </p>
            </div>
          </div>
          <div>
            <Icon name="heating" large />
            <div>
              <h3>Для частного дома</h3>
              <p>
                Инженерные системы, разводка труб, оборудование котельной и
                монтаж сантехники — в пределах подтверждённой специализации.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={styles.section}
        aria-labelledby="trust-title"
      >
        <h2 id="trust-title">Что важно при выборе мастера</h2>
        <p className={styles.lead}>
          Перед началом работ важно обсудить задачу, материалы и ожидаемый
          результат.
        </p>
        <ul className={styles.principles}>
          <li>
            <Icon name="wrench" large />
            <h3>Понятный состав работ</h3>
            <p>
              Какие операции нужны, что входит в задачу и какие материалы
              потребуются.
            </p>
          </li>
          <li>
            <Icon name="valve" large />
            <h3>Обсуждение условий</h3>
            <p>
              Объём монтажа, особенности объекта и факторы, влияющие на
              стоимость.
            </p>
          </li>
          <li>
            <Icon name="phone" large />
            <h3>Удобный способ связи</h3>
            <p>Возможность описать задачу и уточнить детали до начала работ.</p>
          </li>
        </ul>
      </section>
      <ProcessSteps />
      <section
        id="cost"
        className={`${styles.section} ${styles.cost}`}
        aria-labelledby="cost-title"
      >
        <div>
          <Icon name="pipes" large />
          <h2 id="cost-title">От чего зависит стоимость работ</h2>
        </div>
        <div>
          <p>
            Цена зависит от вида работ, состояния существующих коммуникаций,
            объёма монтажа, доступности оборудования и необходимых материалов.
          </p>
          <p>
            Опишите задачу — уточним детали и обсудим стоимость до начала работ.
          </p>
          <a href={contacts.phone.href}>
            Обсудить по телефону <Icon name="arrow-up-right" />
          </a>
        </div>
      </section>
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
              <a href="/services/">«Услуги»</a>. Конкретный состав работ
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
        aria-labelledby="contact-title"
      >
        <div>
          <h2 id="contact-title">
            Нужна помощь
            <br />с сантехникой?
          </h2>
          <p className={styles.lead}>
            Расскажите об объекте и оборудовании по телефону. Состав работ и
            условия уточняются индивидуально.
          </p>
          <a className={styles.contactPhone} href={contacts.phone.href}>
            <Icon name="phone" />
            {contacts.phone.label}
          </a>
          <p className={styles.note}>{contacts.region}</p>
        </div>
        <div className={styles.formPanel}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
