// Скрипт для очистки кэша и исправления проблем с загрузкой
// Запустите этот код в консоли браузера (F12 → Console)

console.log('🧹 Начинаем очистку кэша...');

// 1. Очищаем Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    console.log(`📱 Найдено ${registrations.length} Service Worker'ов`);
    for(let registration of registrations) {
      registration.unregister();
      console.log('✅ Service Worker удален');
    }
  });
  
  // Очищаем все кэши
  caches.keys().then(function(names) {
    console.log(`🗂️ Найдено ${names.length} кэшей`);
    for (let name of names) {
      caches.delete(name);
      console.log(`✅ Кэш "${name}" очищен`);
    }
  });
}

// 2. Очищаем localStorage и sessionStorage
const localStorageSize = Object.keys(localStorage).length;
const sessionStorageSize = Object.keys(sessionStorage).length;

localStorage.clear();
sessionStorage.clear();

console.log(`💾 Очищено ${localStorageSize} элементов localStorage`);
console.log(`💾 Очищено ${sessionStorageSize} элементов sessionStorage`);

// 3. Очищаем IndexedDB (если есть)
if ('indexedDB' in window) {
  indexedDB.databases().then(databases => {
    databases.forEach(db => {
      indexedDB.deleteDatabase(db.name);
      console.log(`🗄️ База данных "${db.name}" удалена`);
    });
  });
}

// 4. Очищаем кэш изображений
if ('caches' in window) {
  caches.open('image-cache').then(cache => {
    cache.keys().then(requests => {
      requests.forEach(request => {
        cache.delete(request);
      });
      console.log('🖼️ Кэш изображений очищен');
    });
  });
}

// 5. Принудительно перезагружаем favicon
const faviconLinks = document.querySelectorAll('link[rel*="icon"]');
faviconLinks.forEach(link => {
  const href = link.href;
  link.href = '';
  link.href = href;
  console.log(`🔄 Favicon "${href}" перезагружен`);
});

// 6. Очищаем кэш fetch
if ('fetch' in window) {
  // Создаем новый fetch без кэша
  const originalFetch = window.fetch;
  window.fetch = function(url, options = {}) {
    options.cache = 'no-store';
    return originalFetch(url, options);
  };
  console.log('🌐 Fetch кэш отключен');
}

console.log('✨ Очистка завершена! Перезагрузите страницу (Ctrl+R или Cmd+R)');

// 7. Автоматическая перезагрузка через 2 секунды
setTimeout(() => {
  console.log('🔄 Автоматическая перезагрузка через 3 секунды...');
  setTimeout(() => {
    window.location.reload(true);
  }, 3000);
}, 2000); 