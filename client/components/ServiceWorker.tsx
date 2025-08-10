import React, { useEffect } from 'react';

export const ServiceWorker: React.FC = () => {
  useEffect(() => {
    // Регистрируем SW только в продакшене, чтобы dev не залипал на кэшах
    if (import.meta.env.PROD && 'serviceWorker' in navigator) {
      // Регистрируем Service Worker только один раз при загрузке страницы
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered successfully');
          
          // Проверяем обновления только при фокусе на странице, а не постоянно
          let updateFound = false;
          
          registration.addEventListener('updatefound', () => {
            if (updateFound) return; // Предотвращаем множественные проверки
            updateFound = true;
            
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Показываем уведомление об обновлении только один раз
                  if (confirm('Доступна новая версия сайта. Обновить?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Обработка сообщений от Service Worker
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'SKIP_WAITING') {
              window.location.reload();
            }
          });
        } catch (error) {
          console.log('SW registration failed:', error);
        }
      };

      // Регистрируем только после полной загрузки страницы
      if (document.readyState === 'loading') {
        window.addEventListener('load', registerSW);
      } else {
        registerSW();
      }
    } else if ('serviceWorker' in navigator) {
      // В режиме разработки отписываем SW, чтобы избежать конфликтов с кэшем
      navigator.serviceWorker.getRegistrations()
        .then(regs => regs.forEach(reg => reg.unregister()))
        .catch(() => {});
    }
  }, []);

  return null;
}; 