import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RelatedArticle {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
}

interface InternalLinksProps {
  currentArticle: string;
  className?: string;
}

export const InternalLinks: React.FC<InternalLinksProps> = ({ 
  currentArticle, 
  className = '' 
}) => {
  // Определяем связанные статьи для каждой статьи
  const getRelatedArticles = (article: string): RelatedArticle[] => {
    const allArticles = {
      'why-english-fails': [
        {
          title: 'Как заговорить на английском быстро: 30 дней, которые меняют всё',
          excerpt: 'Практические советы для быстрого освоения разговорного английского',
          href: '/blog/speak-english-in-30-days.html',
          category: 'Разговорная практика',
          readTime: '8'
        },
        {
          title: 'Подготовка к ЕГЭ по английскому: полное руководство',
          excerpt: 'Структурированный подход к подготовке к ЕГЭ по английскому языку',
          href: '/blog/ege-preparation.html',
          category: 'ЕГЭ/ОГЭ',
          readTime: '12'
        }
      ],
      'speak-english-in-30-days': [
        {
          title: 'Почему у тебя не получается выучить английский?',
          excerpt: 'Анализ основных причин неудач в изучении английского языка',
          href: '/blog/why-english-fails.html',
          category: 'Мотивация',
          readTime: '6'
        },
        {
          title: 'Обучение онлайн: преимущества и эффективность',
          excerpt: 'Современные методы онлайн-обучения английскому языку',
          href: '/blog/online-learning.html',
          category: 'Онлайн обучение',
          readTime: '7'
        }
      ],
      'ege-preparation': [
        {
          title: 'Частые ошибки в изучении английского',
          excerpt: 'Анализ и исправление типичных ошибок при изучении английского',
          href: '/blog/common-mistakes.html',
          category: 'Грамматика',
          readTime: '9'
        },
        {
          title: 'Олимпиадная подготовка: путь к победе',
          excerpt: 'Стратегии успешной подготовки к олимпиадам по английскому языку',
          href: '/blog/olympiad-success.html',
          category: 'Олимпиады',
          readTime: '10'
        }
      ],
      'olympiad-success': [
        {
          title: 'Подготовка к ЕГЭ по английскому: полное руководство',
          excerpt: 'Структурированный подход к подготовке к ЕГЭ по английскому языку',
          href: '/blog/ege-preparation.html',
          category: 'ЕГЭ/ОГЭ',
          readTime: '12'
        },
        {
          title: 'Как заговорить на английском быстро: 30 дней, которые меняют всё',
          excerpt: 'Практические советы для быстрого освоения разговорного английского',
          href: '/blog/speak-english-in-30-days.html',
          category: 'Разговорная практика',
          readTime: '8'
        }
      ],
      'common-mistakes': [
        {
          title: 'Подготовка к ЕГЭ по английскому: полное руководство',
          excerpt: 'Структурированный подход к подготовке к ЕГЭ по английскому языку',
          href: '/blog/ege-preparation.html',
          category: 'ЕГЭ/ОГЭ',
          readTime: '12'
        },
        {
          title: 'Почему у тебя не получается выучить английский?',
          excerpt: 'Анализ основных причин неудач в изучении английского языка',
          href: '/blog/why-english-fails.html',
          category: 'Мотивация',
          readTime: '6'
        }
      ],
      'online-learning': [
        {
          title: 'Как заговорить на английском быстро: 30 дней, которые меняют всё',
          excerpt: 'Практические советы для быстрого освоения разговорного английского',
          href: '/blog/speak-english-in-30-days.html',
          category: 'Разговорная практика',
          readTime: '8'
        },
        {
          title: 'Олимпиадная подготовка: путь к победе',
          excerpt: 'Стратегии успешной подготовки к олимпиадам по английскому языку',
          href: '/blog/olympiad-success.html',
          category: 'Олимпиады',
          readTime: '10'
        }
      ]
    };

    return allArticles[article as keyof typeof allArticles] || [];
  };

  const relatedArticles = getRelatedArticles(currentArticle);

  if (relatedArticles.length === 0) return null;

  return (
    <section className={`mt-16 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="font-arsenal text-2xl font-bold text-black mb-2">
          📚 Почитай также
        </h3>
        <p className="font-anonymous text-black/70">
          Эти статьи помогут тебе глубже понять тему
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {relatedArticles.map((article, index) => (
          <Card key={index} className="bg-white/40 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded-full bg-brand-secondary/20 text-brand-secondary text-xs font-arsenal font-bold">
                  {article.category}
                </span>
                <span className="text-xs text-black/60 font-anonymous">
                  {article.readTime} мин
                </span>
              </div>
              <CardTitle className="font-arsenal text-lg font-bold text-black line-clamp-2">
                {article.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="font-anonymous text-sm text-black/70 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              
              <Button 
                className="w-full bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90"
                onClick={() => window.open(article.href, '_blank')}
              >
                Читать статью
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InternalLinks; 