import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  slug: string;
}

interface BlogProps {
  title?: string;
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как эффективно подготовиться к ЕГЭ по английскому языку',
    excerpt: 'Практические советы и стратегии для успешной сдачи экзамена',
    content: 'Полное содержание статьи о подготовке к ЕГЭ...',
    author: 'Марат Фассахов',
    date: '2024-01-15',
    category: 'ЕГЭ/ОГЭ',
    tags: ['ЕГЭ', 'английский', 'подготовка', 'экзамен'],
    readTime: 8,
    image: '/blog/ege-preparation.jpg',
    slug: 'ege-preparation'
  },
  {
    id: '2',
    title: 'Топ-10 ошибок при изучении английского языка',
    excerpt: 'Распространенные ошибки и способы их избежать',
    content: 'Полное содержание статьи об ошибках...',
    author: 'Марат Фассахов',
    date: '2024-01-10',
    category: 'Изучение языка',
    tags: ['английский', 'ошибки', 'изучение', 'советы'],
    readTime: 6,
    image: '/blog/common-mistakes.jpg',
    slug: 'common-mistakes'
  },
  {
    id: '3',
    title: 'Олимпиадная подготовка: путь к успеху',
    excerpt: 'Как стать призером олимпиады по английскому языку',
    content: 'Полное содержание статьи об олимпиадах...',
    author: 'Марат Фассахов',
    date: '2024-01-05',
    category: 'Олимпиады',
    tags: ['олимпиада', 'английский', 'подготовка', 'успех'],
    readTime: 10,
    image: '/blog/olympiad-success.jpg',
    slug: 'olympiad-success'
  },
  {
    id: '4',
    title: 'Онлайн-обучение: преимущества и особенности',
    excerpt: 'Почему онлайн-уроки могут быть эффективнее традиционных',
    content: 'Полное содержание статьи об онлайн-обучении...',
    author: 'Марат Фассахов',
    date: '2024-01-01',
    category: 'Онлайн-обучение',
    tags: ['онлайн', 'обучение', 'преимущества', 'технологии'],
    readTime: 7,
    image: '/blog/online-learning.jpg',
    slug: 'online-learning'
  }
];

export const Blog: React.FC<BlogProps> = ({ 
  title = "БЛОГ И СОВЕТЫ",
  posts = defaultPosts 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-arsenal text-4xl font-bold text-black mb-4">{title}</h2>
        <div className="w-32 h-1 bg-brand-secondary mx-auto mb-6"></div>
        <p className="font-arsenal text-xl text-brand-secondary font-bold">
          Полезные статьи и советы для изучения английского языка
        </p>
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
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-blog.jpg';
                  }}
                />
              </div>
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

      {/* CTA для блога */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-brand-secondary to-[#C4A698] rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
          <h3 className="font-arsenal text-2xl font-bold text-black mb-4">
            ХОЧЕШЬ БОЛЬШЕ ПОЛЕЗНЫХ СТАТЕЙ?
          </h3>
          <p className="font-arsenal text-lg text-black opacity-80 mb-6">
            Подписывайся на наш блог и получай новые материалы первым
          </p>
          <Button className="bg-white/90 hover:bg-white text-black font-arsenal text-lg font-bold px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105">
            Подписаться на блог
          </Button>
        </div>
      </div>
    </section>
  );
}; 