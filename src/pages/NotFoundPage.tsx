export function meta() {
  return [
    { title: 'Страница не найдена' },
    { name: 'robots', content: 'noindex, follow' },
  ];
}

export default function NotFoundPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Страница не найдена</h1>
      <a href="/">На главную</a>
    </main>
  );
}
