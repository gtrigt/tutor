# SEO Оптимизация сайта Marat English

## Что уже реализовано

### 1. Мета-теги и HTML структура
- ✅ Title и meta description для главной страницы
- ✅ Meta keywords
- ✅ Open Graph теги для социальных сетей
- ✅ Twitter Card теги
- ✅ Canonical URL
- ✅ Географические мета-теги
- ✅ Мобильная оптимизация

### 2. Структурированные данные (Schema.org)
- ✅ EducationalService разметка
- ✅ Person разметка для преподавателя
- ✅ Offer разметка для услуг
- ✅ AggregateRating для отзывов
- ✅ FAQ разметка
- ✅ Reviews разметка

### 3. Техническая SEO
- ✅ Robots.txt файл
- ✅ XML Sitemap
- ✅ PWA Manifest
- ✅ .htaccess для Apache
- ✅ GZIP сжатие
- ✅ Кеширование браузера
- ✅ Безопасные заголовки

### 4. Производительность
- ✅ Lazy loading изображений
- ✅ Оптимизация изображений
- ✅ Code splitting в Vite
- ✅ Preload критических ресурсов
- ✅ DNS prefetch

## Компоненты для SEO

### SEOHead
Компонент для динамического управления мета-тегами:
```tsx
import { SEOHead } from '@/components/SEOHead';

<SEOHead 
  title="Заголовок страницы"
  description="Описание страницы"
  keywords="ключевые, слова"
/>
```

### FAQ
Компонент с разметкой Schema.org для FAQ:
```tsx
import { FAQ } from '@/components/FAQ';

const faqItems = [
  {
    question: "Вопрос?",
    answer: "Ответ."
  }
];

<FAQ items={faqItems} />
```

### Breadcrumbs
Хлебные крошки для навигации:
```tsx
import { Breadcrumbs } from '@/components/Breadcrumbs';

const breadcrumbItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", current: true }
];

<Breadcrumbs items={breadcrumbItems} />
```

### Sitemap
Карта сайта для пользователей:
```tsx
import { Sitemap } from '@/components/Sitemap';

const sitemapSections = [
  {
    title: "Основные разделы",
    links: [
      { label: "Главная", path: "/" },
      { label: "Услуги", path: "/#services" }
    ]
  }
];

<Sitemap sections={sitemapSections} />
```

## Рекомендации по дальнейшей оптимизации

### 1. Контент
- Добавить больше текстового контента на страницы
- Создать блог с полезными статьями по изучению английского
- Добавить страницы для каждого направления подготовки

### 2. Локальная SEO
- Создать Google My Business аккаунт
- Добавить разметку LocalBusiness
- Оптимизировать для локальных запросов

### 3. Скорость загрузки
- Использовать WebP формат изображений
- Внедрить Service Worker для кеширования
- Оптимизировать шрифты

### 4. Аналитика
- Настроить Google Analytics 4
- Настроить Google Search Console
- Отслеживать Core Web Vitals

### 5. Мобильная оптимизация
- Улучшить мобильную навигацию
- Оптимизировать touch targets
- Улучшить мобильную производительность

## Мониторинг SEO

### Инструменты для проверки
- Google PageSpeed Insights
- Google Mobile-Friendly Test
- Google Rich Results Test
- Schema.org Validator
- Screaming Frog SEO Spider

### Ключевые метрики
- Core Web Vitals (LCP, FID, CLS)
- Время загрузки страницы
- Индексация в поисковых системах
- Позиции по ключевым запросам
- CTR из поиска

## Обновление контента

### Регулярные обновления
- Обновлять отзывы учеников
- Добавлять новые достижения
- Обновлять информацию об услугах
- Добавлять актуальные материалы

### Календарь обновлений
- Еженедельно: проверка метрик
- Ежемесячно: обновление контента
- Ежеквартально: анализ конкурентов
- Ежегодно: полный аудит SEO

## Контакты для поддержки

При возникновении вопросов по SEO оптимизации обращайтесь к команде разработки или SEO специалисту. 