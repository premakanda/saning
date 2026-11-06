import { Icon } from '../components/Icon';
import styles from './InnerPage.module.css';
export function meta() {
  return [
    { title: 'Страница не найдена' },
    { name: 'robots', content: 'noindex, follow' },
  ];
}
export default function NotFoundPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <h1>Страница не найдена</h1>
      <div className={styles.empty}>
        <p>
          Вернитесь на главную страницу, чтобы выбрать нужное направление услуг.
        </p>
        <a href="/">
          На главную <Icon name="arrow-up-right" />
        </a>
      </div>
    </main>
  );
}
