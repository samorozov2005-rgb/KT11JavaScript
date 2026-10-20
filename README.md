# ThriveTalk Landing Page

Учебный React-проект для контрольной точки по дисциплине «Фреймворки JavaScript». Страница воспроизводит полный desktop-макет ThriveTalk и адаптируется для laptop, tablet и mobile.

## Исходный макет

[ThriveTalk Landing Page в Figma](https://www.figma.com/file/cNhWYz31BR98iJSqEfHDM0/ThriveTalk-Landing-Page-(Copy)-(Copy)?type=design&node-id=0%3A1&mode=design)

Прямой просмотр Figma в среде разработки зависал на экране загрузки. Поэтому параметры страницы были дополнительно сверены с публичной реализацией того же макета: тексты, палитра, размеры секций и исходные изображения совпадают с дизайном ThriveTalk. Реализация не выдаётся за измерение каждого слоя Figma до пикселя; точная проверка внутренних Figma-отступов была недоступна.

## Технологии

- React 18 и функциональные компоненты;
- JavaScript и JSX;
- Vite;
- CSS3 и CSS Modules;
- Flexbox и CSS Grid;
- npm.

В проекте нет TypeScript, Tailwind CSS, Bootstrap, UI-библиотек и CSS-in-JS.

## Архитектура

`src/App.jsx` — корневой компонент. Он собирает страницу из секций в порядке макета:

```text
App
├── Header
│   └── Button
├── Hero
│   └── Button × 2
├── WhyThrive
├── About
├── Services
│   └── ServiceCard × 4
├── Programs
│   └── ProgramCard × 6
├── Benefits
│   └── BenefitCard × 6
├── StorySection
│   └── Button
├── ContactSection
│   └── Button
└── Footer
```

Графическая версия находится в корне проекта: [`component-tree.png`](./component-tree.png). Это настоящий PNG размером 1600 × 1000 px.

## Переиспользуемые компоненты и props

- `Button` используется в `Header`, `Hero`, `StorySection` и `ContactSection`. Через props передаются `href`, `variant`, `ariaLabel` и `children`.
- `ServiceCard` получает `title` и `color`.
- `ProgramCard` получает `title`, `color` или `image`.
- `BenefitCard` получает `title` и `text`.

Пример из `Services.jsx`:

```jsx
{services.map((service) => (
  <ServiceCard
    key={service.id}
    title={service.title}
    color={service.color}
  />
))}
```

`.map()` превращает массив данных в набор компонентов. `key={service.id}` даёт React стабильный уникальный идентификатор каждого элемента.

## Стили

Глобальный reset, CSS-переменные, базовая типографика и общие правила находятся в `src/App.css`. У каждого компонента есть собственный `ComponentName.module.css`; классы CSS Module локальны и не конфликтуют с классами других компонентов.

CSS Grid используется в сетках услуг, программ, преимуществ, контактов и в двухколоночных секциях. Flexbox используется в навигации, кнопках, мобильном расположении контента и внутренних контейнерах. Media queries меняют сетки на 1024, 900, 720, 650 и 600 px. На ширине 375 px страница не создаёт горизонтального переполнения.

## Структура проекта

```text
.
├── component-tree.png       # схема компонентов
├── index.html               # HTML-точка входа Vite
├── package.json             # зависимости и npm scripts
├── package-lock.json        # зафиксированные версии зависимостей
├── vite.config.js           # конфигурация Vite и React plugin
├── public/assets/           # изображения макета
└── src/
    ├── main.jsx             # подключение React к #root
    ├── App.jsx              # композиция страницы
    ├── App.css              # глобальные стили
    └── components/          # компоненты и их CSS Modules
```

`DEFENSE.md` содержит разбор проекта и подсказки для устной защиты.

## Установка и запуск

Требуется Node.js 18+ и npm.

```bash
npm install
npm run dev
```

Vite покажет локальный адрес, обычно `http://localhost:5173`.

## Production-сборка

```bash
npm run build
```

Готовые файлы появятся в `dist/`. Для локальной проверки production-сборки:

```bash
npm run preview
```

## Реализованное поведение

- навигация переводит к секциям по якорям;
- CTA ведут к информации, услугам, контакту или открывают почтовый клиент;
- мобильное меню открывается кнопкой и обновляет `aria-expanded`;
- все содержательные изображения имеют `alt`;
- интерактивные элементы имеют видимое состояние фокуса.
