import React from 'react';

interface HowToSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
  totalTime: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  tools?: string[];
  materials?: string[];
  keywords: string[];
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  totalTime,
  steps,
  tools = [],
  materials = [],
  keywords
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
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
    "keywords": keywords.join(", "),
    "totalTime": totalTime,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "RUB",
      "value": "0"
    },
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image ? {
        "@type": "ImageObject",
        "url": step.image
      } : undefined
    })),
    "tool": tools.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    })),
    "material": materials.map(material => ({
      "@type": "HowToSupply",
      "name": material
    })),
    "about": [
      {
        "@type": "Thing",
        "name": "ЕГЭ по английскому"
      },
      {
        "@type": "Thing",
        "name": "Письменная часть"
      },
      {
        "@type": "Thing",
        "name": "Подготовка к экзамену"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "Английский язык"
      },
      {
        "@type": "Thing",
        "name": "Экзамен"
      },
      {
        "@type": "Thing",
        "name": "Обучение"
      }
    ],
    "mainEntity": {
      "@type": "Service",
      "name": "Подготовка к ЕГЭ по английскому",
      "description": "Индивидуальная подготовка к ЕГЭ с гарантией 80+ баллов"
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
    "accessibilitySummary": "Инструкция доступна для чтения с экрана и содержит структурированный контент",
    "genre": "Educational",
    "isFamilyFriendly": true,
    "learningResourceType": "HowTo",
    "educationalUse": ["Reading", "Study", "Reference", "Practice"],
    "interactivityType": "active",
    "typicalAgeRange": "15-25",
    "audience": {
      "@type": "Audience",
      "audienceType": "Студенты и школьники",
      "educationalLevel": "Secondary"
    },
    "educationalAlignment": {
      "@type": "AlignmentObject",
      "alignmentType": "teaches",
      "educationalFramework": "ФГОС",
      "targetName": "Английский язык"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default HowToSchema; 