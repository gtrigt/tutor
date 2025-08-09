import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  TelegramIcon, 
  MonitorIcon, 
  InteractiveBoardIcon,
  NotesIcon,
  CareIcon,
  BookIcon,
  IncreaseIcon,
  InstagramIcon 
} from '@/components/Icons';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { Timer } from '@/components/Timer';
import { CoursesCarousel } from '@/components/CoursesCarousel';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Index() {
  const aboutSection = useIntersectionObserver({ threshold: 0.1 });
  const advantagesSection = useIntersectionObserver({ threshold: 0.1 });
  const coursesSection = useIntersectionObserver({ threshold: 0.1 });
  const reviewsSection = useIntersectionObserver({ threshold: 0.1 });
  const contactsSection = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#EBE4E2' }}>
      {/* Hero Section */}
      <section className="relative px-0 py-8 lg:py-12 max-w-7xl mx-auto">
        {/* Header with contact info */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-8 lg:mb-12">
          <div className="rounded-[35px] h-12 md:h-14 lg:h-16 xl:h-18 shadow-md relative flex items-center justify-between px-4 lg:px-6 xl:px-8" style={{ backgroundColor: '#FFF6F6' }}>
            {/* Telegram Icon */}
            <a href="https://t.me/m/VX8q96qONjYy" target="_blank" rel="noopener noreferrer" title="Telegram">
              <img
                src="/telegram.png"
                alt="Telegram"
                className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 opacity-80 flex-shrink-0 object-contain cursor-pointer hover:opacity-100 transition-opacity"
              />
            </a>
            
            {/* Center Logo */}
            <div className="flex items-center flex-1 justify-center">
              <img
                src="/logo.png"
                alt="MF Logo"
                className="w-auto h-[46px] md:h-[50px] lg:h-[56px] xl:h-[64px]"
                style={{ transform: 'translateY(3px) translateX(-3px)' }}
              />
            </div>
            
            {/* Hamburger Menu */}
            <div className="flex-shrink-0">
              <HamburgerMenu />
            </div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative">
          {/* Desktop Layout (>690px) */}
          <div className="hidden min-[690px]:flex min-[690px]:items-center min-[690px]:justify-center min-[690px]:gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12 px-4 lg:px-8">
            {/* Left side - Photo with background (главный элемент) */}
            <div className="relative flex-shrink-0">
              {/* Background rectangle */}
              <div
                className="absolute rounded-3xl opacity-60 shadow-inner z-0"
                style={{
                  background: 'linear-gradient(180deg, #9C4F4B 0%, rgba(5, 5, 5, 0.62) 100%)',
                  boxShadow: '9px 5px 4px 0 rgba(0, 0, 0, 0.25) inset',
                  width: 'clamp(320px, 28vw, 400px)',
                  height: 'clamp(300px, 26vw, 380px)',
                  left: '50%',
                  top: '48px',
                  transform: 'translateX(-50%) translateY(40px)',
                  paddingLeft: '55px',
                }}
              ></div>
              <img
                src="/me.png"
                alt="Преподаватель английского языка"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
                style={{
                  width: 'clamp(320px, 28vw, 400px)',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Vertical divider line */}
            <div className="hidden min-[690px]:block h-64 lg:h-72 xl:h-80 w-px bg-gradient-to-b from-transparent via-brand-secondary to-transparent opacity-60 flex-shrink-0"></div>

            {/* Right side - Timer and CTA (вторичный элемент) */}
            <div className="flex-1 text-center max-w-sm lg:max-w-md">
              {/* Compact Timer для desktop */}
              <Timer compact={true} />
              <div className="font-arsenal text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-black opacity-50 mt-2 mb-6">
                БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК
              </div>
              <Button className="bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal text-lg lg:text-xl font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                УСПЕЙ ЗАПИСАТЬСЯ
              </Button>
            </div>
          </div>

          {/* Mobile Layout (<690px) */}
          <div className="min-[690px]:hidden">
            {/* Hero image with background */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                {/* Background rectangle */}
                <div
                  className="absolute rounded-3xl opacity-60 shadow-inner z-0"
                  style={{
                    background: 'linear-gradient(180deg, #9C4F4B 0%, rgba(5, 5, 5, 0.62) 100%)',
                    boxShadow: '9px 5px 4px 0 rgba(0, 0, 0, 0.25) inset',
                    width: 'clamp(280px, 35vw, 420px)',
                    height: 'clamp(260px, 32vw, 400px)',
                    minWidth: '280px',
                    minHeight: '260px',
                    left: '50%',
                    top: '48px',
                    transform: 'translateX(-50%) translateY(40px)',
                    paddingLeft: '55px',
                  }}
                ></div>
                <img
                  src="/me.png"
                  alt="Преподаватель английского языка"
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                  style={{
                    width: 'clamp(280px, 35vw, 420px)',
                    height: 'auto',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scrolling text banner */}
          <div className="bg-brand-primary h-10 md:h-12 lg:h-14 xl:h-16 flex items-center overflow-hidden mb-8 lg:mb-12 -mx-4" style={{ marginTop: '-10px', zIndex: 30, position: 'relative' }}>
            <div className="animate-marquee whitespace-nowrap">
              <span className="font-arsenal text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-brand-accent">
                НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ |
              </span>
            </div>
          </div>
          
          {/* Achievement Text Background */}
          {/* Removed achievement/feature text block as requested */}
        </div>
      </section>

      {/* Timer Section - Centered (Mobile only) */}
      <div className="min-[690px]:hidden text-center px-4 mb-12">
        <Timer />
          <div className="font-arsenal text-lg md:text-3xl font-bold text-black opacity-50 mt-2">
            БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК
          </div>
      </div>

      {/* Services Section */}
      <section id="services" className="px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">УСЛУГИ</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Language Learning */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <img 
                  src="/english.png" 
                  alt="Изучение языка" 
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-arsenal text-lg font-bold text-white">Изучение языка</h3>
                  <p className="font-arsenal text-sm text-white opacity-70 mt-1">Индивидуальные онлайн-уроки</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="course-modal max-w-2xl max-h-[90vh] overflow-y-auto border-0" style={{ backgroundColor: '#FFF6F6' }}>
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="font-arsenal text-3xl font-bold text-black mb-2">
                  Изучение английского языка
                </DialogTitle>
                <p className="font-arsenal text-lg text-black opacity-70">Индивидуальные онлайн-уроки</p>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="font-arsenal text-lg text-black leading-relaxed">
                    Персональные занятия онлайн для изучения английского языка с нуля или для улучшения имеющихся навыков. 
                    Гибкий график, индивидуальная программа и современные методики обучения.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">✓ Персональная программа обучения</li>
                      <li className="font-anonymous text-black">✓ Гибкий график занятий</li>
                      <li className="font-anonymous text-black">✓ Современные учебные материалы</li>
                      <li className="font-anonymous text-black">✓ Домашние задания с проверкой</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Формат:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">📹 Онлайн-уроки</li>
                      <li className="font-anonymous text-black">⏰ 60 минут за урок</li>
                      <li className="font-anonymous text-black">📅 Удобное расписание</li>
                      <li className="font-anonymous text-black">🎯 Индивидуальный подход</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 shadow-lg">
                    <p className="font-arsenal text-sm text-black opacity-70 mb-2">Стоимость урока</p>
                    <div className="font-anonymous text-4xl font-bold text-black mb-3">
                      3.000 руб
                    </div>
                    <p className="font-arsenal text-sm text-black opacity-60">за 60 минут</p>
                  </div>
                  <a href="https://t.me/m/fEpHrZQfYTBi" target="_blank" rel="noopener noreferrer">
                    <Button className="course-cta-button text-black font-arsenal text-xl font-bold px-10 py-4 rounded-2xl w-full md:w-auto">
                      🚀 НАЧАТЬ ПРЯМО СЕЙЧАС!
                    </Button>
                  </a>
                  <p className="font-arsenal text-sm text-black opacity-50 mt-3">
                    Первый урок — бесплатно
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Olympic Preparation */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <img 
                  src="/Mark.png" 
                  alt="Олимпиадная подготовка" 
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-arsenal text-lg font-bold text-white">Олимпиадная подготовка</h3>
                  <p className="font-arsenal text-sm font-bold text-white opacity-70 mt-1">
                    Индивидуальные онлайн-уроки
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="course-modal max-w-2xl max-h-[90vh] overflow-y-auto border-0" style={{ backgroundColor: '#F3F1E2' }}>
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="font-arsenal text-3xl font-bold text-black mb-2">
                  Олимпиадная подготовка
                </DialogTitle>
                <p className="font-arsenal text-lg text-black opacity-70">Индивидуальные онлайн-уроки</p>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="font-arsenal text-lg text-black leading-relaxed">
                    Специализированная подготовка к олимпиадам по английскому языку всех уровней. 
                    Эксклюзивные материалы, олимпиадные задания и стратегии победы. Занятия проводятся по 90 минут для максимального погружения в материал.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">🏆 Олимпиадные задания прошлых лет</li>
                      <li className="font-anonymous text-black">🎯 Стратегии решения сложных задач</li>
                      <li className="font-anonymous text-black">📚 Авторские материалы</li>
                      <li className="font-anonymous text-black">🧠 Развитие критического мышления</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Результаты:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">⭐ Призёрские места</li>
                      <li className="font-anonymous text-black">🎖️ Льготы при поступлении</li>
                      <li className="font-anonymous text-black">🏅 Опыт участия в олимпиадах</li>
                      <li className="font-anonymous text-black">📈 Повышение уровня языка</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 shadow-lg">
                    <p className="font-arsenal text-sm text-black opacity-70 mb-2">Стоимость урока</p>
                    <div className="font-anonymous text-4xl font-bold text-black mb-3">
                      3.000 руб
                    </div>
                    <p className="font-arsenal text-sm text-black opacity-60">за 60 минут</p>
                  </div>
                  <a href="https://t.me/m/fEpHrZQfYTBi" target="_blank" rel="noopener noreferrer">
                    <Button className="course-cta-button text-black font-arsenal text-xl font-bold px-10 py-4 rounded-2xl w-full md:w-auto">
                      🚀 НАЧАТЬ ПРЯМО СЕЙЧАС!
                    </Button>
                  </a>
                  <p className="font-arsenal text-sm text-black opacity-50 mt-3">
                    Первое занятие — бесплатно
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* OGE/EGE Preparation */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <img 
                  src="/EGE.png" 
                  alt="Подготовка к ОГЭ/ЕГЭ" 
                  className="w-full h-56 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg group-hover:from-black/90 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-arsenal text-lg font-bold text-white">Подготовка к ОГЭ/ЕГЭ</h3>
                  <p className="font-arsenal text-sm text-white opacity-70 mt-1">Индивидуальные онлайн-уроки</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="course-modal max-w-2xl max-h-[90vh] overflow-y-auto border-0" style={{ backgroundColor: '#FFF3E3' }}>
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="font-arsenal text-3xl font-bold text-black mb-2">
                  Подготовка к ОГЭ/ЕГЭ
                </DialogTitle>
                <p className="font-arsenal text-lg text-black opacity-70">Индивидуальные онлайн-уроки</p>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="font-arsenal text-lg text-black leading-relaxed">
                    Целенаправленная подготовка к государственным экзаменам по английскому языку. 
                    Системный подход, разбор всех заданий и гарантированный высокий результат.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Что включено:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">📝 Разбор всех типов заданий</li>
                      <li className="font-anonymous text-black">🎯 Стратегии выполнения</li>
                      <li className="font-anonymous text-black">📊 Регулярные пробные экзамены</li>
                      <li className="font-anonymous text-black">📚 Актуальные материалы ФИПИ</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <h4 className="font-arsenal text-xl font-bold text-black mb-3">Результаты учеников:</h4>
                    <ul className="space-y-2">
                      <li className="font-anonymous text-black">🏆 Средний балл: 85+</li>
                      <li className="font-anonymous text-black">📈 100% сдают на 4 и 5</li>
                      <li className="font-anonymous text-black">🎓 Поступление в топ-вузы</li>
                      <li className="font-anonymous text-black">✅ Гарантия результата</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20 shadow-lg">
                    <p className="font-arsenal text-sm text-black opacity-70 mb-2">Стоимость урока</p>
                    <div className="font-anonymous text-4xl font-bold text-black mb-3">
                      3.000 руб
                    </div>
                    <p className="font-arsenal text-sm text-black opacity-60">за 60 минут</p>
                  </div>
                  <a href="https://t.me/m/fEpHrZQfYTBi" target="_blank" rel="noopener noreferrer">
                    <Button className="course-cta-button text-black font-arsenal text-xl font-bold px-10 py-4 rounded-2xl w-full md:w-auto">
                      🚀 НАЧАТЬ ПРЯМО СЕЙЧАС!
                    </Button>
                  </a>
                  <p className="font-arsenal text-sm text-black opacity-50 mt-3">
                    Первое занятие — бесплатно
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal text-2xl font-bold px-12 py-4 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <p className="font-arsenal text-sm font-bold text-black opacity-50 mt-4 max-w-md mx-auto">
            Сделай правильный выбор. Помоги своему ребёнку стать лучшим.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutSection.ref}
        className={`px-4 py-16 max-w-6xl mx-auto animate-fade-in-up ${aboutSection.isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-arsenal text-4xl font-bold text-black mb-4">ОБО МНЕ</h2>
          <div className="w-32 h-1 bg-brand-secondary mx-auto mb-6"></div>
          <p className="font-arsenal text-xl text-brand-secondary font-bold">Ваш проводник в мир английского языка</p>
        </div>

        {/* Hero Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Achievement Card 1 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-secondary/60 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-arsenal text-lg font-bold">200+</span>
            </div>
            <h3 className="font-arsenal text-2xl font-bold text-black mb-2">УЧЕНИКОВ</h3>
            <p className="font-anonymous text-sm text-black opacity-70">Подготовлено к олимпиадам и ЕГЭ с отличными результатами</p>
          </div>

          {/* Achievement Card 2 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-arsenal text-2xl font-bold">🏆</span>
            </div>
            <h3 className="font-arsenal text-2xl font-bold text-black mb-2">ПОБЕДИТЕЛЬ</h3>
            <p className="font-anonymous text-sm text-black opacity-70">Всероссийской олимпиады по английскому языку</p>
          </div>

          {/* Achievement Card 3 */}
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-brand-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-arsenal text-lg font-bold">🎓</span>
            </div>
            <h3 className="font-arsenal text-2xl font-bold text-black mb-2">ЧЛЕН СБОРНОЙ</h3>
            <p className="font-anonymous text-sm text-black opacity-70">Олимпиадная сборная по английскому языку</p>
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <div className="mb-16">
          <h3 className="font-arsenal text-3xl font-bold text-black text-center mb-10">ОБРАЗОВАНИЕ И ОПЫТ</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* International Education */}
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-secondary/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-arsenal text-xl font-bold">🇺🇸</span>
                  </div>
                  <div>
                    <h4 className="font-arsenal text-xl font-bold text-black">ОБУЧЕНИЕ В США</h4>
                    <p className="font-anonymous text-sm text-black opacity-70">2020–2023</p>
                  </div>
                </div>
                <p className="font-anonymous text-sm text-black opacity-80 leading-relaxed">
                  Три года изучения в американских университетах. Глубокое погружение в языковую среду и культуру.
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-secondary/70 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-arsenal text-xl font-bold">🇬🇧</span>
                  </div>
                  <div>
                    <h4 className="font-arsenal text-xl font-bold text-black">ОБУЧЕНИЕ В UK</h4>
                    <p className="font-anonymous text-sm text-black opacity-70">2024</p>
                  </div>
                </div>
                <p className="font-anonymous text-sm text-black opacity-80 leading-relaxed">
                  Стажировка в Великобритании. Изучение британских методик преподавания английского языка.
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-secondary/60 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-arsenal text-lg font-bold">📚</span>
                  </div>
                  <div>
                    <h4 className="font-arsenal text-xl font-bold text-black">КЕМБРИДЖСКОЕ ОБРАЗОВАНИЕ</h4>
                    <p className="font-anonymous text-sm text-black opacity-70">Сертифицированный преподаватель</p>
                  </div>
                </div>
                <p className="font-anonymous text-sm text-black opacity-80 leading-relaxed">
                  Международные стандарты качества образования. Современные методики преподавания.
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-secondary/90 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-arsenal text-lg font-bold">⭐</span>
                  </div>
                  <div>
                    <h4 className="font-arsenal text-xl font-bold text-black">ОЛИМПИАДНЫЙ ОПЫТ</h4>
                    <p className="font-anonymous text-sm text-black opacity-70">Эксперт высокого уровня</p>
                  </div>
                </div>
                <p className="font-anonymous text-sm text-black opacity-80 leading-relaxed">
                  Многолетний опыт участия и подготовки к олимпиадам всех уровней — от школьных до международных.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="text-center mb-12">
          <h3 className="font-arsenal text-2xl font-bold text-black mb-6">СЛЕДИТЕ ЗА ОБНОВЛЕНИЯМИ</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-2xl mx-auto">
            <a href="https://instagram.com/marat_english" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center sm:justify-start">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
              <span className="font-arsenal text-base sm:text-lg font-bold text-black truncate">@marat_english</span>
            </a>
            
            <a href="https://t.me/maratenglish" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center sm:justify-start">
              <img src="/telegram.png" alt="Telegram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
              <span className="font-arsenal text-base sm:text-lg font-bold text-black truncate">@maratenglish</span>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-secondary to-[#C4A698] rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="font-arsenal text-3xl font-bold text-black mb-4">
              ГОТОВ ИЗМЕНИТЬ СВОЮ ЖИЗНЬ?
            </h3>
            <p className="font-arsenal text-lg text-black opacity-80 mb-6">
              Присоединяйся к 200+ успешным ученикам, которые уже достигли своих целей
            </p>
            <a 
              href="#contacts" 
              className="inline-block bg-white/90 hover:bg-white text-black font-arsenal text-xl font-bold px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Начать обучение
            </a>
          </div>
        </div>
      </section>

      {/* Online Classes Section */}
      <section 
        id="advantages" 
        ref={advantagesSection.ref}
        className={`px-4 py-12 max-w-6xl mx-auto animate-fade-in-up-delayed ${advantagesSection.isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="space-y-12">
          <div className="flex items-center">
            <MonitorIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ОНЛАЙН‑ЗАНЯТИЯ</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1">
                Экономия времени и средств.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <InteractiveBoardIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ИНТЕРАКТИВНАЯ ДОСКА</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1 max-w-sm">
                Увлекательное и эффективное обучение, постоянный доступ.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <NotesIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ПЕРСОНАЛЬНЫЕ КОНСПЕКТЫ</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1">
                Всегда под рукой.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <CareIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1">
                Решим любые возникшие проблемы вместе.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <BookIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">АВТОРСКИЕ ПОСОБИЯ</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1 max-w-sm">
                Креативные задания, которые максимально быстро приведут тебя к успеху.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <IncreaseIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ТОЛЬКО ПРАКТИЧЕСКИЕ МАТЕРИАЛЫ</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1">
                Никакой лишней информации.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Courses Section */}
      <section 
        id="courses" 
        ref={coursesSection.ref}
        className={`px-4 py-12 max-w-6xl mx-auto animate-fade-in-up ${coursesSection.isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="mb-12">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">ОНЛАЙН КУРСЫ</h2>
          <div className="w-56 h-1 bg-brand-secondary"></div>
        </div>

        <CoursesCarousel />
      </section>

      {/* Reviews Section */}
      <section 
        id="reviews" 
        ref={reviewsSection.ref}
        className={`px-4 py-12 max-w-6xl mx-auto animate-fade-in-up-slow ${reviewsSection.isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="mb-8">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">ОТЗЫВЫ</h2>
          <div className="w-32 h-1 bg-brand-secondary"></div>
          <p className="font-arsenal text-xl font-bold text-brand-secondary mt-2">или Аллея благодарностей</p>
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel />

        <div className="text-center mt-8">
          <svg className="mx-auto w-24 h-3 opacity-50" viewBox="0 0 121 5" fill="none">
            <path d="M1 3.04688L120 2" stroke="#C1B3A4" strokeWidth="3"/>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contacts" 
        ref={contactsSection.ref}
        className={`px-4 py-12 max-w-6xl mx-auto animate-fade-in-up-delayed ${contactsSection.isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div style={{ backgroundColor: '#FBF3F0' }} className="rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="font-arsenal text-2xl md:text-3xl font-bold text-black mb-2">
                ЗАПИСЬ НА БЕСПЛАТНЫЙ УРОК‑КОНСУЛЬТАЦИЮ
              </h2>
              <div className="w-full h-px bg-brand-secondary opacity-50 my-4"></div>
              <p className="font-arsenal text-sm font-bold text-black opacity-50">
                Пожалуйста, заполните форму, и мы свяжемся с вами в течение дня.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше ФИО"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/20 font-arsenal text-sm font-bold border-0 shadow-inner"
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Направление"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/20 font-arsenal text-sm font-bold border-0 shadow-inner"
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ваш возраст или возраст ребёнка"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/20 font-arsenal text-sm font-bold border-0 shadow-inner"
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }}
                />
              </div>

              <div>
                <div className="text-center mb-2">
                  <span className="font-arsenal text-sm font-bold text-black opacity-80">
                    Номер телефона для связи
                  </span>
                </div>
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/30 font-arsenal text-sm font-bold border-0 shadow-inner"
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl font-arsenal text-lg font-bold text-black opacity-75 shadow-lg transition-all duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(236deg, #A99F9B 72.03%, #C4A698 0%)',
                  boxShadow: '-4.044px 2.728px 4.878px 0 rgba(143, 135, 131, 0.50) inset, 4.044px -2.728px 4.878px 0 rgba(172, 162, 158, 0.50)'
                }}
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </button>

              <p className="text-center font-arsenal text-xs font-bold text-black opacity-30 mt-4">
                Нажимая кнопку «Отправить», вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </div>

          {/* Telegram Contact Section */}
          <div className="flex flex-col justify-center">
            <div style={{ backgroundColor: '#E8DED6' }} className="rounded-2xl p-6 shadow-lg text-center">
              <div className="mb-6">
                <h3 className="font-arsenal text-2xl md:text-3xl font-bold text-black mb-2">
                  ИЛИ НАПИШИ В ТЕЛЕГРАМ
                </h3>
                <div className="w-full h-px bg-brand-secondary opacity-50 my-4"></div>
                <p className="font-arsenal text-sm font-bold text-black opacity-50">
                  Быстрая связь и мгновенные ответы на ваши вопросы
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-white/60 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src="/telegram.png"
                    alt="Telegram"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <a 
                  href="https://t.me/gtrigt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="course-cta-button text-black font-arsenal text-lg font-bold px-8 py-3 rounded-2xl inline-flex items-center gap-3 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src="/telegram.png"
                    alt="Telegram"
                    className="w-6 h-6 object-contain"
                  />
                  Написать в Telegram
                </a>
                
                <p className="font-arsenal text-sm text-black opacity-60">
                  @gtrigt
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="font-arsenal text-xs text-black opacity-50">
                  Отвечаю обычно в течение 30 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {/* Logo and Company Info */}
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2e709557d70d4204afc24524089c36c4%2Feea77c2980ab4c80a29406bf4abec5da?format=webp&width=800"
              alt="MF Logo"
              className="w-32 h-auto opacity-80 mr-4"
            />
            <div className="text-left">
              <h3 className="font-arsenal text-xl font-normal text-black leading-tight">
                ОНЛАЙН<br />
                ЦЕНТР ИЗУЧЕНИЯ<br />
                АНГЛИЙСКОГО ЯЗЫКА
              </h3>
            </div>
          </div>



          <div className="w-full h-px bg-brand-secondary opacity-50 mb-6"></div>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <span className="font-arsenal text-2xl text-black mr-2">8 917 267</span>
            <span className="font-arsenal text-3xl font-bold text-black">6373</span>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
            {/* WhatsApp */}
            <a href="https://wa.me/79172676373" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2">
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
              <span className="font-arsenal text-sm text-black text-center">
                Написать в WhatsApp
              </span>
            </a>

            {/* Telegram */}
            <a href="https://t.me/m/VX8q96qONjYy" target="_blank" rel="noopener noreferrer" title="Telegram" className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2 relative">
                <div className="w-full h-full rounded-full bg-[#EBE4E2] flex items-center justify-center">
                  <img
                    src="/telegram.png"
                    alt="Telegram"
                    className="w-6 h-6 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>
              <span className="font-arsenal text-sm text-black text-center">
                Написать<br />в Telegram
              </span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-6">
            {/* Instagram */}
            <a href="https://instagram.com/marat_english" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-9 h-9 mr-2 object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <span className="font-arsenal text-base text-black">
                Страница в Instagram
              </span>
            </a>
          </div>

          <div className="flex items-center justify-center mt-4">
            <a href="https://t.me/maratenglish" target="_blank" rel="noopener noreferrer" title="Telegram Channel" className="flex items-center">
            <img
                src="/telegram.png"
              alt="Telegram"
                className="w-10 h-10 mr-2 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            />
            <span className="font-arsenal text-base text-black">
              Telegram-канал
            </span>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="font-arsenal text-2xl text-black opacity-40">
            Благодарю за внимание
          </p>
        </div>
      </footer>
    </div>
  );
}
