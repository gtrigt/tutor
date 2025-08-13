import React from 'react';

export const WebSiteSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Marat English - Репетитор английского языка",
    "description": "Онлайн обучение английскому языку с подготовкой к ЕГЭ, олимпиадам и разговорной практике",
    "url": "https://tutor-marat.netlify.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tutor-marat.netlify.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marat English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tutor-marat.netlify.app/images/icons/logo.png"
      }
    },
    "inLanguage": "ru-RU",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    "about": [
      {
        "@type": "Thing",
        "name": "Английский язык"
      },
      {
        "@type": "Thing",
        "name": "Изучение языков"
      },
      {
        "@type": "Thing",
        "name": "Подготовка к ЕГЭ"
      },
      {
        "@type": "Thing",
        "name": "Олимпиады по английскому"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "ЕГЭ по английскому"
      },
      {
        "@type": "Thing",
        "name": "Олимпиады ВСОШ"
      },
      {
        "@type": "Thing",
        "name": "IELTS"
      },
      {
        "@type": "Thing",
        "name": "Разговорная практика"
      }
    ],
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Marat English",
      "description": "Онлайн обучение английскому языку"
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Главная страница",
        "url": "https://tutor-marat.netlify.app/",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Marat English"
        }
      },
      {
        "@type": "WebPage",
        "name": "Блог",
        "url": "https://tutor-marat.netlify.app/#blog",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Marat English"
        }
      },
      {
        "@type": "WebPage",
        "name": "Чек-лист ЕГЭ",
        "url": "https://tutor-marat.netlify.app/checklist.html",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Marat English"
        }
      }
    ],
    "sameAs": [
      "https://t.me/maratenglish"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default WebSiteSchema; 