const CACHE_NAME = 'tutor-cache-v2';
const STATIC_CACHE = 'tutor-static-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/global.css',
  '/logo.png',
  '/me.png',
  '/telegram.png',
  '/instagram.png',
  '/whatsapp.png',
  '/english.png',
  '/Mark.png',
  '/EGE.png'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Static cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Пропускаем ожидание для немедленной активации
        return self.skipWaiting();
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Берем контроль над всеми страницами
      return self.clients.claim();
    })
  );
});

// Перехват запросов с улучшенной стратегией кэширования
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Пропускаем не-GET запросы
  if (request.method !== 'GET') {
    return;
  }

  // Не кэшируем фавиконы, чтобы они обновлялись сразу
  if (request.url.endsWith('/favicon.ico') || request.url.endsWith('/favicon.svg')) {
    return;
  }

  // Пропускаем запросы к внешним API
  if (request.url.includes('api.telegram.org') || 
      request.url.includes('cdn.jsdelivr.net') ||
      request.url.includes('analytics')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Возвращаем кэшированный ответ, если он есть
        if (response) {
          return response;
        }

        // Клонируем запрос для fetch
        const fetchRequest = request.clone();

        return fetch(fetchRequest).then(
          (response) => {
            // Проверяем, что ответ валидный
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Кэшируем только успешные ответы
            const responseToCache = response.clone();
            
            // Используем разные кэши для разных типов контента
            const cacheName = request.destination === 'image' ? STATIC_CACHE : CACHE_NAME;
            
            caches.open(cacheName)
              .then((cache) => {
                cache.put(request, responseToCache);
              })
              .catch(err => {
                console.log('Cache put failed:', err);
              });

            return response;
          }
        ).catch(() => {
          // В случае ошибки сети, возвращаем fallback для HTML
          if (request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Обработка push-уведомлений
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Новое уведомление',
    icon: '/logo.png',
    badge: '/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Открыть',
        icon: '/logo.png'
      },
      {
        action: 'close',
        title: 'Закрыть',
        icon: '/logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Marat English', options)
  );
});

// Обработка кликов по уведомлениям
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 