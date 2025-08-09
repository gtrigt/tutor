import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 23, seconds: 48 });

  useEffect(() => {
    // Попытаться загрузить время из localStorage
    const savedEndTime = localStorage.getItem('timerEndTime');
    
    if (savedEndTime) {
      const endTime = parseInt(savedEndTime);
      const currentTime = Date.now();
      const remainingTime = Math.max(0, endTime - currentTime);
      
      if (remainingTime > 0) {
        // Если время ещё не истекло, вычислить оставшееся время
        const totalSeconds = Math.floor(remainingTime / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        setTime({ hours, minutes, seconds });
      } else {
        // Если время истекло, начать новый 24-часовой цикл
        const newEndTime = Date.now() + (24 * 60 * 60 * 1000);
        localStorage.setItem('timerEndTime', newEndTime.toString());
        setTime({ hours: 23, minutes: 59, seconds: 59 });
      }
    } else {
      // Если сохранённого времени нет, начать новый 24-часовой цикл
      const newEndTime = Date.now() + (24 * 60 * 60 * 1000);
      localStorage.setItem('timerEndTime', newEndTime.toString());
      setTime({ hours: 23, minutes: 59, seconds: 59 });
    }

    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Таймер достиг 0, начать новый 24-часовой цикл
          const newEndTime = Date.now() + (24 * 60 * 60 * 1000);
          localStorage.setItem('timerEndTime', newEndTime.toString());
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="font-arsenal text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-brand-primary max-md:font-black">
      {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
    </div>
  );
};
