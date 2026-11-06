import styles from '../pages/HomePage.module.css';
const steps = [
  ['Расскажите о задаче', 'Позвоните или откройте форму обращения.'],
  ['Уточняем детали', 'Обсуждаем объём работ, место и удобный способ связи.'],
  [
    'Согласовываем выполнение',
    'Условия, материалы, стоимость и дальнейшие действия.',
  ],
];
export function ProcessSteps() {
  return (
    <section
      id="process"
      className={styles.section}
      aria-labelledby="process-title"
    >
      <h2 id="process-title">Как заказать сантехнические работы</h2>
      <ol className={styles.steps}>
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span className={styles.number} aria-hidden="true">
              0{index + 1}
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
