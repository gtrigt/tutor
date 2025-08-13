import React from 'react';

export const PersonSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Марат Фассахов",
    "alternateName": "Marat Fassakhov",
    "description": "Преподаватель английского языка с 3-летним опытом обучения в Америке и 80+ учениками, успешно сдавшими ЕГЭ",
    "jobTitle": "Преподаватель английского языка",
    "worksFor": {
      "@type": "Organization",
      "name": "Marat English"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Американский университет",
      "description": "3 года обучения в Америке"
    },
    "knowsAbout": [
      "Английский язык",
      "Подготовка к ЕГЭ по английскому",
      "Подготовка к олимпиадам ВСОШ",
      "IELTS",
      "Разговорная практика английского",
      "Грамматика английского языка",
      "Лексика английского языка",
      "Методика преподавания английского"
    ],
    "hasCredential": [
      "3 года обучения в Америке",
      "80+ учеников успешно сдали ЕГЭ",
      "Авторская методика обучения",
      "Опыт подготовки к олимпиадам",
      "Специализация на ЕГЭ и IELTS"
    ],
    "award": [
      "Средний балл учеников на ЕГЭ: 87",
      "Многие ученики получают 90+ баллов",
      "Гарантия минимум 80 баллов на ЕГЭ"
    ],
    "image": {
      "@type": "ImageObject",
      "url": "https://tutor-marat.netlify.app/images/hero/me.png",
      "caption": "Марат Фассахов - преподаватель английского языка"
    },
    "url": "https://tutor-marat.netlify.app",
    "sameAs": [
      "https://t.me/maratenglish"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Москва"
    },
    "nationality": {
      "@type": "Country",
      "name": "Россия"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Россия"
    },
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Русский",
        "alternateName": "Russian"
      },
      {
        "@type": "Language",
        "name": "Английский",
        "alternateName": "English"
      }
    ],
    "teaches": [
      {
        "@type": "Course",
        "name": "Подготовка к ЕГЭ по английскому",
        "description": "Индивидуальная подготовка к ЕГЭ с гарантией 80+ баллов"
      },
      {
        "@type": "Course",
        "name": "Олимпиадная подготовка",
        "description": "Подготовка к олимпиадам ВСОШ и перечневым олимпиадам"
      },
      {
        "@type": "Course",
        "name": "IELTS",
        "description": "Подготовка к международному экзамену IELTS"
      },
      {
        "@type": "Course",
        "name": "Разговорная практика",
        "description": "Развитие навыков свободного общения на английском"
      }
    ],
    "serviceType": [
      "Индивидуальные занятия",
      "Групповые занятия",
      "Онлайн обучение",
      "Подготовка к экзаменам",
      "Олимпиадная подготовка"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Россия"
      },
      {
        "@type": "City",
        "name": "Москва"
      }
    ],
    "availableLanguage": ["Russian", "English"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "English"]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Бесплатный пробный урок",
          "description": "Первый урок бесплатно для новых учеников"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Преподаватель английского языка",
      "description": "Онлайн обучение английскому языку",
      "occupationLocation": {
        "@type": "Place",
        "name": "Москва, Россия"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default PersonSchema; 