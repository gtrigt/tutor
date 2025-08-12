import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

export default function WhyEnglishFails() {
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Почему у тебя не получается выучить английский? Главные причины неудач"
        description="Разбираем основные препятствия в изучении английского языка и показываем персональный путь к успеху с проверенными методиками."
        keywords="почему не получается английский, препятствия изучение английского, мотивация английский, методики изучения"
        author="Марат Фассахов"
        image="https://marat-english.com/blog/why-english-fails.jpg"
      />
      
      <div className="min-h-screen" style={{ backgroundColor: '#FBF3F0' }}>
        {/* Навигация */}
        <nav className="py-4 px-4 border-b border-brand-secondary/20">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="font-arsenal text-brand-secondary hover:bg-brand-secondary/10"
            >
              ← Назад к блогу
            </Button>
            <div className="text-sm text-black/60 font-anonymous">
              🧠 Изучение языка • 12 минут чтения
            </div>
          </div>
        </nav>

        {/* Заголовок статьи */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white font-arsenal font-bold px-4 py-2 rounded-full text-sm">
                💭 ПСИХОЛОГИЯ ИЗУЧЕНИЯ
              </span>
            </div>
            
            <h1 className="font-arsenal text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Почему у тебя не получается выучить английский?
            </h1>
            
            <p className="font-anonymous text-lg text-black/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              Каждый день тысячи людей начинают изучать английский. Но лишь единицы добиваются реального успеха. 
              В чем же причина? Давайте честно разберем главные препятствия и найдем ваш персональный путь к свободному владению языком.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-black/60 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-secondary to-[#C4A698] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">МФ</span>
                </div>
                <span className="font-arsenal">Марат Фассахов</span>
              </div>
              <div className="w-1 h-1 bg-black/30 rounded-full"></div>
              <span className="font-anonymous">20 января 2024</span>
            </div>
          </header>

          {/* Основное изображение */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedImage
              src="/images/blog/blog_language"
              alt="Препятствия в изучении английского языка"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Введение */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-8">
              <p className="font-arsenal text-lg text-black leading-relaxed mb-0">
                <strong>Признайся честно:</strong> сколько раз ты начинал изучать английский? Сколько учебников пылится на полке? 
                Сколько приложений установлено на телефоне, но не используется? Если эти вопросы задели за живое — эта статья для тебя.
              </p>
            </div>

            {/* Причина 1 */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">1</span>
                Отсутствие четкой цели
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg mb-6">
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-red-600">Проблема:</strong> «Хочу выучить английский» — это не цель, а мечта. 
                  Без конкретной цели мозг не понимает, зачем прикладывать усилия.
                </p>
                
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-green-600">Решение:</strong> Поставь SMART-цель. Например: «Через 6 месяцев хочу сдать IELTS на 7.0 баллов» 
                  или «За год научиться свободно обсуждать рабочие вопросы на английском».
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="font-arsenal text-base text-blue-800 mb-0">
                    💡 <strong>Мой подход:</strong> На первом занятии мы определяем твою конкретную цель и составляем 
                    пошаговый план её достижения. Это дает направление всему обучению.
                  </p>
                </div>
              </div>
            </section>

            {/* Причина 2 */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">2</span>
                Неправильная методика
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg mb-6">
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-red-600">Проблема:</strong> Зубрежка слов и правил грамматики без практики. 
                  Это как учиться плавать по учебнику — теория есть, а навыка нет.
                </p>
                
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-green-600">Решение:</strong> Коммуникативный подход. Язык изучается через использование, 
                  а не через заучивание. Говори с первого урока!
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h4 className="font-arsenal text-lg font-bold text-red-700 mb-2">❌ Неэффективно</h4>
                    <ul className="font-anonymous text-sm text-red-600 space-y-1">
                      <li>• Зубрежка списков слов</li>
                      <li>• Изучение правил без практики</li>
                      <li>• Фокус только на чтении</li>
                      <li>• Страх делать ошибки</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h4 className="font-arsenal text-lg font-bold text-green-700 mb-2">✅ Эффективно</h4>
                    <ul className="font-anonymous text-sm text-green-600 space-y-1">
                      <li>• Изучение слов в контексте</li>
                      <li>• Практика грамматики в речи</li>
                      <li>• Развитие всех навыков</li>
                      <li>• Работа над ошибками</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                  <p className="font-arsenal text-base text-blue-800 mb-0">
                    🎯 <strong>Моя методика:</strong> С первого урока мы говорим на английском. Постоянная практика языка 
                    разрушает языковой барьер и формирует автоматизм в речи.
                  </p>
                </div>
              </div>
            </section>

            {/* Причина 3 */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">3</span>
                Языковой барьер и страх ошибок
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg mb-6">
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-red-600">Проблема:</strong> «А вдруг я скажу неправильно?» Этот страх парализует 
                  и не дает применять знания на практике.
                </p>
                
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-green-600">Решение:</strong> Ошибки — это не провал, а инструмент обучения. 
                  Важно создать безопасную среду для практики.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-arsenal text-lg font-bold text-purple-700 mb-3">🔥 Секрет преодоления барьера</h4>
                  <p className="font-anonymous text-base text-purple-600 leading-relaxed">
                    Начинай говорить с простых фраз. «I think...», «In my opinion...», «I believe...» — 
                    эти конструкции дают время подумать и снижают стресс. Постепенно речь станет более свободной.
                  </p>
                </div>
              </div>
            </section>

            {/* Причина 4 */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">4</span>
                Отсутствие системности
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg mb-6">
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-red-600">Проблема:</strong> Хаотичное обучение — сегодня грамматика, завтра словарь, 
                  послезавтра видео на YouTube. Без системы знания не складываются в навык.
                </p>
                
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-green-600">Решение:</strong> Структурированная программа с четкой последовательностью 
                  и регулярным повторением.
                </p>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
                  <p className="font-arsenal text-base text-indigo-800 mb-0">
                    📈 <strong>Мои результаты:</strong> Средний балл учеников на ЕГЭ — 85+. 100% сдают на 4 и 5. 
                    Это результат системного подхода и персональных программ обучения.
                  </p>
                </div>
              </div>
            </section>

            {/* Причина 5 */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold">5</span>
                Нет поддержки и обратной связи
              </h2>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg mb-6">
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-red-600">Проблема:</strong> Самостоятельное изучение часто приводит к тупику. 
                  Некому исправить ошибки, некому мотивировать, некому показать правильный путь.
                </p>
                
                <p className="font-anonymous text-lg text-black/80 leading-relaxed mb-4">
                  <strong className="text-green-600">Решение:</strong> Наставник, который не только учит, но и поддерживает, 
                  корректирует ошибки и адаптирует программу под твои потребности.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-arsenal font-bold text-blue-800 mb-1">Персональный подход</h4>
                    <p className="font-anonymous text-sm text-blue-600">Программа под твои цели и уровень</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-xl">
                    <div className="text-2xl mb-2">🔄</div>
                    <h4 className="font-arsenal font-bold text-green-800 mb-1">Постоянная обратная связь</h4>
                    <p className="font-anonymous text-sm text-green-600">Исправление ошибок в реальном времени</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-purple-100 rounded-xl">
                    <div className="text-2xl mb-2">💪</div>
                    <h4 className="font-arsenal font-bold text-purple-800 mb-1">Мотивация</h4>
                    <p className="font-anonymous text-sm text-purple-600">Поддержка на всем пути обучения</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Заключение и CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-brand-secondary to-[#C4A698] rounded-3xl p-8 text-center">
                <h2 className="font-arsenal text-3xl font-bold text-black mb-4">
                  Готов изменить свой подход к английскому?
                </h2>
                
                <p className="font-anonymous text-lg text-black/80 mb-6 leading-relaxed">
                  Все эти препятствия можно преодолеть с правильным наставником и методикой. 
                  Начни свой путь к свободному английскому уже сегодня!
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/90 rounded-2xl p-6">
                    <div className="text-3xl mb-3">🏆</div>
                    <h3 className="font-arsenal text-xl font-bold text-black mb-2">Мои достижения</h3>
                    <ul className="font-anonymous text-sm text-black/70 text-left space-y-1">
                      <li>• 3 года изучения в США</li>
                      <li>• Стажировка в Великобритании</li>
                      <li>• Средний балл учеников: 85+</li>
                      <li>• Призеры олимпиад всех уровней</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/90 rounded-2xl p-6">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-arsenal text-xl font-bold text-black mb-2">Что получишь</h3>
                    <ul className="font-anonymous text-sm text-black/70 text-left space-y-1">
                      <li>• Персональную программу</li>
                      <li>• Постоянную практику речи</li>
                      <li>• Разрушение языкового барьера</li>
                      <li>• Гарантированный результат</li>
                    </ul>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContacts}
                  className="bg-white hover:bg-white/90 text-black font-arsenal text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  🚀 Записаться на первый урок бесплатно
                </Button>
                
                <p className="font-arsenal text-sm text-black/60 mt-4">
                  Первое занятие — бесплатно. Определим твои цели и составим план успеха!
                </p>
              </div>
            </section>

            {/* Дополнительные советы */}
            <section className="mb-12">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-8 text-center">
                Бонус: 5 практических советов на каждый день
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">🎧</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Слушай активно</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    15 минут подкастов или видео на английском ежедневно. Начни с простого уровня и постепенно усложняй.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">📱</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Говори с собой</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    Комментируй свои действия на английском. «I'm making coffee», «I'm going to work» — простые фразы работают!
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">📚</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Читай с интересом</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    Выбери тему, которая тебе нравится — спорт, путешествия, технологии. Интерес поможет запоминать лучше.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">✍️</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Пиши мысли</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    Веди дневник на английском. Даже несколько предложений о дне помогут развить письменную речь.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">🎮</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Играй на английском</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    Переключи язык в играх или приложениях. Неформальная обстановка снижает стресс от изучения.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                  <div className="text-3xl mb-3 text-center">🤝</div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 text-center">Найди партнера</h3>
                  <p className="font-anonymous text-sm text-black/70 leading-relaxed">
                    Языковой обмен или разговорные клубы. Общение с носителями или другими изучающими очень мотивирует.
                  </p>
                </div>
              </div>
            </section>

            {/* Финальный призыв */}
            <section className="text-center">
              <div className="bg-white/90 rounded-3xl p-8 border border-white/40 shadow-lg">
                <h2 className="font-arsenal text-2xl font-bold text-black mb-4">
                  Помни: язык — это навык, а не знание
                </h2>
                
                <p className="font-anonymous text-lg text-black/70 leading-relaxed mb-6">
                  Как нельзя научиться водить машину, только читая правила дорожного движения, 
                  так нельзя выучить язык без постоянной практики. 
                </p>
                
                <p className="font-arsenal text-lg text-black font-bold">
                  Начни говорить уже сегодня — и через несколько месяцев ты не узнаешь себя!
                </p>
              </div>
            </section>

          </div>
        </article>

        {/* Подвал */}
        <footer className="bg-gradient-to-r from-brand-secondary/10 to-[#C4A698]/10 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-arsenal text-lg font-bold text-black mb-2">
              Готов начать свой путь к свободному английскому?
            </p>
            <p className="font-anonymous text-black/70 mb-4">
              📱 Telegram • 📧 Email • 📞 WhatsApp
            </p>
            <Button 
              onClick={scrollToContacts}
              variant="outline" 
              className="font-arsenal font-bold border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
            >
              Связаться со мной
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};