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
  } else if (baseSrc.includes('/blog_')) {
    folder = '/images/blog';
  }
  
  // Если папка не определена, используем базовый путь
  if (!folder) {
    folder = '/images';
  }
  
  // Генерируем пути для WebP, AVIF и PNG
  const fileName = baseSrc.replace(/^\//, ''); // убираем начальную косую черту
  const webpSrc = `${folder}/${fileName}.webp`;
  const avifSrc = `${folder}/${fileName}.avif`;
  const pngSrc = `${folder}/${fileName}.png`;
  
  // Определяем размеры для responsive images
  const responsiveSizes = sizes || `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`;
  
  // Создаем srcSet для разных размеров (если они существуют)
  const createSrcSet = (format: string) => {
    // Проверяем, есть ли изображения разных размеров
    const sizes = [300, 600, 900, 1200];
    const availableSizes = sizes.filter(size => {
      // Проверяем существование файла (в реальности это будет проверяться на сервере)
      return true; // Пока возвращаем все размеры
    });
    
    if (availableSizes.length > 0) {
      return availableSizes
        .map(size => `${folder}/${fileName}-${size}.${format} ${size}w`)
        .join(', ');
    }
    
    // Если нет разных размеров, возвращаем основной файл
    return `${folder}/${fileName}.${format}`;
  };
  
  return (
    <picture className="optimized-image">
      {/* WebP версия для современных браузеров */}
      <source 
        srcSet={`${folder}/${fileName}.webp`}
        type="image/webp" 
        sizes={responsiveSizes}
      />
      
      {/* PNG fallback для старых браузеров */}
      <img
        src={pngSrc}
        alt={alt}
        className={`${className} loading-optimized`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        style={{
          ...style,
          contentVisibility: 'auto',
          containIntrinsicSize: '0 500px'
        }}
        width={width}
        height={height}
        sizes={responsiveSizes}
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          target.classList.add('loaded');
        }}
      />
    </picture>
  );
};

export default OptimizedImage;