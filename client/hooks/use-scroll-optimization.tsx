import { useEffect, useRef, useCallback } from 'react';

interface ScrollOptimizationOptions {
  throttleMs?: number;
  enableSmoothScrolling?: boolean;
  enableTouchOptimization?: boolean;
}

export const useScrollOptimization = (options: ScrollOptimizationOptions = {}) => {
  const {
    throttleMs = 16, // ~60fps
    enableSmoothScrolling = true,
    enableTouchOptimization = true
  } = options;

  const ticking = useRef(false);
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Функция для throttling прокрутки
  const throttleScroll = useCallback((callback: () => void) => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        callback();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  // Оптимизация прокрутки для мобильных устройств
  const optimizeMobileScroll = useCallback(() => {
    if (!enableTouchOptimization) return;

    // Добавляем CSS классы для оптимизации на мобильных
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        * {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        
        body {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        .swiper-container {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [enableTouchOptimization]);

  // Оптимизация прокрутки для быстрых движений
  const optimizeFastScroll = useCallback(() => {
    let lastTime = 0;
    let velocity = 0;
    const velocityThreshold = 100; // Порог скорости для активации оптимизации

    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (lastTime > 0) {
        const deltaTime = currentTime - lastTime;
        const deltaScroll = currentScrollTop - lastScrollTop.current;
        velocity = Math.abs(deltaScroll / deltaTime);
        
        // Если скорость прокрутки высокая, применяем оптимизации
        if (velocity > velocityThreshold) {
          document.body.style.willChange = 'scroll-position';
          document.body.style.transform = 'translateZ(0)';
          
          // Сбрасываем оптимизации через небольшую задержку
          clearTimeout(scrollTimeout.current!);
          scrollTimeout.current = setTimeout(() => {
            document.body.style.willChange = 'auto';
            document.body.style.transform = 'none';
          }, 100);
        }
      }
      
      lastTime = currentTime;
      lastScrollTop.current = currentScrollTop;
    };

    // Throttled обработчик прокрутки
    const throttledHandleScroll = () => {
      throttleScroll(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(scrollTimeout.current!);
    };
  }, [throttleMs]);

  // Оптимизация для Swiper компонентов
  const optimizeSwiper = useCallback(() => {
    const swiperElements = document.querySelectorAll('.swiper-container, .swiper');
    
    swiperElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        // Включаем аппаратное ускорение для Swiper
        element.style.willChange = 'transform';
        element.style.transform = 'translateZ(0)';
        element.style.backfaceVisibility = 'hidden';
        element.style.perspective = '1000px';
        
        // Оптимизация для мобильных устройств
        if (window.innerWidth <= 768) {
          element.style.transform = 'translateZ(0)';
          element.style.webkitTransform = 'translateZ(0)';
        }
      }
    });
  }, []);

  // Основной эффект
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    // Применяем оптимизации
    if (enableSmoothScrolling) {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.webkitOverflowScrolling = 'touch';
    }

    // Оптимизация для мобильных
    const mobileCleanup = optimizeMobileScroll();
    if (mobileCleanup) cleanupFunctions.push(mobileCleanup);

    // Оптимизация для быстрой прокрутки
    const fastScrollCleanup = optimizeFastScroll();
    cleanupFunctions.push(fastScrollCleanup);

    // Оптимизация Swiper
    optimizeSwiper();

    // Обработчик изменения размера окна
    const handleResize = () => {
      optimizeSwiper();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    cleanupFunctions.push(() => {
      window.removeEventListener('resize', handleResize);
    });

    // Cleanup функция
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
      
      // Сбрасываем стили
      document.documentElement.style.scrollBehavior = '';
      document.body.style.webkitOverflowScrolling = '';
      document.body.style.willChange = '';
      document.body.style.transform = '';
    };
  }, [enableSmoothScrolling, optimizeMobileScroll, optimizeFastScroll, optimizeSwiper]);

  // Функция для принудительной оптимизации конкретного элемента
  const optimizeElement = useCallback((element: HTMLElement) => {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    
    if (window.innerWidth <= 768) {
      element.style.webkitTransform = 'translateZ(0)';
    }
  }, []);

  // Функция для сброса оптимизаций элемента
  const resetElementOptimization = useCallback((element: HTMLElement) => {
    element.style.willChange = 'auto';
    element.style.transform = 'none';
    element.style.backfaceVisibility = '';
    element.style.webkitTransform = '';
  }, []);

  return {
    optimizeElement,
    resetElementOptimization,
    optimizeSwiper
  };
}; 