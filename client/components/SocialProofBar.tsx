import React, { useState, useEffect } from 'react';

interface Achievement {
  name: string;
  result: string;
  date: string;
  exam: string;
}

export const SocialProofBar: React.FC = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [totalStudents, setTotalStudents] = useState(147);

  const achievements: Achievement[] = [
    { name: "Анастасия К.", result: "98 баллов", date: "июнь 2024", exam: "ЕГЭ" },
    { name: "Максим Р.", result: "победитель", date: "март 2025", exam: "Олимпиада ВШЭ" },
    { name: "Дарья М.", result: "95 баллов", date: "июнь 2025", exam: "ЕГЭ" },
    { name: "Артем С.", result: "IELTS 8.0", date: "январь 2025", exam: "IELTS" },
    { name: "София П.", result: "92 балла", date: "июнь 2024", exam: "ЕГЭ" },
    { name: "Никита В.", result: "призёр", date: "апрель 2024", exam: "ВСОШ" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);

    // Медленный рост счетчика учеников (имитация)
    const studentInterval = setInterval(() => {
      setTotalStudents(prev => {
        const shouldIncrease = Math.random() > 0.7; // 30% шанс увеличения
        return shouldIncrease ? prev + 1 : prev;
      });
    }, 30000); // каждые 30 секунд

    return () => {
      clearInterval(interval);
      clearInterval(studentInterval);
    };
  }, [achievements.length]);

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-brand-secondary/30 rounded-2xl p-4 shadow-lg">
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center justify-between gap-4">
        {/* Счетчик учеников */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <p className="font-arsenal text-sm text-black/70">Довольных учеников:</p>
            <p className="font-arsenal text-2xl font-bold text-black">{totalStudents}+</p>
          </div>
        </div>

        {/* Живые достижения */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="text-lg">🏆</span>
          <div className="min-w-0 flex-1">
            <p className="font-arsenal text-sm text-black/70">Последний результат:</p>
            <p className="font-arsenal text-lg font-bold text-black truncate">
              {achievements[currentAchievement].name} — {achievements[currentAchievement].result}
            </p>
            <p className="font-anonymous text-xs text-black/60">
              {achievements[currentAchievement].exam}, {achievements[currentAchievement].date}
            </p>
          </div>
        </div>

        {/* Статистика успеха */}
        <div className="text-center">
          <p className="font-arsenal text-sm text-black/70">Средний результат:</p>
          <p className="font-arsenal text-2xl font-bold text-green-600">87 баллов</p>
          <p className="font-anonymous text-xs text-black/60">на ЕГЭ</p>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {/* Счетчик учеников - Mobile */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-center">
            <p className="font-arsenal text-sm text-black/70">Довольных учеников:</p>
            <p className="font-arsenal text-xl font-bold text-black">{totalStudents}+</p>
          </div>
        </div>

        {/* Живые достижения - Mobile */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-lg">🏆</span>
            <p className="font-arsenal text-sm text-black/70">Последний результат:</p>
          </div>
          <p className="font-arsenal text-base font-bold text-black mb-1">
            {achievements[currentAchievement].name} — {achievements[currentAchievement].result}
          </p>
          <p className="font-anonymous text-xs text-black/60">
            {achievements[currentAchievement].exam}, {achievements[currentAchievement].date}
          </p>
        </div>

        {/* Статистика успеха - Mobile */}
        <div className="text-center">
          <p className="font-arsenal text-sm text-black/70">Средний результат:</p>
          <p className="font-arsenal text-xl font-bold text-green-600">87 баллов</p>
          <p className="font-anonymous text-xs text-black/60">на ЕГЭ</p>
        </div>
      </div>
    </div>
  );
};