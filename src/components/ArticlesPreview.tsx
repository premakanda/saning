import styles from '../pages/HomePage.module.css';
import { Icon } from './Icon';

const topics = [
  ['pipes', 'Какие трубы выбрать для водоснабжения в частном доме'],
  [
    'floor-heating',
    'Тёплый пол или радиаторы: что учитывать при выборе системы отопления',
  ],
  ['faucet', 'Как понять, что смеситель пора заменить'],
] as const;

export function ArticlesPreview() {
  return (
    <section
      id="articles"
      className={styles.section}
      aria-labelledby="articles-title"
    >
      <p className={styles.eyebrow}>Полезные материалы</p>
      <h2 id="articles-title">О сантехнике и отоплении — понятным языком</h2>
      <p>
        Темы будущих материалов из контент-плана. Статьи ещё не написаны и не
        опубликованы.
      </p>
      <ul className={styles.threeColumns}>
        {topics.map(([icon, title]) => (
          <li className={styles.card} key={title}>
            <Icon name={icon} large />
            <p className={styles.note}>Запланированная тема</p>
            <h3>{title}</h3>
            <p className={styles.note}>
              Обложку подберём под готовый материал.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
