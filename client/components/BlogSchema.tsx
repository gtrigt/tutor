import React from 'react';

interface BlogSchemaProps {
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
}

export const BlogSchema: React.FC<BlogSchemaProps> = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category,
  readTime,
  keywords
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Преподаватель английского языка",
      "description": "3 года обучения в Америке, 80+ учеников успешно сдали ЕГЭ"
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
    "wordCount": Math.ceil(description.length / 5), // Примерное количество слов
    "timeRequired": `PT${readTime}M`, // ISO 8601 duration
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
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default BlogSchema; 