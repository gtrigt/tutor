#!/usr/bin/env node

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация оптимизации
const config = {
  quality: 80,
  formats: ['webp', 'avif'],
  sizes: {
    thumbnail: 300,
    medium: 800,
    large: 1200
  }
};

// Функция для оптимизации изображения
async function optimizeImage(inputPath, outputDir, filename) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Создаем WebP версию
    await image
      .webp({ quality: config.quality })
      .toFile(path.join(outputDir, `${filename}.webp`));
    
    // Создаем AVIF версию (если поддерживается)
    try {
      await sharp(inputPath)
        .avif({ quality: config.quality })
        .toFile(path.join(outputDir, `${filename}.avif`));
    } catch (e) {
      console.log(`AVIF не поддерживается для ${filename}`);
    }
    
    // Создаем разные размеры
    for (const [sizeName, size] of Object.entries(config.sizes)) {
      await image
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${filename}-${sizeName}.webp`));
    }
    
    console.log(`✅ Оптимизировано: ${filename}`);
  } catch (error) {
    console.error(`❌ Ошибка оптимизации ${filename}:`, error.message);
  }
}

// Основная функция
async function optimizeAllImages() {
  const imageDirs = [
    'public/images/hero',
    'public/images/blog',
    'public/images/reviews',
    'public/images/icons'
  ];
  
  for (const dir of imageDirs) {
    try {
      await fs.access(dir);
      console.log(`\n🖼️  Оптимизация папки: ${dir}`);
      
      const files = await fs.readdir(dir);
      const imageFiles = files.filter(file => 
        /\.(png|jpg|jpeg)$/i.test(file)
      );
      
      console.log(`   Найдено ${imageFiles.length} изображений для оптимизации`);
      
      for (const file of imageFiles) {
        const inputPath = path.join(dir, file);
        const filename = path.parse(file).name;
        console.log(`   Обрабатываю: ${file}`);
        await optimizeImage(inputPath, dir, filename);
      }
    } catch (error) {
      console.log(`   Папка ${dir} не существует, пропускаем`);
    }
  }
}

// Запуск оптимизации
console.log('🚀 Запуск оптимизации изображений...');
optimizeAllImages().then(() => {
  console.log('\n🎉 Оптимизация изображений завершена!');
}).catch(error => {
  console.error('❌ Ошибка оптимизации:', error);
});

export { optimizeAllImages }; 