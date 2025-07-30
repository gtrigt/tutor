import React, { useState, useRef, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  bgColor: string;
  textColor?: string;
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    id: 'oge-ege',
    title: 'ОГЭ-ЕГЭ',
    subtitle: 'подготовка к экзаменам',
    features: [
      '• ОНЛАЙН ВЕБИНАРЫ',
      '• ЛИЧНЫЕ ВСТРЕЧИ С ПЕДАГОГОМ',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• РЕГУЛЯРНЫЕ ПРОБНЫЕ',
      '• ГОТОВЫЕ КЛИШЕ',
      '• УНИКАЛЬНЫЕ ЛАЙФХАКИ'
    ],
    price: '8.000 руб',
    bgColor: '#FFF3E3',
    icon: (
      <svg width="27" height="34" viewBox="0 0 30 38" fill="none">
        <path d="M20 21.5V36H23.5V21.5L21.5 34V23V22M2 2H28.5V28H2V2ZM23 18L20 21H25.5L23 18Z" stroke="currentColor" strokeWidth="3"/>
        <path d="M6 8H24M6 13H24M6 18H18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'ielts',
    title: 'IELTS',
    subtitle: 'подготовка к экзамену',
    features: [
      '• ОНЛАЙН ВЕБИНАРЫ',
      '• ЛИЧНЫЕ ВСТРЕЧИ С ПЕДАГОГОМ',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• ПРОВЕРОЧНЫЕ СЕССИИ',
      '• АВТОРСКИЕ ЗАДАНИЯ',
      '• СОПРОВОЖДЕНИЕ ПРИ СДАЧЕ'
    ],
    price: '10.000 руб',
    bgColor: '#F3F1E2',
    textColor: '#D5D1B2',
    icon: (
      <svg width="43" height="24" viewBox="0 0 49 28" fill="none">
        <path d="M10 12L11 23.5C15 25.6667 24.9 28.5 32.5 22.5C32.5 13.3 32.5 9.36364 32.5 8.54545M32.5 8.54545L37 6.5L20.5 2.5L4.5 9.5L20.5 14L32.5 8.54545ZM41 6.5L44.5 15.5L44 18.5L46 15.5L47.5 14" stroke="currentColor" strokeWidth="3"/>
      </svg>
    )
  },
  {
    id: 'olimp',
    title: 'OLIMP',
    subtitle: 'олимпиадная подготовка',
    features: [
      '• ОНЛАЙН ВЕБИНАРЫ',
      '• ЛИЧНЫЕ ВСТРЕЧИ С ПЕДАГОГОМ',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• ПРОВЕРОЧНЫЕ СЕССИИ',
      '• АВТОРСКИЕ ЗАДАНИЯ'
    ],
    price: '9.000 руб',
    bgColor: 'white',
    icon: (
      <svg width="37" height="26" viewBox="0 0 39 29" fill="none">
        <path d="M1.5 27.5004L10.5 17.5004L15.5 24.0004L30 3.5004M30 3.5004C32.9925 1.16909 34.723 0.952261 38 3.5004M30 3.5004L27.5 10.5004C26.1667 17.3337 26.1 30.2004 36.5 27.0004" stroke="currentColor" strokeWidth="3"/>
      </svg>
    )
  }
];

export const CoursesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging) return;
    
    const diff = startX - clientX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX);
  };

  return (
    <>
      {/* Desktop Grid (700px+) */}
      <div className="hidden min-[700px]:grid grid-cols-3 gap-6 lg:gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl shadow-lg p-6 relative min-h-[400px] flex flex-col"
            style={{ backgroundColor: course.bgColor }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-arsenal text-4xl font-bold text-black mb-1">
                  {course.title}
                </h3>
                <p className="font-anonymous text-sm text-black mb-4">
                  {course.subtitle}
                </p>
              </div>
              <div 
                className="ml-4 opacity-70"
                style={{ color: course.textColor || '#9C4F4B' }}
              >
                {course.icon}
              </div>
            </div>
            
            <div className="flex-1 mb-6">
              <div className="font-arsenal text-base text-black space-y-3">
                {course.features.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </div>
            </div>
            
            <div className={`${course.bgColor !== 'white' ? 'border-t border-black/20 pt-4' : ''} mt-auto`}>
              <div className="font-anonymous text-2xl font-normal text-black text-center">
                {course.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel (under 700px) */}
      <div className="min-[700px]:hidden relative max-w-md mx-auto">
        {/* Course Card */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          ref={carouselRef}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="w-full flex-shrink-0 rounded-xl shadow-lg p-6 relative min-h-[400px] flex flex-col"
                style={{ backgroundColor: course.bgColor }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-arsenal text-4xl font-bold text-black mb-1">
                      {course.title}
                    </h3>
                    <p className="font-anonymous text-sm text-black mb-4">
                      {course.subtitle}
                    </p>
                  </div>
                  <div 
                    className="ml-4 opacity-70"
                    style={{ color: course.textColor || '#9C4F4B' }}
                  >
                    {course.icon}
                  </div>
                </div>
                
                <div className="flex-1 mb-6">
                  <div className="font-arsenal text-base text-black space-y-3">
                    {course.features.map((feature, index) => (
                      <p key={index}>{feature}</p>
                    ))}
                  </div>
                </div>
                
                <div className={`${course.bgColor !== 'white' ? 'border-t border-black/20 pt-4' : ''} mt-auto`}>
                  <div className="font-anonymous text-2xl font-normal text-black text-center">
                    {course.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Navigation Arrows - positioned outside the card */}
        <button
          onClick={prevSlide}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-all duration-200 z-10"
          aria-label="Previous course"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-all duration-200 z-10"
          aria-label="Next course"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-brand-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to course ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};
