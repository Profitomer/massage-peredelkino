# Массаж Переделкино

Информационный сайт на Astro 5 для классического и оздоровительного массажа. Главная, услуги, адрес и телефон администратора, статьи, RSS, sitemap.

## Локальная разработка
Node.js 22, `npm install`, `npm run build`, `npm run dev`.

## Cloudflare Pages
1. Cloudflare → Workers & Pages → Create application → Pages → Connect to Git.
2. Репозиторий: `Profitomer/massage-peredelkino`.
3. Build command: `npm run build`; output directory: `dist`; production branch: `main`.
4. Указать Environment variable `SITE_URL` = **реальный** URL Pages-проекта, например `https://massage-peredelkino.pages.dev`, если это имя свободно.
5. Рекомендованный `NODE_VERSION` = `22`.
6. После первого деплоя проверить главную, `/uslugi/`, `/blog/`, `/rss.xml`, `/sitemap.xml`.

Новая статья: файл `src/content/blog/<slug>.md` с frontmatter `title`, `description`, `pubDate`, `draft`. Не использовать медицинские обещания и непроверенные отзывы. Новые коммиты в `main` автоматически публикуются через Cloudflare Pages после подключения интеграции.

Публичные контакты:
- Запись: +7 (985) 979-08-79, администратор «Чистый ритм».
- Telegram: https://t.me/pro_massage_legko
- Москва, Боровское шоссе, 27, 2 этаж.

Персональные данные сайт самостоятельно не собирает: нет форм и рекламных трекеров. Длительность и стоимость пока уточняются у администратора, поскольку действующий прайс требует сверки.
