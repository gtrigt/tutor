import React, { useState, useEffect } from 'react';

interface TimerProps {
  compact?: boolean;
}

export const Timer: React.FC<TimerProps> = ({ compact = false }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 24, seconds: 59 });

  useEffect(() => {
    // Попытаться загрузить время из localStorage
    const savedEndTime = localStorage.getItem('timerEndTime');
    
    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const currentTime = Date.now();
      const remainingTime = Math.max(0, endTime - currentTime);
      
      if (remainingTime > 0) {
        // Если время ещё не истекло, вычислить оставшееся время (только минуты и секунды)
        const totalSeconds = Math.floor(remainingTime / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        // Ограничиваем максимум до 25 минут
        const cappedMinutes = Math.min(minutes, 24);
        
        setTime({ hours: 0, minutes: cappedMinutes, seconds });
      } else {
        // Если время истекло, начать новый 25-минутный цикл
        const newEndTime = Date.now() + (25 * 60 * 1000);
        localStorage.setItem('timerEndTime', newEndTime.toString());
        setTime({ hours: 0, minutes: 24, seconds: 59 });
      }
    } else {
      // Если сохранённого времени нет, начать новый 25-минутный цикл
      const newEndTime = Date.now() + (25 * 60 * 1000);
      localStorage.setItem('timerEndTime', newEndTime.toString());
      setTime({ hours: 0, minutes: 24, seconds: 59 });
    }

    const timer = setInterval(() => {
      setTime(prevTime => {
        let { minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          // Таймер достиг 0, начать новый 25-минутный цикл
          const newEndTime = Date.now() + (25 * 60 * 1000);
          localStorage.setItem('timerEndTime', newEndTime.toString());
          minutes = 24;
          seconds = 59;
        }
        
        return { hours: 0, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`font-arsenal font-bold text-brand-primary ${
      compact 
        ? "text-4xl md:text-5xl lg:text-6xl xl:text-7xl" 
        : "text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] max-md:font-black"
    }`}>
      {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
    </div>
  );
};
