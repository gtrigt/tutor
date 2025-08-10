import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

export default function CommonMistakes() {
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Топ-10 ошибок при изучении английского языка и как их избежать"
        description="Самые распространенные ошибки изучающих английский от опытного преподавателя. Практические советы и способы избежать типичных проблем."
        keywords="ошибки английский, изучение английского, английский язык ошибки, как учить английский"
        author="Марат Фассахов"
        image="https://marat-english.com/blog/common-mistakes.jpg"
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
              📚 Изучение языка • 6 минут чтения
            </div>
          </div>
        </nav>

        {/* Заголовок статьи */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-red-400 to-red-600 text-white font-arsenal font-bold px-4 py-2 rounded-full text-sm">
                💡 СОВЕТЫ ПО ИЗУЧЕНИЮ
              </span>
            </div>
            
            <h1 className="font-arsenal text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Топ-10 ошибок при изучении английского языка
            </h1>
            
            <p className="font-arsenal text-xl text-brand-secondary mb-8 max-w-3xl mx-auto">
              Разбираем самые частые ошибки, которые тормозят прогресс в изучении английского. 
              Практические советы от преподавателя с 5+ летним опытом.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-black/60 font-anonymous mb-8">
              <span>👨‍🏫 Марат Фассахов</span>
              <span>📅 10 января 2024</span>
              <span>⏱️ 6 минут</span>
            </div>

            {/* Главное изображение */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <OptimizedImage
                src="/english"
                alt="Распространенные ошибки при изучении английского языка"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ❌ Избегайте этих ошибок
                </div>
              </div>
            </div>
          </header>

          {/* Содержание статьи */}
          <div className="prose max-w-none">
            
            {/* Введение */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 mb-8 border border-red-200">
              <h2 className="font-arsenal text-2xl font-bold text-black mb-4">
                🎯 Почему это важно
              </h2>
              <p className="font-anonymous text-lg text-black/80 leading-relaxed">
                За годы преподавания я заметил, что <strong>80% учеников совершают одни и те же ошибки</strong>. 
                Эти ошибки не только замедляют прогресс, но и формируют неправильные привычки, 
                от которых потом очень сложно избавиться. Хорошая новость: все эти ошибки легко предотвратить!
              </p>
            </div>

            {/* О преподавателе */}
            <div className="bg-gradient-to-r from-brand-secondary/20 to-[#C4A698]/20 rounded-2xl p-6 mb-10 border-l-4 border-brand-secondary">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <OptimizedImage
                    src="/me"
                    alt="Марат Фассахов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-2">
                    👨‍🏫 Опыт преподавателя
                  </h3>
                  <p className="font-anonymous text-black/80 leading-relaxed">
                    За 5 лет преподавания я работал с учениками разных уровней — от начинающих до продвинутых. 
                    Обучался в американских университетах, что дало понимание языка "изнутри". 
                    Эти ошибки я вижу практически у каждого нового ученика.
                  </p>
                </div>
              </div>
            </div>

            {/* Ошибки */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                ❌ 10 главных ошибок изучающих английский
              </h2>

              <div className="space-y-8">
                {/* Ошибка 1 */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Изучение только грамматики без практики речи
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Ученики годами изучают правила, но не могут сказать простое предложение.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Правило 50/50 — половина времени на изучение, половина на практику. 
                        Каждое новое правило сразу применяйте в речи.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 2 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Боязнь делать ошибки
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Перфекционизм парализует. Ученики молчат, боясь сказать неправильно.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Ошибки — это часть процесса обучения. Лучше говорить с ошибками, чем вообще не говорить. 
                        Носители языка тоже делают ошибки!</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 3 */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Игнорирование произношения
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Фокус только на письме. В результате — сильный акцент и непонимание на слух.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Изучайте транскрипцию, слушайте носителей, записывайте свою речь. 
                        Произношение — основа понимания на слух.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 4 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Заучивание слов списками без контекста
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Знают слово отдельно, но не могут использовать в речи.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Изучайте слова в контексте — в предложениях, диалогах, историях. 
                        Создавайте свои примеры с новыми словами.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 5 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Перевод всего подряд
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Постоянно переводят в голове с русского на английский и обратно.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Учитесь думать на английском. Начните с простых фраз. 
                        Описывайте окружающий мир на английском.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 6 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Нерегулярность занятий
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Занимаются интенсивно неделю, потом месяц перерыв.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Лучше 15 минут каждый день, чем 3 часа раз в неделю. 
                        Постоянство важнее интенсивности.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 7 */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 shadow-lg border-l-4 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      7
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Изучение только британского или только американского
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> В реальной жизни встречаются разные варианты английского.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Выберите основной вариант (британский или американский), но изучайте особенности других. 
                        Слушайте разные акценты.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 8 */}
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-lg border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      8
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Избегание живого общения
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> Изучают язык только из книг и приложений, избегая реального общения.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Ищите возможности для общения: языковые клубы, онлайн-платформы, 
                        разговор с преподавателем. Язык — это инструмент коммуникации.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 9 */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 shadow-lg border-l-4 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      9
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Сравнение с другими учениками
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> "У него получается лучше", "Я медленно прогрессирую" — самобичевание.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Сравнивайте себя только с собой прошлым. У каждого свой темп и стиль обучения. 
                        Фокусируйтесь на своем прогрессе.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ошибка 10 */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border-l-4 border-gray-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      10
                    </div>
                    <div className="flex-1">
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        Отсутствие четких целей
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        <strong>Проблема:</strong> "Хочу знать английский" — слишком абстрактная цель.
                      </p>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80"><strong>💡 Решение:</strong> 
                        Ставьте конкретные, измеримые цели: "Через 6 месяцев хочу сдать экзамен на B2", 
                        "Через год хочу смотреть фильмы без субтитров".</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* План действий */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                ✅ План действий: как избежать этих ошибок
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <p className="font-anonymous text-black/80"><strong>Поставьте конкретную цель</strong> на ближайшие 3-6 месяцев</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <p className="font-anonymous text-black/80"><strong>Создайте ежедневную привычку</strong> — минимум 15-20 минут в день</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <p className="font-anonymous text-black/80"><strong>Найдите возможности для практики</strong> — реальное общение обязательно</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <p className="font-anonymous text-black/80"><strong>Ведите дневник прогресса</strong> — записывайте новые слова и достижения</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <p className="font-anonymous text-black/80"><strong>Не бойтесь ошибок</strong> — они часть процесса обучения</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎯 Главные выводы
              </h2>
              
              <div className="bg-gradient-to-r from-brand-secondary/30 to-[#C4A698]/30 rounded-2xl p-6">
                <ul className="space-y-3 font-anonymous text-lg text-black/80">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Изучение языка — это марафон, не спринт. Постоянство важнее интенсивности.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Ошибки — это нормально и полезно. Они показывают, что вы выходите из зоны комфорта.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Практика речи важнее изучения теории. Говорите с первого дня обучения.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Ставьте конкретные, измеримые цели и отслеживайте прогресс.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Найдите возможности для живого общения — язык изучается через коммуникацию.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand-secondary to-[#C4A698] rounded-3xl p-8 text-center">
              <h3 className="font-arsenal text-2xl font-bold text-black mb-4">
                🚀 Хотите избежать этих ошибок с самого начала?
              </h3>
              <p className="font-arsenal text-lg text-black/80 mb-6 max-w-2xl mx-auto">
                Запишитесь на <strong>бесплатную консультацию</strong>, где я помогу определить ваши слабые места, 
                составлю индивидуальный план и дам рекомендации по эффективному изучению английского
              </p>
              <Button 
                onClick={scrollToContacts}
                className="bg-white hover:bg-white/90 text-black font-arsenal text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </article>

        {/* Нижняя навигация */}
        <div className="bg-white/40 backdrop-blur-sm border-t border-brand-secondary/20 py-6">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="font-arsenal border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-black"
            >
              ← Все статьи
            </Button>
            <div className="text-center">
              <p className="font-arsenal text-sm text-black/60 mb-1">Поделиться статьей</p>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-brand-secondary hover:bg-brand-secondary/10">
                  📱 Telegram
                </Button>
                <Button variant="ghost" size="sm" className="text-brand-secondary hover:bg-brand-secondary/10">
                  📷 Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}