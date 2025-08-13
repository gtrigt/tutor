import React, { useState, useEffect } from 'react';

interface Notification {
  id: number;
  name: string;
  city: string;
  action: string;
  time: string;
  isVisible: boolean;
}

const sampleNotifications = [
  { name: 'Елена', city: 'Казань', action: 'скачала чек-лист ЕГЭ' },
  { name: 'Владислав', city: 'Воронеж', action: 'скачал материалы для подготовки' },
  { name: 'Мария', city: 'Ростов-на-Дону', action: 'скачала гайд по грамматике' },
  { name: 'Анна', city: 'Москва', action: 'скачала словарь по темам' },
  { name: 'Михаил', city: 'СПб', action: 'скачал чек-лист по письму' },
  { name: 'Александр', city: 'Краснодар', action: 'скачал план подготовки' },
  { name: 'Юлия', city: 'Пермь', action: 'скачала шаблоны эссе' },
  { name: 'Артем', city: 'Уфа', action: 'скачал аудиоматериалы' },
  { name: 'Дмитрий', city: 'Екатеринбург', action: 'скачал тесты для практики' },
  { name: 'Ольга', city: 'Нижний Новгород', action: 'скачала фразы-клише' }
];

interface LiveSocialProofProps {
  className?: string;
}

export const LiveSocialProof: React.FC<LiveSocialProofProps> = ({ className = '' }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasShownEnrollment, setHasShownEnrollment] = useState(false);

  useEffect(() => {
    // Проверяем, показывали ли уже уведомление о записи
    const enrollmentShown = localStorage.getItem('enrollmentNotificationShown');
    if (enrollmentShown) {
      setHasShownEnrollment(true);
    }
  }, []);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomData = sampleNotifications[Math.floor(Math.random() * sampleNotifications.length)];
      const timeAgo = Math.floor(Math.random() * 30) + 1; // 1-30 минут назад
      
      const notification: Notification = {
        id: Date.now(),
        name: randomData.name,
        city: randomData.city,
        action: randomData.action,
        time: `${timeAgo} мин. назад`,
        isVisible: true
      };

      setNotifications(prev => {
        const newNotifications = [notification, ...prev.slice(0, 4)]; // Показываем только последние 5
        return newNotifications;
      });

      // Скрываем уведомление через 5 секунд
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(n => n.id === notification.id ? { ...n, isVisible: false } : n)
        );
      }, 5000);

      // Удаляем уведомление через 6 секунд
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notification.id));
      }, 6000);
    };

    const showEnrollmentNotification = () => {
      if (hasShownEnrollment) return;

      // Уменьшаем количество доступных мест
      const currentSpots = parseInt(localStorage.getItem('availableSpots') || '4');
      if (currentSpots > 1) {
        const newSpots = currentSpots - 1;
        localStorage.setItem('availableSpots', newSpots.toString());
        
        // Отправляем событие для обновления UrgencyTriggers
        window.dispatchEvent(new CustomEvent('spotsUpdated', { detail: newSpots }));
      }

      const enrollmentNotification: Notification = {
        id: Date.now(),
        name: 'Анастасия',
        city: 'Москва',
        action: 'записалась на пробный урок',
        time: '2 мин. назад',
        isVisible: true
      };

      setNotifications(prev => [enrollmentNotification, ...prev.slice(0, 4)]);

      // Отмечаем, что показали уведомление о записи
      localStorage.setItem('enrollmentNotificationShown', 'true');
      setHasShownEnrollment(true);

      // Скрываем уведомление через 7 секунд (дольше, чем обычные)
      setTimeout(() => {
        setNotifications(prev => 
          prev.map(n => n.id === enrollmentNotification.id ? { ...n, isVisible: false } : n)
        );
      }, 7000);

      // Удаляем уведомление через 8 секунд
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== enrollmentNotification.id));
      }, 8000);
    };

    // Показываем уведомление о записи через 8 секунд (если еще не показывали)
    const enrollmentTimeout = setTimeout(() => {
      if (!hasShownEnrollment) {
        showEnrollmentNotification();
      }
    }, 8000);
    
    // Показываем первое уведомление о скачивании через 15 секунд
    const initialTimeout = setTimeout(showRandomNotification, 15000);
    
    // Затем показываем новые уведомления каждые 25-35 секунд
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 10000 + 25000; // 25-35 секунд
      setTimeout(showRandomNotification, randomDelay);
    }, 30000);

    return () => {
      clearTimeout(enrollmentTimeout);
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [hasShownEnrollment]);

  if (notifications.length === 0) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-40 space-y-2 ${className}`}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/40
            max-w-sm transform transition-all duration-500 ease-out
            ${notification.isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-arsenal font-bold text-sm">
                {notification.name.charAt(0)}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-arsenal text-sm font-bold text-black truncate">
                {notification.name} из {notification.city}
              </p>
              <p className="font-anonymous text-xs text-gray-600 leading-tight">
                {notification.action}
              </p>
              <p className="font-anonymous text-xs text-green-600 font-bold">
                {notification.time}
              </p>
            </div>
            
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};