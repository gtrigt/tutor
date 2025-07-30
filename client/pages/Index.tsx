import React from 'react';
import { Button } from '@/components/ui/button';
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

export default function Index() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#EBE4E2' }}>
      {/* Hero Section */}
      <section className="relative px-0 py-8 max-w-6xl mx-auto">
        {/* Header with contact info */}
        <div className="relative w-full max-w-sm mx-auto mb-8">
          <div className="rounded-[35px] h-12 shadow-md relative flex items-center justify-between px-4" style={{ backgroundColor: '#FFF6F6' }}>
            {/* Telegram Icon */}
            <a href="https://t.me/m/VX8q96qONjYy" target="_blank" rel="noopener noreferrer" title="Telegram">
              <img
                src="/telegram.png"
                alt="Telegram"
                className="w-7 h-7 opacity-80 flex-shrink-0 object-contain cursor-pointer hover:opacity-100 transition-opacity"
              />
            </a>
            
            {/* Center Logo */}
            <div className="flex items-center flex-1 justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F2e709557d70d4204afc24524089c36c4%2Feea77c2980ab4c80a29406bf4abec5da?format=webp&width=800"
                alt="MF Logo"
                className="w-auto h-[46px]"
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
          {/* Hero image with background */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              {/* Background rectangle */}
              <div
                className="absolute rounded-3xl opacity-60 shadow-inner z-0"
                style={{
                  background: 'linear-gradient(180deg, #9C4F4B 0%, rgba(5, 5, 5, 0.62) 100%)',
                  boxShadow: '9px 5px 4px 0 rgba(0, 0, 0, 0.25) inset',
                  width: 'clamp(280px, 50%, 300px)',
                  height: 'clamp(260px, 45%, 280px)',
                  minWidth: '280px',
                  minHeight: '260px',
                  left: '50%',
                  top: '48px',
                  transform: 'translateX(-50%) translateY(20px)',
                  paddingLeft: '55px',
                }}
              ></div>
              <img
                src="/me.png"
                alt="Преподаватель английского языка"
                className="w-full max-w-3xl h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Scrolling text banner */}
          <div className="bg-brand-primary h-10 md:h-12 flex items-center overflow-hidden mb-8 -mx-4" style={{ marginTop: '-30px', zIndex: 30, position: 'relative' }}>
            <div className="animate-marquee whitespace-nowrap">
              <span className="font-arsenal text-2xl md:text-4xl text-brand-accent">
                НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ | НЕ УПУСТИ ШАНС СТАТЬ ЛУЧШЕ |
              </span>
            </div>
          </div>
          
          {/* Achievement Text Background */}
          {/* Removed achievement/feature text block as requested */}
        </div>
      </section>

      {/* Timer Section - Centered */}
      <div className="text-center px-4 mb-12">
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
          <div className="relative group">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/1b758f1a7d12f1a0eef34d228ba74c1509c02d87?width=486" 
              alt="Изучение языка" 
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-arsenal text-lg font-bold text-white">Изучение языка</h3>
            </div>
          </div>

          {/* Olympic Preparation */}
          <div className="relative group">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/615285697e210f1d0dd09aaa19c9df9261ac946d?width=490" 
              alt="Олимпиадная подготовка" 
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-arsenal text-lg font-bold text-white">Олимпиадная подготовка</h3>
              <p className="font-arsenal text-sm font-bold text-white opacity-70 mt-1">
                бесплатное пробное занятие
              </p>
            </div>
          </div>

          {/* OGE/EGE Preparation */}
          <div className="relative group">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/47ab5f1071962cc1e845240948304a2cd001fee3?width=486" 
              alt="Подготовка к ОГЭ/ЕГЭ" 
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-arsenal text-lg font-bold text-white">Подготовка к ОГЭ/ЕГЭ</h3>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal text-2xl font-bold px-12 py-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <p className="font-arsenal text-sm font-bold text-black opacity-50 mt-4 max-w-md mx-auto">
            Сделай правильный выбор. Помоги своему ребенку стать лучшим
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">ОБО МНЕ</h2>
          <div className="w-32 h-1 bg-brand-secondary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="font-anonymous text-xs font-bold text-brand-gray leading-4 space-y-3">
              <p>&gt;Подготовил более 60 учеников к Олимпиадам, ЕГЭ</p>
              <p>&gt;Победитель этапов Всероссийской Олимпиады по</p>
              <p className="text-xs font-bold">английскому языку (97/100)</p>
              <p>&gt;Член Олимпиадной Сборной по английскому языку</p>
              <p>&gt;Кембриджское образование</p>
              <p>&gt;Обучение в США (2020-2023)</p>
              <p>&gt;Обучение в UK (2024)</p>
            </div>
            
            <div className="flex flex-col space-y-3 mt-6">
              <div className="flex items-center">
                <a href="https://instagram.com/marat_english" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <img
                    src="/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6 mr-3 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
                <span className="font-anonymous text-sm text-brand-gray">@marat_english</span>
              </div>
              <div className="flex items-center">
                <a href="https://t.me/m/VX8q96qONjYy" target="_blank" rel="noopener noreferrer" title="Telegram">
                  <img
                    src="/telegram.png"
                    alt="Telegram"
                    className="w-6 h-6 mr-3 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
                <span className="font-anonymous text-sm text-brand-gray">@maratenglish</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            {/* Content removed as requested */}
          </div>
        </div>
      </section>

      {/* Online Classes Section */}
      <section id="advantages" className="px-4 py-12 max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="flex items-center">
            <MonitorIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">ОНЛАЙН ЗАНЯТИЯ</h3>
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
                Вместе решим возникшие проблемы.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-brand-secondary opacity-50"></div>

          <div className="flex items-center">
            <BookIcon className="mr-6 text-black w-12 h-12" />
            <div>
              <h3 className="font-arsenal text-3xl font-bold text-black">АВТОРСКИЕ ПОСОБИЯ</h3>
              <p className="font-anonymous text-xs text-black opacity-50 mt-1 max-w-sm">
                Самые креативные задания, которые как можно быстрее приведут тебя к успеху.
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
      <section id="courses" className="px-4 py-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">ОНЛАЙН КУРСЫ</h2>
          <div className="w-56 h-1 bg-brand-secondary"></div>
        </div>

        <CoursesCarousel />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="px-4 py-12 max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-2">ОТЗЫВЫ</h2>
          <div className="w-32 h-1 bg-brand-secondary"></div>
          <p className="font-arsenal text-xl font-bold text-brand-secondary mt-2">или аллея благодарностей</p>
        </div>

        {/* Featured Review */}
        <div className="mb-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/10de3b58d5530050c78ba94860dd2af60cf5dc74?width=412"
            alt="Отзыв студента"
            className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 mb-8">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/899b622cf21eef00bb28472d7f05f9190771ec9d?width=426" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/226fa2a636395ec26b276dca7c30655041d76418?width=372" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/2ecfa3aaeb087e0ef2dcc329891e3ffa2e588c0c?width=312" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/14274000cb14fbd8cfb4bdddc13c3a1227240a80?width=370" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/517b8026cedf05c1fbc75266b35d560385278bc6?width=298" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/f4499f23025ec6e0294fd634573892af9b347ec2?width=326" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/8f6596ce356700b574fa1862f83781d96ef88c19?width=404" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/2d34873dda0360afcb3c0447cabdb97caebc2569?width=308" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/8270845a1cd46628b2f7d5fc9ccc7df4bf62413d?width=296" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/faf2b9f6c24e114c256d2c687860b517de9f5ad2?width=460" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/11c872fdce6ca90a82acd35d76667f56a4f4fb87?width=402" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9e9acbedbc9a58270526e6a7d9b95a0fd8d565e1?width=398" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/69d8c4872280bdda0b7f394226d75fc29ec5db2c?width=370" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b0cb0bac245812fca1105aef9ddf2643b6c98941?width=372" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/5efe29807344ab2173df57000767351800144ed0?width=296" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/83475f5d883fc20d8f17c32949db4106c2ba6a03?width=364" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9fc3af600a6a12a47c0f43c46bad2f2f73938bd7?width=414" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/2addbfdf59531c93b933140ccf0cd74e33a5cd61?width=340" alt="Отзыв" className="w-full h-auto rounded-lg shadow-sm" />
        </div>

        <div className="text-center">
          <svg className="mx-auto w-24 h-3 opacity-50" viewBox="0 0 121 5" fill="none">
            <path d="M1 3.04688L120 2" stroke="#C1B3A4" strokeWidth="3"/>
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="px-4 py-12 max-w-md mx-auto">
        <div style={{ backgroundColor: '#FBF3F0' }} className="rounded-lg p-6 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="font-arsenal text-2xl md:text-3xl font-bold text-black mb-2">
              ЗАПИСЬ НА БЕСПЛАТНЫЙ УРОК-КОНСУЛЬТАЦИЮ
            </h2>
            <div className="w-full h-px bg-brand-secondary opacity-50 my-4"></div>
            <p className="font-arsenal text-sm font-bold text-black opacity-50">
              пожалуйста заполните форму, и мы свяжемся с вами в течении дня
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
                placeholder="Ваш возраст или возраст ребенка"
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
              Нажимая на кнопку "Отправить", вы соглашаетесь на условия политики конфиденциальности
            </p>
          </form>
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
                Страничка нельзяграмм
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
            благодарю за внимание
          </p>
        </div>
      </footer>
    </div>
  );
}
