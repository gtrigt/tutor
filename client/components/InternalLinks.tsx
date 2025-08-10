import React from 'react';
import { Button } from '@/components/ui/button';

interface InternalLinksProps {
  className?: string;
}

export const InternalLinks: React.FC<InternalLinksProps> = ({ className = '' }) => {
  const quickLinks = [
    {
      title: 'Услуги',
      description: 'Изучение языка, подготовка к экзаменам',
      href: '#services',
      icon: '📚'
    },
    {
      title: 'О преподавателе',
      description: 'Опыт и достижения',
      href: '#about',
      icon: '👨‍🏫'
    },
    {
      title: 'Курсы',
      description: 'Онлайн программы обучения',
      href: '#courses',
      icon: '🎓'
    },
    {
      title: 'Отзывы',
      description: 'Что говорят ученики',
      href: '#reviews',
      icon: '⭐'
    },
    {
      title: 'Блог',
      description: 'Полезные статьи и советы',
      href: '#blog',
      icon: '📝'
    },
    {
      title: 'FAQ',
      description: 'Ответы на частые вопросы',
      href: '#faq',
      icon: '❓'
    },
    {
      title: 'Контакты',
      description: 'Связаться с преподавателем',
      href: '#contacts',
      icon: '📞'
    }
  ];

  const relatedServices = [
    {
      title: 'Подготовка к IELTS',
      description: 'Международный экзамен по английскому',
      href: '#services',
      icon: '🌍'
    },
    {
      title: 'Бизнес английский',
      description: 'Для работы и карьеры',
      href: '#services',
      icon: '💼'
    },
    {
      title: 'Разговорная практика',
      description: 'Улучшение навыков общения',
      href: '#services',
      icon: '🗣️'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Отправляем событие в Google Analytics
      if (window.gtag) {
        window.gtag('event', 'internal_link_click', {
          event_category: 'Navigation',
          event_label: href,
          value: 1
        });
      }
    }
  };

  return (
    <section className={`px-4 py-12 max-w-6xl mx-auto ${className}`}>
      <div className="text-center mb-12">
        <h2 className="font-arsenal text-3xl font-bold text-black mb-4">БЫСТРАЯ НАВИГАЦИЯ</h2>
        <div className="w-32 h-1 bg-brand-secondary mx-auto mb-6"></div>
        <p className="font-arsenal text-xl text-brand-secondary font-bold">
          Найдите нужную информацию быстро
        </p>
      </div>

      {/* Быстрые ссылки */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {quickLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection(link.href)}
          >
            <div className="text-4xl mb-4">{link.icon}</div>
            <h3 className="font-arsenal text-lg font-bold text-black mb-2">
              {link.title}
            </h3>
            <p className="font-anonymous text-sm text-black/70">
              {link.description}
            </p>
          </div>
        ))}
      </div>

      {/* Связанные услуги */}
      <div className="mb-12">
        <h3 className="font-arsenal text-2xl font-bold text-black text-center mb-8">
          СВЯЗАННЫЕ УСЛУГИ
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-2xl p-6 border border-brand-secondary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => scrollToSection(service.href)}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h4 className="font-arsenal text-lg font-bold text-black mb-2">
                {service.title}
              </h4>
              <p className="font-anonymous text-sm text-black/70 mb-4">
                {service.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary hover:text-black"
              >
                Узнать больше
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA для навигации */}
      <div className="text-center">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
          <h3 className="font-arsenal text-2xl font-bold text-black mb-4">
            НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ?
          </h3>
          <p className="font-arsenal text-lg text-black opacity-80 mb-6">
            Оставьте заявку на бесплатный урок-консультацию
          </p>
          <Button 
            className="bg-brand-secondary text-black font-arsenal text-lg font-bold px-8 py-3 rounded-2xl hover:bg-brand-secondary/90 transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('#contacts')}
          >
            Записаться на урок
          </Button>
        </div>
      </div>
    </section>
  );
}; 