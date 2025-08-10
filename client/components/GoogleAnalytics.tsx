import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Загружаем Google Analytics только в браузере
    if (typeof window !== 'undefined') {
      // Добавляем gtag в window
      window.gtag = window.gtag || function() {
        (window.gtag.q = window.gtag.q || []).push(arguments);
      };

      // Инициализируем gtag
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });

      // Отслеживаем навигацию
      const handleRouteChange = () => {
        window.gtag('config', measurementId, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      };

      // Отслеживаем изменения в истории браузера
      window.addEventListener('popstate', handleRouteChange);
      
      // Отслеживаем клики по ссылкам
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link) {
          window.gtag('event', 'click', {
            event_category: 'engagement',
            event_label: link.href,
            value: 1
          });
        }
      });

      // Отслеживаем отправку форм
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: form.action || 'contact_form',
          value: 1
        });
      });

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [measurementId]);

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `
        }}
      />
    </>
  );
};

// Хук для отслеживания событий
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPageView = (pageTitle: string, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: pageTitle,
        page_location: pagePath
      });
    }
  };

  return { trackEvent, trackPageView };
}; 