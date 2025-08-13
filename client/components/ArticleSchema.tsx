import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
  category: string;
  readTime: string;
  keywords: string[];
  articleBody?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category,
  readTime,
  keywords,
  articleBody
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
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
    "publisher": {
      "@type": "Organization",
      "name": "Marat English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tutor-marat.netlify.app/images/icons/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": keywords.join(", "),
    "wordCount": articleBody ? Math.ceil(articleBody.length / 5) : Math.ceil(description.length / 5),
    "timeRequired": `PT${readTime}M`,
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
    "accessibilitySummary": "Статья доступна для чтения с экрана и содержит структурированный контент",
    "articleBody": articleBody || description,
    "genre": "Educational",
    "isFamilyFriendly": true,
    "learningResourceType": "Article",
    "educationalUse": ["Reading", "Study", "Reference"],
    "interactivityType": "active",
    "typicalAgeRange": "15-25",
    "audience": {
      "@type": "Audience",
      "audienceType": "Студенты и школьники",
      "educationalLevel": "Secondary"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ArticleSchema; 