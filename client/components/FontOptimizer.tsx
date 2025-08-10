import React, { useEffect } from 'react';

interface FontOptimizerProps {
  fonts?: string[];
  preload?: boolean;
}

export const FontOptimizer: React.FC<FontOptimizerProps> = ({ 
  fonts = [
    'https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap'
  ],
  preload = true 
}) => {
  useEffect(() => {
    // Предзагрузка критических шрифтов
    if (preload) {
      fonts.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // Загрузка шрифтов с fallback
    const loadFonts = async () => {
      try {
        // Проверяем, загружены ли уже шрифты
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }

        // Добавляем CSS для шрифтов
        fonts.forEach(fontUrl => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = fontUrl;
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        });

        // Применяем fallback шрифты
        document.documentElement.style.fontDisplay = 'swap';
        
        // Добавляем класс для индикации загрузки шрифтов
        document.documentElement.classList.add('fonts-loaded');
        
      } catch (error) {
        console.warn('Ошибка загрузки шрифтов:', error);
        // Fallback на системные шрифты
        document.documentElement.classList.add('fonts-fallback');
      }
    };

    loadFonts();

    // Очистка при размонтировании
    return () => {
      document.documentElement.classList.remove('fonts-loaded', 'fonts-fallback');
    };
  }, [fonts, preload]);

  // Добавляем CSS для оптимизации шрифтов
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Font loading optimization */
      .fonts-loading {
        font-display: swap;
        font-family: 'Arsenal', 'Anonymous Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .fonts-loaded {
        font-family: 'Arsenal', 'Anonymous Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .fonts-fallback {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      
      /* Font smoothing */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* Font loading animation */
      @keyframes font-loading {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      .font-arsenal {
        font-family: 'Arsenal', serif;
        animation: font-loading 0.3s ease-in-out;
      }
      
      .font-anonymous {
        font-family: 'Anonymous Pro', monospace;
        animation: font-loading 0.3s ease-in-out;
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // Компонент не рендерит ничего
}; 