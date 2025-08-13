import React from 'react';

export const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marat English - Репетитор английского языка",
    "description": "Онлайн обучение английскому языку с подготовкой к ЕГЭ, олимпиадам и разговорной практике",
    "url": "https://tutor-marat.netlify.app",
    "telephone": "+7-XXX-XXX-XXXX",
    "email": "info@marat-english.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Онлайн",
      "addressLocality": "Москва",
      "addressRegion": "Москва",
      "postalCode": "000000",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "55.7558",
      "longitude": "37.6176"
    },
    "openingHoursSpecification": [
      {
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
    ],
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "55.7558",
        "longitude": "37.6176"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги репетитора английского языка",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Подготовка к ЕГЭ по английскому",
            "description": "Индивидуальная подготовка к ЕГЭ с гарантией 80+ баллов"
          },
          "price": "8000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Олимпиадная подготовка",
            "description": "Подготовка к олимпиадам ВСОШ и перечневым олимпиадам"
          },
          "price": "10000",
          "priceCurrency": "RUB"
        }
      ]
    },
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "RUB",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "80",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Анна"
        },
        "reviewBody": "Отличный преподаватель! Помог подготовиться к ЕГЭ и получить 95 баллов."
      }
    ],
    "sameAs": [
      "https://t.me/maratenglish"
    ],
    "image": [
      "https://tutor-marat.netlify.app/images/hero/me.png",
      "https://tutor-marat.netlify.app/images/icons/logo.png"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://tutor-marat.netlify.app/images/icons/logo.png"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LocalBusinessSchema; 