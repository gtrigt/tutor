import React, { useState, useEffect } from 'react';

interface UrgencyTriggersProps {
  className?: string;
}

export const UrgencyTriggers: React.FC<UrgencyTriggersProps> = ({ className = '' }) => {
  const [availableSpots, setAvailableSpots] = useState(4);
  const [daysToEge, setDaysToEge] = useState(0);

  useEffect(() => {
    // Расчет дней до ЕГЭ (примерно 28 мая каждого года)
    const currentYear = new Date().getFullYear();
    const egeDate = new Date(currentYear, 4, 28); // Май = 4 (месяцы с 0)
    
    // Если ЕГЭ уже прошло в этом году, считаем до следующего года
    if (egeDate < new Date()) {
      egeDate.setFullYear(currentYear + 1);
    }
    
    const diffTime = egeDate.getTime() - new Date().getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysToEge(diffDays);

    // Загружаем количество доступных мест из localStorage или устанавливаем по умолчанию
    const savedSpots = localStorage.getItem('availableSpots');
    if (savedSpots) {
      setAvailableSpots(parseInt(savedSpots));
    } else {
      setAvailableSpots(4);
      localStorage.setItem('availableSpots', '4');
    }

    // Слушаем события обновления мест
    const handleSpotsUpdate = (event: CustomEvent) => {
      setAvailableSpots(event.detail);
    };

    window.addEventListener('spotsUpdated', handleSpotsUpdate as EventListener);

    return () => {
      window.removeEventListener('spotsUpdated', handleSpotsUpdate as EventListener);
    };
  }, []);

  return (
    <div className={`${className}`}>
      {/* Счетчик мест - Новый дизайн из Figma */}
      <div 
        className="mb-4 text-center relative overflow-hidden mx-auto"
        style={{
          borderRadius: '20px',
          width: 'clamp(300px, 90vw, 478px)',
          height: 'clamp(120px, 25vh, 169px)',
          boxShadow: 'inset 9px 5px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Фоновый слой с opacity */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #988c8b 0%, rgba(140, 113, 113, 0.62) 100%)',
            opacity: 0.6
          }}
        />
        
        {/* Текстовый слой без opacity */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4 z-10">
          {/* Верхняя строка */}
          <div className="flex items-center justify-center gap-2 mb-4 -mt-2">
            <img 
              src="/images/hero/campfire.png" 
              alt="Ограниченное предложение - иконка костра" 
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain drop-shadow-lg"
              loading="lazy"
            />
            <span className="font-arsenal text-base sm:text-lg font-bold uppercase tracking-wide drop-shadow-lg">
              ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ
            </span>
          </div>
          
          {/* Средняя строка */}
          <p className="font-arsenal text-base sm:text-lg font-bold mb-2 text-center drop-shadow-lg">
            ОСТАЛОСЬ ВСЕГО <span className="text-2xl sm:text-3xl font-extrabold text-white bg-black/40 px-3 py-1 rounded-xl border border-white/30">{availableSpots}</span> МЕСТА НА ЭТОТ МЕСЯЦ
          </p>
          
          {/* Нижняя строка */}
          <p className="font-arsenal text-xs sm:text-sm text-gray-800 text-center drop-shadow-lg">
            После заполнения мест запись откроется только в следующем месяце
          </p>
        </div>
      </div>

      {/* Таймер до ЕГЭ - Новый дизайн из Figma */}
      <div 
        className="text-center relative overflow-hidden mx-auto"
        style={{
          borderRadius: '20px',
          width: 'clamp(300px, 90vw, 478px)',
          height: 'clamp(120px, 25vh, 169px)',
          boxShadow: 'inset 9px 5px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Фоновый слой с opacity */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #9c4f4b 0%, rgba(189, 143, 143, 0.62) 100%)',
            opacity: 0.6
          }}
        />
        
        {/* Текстовый слой без opacity */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4 z-10">
          {/* Верхняя строка */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <img 
              src="/images/hero/alarm-clock.png" 
              alt="Таймер до ЕГЭ - иконка будильника" 
              className="w-5 h-5 object-contain drop-shadow-lg"
              loading="lazy"
            />
            <span 
              className="font-arsenal font-bold uppercase tracking-wide drop-shadow-lg"
              style={{
                fontSize: '20px',
                color: '#000'
              }}
            >
              ДО ЕГЭ ПО АНГЛИЙСКОМУ
            </span>
          </div>
          
          {/* Средняя строка - количество дней */}
          <p 
            className="font-arsenal font-bold mb-2 text-center drop-shadow-lg"
            style={{
              fontSize: '32px',
              color: '#000'
            }}
          >
            {daysToEge} ДНЕЙ
          </p>
          
          {/* Нижняя строка */}
          <p className="font-arsenal text-sm text-gray-800 text-center drop-shadow-lg">
            Каждый день промедления — это потерянные баллы. Начни подготовку сейчас!
          </p>
        </div>
      </div>
    </div>
  );
};