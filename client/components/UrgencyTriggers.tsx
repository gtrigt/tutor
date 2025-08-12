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

    // Фиксированное количество доступных мест
    setAvailableSpots(4);
    localStorage.setItem('availableSpots', '4');
  }, []);

  return (
    <div className={`${className}`}>
      {/* Счетчик мест */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-red-600 text-lg">🔥</span>
          <span className="font-arsenal text-sm font-bold text-red-800 uppercase tracking-wide">
            Ограниченное предложение
          </span>
        </div>
        <p className="font-arsenal text-lg font-bold text-red-700">
          Осталось всего <span className="text-2xl text-red-600">{availableSpots}</span> места на этот месяц
        </p>
        <p className="font-anonymous text-sm text-red-600 mt-1">
          После заполнения мест запись откроется только в следующем месяце
        </p>
      </div>

      {/* Таймер до ЕГЭ */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-blue-600 text-lg">⏰</span>
          <span className="font-arsenal text-sm font-bold text-blue-800 uppercase tracking-wide">
            До ЕГЭ по английскому
          </span>
        </div>
        <p className="font-arsenal text-2xl font-bold text-blue-700 mb-1">
          {daysToEge} дней
        </p>
        <p className="font-anonymous text-sm text-blue-600">
          Каждый день промедления — это потерянные баллы. Начни подготовку сейчас!
        </p>
      </div>
    </div>
  );
};