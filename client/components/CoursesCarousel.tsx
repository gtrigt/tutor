import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  bgColor: string;
  textColor?: string;
  icon: React.ReactNode;
  description: string;
  duration: string;
  format: string;
  includes: string[];
}

const courses: Course[] = [
  {
    id: 'oge-ege',
    title: 'ОГЭ-ЕГЭ',
    subtitle: 'подготовка к экзаменам',
    features: [
      '• ОНЛАЙН ВЕБИНАРЫ',
      '• ГРУППОВЫЕ ЗАНЯТИЯ ОНЛАЙН',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• РЕГУЛЯРНЫЕ ПРОБНЫЕ',
      '• ГОТОВЫЕ КЛИШЕ',
      '• УНИКАЛЬНЫЕ ЛАЙФХАКИ'
    ],
    price: '8.000 руб',
    bgColor: '#FFF3E3',
    description: 'Комплексная подготовка к ОГЭ и ЕГЭ по английскому языку. Системный подход, проверенная методика и гарантированный результат.',
    duration: '9 месяцев',
    format: 'Группы',
    includes: [
      'Еженедельные занятия с преподавателем',
      'Доступ к интерактивной платформе 24/7',
      'Персональный план обучения',
      'Регулярные пробные экзамены',
      'Готовые шаблоны и клише',
      'Разбор типичных ошибок',
      'Поддержка куратора'
    ],
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
      '• ГРУППОВЫЕ ЗАНЯТИЯ ОНЛАЙН',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• ПРОВЕРОЧНЫЕ СЕССИИ',
      '• АВТОРСКИЕ ЗАДАНИЯ',
      '• СОПРОВОЖДЕНИЕ ПРИ СДАЧЕ'
    ],
    price: '10.000 руб',
    bgColor: '#F3F1E2',
    textColor: '#D5D1B2',
    description: 'Профессиональная подготовка к международному экзамену IELTS. Достигни нужного балла для учёбы или работы за рубежом.',
    duration: '6 месяцев',
    format: 'Группы',
    includes: [
      'Интенсивная подготовка к 4 модулям',
      'Практические тесты каждую неделю',
      'Персональная проработка Speaking',
      'Авторские материалы и стратегии',
      'Сопровождение при регистрации',
      'Разбор результатов пробных тестов',
      'Гарантия достижения целевого балла'
    ],
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
      '• ГРУППОВЫЕ ЗАНЯТИЯ ОНЛАЙН',
      '• ИНДИВИДУАЛЬНЫЙ ПЛАН',
      '• УЧЕБНЫЕ МАТЕРИАЛЫ',
      '• ПРОВЕРОЧНЫЕ СЕССИИ',
      '• АВТОРСКИЕ ЗАДАНИЯ'
    ],
    price: '9.000 руб',
    bgColor: 'white',
    description: 'Элитная подготовка к олимпиадам всех уровней. От школьных до международных — путь к победе начинается здесь.',
    duration: '10 месяцев',
    format: 'Группы',
    includes: [
      'Подготовка к олимпиадам всех уровней',
      'Разбор олимпиадных заданий прошлых лет',
      'Тренировка креативного мышления',
      'Индивидуальная стратегия подготовки',
      'Участие в пробных олимпиадах',
      'Психологическая подготовка к соревнованиям',
      'Сопровождение во время олимпиад'
    ],
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
          <Dialog key={course.id}>
            <DialogTrigger asChild>
              <div
                className="rounded-xl shadow-lg p-6 relative min-h-[400px] flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
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
                
                <div className="mt-auto pt-4 -mx-6">
                  <div className="perforated-divider-full mb-4" aria-hidden="true"></div>
                  <div className="font-anonymous text-2xl font-normal text-black text-center px-6">
                    {course.price}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="course-modal max-w-2xl max-h-[85vh] overflow-y-auto border-0" style={{ backgroundColor: course.bgColor }}>
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="font-arsenal text-4xl font-bold text-black flex items-center justify-center gap-4 mb-2">
                  <div style={{ color: course.textColor || '#9C4F4B' }}>
                    {course.icon}
                  </div>
                  {course.title}
                </DialogTitle>
                <p className="font-arsenal text-xl text-black opacity-70">{course.subtitle}</p>
              </DialogHeader>
              
              <div className="space-y-8">
                <div className="text-center">
                  <p className="font-arsenal text-lg text-black leading-relaxed">{course.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h4 className="font-arsenal text-xl font-bold text-black">Длительность</h4>
                    </div>
                    <p className="font-anonymous text-lg text-black">{course.duration}</p>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h4 className="font-arsenal text-xl font-bold text-black">Формат</h4>
                    </div>
                    <p className="font-anonymous text-lg text-black">{course.format}</p>
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-arsenal text-xl font-bold text-black">Что включено:</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white"/>
                          </svg>
                        </div>
                        <p className="font-anonymous text-black leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-6">
                  <div className="perforated-divider-full mb-6" aria-hidden="true"></div>
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 shadow-lg">
                    <p className="font-arsenal text-sm text-black opacity-70 mb-2">Стоимость курса</p>
                    <div className="font-anonymous text-4xl font-bold text-black mb-3">
                      {course.price}
                    </div>
                    <p className="font-arsenal text-sm text-black opacity-60">за весь курс</p>
                  </div>
                  <Button className="course-cta-button text-black font-arsenal text-xl font-bold px-10 py-4 rounded-2xl w-full md:w-auto">
                    Записаться на курс
                  </Button>
                  <p className="font-arsenal text-sm text-black opacity-50 mt-3">
                    Первое занятие — бесплатно
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
              <Dialog key={course.id}>
                <DialogTrigger asChild>
                  <div
                    className="w-full flex-shrink-0 rounded-xl shadow-lg p-6 relative min-h-[400px] flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300"
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
                    
                    <div className="mt-auto pt-4 -mx-6">
                      <div className="perforated-divider-full mb-4" aria-hidden="true"></div>
                      <div className="font-anonymous text-2xl font-normal text-black text-center px-6">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="course-modal max-w-[95vw] max-h-[85vh] overflow-y-auto border-0" style={{ backgroundColor: course.bgColor }}>
                  <DialogHeader className="text-center pb-4">
                    <DialogTitle className="font-arsenal text-2xl font-bold text-black flex items-center justify-center gap-3 mb-1">
                      <div style={{ color: course.textColor || '#9C4F4B' }}>
                        {course.icon}
                      </div>
                      {course.title}
                    </DialogTitle>
                    <p className="font-arsenal text-lg text-black opacity-70">{course.subtitle}</p>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="font-arsenal text-base text-black leading-relaxed">{course.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                            </svg>
                          </div>
                          <h4 className="font-arsenal text-lg font-bold text-black">Длительность</h4>
                        </div>
                        <p className="font-anonymous text-base text-black">{course.duration}</p>
                      </div>
                      
                      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" fill="currentColor"/>
                            </svg>
                          </div>
                          <h4 className="font-arsenal text-lg font-bold text-black">Формат</h4>
                        </div>
                        <p className="font-anonymous text-base text-black">{course.format}</p>
                      </div>
                    </div>

                    <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-white/50 rounded-full flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
                          </svg>
                        </div>
                        <h4 className="font-arsenal text-lg font-bold text-black">Что включено:</h4>
                      </div>
                      <div className="space-y-2">
                        {course.includes.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white"/>
                              </svg>
                            </div>
                            <p className="font-anonymous text-sm text-black leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <div className="perforated-divider-full mb-4" aria-hidden="true"></div>
                      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/20 shadow-lg">
                        <p className="font-arsenal text-xs text-black opacity-70 mb-1">Стоимость курса</p>
                        <div className="font-anonymous text-3xl font-bold text-black mb-2">
                          {course.price}
                        </div>
                        <p className="font-arsenal text-xs text-black opacity-60">за весь курс</p>
                      </div>
                      <Button className="course-cta-button text-black font-arsenal text-lg font-bold px-8 py-3 rounded-2xl w-full">
                        Записаться на курс
                      </Button>
                      <p className="font-arsenal text-xs text-black opacity-50 mt-2">
                        Первое занятие — бесплатно
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
