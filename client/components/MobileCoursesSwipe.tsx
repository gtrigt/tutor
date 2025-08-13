import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MobileModal } from './MobileModal';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const courses: Course[] = [
  {
    id: 'language',
    title: 'ОБУЧЕНИЕ ЯЗЫКУ',
    description: 'Постоянная практика языка на уроках, чтобы уже с начала занятий разрушить языковой барьер и научиться свободно говорить на языке с носителями!',
    image: '/english'
  },
  {
    id: 'olimp',
    title: 'ОЛИМПИАДНАЯ ПОДГОТОВКА',
    description: 'Подготовка к олимпиадам по английскому языку с фокусом на углубленное изучение грамматики, лексики и культурных аспектов.',
    image: '/olimp'
  },
  {
    id: 'oge-ege',
    title: 'ПОДГОТОВКА К ЕГЭ/ОГЭ',
    description: 'Системная подготовка к экзаменам с разбором всех типов заданий, стратегиями выполнения и практикой на реальных материалах.',
    image: '/ege',
    comingSoon: true
  }
];

export function MobileCoursesSwipe() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const newX = e.touches[0].clientX;
    setCurrentX(newX);
    
    const deltaX = newX - startX;
    setTranslateX(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const deltaX = currentX - startX;
    const threshold = 100; // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(prev => prev - 1);
      } else if (deltaX < 0 && currentIndex < courses.length - 1) {
        // Swipe left - go to next
        setCurrentIndex(prev => prev + 1);
      }
    }
    
    setTranslateX(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-[690px]:hidden">
      {/* Course Cards Swipe */}
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {courses.map((course, index) => (
            <div key={course.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                {/* Course Image */}
                <div className="relative mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  {course.comingSoon && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <div className="bg-white/90 rounded-2xl px-4 py-2">
                        <span className="font-arsenal text-sm font-bold text-black">СКОРО</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Course Content */}
                <div className="text-center">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                    {course.title}
                  </h3>
                  <p className="font-anonymous text-sm text-gray-700 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {!course.comingSoon && (
                    <MobileModal
                      trigger={
                        <Button className="w-full bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal font-bold py-3 rounded-2xl">
                          Записаться
                        </Button>
                      }
                      title={course.title}
                    >
                      <div className="space-y-4">
                        <p className="text-center text-gray-600">
                          Оставь заявку на {course.title.toLowerCase()}
                        </p>
                        <Button className="w-full bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal font-bold py-3 rounded-2xl">
                          Отправить заявку
                        </Button>
                      </div>
                    </MobileModal>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {courses.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex 
                ? 'bg-brand-secondary' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 