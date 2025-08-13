import React from 'react';

interface CreativeWorkSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
  category: string;
  keywords: string[];
  license?: string;
  genre?: string;
  educationalLevel?: string;
  learningResourceType?: string;
}

export const CreativeWorkSchema: React.FC<CreativeWorkSchemaProps> = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category,
  keywords,
  license = "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  genre = "Educational",
  educationalLevel = "Secondary",
  learningResourceType = "Checklist"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": "800",
      "height": "600"
    },
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Преподаватель английского языка",
      "description": "3 года обучения в Америке, 80+ учеников успешно сдали ЕГЭ",
      "sameAs": "https://t.me/maratenglish"
    },
    "creator": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Преподаватель английского языка"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marat English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tutor-marat.netlify.app/images/icons/logo.png"
      }
    },
    "dateCreated": datePublished,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": keywords.join(", "),
    "license": license,
    "genre": genre,
    "inLanguage": "ru-RU",
    "isAccessibleForFree": true,
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
        "name": category
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "ЕГЭ по английскому"
      },
      {
        "@type": "Thing",
        "name": "Олимпиады по английскому"
      },
      {
        "@type": "Thing",
        "name": "Разговорная практика"
      }
    ],
    "mainEntity": {
      "@type": "Service",
      "name": "Обучение английскому языку",
      "description": "Подготовка к ЕГЭ, олимпиадам и разговорной практике"
    },
    "isPartOf": {
      "@type": "Blog",
      "name": "Блог Marat English",
      "description": "Полезные статьи и советы по изучению английского языка"
    },
    "publisherImprint": {
      "@type": "Organization",
      "name": "Marat English"
    },
    "accessMode": ["textual", "visual"],
    "accessModeSufficient": ["textual", "visual"],
    "accessibilityControl": ["fullKeyboardControl", "fullMouseControl"],
    "accessibilityFeature": ["readingOrder", "structuralNavigation", "tableOfContents"],
    "accessibilityHazard": "none",
    "accessibilitySummary": "Материал доступен для чтения с экрана и содержит структурированный контент",
    "isFamilyFriendly": true,
    "learningResourceType": learningResourceType,
    "educationalUse": ["Reading", "Study", "Reference", "Practice"],
    "interactivityType": "active",
    "typicalAgeRange": "15-25",
    "audience": {
      "@type": "Audience",
      "audienceType": "Студенты и школьники",
      "educationalLevel": educationalLevel
    },
    "educationalAlignment": {
      "@type": "AlignmentObject",
      "alignmentType": "teaches",
      "educationalFramework": "ФГОС",
      "targetName": "Английский язык"
    },
    "teaches": [
      "Избежание ошибок в письменной части ЕГЭ",
      "Правильная структура эссе",
      "Грамматические правила",
      "Лексические особенности"
    ],
    "assesses": [
      "Знание структуры письменной части ЕГЭ",
      "Понимание типичных ошибок",
      "Умение применять правила"
    ],
    "educationalLevel": educationalLevel,
    "inLanguage": "ru-RU",
    "isPartOf": {
      "@type": "CreativeWorkSeries",
      "name": "Подготовка к ЕГЭ по английскому",
      "description": "Серия материалов для подготовки к ЕГЭ"
    },
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Структура эссе",
        "description": "Правильная структура письменной части ЕГЭ"
      },
      {
        "@type": "CreativeWork",
        "name": "Типичные ошибки",
        "description": "Анализ частых ошибок в письменной части"
      }
    ],
    "isBasedOn": [
      {
        "@type": "CreativeWork",
        "name": "ФИПИ ЕГЭ",
        "description": "Официальные материалы ФИПИ для ЕГЭ"
      }
    ],
    "citation": [
      {
        "@type": "CreativeWork",
        "name": "ФИПИ ЕГЭ по английскому языку",
        "url": "https://fipi.ru/ege/anglijskij-yazyk"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default CreativeWorkSchema; 