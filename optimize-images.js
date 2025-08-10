#!/usr/bin/env node

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация оптимизации
const config = {
  // Основные изображения (высокое качество)
  hero: {
    quality: 85,
    suffix: '.webp',
    fallbackQuality: 90, // для PNG fallback
  },
  // Изображения отзывов (компактные)
  reviews: {
    quality: 75,
    suffix: '.webp',
    fallbackQuality: 80,
    maxWidth: 800, // ограничиваем ширину
  },
  // Иконки (высокое качество, маленький размер)
  icons: {
    quality: 90,
    suffix: '.webp',
    fallbackQuality: 95,
  }
};

// Список файлов для оптимизации
const optimizationTargets = {
  hero: ['me.png', 'english.png', 'EGE.png', 'Mark.png'],
  icons: ['telegram.png', 'instagram.png', 'whatsapp.png', 'logo.png'],
  reviews: [] // будет заполнен автоматически
};

async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const { quality = 80, maxWidth, format = 'webp' } = options;
    
    let pipeline = sharp(inputPath);
    
    // Ограничиваем ширину если указано
    if (maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }
    
    // Конвертируем в нужный формат
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality, effort: 6 });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    }
    
    await pipeline.toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`❌ Ошибка оптимизации ${inputPath}:`, error.message);
    return false;
  }
}

async function createOptimizedVersions(category, files) {
  const publicDir = './public';
  const config_cat = config[category];
  
  console.log(`\n🔄 Оптимизируем ${category} изображения...`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const filename of files) {
    const inputPath = path.join(publicDir, filename);
    const name = path.parse(filename).name;
    const webpPath = path.join(publicDir, `${name}.webp`);
    
    // Проверяем существование исходного файла
    const originalSize = await getFileSize(inputPath);
    if (originalSize === 0) {
      console.log(`⚠️  Файл ${filename} не найден, пропускаем`);
      continue;
    }
    
    console.log(`   📸 ${filename} (${formatBytes(originalSize)})`);
    
    // Создаем WebP версию
    const webpSuccess = await optimizeImage(inputPath, webpPath, {
      quality: config_cat.quality,
      maxWidth: config_cat.maxWidth,
      format: 'webp'
    });
    
    if (webpSuccess) {
      const webpSize = await getFileSize(webpPath);
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`   ✅ ${name}.webp (${formatBytes(webpSize)}) - экономия ${savings}%`);
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += webpSize;
    }
    
    // Оптимизируем оригинальный PNG для fallback
    const optimizedPngPath = path.join(publicDir, `${name}_optimized.png`);
    const pngSuccess = await optimizeImage(inputPath, optimizedPngPath, {
      quality: config_cat.fallbackQuality,
      maxWidth: config_cat.maxWidth,
      format: 'png'
    });
    
    if (pngSuccess) {
      const pngSize = await getFileSize(optimizedPngPath);
      // Заменяем оригинал оптимизированной версией если она меньше
      if (pngSize < originalSize) {
        await fs.rename(optimizedPngPath, inputPath);
        console.log(`   🔧 PNG оптимизирован (${formatBytes(pngSize)})`);
      } else {
        await fs.unlink(optimizedPngPath);
        console.log(`   ℹ️  PNG оптимизация не дала улучшений`);
      }
    }
  }
  
  if (totalOriginalSize > 0) {
    const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n📊 ${category.toUpperCase()} итого:`);
    console.log(`   До: ${formatBytes(totalOriginalSize)}`);
    console.log(`   После: ${formatBytes(totalOptimizedSize)}`);
    console.log(`   Экономия: ${totalSavings}% (${formatBytes(totalOriginalSize - totalOptimizedSize)})`);
  }
}

async function findReviewImages() {
  const publicDir = './public';
  try {
    const files = await fs.readdir(publicDir);
    return files.filter(file => file.startsWith('IMG_') && file.endsWith('.png'));
  } catch (error) {
    console.error('Ошибка чтения папки public:', error);
    return [];
  }
}

async function main() {
  console.log('🚀 НАЧИНАЕМ ОПТИМИЗАЦИЮ ИЗОБРАЖЕНИЙ\n');
  console.log('Это может занять несколько минут...\n');
  
  // Находим все изображения отзывов
  optimizationTargets.reviews = await findReviewImages();
  console.log(`Найдено ${optimizationTargets.reviews.length} изображений отзывов`);
  
  // Оптимизируем по категориям
  for (const [category, files] of Object.entries(optimizationTargets)) {
    if (files.length > 0) {
      await createOptimizedVersions(category, files);
    }
  }
  
  console.log('\n✅ ОПТИМИЗАЦИЯ ЗАВЕРШЕНА!');
  console.log('\n📝 Что было сделано:');
  console.log('   • Созданы WebP версии всех изображений');
  console.log('   • Оптимизированы PNG файлы для fallback');
  console.log('   • Сжаты изображения отзывов до максимальной ширины 800px');
  console.log('\n🔄 Следующие шаги:');
  console.log('   • Обновить ссылки в коде для использования WebP');
  console.log('   • Добавить fallback на PNG для старых браузеров');
  console.log('   • Протестировать загрузку на мобильных устройствах');
}

// Запуск если файл вызван напрямую
main().catch(console.error);

export { optimizeImage, createOptimizedVersions };