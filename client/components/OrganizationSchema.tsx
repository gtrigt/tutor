import React from 'react';

export const OrganizationSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Marat English - Репетитор английского языка",
    "alternateName": "Marat English",
    "description": "Онлайн обучение английскому языку с подготовкой к ЕГЭ, олимпиадам и разговорной практике",
    "url": "https://tutor-marat.netlify.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tutor-marat.netlify.app/images/icons/logo.png",
      "width": "180",
      "height": "180"
    },
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://tutor-marat.netlify.app/images/hero/me.png",
        "width": "400",
        "height": "400",
        "caption": "Марат Фассахов - преподаватель английского языка"
      }
    ],
    "telephone": "+7-XXX-XXX-XXXX",
    "email": "info@marat-english.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU",
      "addressLocality": "Russia",
      "addressRegion": "Moscow"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.7558",
      "longitude": "37.6176"
    },
    "founder": {
      "@type": "Person",
      "name": "Марат Фассахов",
      "jobTitle": "Преподаватель английского языка",
      "description": "3 года обучения в Америке, 80+ учеников успешно сдали ЕГЭ",
      "image": "https://tutor-marat.netlify.app/images/hero/me.png",
      "sameAs": "https://t.me/maratenglish",
      "knowsAbout": [
        "Английский язык",
        "Подготовка к ЕГЭ",
        "Олимпиадная подготовка",
        "IELTS",
        "Разговорная практика"
      ],
      "hasCredential": [
        "3 года обучения в Америке",
        "80+ учеников успешно сдали ЕГЭ",
        "Авторская методика обучения"
      ]
    },
    "employee": {
      "@type": "Person",
      "name": "Марат Фассахов",
      "jobTitle": "Преподаватель английского языка",
      "description": "Опытный репетитор с олимпиадным стажем"
    },
    "serviceType": [
      "Подготовка к ЕГЭ по английскому",
      "Подготовка к олимпиадам ВСОШ",
      "Разговорная практика",
      "Подготовка к IELTS",
      "Подготовка к ОГЭ"
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги репетитора английского языка",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Подготовка к ЕГЭ по английскому",
            "description": "Индивидуальная подготовка к ЕГЭ с гарантией 80+ баллов",
            "provider": {
              "@type": "Organization",
              "name": "Marat English"
            },
            "areaServed": "RU",
            "serviceType": "Подготовка к экзаменам"
          },
          "price": "8000",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "8000",
            "priceCurrency": "RUB",
            "unitText": "курс"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Олимпиадная подготовка",
            "description": "Подготовка к олимпиадам ВСОШ и перечневым олимпиадам",
            "provider": {
              "@type": "Organization",
              "name": "Marat English"
            },
            "areaServed": "RU",
            "serviceType": "Олимпиадная подготовка"
          },
          "price": "10000",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "10000",
            "priceCurrency": "RUB",
            "unitText": "курс"
          }
        }
      ]
    },
    "sameAs": [
      "https://t.me/maratenglish"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "80",
      "bestRating": "5",
      "worstRating": "1",
      "itemReviewed": {
        "@type": "Service",
        "name": "Обучение английскому языку"
      }
    },
    "foundingDate": "2020",
    "numberOfEmployees": "1",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Russian", "English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "RUB",
    "knowsAbout": [
      "Английский язык",
      "Подготовка к ЕГЭ",
      "Олимпиадная подготовка",
      "IELTS",
      "Разговорная практика",
      "Грамматика английского языка",
      "Лексика английского языка"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Бесплатный пробный урок",
          "description": "Первый урок бесплатно для новых учеников"
        }
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

export default OrganizationSchema; 