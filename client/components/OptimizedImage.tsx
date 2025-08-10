import React, { useState, useRef, useEffect, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
  threshold?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({
  src,
  alt,
  className = '',
  style = {},
  loading = 'lazy',
  onLoad,
  onError,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==',
  threshold = 0.1
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Функция для загрузки изображения
  const loadImage = useCallback(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad?.();
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        onError?.();
      };
      
      img.src = src;
    }
  }, [src, isInView, isLoaded, onLoad, onError]);

  // Intersection Observer для lazy loading
  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  // Загружаем изображение когда оно попадает в viewport
  useEffect(() => {
    loadImage();
  }, [loadImage]);

  // Оптимизированные стили для производительности
  const optimizedStyle: React.CSSProperties = {
    ...style,
    willChange: isLoaded ? 'auto' : 'transform',
    transform: isLoaded ? 'none' : 'translateZ(0)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    ...(isLoaded && {
      transition: 'opacity 0.3s ease-in-out'
    })
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={className}
      style={optimizedStyle}
      loading={loading}
      onLoad={() => {
        if (imageSrc === src) {
          setIsLoaded(true);
        }
      }}
      // Оптимизация для мобильных устройств
      {...(window.innerWidth <= 768 && {
        'data-mobile-optimized': 'true'
      })}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Специализированный компонент для изображений отзывов
export const ReviewImage: React.FC<Omit<OptimizedImageProps, 'placeholder'> & {
  reviewIndex: number;
}> = React.memo(({ reviewIndex, ...props }) => {
  return (
    <OptimizedImage
      {...props}
      placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0ZCQjNGMCIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0J7RgtC60LDQv9CwPC90ZXh0Pjwvc3ZnPg=="
      className={`${props.className || ''} review-image-${reviewIndex}`}
      style={{
        ...props.style,
        maxHeight: '420px',
        width: 'auto',
        objectFit: 'contain',
        borderRadius: '0.375rem'
      }}
    />
  );
});

ReviewImage.displayName = 'ReviewImage'; 