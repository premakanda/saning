import glow from './CardGlow.module.css';
import { Icon } from './Icon';
import styles from '../pages/HomePage.module.css';
const steps = [
  [
    'Обращение',
    'Позвоните или оставьте запрос, чтобы рассказать о задаче.',
    'phone',
  ],
  [
    'Уточнение деталей',
    'Обсудим тип объекта, необходимое оборудование и предполагаемый объём монтажа.',
    'pipes',
  ],
  [
    'Согласование решения',
    'Определим последовательность работ и условия выполнения.',
    'wrench',
  ],
  [
    'Монтаж и проверка',
    'Выполним согласованные работы и проверим смонтированные соединения и узлы.',
    'check',
  ],
] as const;
export function ProcessSteps() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-title"
    >
      <h2 id="process-title">Как проходит работа</h2>
      <ol className={styles.steps}>
        {steps.map(([title, text, icon], index) => (
          <li key={title} className={glow.card}>
            <div className={styles.stepHeader}>
              <span className={`${glow.icon} ${glow.alwaysLit}`}>
                <Icon name={icon} large />
              </span>
              <span className={styles.number} aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
