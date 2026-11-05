import styles from './HomePage.module.css';
import { PhotoSlot } from '../components/PhotoSlot';
import { ServicesGrid } from '../components/ServicesGrid';
import { Hero } from '../components/Hero';
import { ProcessSteps } from '../components/ProcessSteps';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { contacts } from '../config/contacts';
import { pageMeta } from '../lib/seo';

export function meta() {
  return pageMeta('Сантехнические работы', contacts.description, '/', true);
}

export default function HomePage() {
  const preview =
    import.meta.env.DEV || import.meta.env.VITE_LOCAL_PROTOTYPE === 'true';
  if (!preview)
    return (
      <main id="main-content" tabIndex={-1} className={styles.page}>
        <h1>Сайт в подготовке</h1>
      </main>
    );
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Hero />
      <ServicesGrid />
      <section className={styles.section} aria-labelledby="audience-title">
        <p className={styles.eyebrow}>Разные задачи — продуманный подход</p>
        <h2 id="audience-title">Для квартиры и частного дома</h2>
        <div className={styles.twoColumns}>
          <div className={styles.card}>
            <Icon name="faucet" large />
            <h3>Для квартиры</h3>
            <p>
              Замена сантехники, подключение оборудования, работы с
              водоснабжением и отоплением — по согласованному перечню.
            </p>
          </div>
          <div className={styles.card}>
            <Icon name="heating" large />
            <h3>Для частного дома</h3>
            <p>
              Инженерные системы, разводка труб, оборудование котельной и монтаж
              сантехники — в пределах подтверждённой специализации.
            </p>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={styles.section}
        aria-labelledby="trust-title"
      >
        <p className={styles.eyebrow}>Внимание к деталям</p>
        <h2 id="trust-title">Что важно при выборе мастера</h2>
        <p className={styles.lead}>
          Перед началом работ важно обсудить задачу, материалы и ожидаемый
          результат.
        </p>
        <ul className={styles.threeColumns}>
          <li className={styles.card}>
            <Icon name="wrench" large />
            <h3>Понятный состав работ</h3>
            <p>
              Какие операции нужны, что входит в задачу и какие материалы
              потребуются.
            </p>
          </li>
          <li className={styles.card}>
            <Icon name="valve" large />
            <h3>Обсуждение условий</h3>
            <p>
              Объём монтажа, особенности объекта и факторы, влияющие на
              стоимость.
            </p>
          </li>
          <li className={styles.card}>
            <Icon name="phone" large />
            <h3>Удобный способ связи</h3>
            <p>Возможность описать задачу и уточнить детали до начала работ.</p>
          </li>
        </ul>
        <p className={styles.note}>
          Это критерии выбора, а не подтверждённые преимущества компании. Данные
          о мастере, документах и гарантии ещё не предоставлены.
        </p>
      </section>
      <section
        id="works"
        className={styles.section}
        aria-labelledby="works-title"
      >
        <p className={styles.eyebrow}>Будущее портфолио</p>
        <h2 id="works-title">Примеры выполненных работ</h2>
        <div className={styles.twoColumns}>
          <PhotoSlot label="Реальные фотографии объектов" />
          <div className={styles.card}>
            <h3>Задача. Процесс. Результат.</h3>
            <p>
              Здесь будут фотографии и описания реальных объектов после
              подтверждения и получения разрешения на публикацию.
            </p>
            <p className={styles.note}>
              Пока это только место блока в локальном макете. Стоковые снимки не
              выдаём за собственные работы.
            </p>
          </div>
        </div>
      </section>
      <ProcessSteps />
      <section
        id="cost"
        className={`${styles.section} ${styles.cost}`}
        aria-labelledby="cost-title"
      >
        <div>
          <p className={styles.eyebrow}>Без вымышленных расценок</p>
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
          <p className={styles.note}>
            Черновой текст. Актуальный прайс и условия расчёта пока не
            предоставлены.
          </p>
        </div>
      </section>
      <ArticlesPreview />
      <section id="faq" className={styles.section} aria-labelledby="faq-title">
        <p className={styles.eyebrow}>Вопросы перед обращением</p>
        <h2 id="faq-title">Частые вопросы</h2>
        <div className={styles.faq}>
          <details>
            <summary>Какие сантехнические работы можно заказать?</summary>
            <p>
              Четыре подтверждённых направления перечислены на странице
              «Услуги». Конкретный состав работ обсуждается отдельно.
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
            <summary>Можно ли обсудить задачу до начала работ?</summary>
            <p>
              Такой этап предусмотрен в черновом процессе. Способ связи и
              условия будут подтверждены перед запуском.
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
          <p className={styles.eyebrow}>Обсудим вашу задачу</p>
          <h2 id="contact-title">Нужна помощь с сантехникой?</h2>
          <p className={styles.lead}>
            Опишите задачу и оставьте контактный номер. Способ передачи
            обращения подключим после согласования.
          </p>
          <div className={styles.contactNote}>
            <Icon name="phone" />
            <p>
              <a href={contacts.phone.href}>
                {contacts.phone.carrier} {contacts.phone.label}
              </a>
              <br />
              {contacts.region}
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
