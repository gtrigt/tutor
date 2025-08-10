import React from 'react';

interface OptimizedImageProps {
  src: string; // путь без расширения, например "/me" вместо "/me.png"
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'auto' | 'sync';
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * Компонент для отображения оптимизированных изображений с WebP и PNG fallback
 * Автоматически определяет поддержку WebP и загружает соответствующий формат
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  decoding = 'async',
  style,
  width,
  height,
  sizes,
}) => {
  // Убираем расширение если оно есть
  const baseSrc = src.replace(/\.(png|jpg|jpeg)$/i, '');
  
  // Определяем категорию изображения для правильного пути
  let folder = '';
  if (baseSrc.includes('/me') || baseSrc.includes('/english') || baseSrc.includes('/EGE') || baseSrc.includes('/Mark')) {
    folder = '/images/hero';
  } else if (baseSrc.includes('/telegram') || baseSrc.includes('/instagram') || baseSrc.includes('/whatsapp') || baseSrc.includes('/logo')) {
    folder = '/images/icons';
  } else if (baseSrc.includes('/IMG_')) {
    folder = '/images/reviews';
  }
  
  // Генерируем пути для WebP и PNG
  const fileName = baseSrc.replace(/^\//, ''); // убираем начальную косую черту
  const webpSrc = `${folder}/${fileName}.webp`;
  const pngSrc = `${folder}/${fileName}.png`;
  
  return (
    <picture>
      {/* WebP версия для современных браузеров */}
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      
      {/* PNG fallback для старых браузеров */}
      <img
        src={pngSrc}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        style={style}
        width={width}
        height={height}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;