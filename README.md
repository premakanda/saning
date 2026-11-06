# АкваЛайнПрофи

React + TypeScript strict + Vite + React Router prerender + CSS Modules.
Утверждённый источник: `AQUALINEPROFI_SITE_STRUCTURE.md`; общие правила — `AGENTS.md`.

## Локальный просмотр

Node.js 22.13+ (ветка 22) или 24+, npm. В PowerShell используйте `npm.cmd`,
если выполнение npm.ps1 запрещено политикой системы.

```sh
npm ci
npm run dev
```

Открыть http://localhost:5173. Отправка заявок не подключена.

```sh
npm run check
npm run build:local
npm run preview
```

Preview: http://localhost:4173. Локальные страницы закрыты от индексации;
canonical и BreadcrumbList используют документированный origin http://localhost:5173.
Это адрес локальной разработки, не будущий домен компании.

## Страницы

- `/` — главная в утверждённом инженерном стиле; полный контент доступен и в
  обычной статической сборке. Локальный режим остаётся noindex.
- `/services/` — обзор четырёх подтверждённых направлений.
- `/services/heating/` — монтаж систем отопления.
- `/services/water-supply/` — монтаж систем водоснабжения.
- `/services/sewerage/` — монтаж систем канализации.
- `/services/sanitary-installation/` — установка сантехнических приборов.
- `/contacts/` — контакты и режим работы.
- `/articles/` — временная страница раздела из утверждённой навигации, noindex,
  вне sitemap до появления настоящих статей. YAML-пайплайн ещё не реализован.
- Неизвестные URL — `404.html`, HTTP 404 на статическом хостинге.

Каждая страница получает собственный статический HTML. Подуслуги перечислены
разделами; дополнительных страниц под смесители или неподтверждённых услуг нет.
Публичный формат ссылок — завершающий `/`. Prerender использует пути без конечного
слеша для совместимости data-загрузчиков React Router 7; HTML сохраняется как
`<path>/index.html`. Проверку редиректов slash/host на Cloudflare проводим при запуске.

## Структура

Утверждённая визуальная система: тёмно-синий фон, голубые акценты, локальный
Manrope, светлая альтернатива и стеклянные панели с мягкими тенями. Общие токены
находятся в `src/styles/global.css`, принятая иллюстрация — в `src/assets/images/`.
Тема по умолчанию тёмная; выбор сохраняется в `site-theme`. Черновые проекты
и несуществующие статьи на главной не показываются; портфолио добавляется после
получения реальных материалов.

- `src/app/` — общий документ, реестр маршрутов и серверный рендер для сборки.
- `src/root.tsx`, `src/routes.ts`, `src/entry.server.tsx` — тонкие точки входа
  React Router: корень приложения `src` позволяет типизировать страницы в `src/pages`.
- `src/config/contacts.ts` — бренд, телефон, email, регион, часы, навигация.
- `src/content/services.ts` — единые данные карточек, страниц и путей prerender.
- `src/components/SiteHeader.tsx`, `SiteFooter.tsx` — общие шапка и футер.
- `src/components/Breadcrumbs.tsx` — видимая цепочка и соответствующий JSON-LD.
- `src/lib/seo.ts` — title/description, canonical, Open Graph, безопасный JSON-LD.
- `scripts/` — сборка, финализация, preview и тесты.
- `dist/client/` — статический результат; серверный bundle удаляется автоматически.

Телефон и email действуют через `tel:` и `mailto:`. SVG мессенджеров показаны
как неинтерактивные отметки «ссылки уточняются»: адреса Telegram/Viber/WhatsApp
и Instagram не выдумываются. SVG из Simple Icons, CC0, лицензия в `src/assets/social/`.
Текстовый логотип не содержит несогласованной эмблемы.
`copyrightStartYear: 2027` сохранён как ожидающее согласования значение; будущий
год в копирайте не показывается. Перечень сантехнических приборов ещё уточняется.

Тема определяется до CSS, следует системной настройке до явного выбора,
сохраняется в `localStorage` (`site-theme`); без JS остаётся светлая тема.
Формы только проверяют поля, ничего не отправляют и не сохраняют.

## Production и Cloudflare Pages

Домен ещё не предоставлен. `npm run build` требует `SITE_URL` — реальный HTTPS
origin без пути. Новых библиотек нет. Для локальной работы — `build:local`.

Cloudflare Pages: GitHub integration, production branch `main`, build command
`npm run build`, output directory `dist/client`, переменная `SITE_URL`.
Указать один production origin также в preview, чтобы preview-хосты не попадали
в canonical. `CF_PAGES_BRANCH` отличает preview от production: preview получает
noindex в HTML и X-Robots-Tag для всех ответов, production — без общего noindex.
Сборка создаёт sitemap из canonical реальных HTML, исключая страницы с noindex,
и robots.txt с абсолютной ссылкой на sitemap. lastmod не выдумывается.
Production-страницы контактов и услуг готовы для этой политики; черновая главная,
пустой раздел статей и 404 остаются noindex.

Перед публикацией: домен/HTTPS, единый host, редиректы, HTTP 404 на Cloudflare,
проверка всех контактов и согласование политики данных. Не подключать доставку
форм до отдельного решения. Workers/Pages Functions и deploy workflow не нужны.

`minimatch` переопределён на исправленную ветку 11 из-за GHSA-g3hv-75wg-m249;
пересмотреть override после исправления upstream ESLint/TypeScript ESLint.

## Временные дизайн-концепции

После `npm run dev` доступны три изолированных демонстрации:

- http://localhost:5173/design-preview/minimal/ — Modern Minimal.
- http://localhost:5173/design-preview/engineering/ — Premium Engineering.
- http://localhost:5173/design-preview/friendly/ — Clean & Friendly.

Сверху можно переключать варианты, кнопка солнца/луны меняет только тему
демонстрации. Все три содержат общий подтверждённый перечень услуг и контакты,
иллюстративные фотографии, темы будущих статей и форму без отправки.
Макеты не заменяют основной сайт и не считаются утверждённым дизайном.
Превью доступны только в dev и `build:local`, имеют `noindex, nofollow`;
production-конфигурация исключает их маршруты и ресурсы. В sitemap не входят.
Система каждого варианта описана в `.impeccable/design-previews/DESIGN.md`.
