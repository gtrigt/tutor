import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Репетитор английского языка | Подготовка к олимпиадам ВСОШ, ЕГЭ/ОГЭ, IELTS | Marat English',
  description = 'Опытный репетитор английского языка с олимпиадным стажем. Подготовка к ВСОШ, перечневым олимпиадам, ЕГЭ/ОГЭ (80+ баллов), IELTS (7.0+). Индивидуальные онлайн-уроки для школьников и студентов 15-40+ лет. Бесплатный пробный урок.',
  keywords = 'репетитор английского языка, подготовка к олимпиадам ВСОШ, подготовка к ЕГЭ английский, подготовка к ОГЭ английский, подготовка к IELTS, олимпиадная подготовка английский, репетитор английского онлайн, английский язык для школьников, английский язык для студентов, высокие баллы ЕГЭ, IELTS 7.0, олимпиады по английскому языку',
  image = 'https://marat-english.com/me.png',
  url = 'https://marat-english.com/',
  type = 'website',
  author = 'Marat English'
}) => {
  useEffect(() => {
    // Update document title for better UX
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, keywords, image, url, type, author]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Marat English" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Репетитор английского языка Marat English" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Репетитор английского языка Marat English" />
      <meta name="twitter:site" content="@marat_english" />
      <meta name="twitter:creator" content="@marat_english" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang для языковых версий */}
      <link rel="alternate" hrefLang="ru" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Robots and basic meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="theme-color" content="#9C4F4B" />
      <meta name="msapplication-TileColor" content="#9C4F4B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Marat English" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Performance Hints */}
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="//api.telegram.org" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link rel="preconnect" href="https://api.telegram.org" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Resource Hints */}
      <link rel="preload" href="/fonts/arsenal-sc.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/anonymous-pro.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* Preload Blog Images */}
      <link rel="preload" as="image" href="/images/blog/blog_language.png" />
      <link rel="preload" as="image" href="/images/blog/blog_mistakes.png" />
      <link rel="preload" as="image" href="/images/blog/blog_olymp.png" />
      <link rel="preload" as="image" href="/images/blog/blog_online.png" />
      
      {/* Structured Data - Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Marat English - Репетитор английского языка",
          "description": "Подготовка к ЕГЭ, олимпиадам, разговорная практика английского языка",
          "url": "https://marat-english.com",
          "logo": "https://marat-english.com/logo.png",
          "image": "https://marat-english.com/me.png",
          "telephone": "+7-XXX-XXX-XXXX",
          "email": "info@marat-english.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "RU",
            "addressLocality": "Russia"
          },
          "founder": {
            "@type": "Person",
            "name": "Марат Фассахов",
            "jobTitle": "Преподаватель английского языка",
            "description": "3 года обучения в Америке, 80+ учеников успешно сдали ЕГЭ",
            "image": "https://marat-english.com/me.png"
          },
          "serviceType": [
            "Подготовка к ЕГЭ по английскому",
            "Подготовка к олимпиадам ВСОШ",
            "Разговорная практика",
            "Подготовка к IELTS"
          ],
          "areaServed": "RU",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Услуги репетитора",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Подготовка к ЕГЭ по английскому",
                  "description": "Индивидуальная подготовка к ЕГЭ с гарантией 80+ баллов"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Олимпиадная подготовка",
                  "description": "Подготовка к олимпиадам ВСОШ и перечневым олимпиадам"
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
            "worstRating": "1"
          }
        })}
      </script>
    </Helmet>
  );
}; 