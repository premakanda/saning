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
      <p className={styles.eyebrow}>Понятный порядок</p>
      <h2 id="process-title">Как заказать сантехнические работы</h2>
      <p className={styles.note}>
        Предлагаемый процесс — на согласовании. Звонок и отправка заявки пока
        недоступны.
      </p>
      <ol className={styles.threeColumns}>
        {steps.map(([title, text], index) => (
          <li className={styles.card} key={title}>
            <span className={styles.number}>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
