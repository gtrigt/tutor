import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
  imageWebp?: string;
  slug: string;
}

interface BlogProps {
  title?: string;
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: '6',
    title: 'Как заговорить на английском быстро: 30 дней, которые меняют всё',
    excerpt: 'План на месяц, который снимает страх, ставит речь на автомат и наконец-то приносит реальные результаты',
    content: 'Полное содержание статьи о 30-дневной программе...',
    author: 'Марат Фассахов',
    date: '2025-02-10',
    category: 'Практика речи',
    tags: ['разговорный английский', 'барьер', 'практика', 'методика'],
    readTime: 9,
    image: '/images/blog/IMG_4549.png',
    slug: 'speak-english-in-30-days'
  },
  {
    id: '5',
    title: 'Почему у тебя не получается выучить английский?',
    excerpt: 'Разбираем главные причины неудач и находим персональный путь к успеху',
    content: 'Полное содержание статьи о препятствиях в изучении английского...',
    author: 'Марат Фассахов',
    date: '2025-01-15',
    category: 'Изучение языка',
    tags: ['английский', 'мотивация', 'препятствия', 'методики'],
    readTime: 12,
    image: '/images/blog/IMG_4510.png',
    slug: 'why-english-fails'
  },
  {
    id: '1',
    title: 'Как эффективно подготовиться к ЕГЭ по английскому языку',
    excerpt: 'Практические советы и стратегии для успешной сдачи экзамена',
    content: 'Полное содержание статьи о подготовке к ЕГЭ...',
    author: 'Марат Фассахов',
    date: '2024-12-08',
    category: 'ЕГЭ/ОГЭ',
    tags: ['ЕГЭ', 'английский', 'подготовка', 'экзамен'],
    readTime: 8,
    image: '/images/blog/blog_language.png',
    imageWebp: '/images/blog/blog_language.webp',
    slug: 'ege-preparation'
  },
  {
    id: '2',
    title: 'Топ-10 ошибок при изучении английского языка',
    excerpt: 'Распространенные ошибки и способы их избежать',
    content: 'Полное содержание статьи об ошибках...',
    author: 'Марат Фассахов',
    date: '2024-10-22',
    category: 'Изучение языка',
    tags: ['английский', 'ошибки', 'изучение', 'советы'],
    readTime: 6,
    image: '/images/blog/blog_mistakes.png',
    imageWebp: '/images/blog/blog_mistakes.webp',
    slug: 'common-mistakes'
  },
  {
    id: '3',
    title: 'Олимпиадная подготовка: путь к успеху',
    excerpt: 'Как стать призером олимпиады по английскому языку',
    content: 'Полное содержание статьи об олимпиадах...',
    author: 'Марат Фассахов',
    date: '2024-08-14',
    category: 'Олимпиады',
    tags: ['олимпиада', 'английский', 'подготовка', 'успех'],
    readTime: 10,
    image: '/images/blog/blog_olymp.png',
    imageWebp: '/images/blog/blog_olymp.webp',
    slug: 'olympiad-success'
  },
  {
    id: '4',
    title: 'Онлайн-обучение: преимущества и особенности',
    excerpt: 'Почему онлайн-уроки могут быть эффективнее традиционных',
    content: 'Полное содержание статьи об онлайн-обучении...',
    author: 'Марат Фассахов',
    date: '2024-06-03',
    category: 'Онлайн-обучение',
    tags: ['онлайн', 'обучение', 'преимущества', 'технологии'],
    readTime: 7,
    image: '/images/blog/blog_online.png',
    imageWebp: '/images/blog/blog_online.webp',
    slug: 'online-learning'
  }
];

export const Blog: React.FC<BlogProps> = ({ 
  title = "БЛОГ И СОВЕТЫ",
  posts = defaultPosts 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [imageStates, setImageStates] = useState<{ [key: string]: 'loading' | 'loaded' | 'error' }>({});
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleImageLoad = (postId: string) => {
    setImageStates(prev => ({ ...prev, [postId]: 'loaded' }));
  };

  const handleImageError = (postId: string) => {
    setImageStates(prev => ({ ...prev, [postId]: 'error' }));
    // Устанавливаем fallback изображение
    const imgElement = document.querySelector(`[data-post-id="${postId}"]`) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = '/placeholder.svg';
    }
  };

  // Инициализируем состояние изображений
  useEffect(() => {
    const initialStates: { [key: string]: 'loading' | 'loaded' | 'error' } = {};
    posts.forEach(post => {
      initialStates[post.id] = 'loading';
    });
    setImageStates(initialStates);
  }, [posts]);

  // Функция для рендеринга оптимизированного изображения
  const renderOptimizedImage = (post: BlogPost) => (
    <div className="aspect-video rounded-lg mb-4 overflow-hidden relative blog-card-image-container">
      {imageStates[post.id] === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-secondary"></div>
        </div>
      )}
      
      <picture>
        {/* WebP версия для поддерживаемых браузеров (на всех ширинах) */}
        {post.imageWebp && (
          <source
            srcSet={post.imageWebp}
            type="image/webp"
          />
        )}
        
        {/* PNG версия как fallback */}
        <img
          src={post.image}
          alt={post.title}
          data-post-id={post.id}
          className={`w-full h-full object-cover object-center blog-card-image ${
            imageStates[post.id] === 'loading' ? 'loading' : 
            imageStates[post.id] === 'error' ? 'error' : 
            imageStates[post.id] === 'loaded' ? 'fade-in' : ''
          }`}
          loading="lazy"
          decoding="async"
          onLoad={() => handleImageLoad(post.id)}
          onError={() => handleImageError(post.id)}
        />
      </picture>
      
      {/* Индикатор загрузки */}
      {imageStates[post.id] === 'loading' && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}
      
      {/* Индикатор ошибки */}
      {imageStates[post.id] === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Изображение недоступно</div>
          </div>
        </div>
      )}
    </div>
  );

  const handleSubscribeSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = (formData.get('firstName') as string || '').trim();
    const lastName = (formData.get('lastName') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const telegram = (formData.get('telegram') as string || '').trim();
    const phone = (formData.get('phone') as string || '').trim();

    try {
      const botToken = '8059904436:AAF8kJbXOKbMgv6tvq5hMCEmvorfHt608ow';
      const chatId = '-1002835359630';
      const message = `\n🆕 НОВАЯ ПОДПИСКА НА БЛОГ!\n\n👤 Имя: ${firstName || '—'}\n👤 Фамилия: ${lastName || '—'}\n📧 Email: ${email || '—'}\n📱 Telegram: ${telegram || 'Не указан'}\n📞 Телефон: ${phone || '—'}\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Источник: Блог`; 

      // Отправляем в Telegram (без ожидания блока UI)
      try {
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        }).catch(() => {});
      } catch {}

      form.reset();
      setIsSubscribeOpen(false);
      setIsSuccessOpen(true);
    } catch {
      // Даже при ошибке показываем фидбек, чтобы не терять лид
      setIsSubscribeOpen(false);
      setIsSuccessOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-arsenal text-4xl font-bold text-black mb-4">{title}</h2>
        <div className="w-32 h-1 bg-brand-secondary mx-auto mb-6"></div>
        <p className="font-arsenal text-xl text-brand-secondary font-bold">
          Полезные статьи и советы для изучения английского языка
        </p>
        <div className="mt-6">
          <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brand-secondary text-black font-arsenal font-bold px-6 py-3 rounded-2xl hover:bg-brand-secondary/90">
                Подписаться на блог
              </Button>
            </DialogTrigger>
            <DialogContent className="course-modal bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="font-arsenal text-2xl text-black">Подписка на блог</DialogTitle>
                <DialogDescription className="font-anonymous text-black/70">
                  Получай новые статьи и инсайты первым. Заполни короткую форму ниже.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="firstName" placeholder="Имя" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                  <input name="lastName" placeholder="Фамилия" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                </div>
                <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                <input name="telegram" placeholder="Telegram-ник (через @) — опционально" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                <input name="phone" placeholder="Телефон — опционально" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90">
                    {isSubmitting ? 'Отправляем…' : 'Подписаться'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Success Popup */}
          <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
            <DialogContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-md text-center">
              <div className="mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A99F9B, #C4A698)' }}>
                <span className="text-white text-2xl">✓</span>
              </div>
              <DialogTitle className="font-arsenal text-2xl text-black">Готово!</DialogTitle>
              <DialogDescription className="font-anonymous text-black/70">
                Вы успешно подписались на блог. Новые материалы будут приходить вам первыми.
              </DialogDescription>
              <div className="mt-4">
                <Button onClick={() => setIsSuccessOpen(false)} className="bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90 w-full">
                  Закрыть
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Фильтры и поиск */}
      <div className="mb-8 space-y-4">
        {/* Поиск */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Поиск по статьям..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/40 backdrop-blur-sm text-black placeholder-black/50 font-arsenal text-sm border border-white/20 shadow-lg"
          />
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`font-arsenal text-sm ${
                selectedCategory === category 
                  ? 'bg-brand-secondary text-black' 
                  : 'bg-white/40 text-black border-brand-secondary/30 hover:bg-white/60'
              }`}
            >
              {category === 'all' ? 'Все' : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Список статей */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="bg-white/40 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-4">
              {renderOptimizedImage(post)}
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30">
                  {post.category}
                </Badge>
                <span className="text-xs text-black/60 font-anonymous">
                  {post.readTime} мин
                </span>
              </div>
              <CardTitle className="font-arsenal text-lg font-bold text-black line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="font-anonymous text-sm text-black/70 mb-4 line-clamp-3">
                {post.excerpt}
              </CardDescription>
              
              <div className="space-y-3">
                {/* Теги */}
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-white/20 border-white/30 text-black/60">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Мета-информация */}
                <div className="flex items-center justify-between text-xs text-black/50 font-anonymous">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                
                {/* Кнопка читать */}
                <Button 
                  className="w-full bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90"
                  onClick={() => {
                    // Навигация к полной статье
                    const routes: { [key: string]: string } = {
                      'speak-english-in-30-days': '/blog/speak-english-in-30-days.html',
                      'why-english-fails': '/blog/why-english-fails.html',
                      'ege-preparation': '/blog/ege-preparation.html',
                      'olympiad-success': '/blog/olympiad-success.html', 
                      'common-mistakes': '/blog/common-mistakes.html',
                      'online-learning': '/blog/online-learning.html'
                    };
                    
                    const route = routes[post.slug];
                    if (route) {
                      window.open(route, '_blank');
                    }
                  }}
                >
                  Читать полностью
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA: Подписка на блог */}
      <div className="mt-16">
        <div className="rounded-3xl p-8 md:p-10 text-center shadow-2xl bg-gradient-to-r from-brand-secondary to-[#C4A698]">
          <h3 className="font-arsenal text-3xl font-bold text-black mb-3">Понравился блог?</h3>
          <p className="font-anonymous text-black/80 text-lg md:text-xl mb-6">Подпишись и получай новые статьи, практические советы и разборы ошибок первым.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/70 text-black text-sm font-arsenal">Разговорные шаблоны</span>
            <span className="px-3 py-1 rounded-full bg-white/70 text-black text-sm font-arsenal">Разборы реальных диалогов</span>
            <span className="px-3 py-1 rounded-full bg-white/70 text-black text-sm font-arsenal">Методики без зубрёжки</span>
          </div>
          <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-black font-arsenal font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-white/90 transition-all">
                Подписаться на блог
              </Button>
            </DialogTrigger>
            <DialogContent className="course-modal bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="font-arsenal text-2xl text-black">Подписка на блог</DialogTitle>
                <DialogDescription className="font-anonymous text-black/70">
                  Получай новые статьи и инсайты первым. Заполни короткую форму ниже.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input name="firstName" placeholder="Имя" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                  <input name="lastName" placeholder="Фамилия" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                </div>
                <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                <input name="telegram" placeholder="Telegram-ник (через @) — опционально" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                <input name="phone" placeholder="Телефон — опционально" className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} />
                
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90">
                    {isSubmitting ? 'Отправляем…' : 'Подписаться'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Success Popup (общий) */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-md text-center">
          <div className="mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A99F9B, #C4A698)' }}>
            <span className="text-white text-2xl">✓</span>
          </div>
          <DialogTitle className="font-arsenal text-2xl text-black">Готово!</DialogTitle>
          <DialogDescription className="font-anonymous text-black/70">
            Вы успешно подписались на блог. Новые материалы будут приходить вам первыми.
          </DialogDescription>
          <div className="mt-4">
            <Button onClick={() => setIsSuccessOpen(false)} className="bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90 w-full">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}; 