import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Schema.org разметка для хлебных крошек
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": `${window.location.origin}/`
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? `${window.location.origin}${item.href}` : `${window.location.origin}${window.location.pathname}`
      }))
    ]
  };

  return (
    <>
      {/* Schema.org разметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Визуальные хлебные крошки */}
      <nav aria-label="Хлебные крошки" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-1 sm:space-x-2">
        <li>
          <a 
            href="/" 
            className="flex items-center text-gray-500 hover:text-brand-primary transition-colors duration-200"
            aria-label="Главная страница"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="sr-only sm:not-sr-only sm:ml-1">Главная</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-1 sm:mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            
            {item.current ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href}
                className="text-gray-500 hover:text-brand-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
};

export default Breadcrumbs; 