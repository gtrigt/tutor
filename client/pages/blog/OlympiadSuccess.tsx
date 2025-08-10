import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

export default function OlympiadSuccess() {
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Олимпиадная подготовка: путь к успеху и призовым местам"
        description="Как стать призером олимпиады по английскому языку. Стратегии подготовки от победителя ВСОШ. Секреты успеха и типичные ошибки."
        keywords="олимпиада английский, ВСОШ, подготовка олимпиада, призер олимпиады, английский олимпиада"
        author="Марат Фассахов"
        image="https://marat-english.com/blog/olympiad-success.jpg"
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
              🏆 Олимпиады • 10 минут чтения
            </div>
          </div>
        </nav>

        {/* Заголовок статьи */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-arsenal font-bold px-4 py-2 rounded-full text-sm">
                🏆 ОЛИМПИАДЫ
              </span>
            </div>
            
            <h1 className="font-arsenal text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Олимпиадная подготовка: путь к успеху
            </h1>
            
            <p className="font-arsenal text-xl text-brand-secondary mb-8 max-w-3xl mx-auto">
              Как стать призером олимпиады по английскому языку. Проверенные стратегии от победителя ВСОШ, 
              который знает все секреты олимпиадных заданий изнутри.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-black/60 font-anonymous mb-8">
              <span>👨‍🏫 Марат Фассахов</span>
              <span>📅 5 января 2024</span>
              <span>⏱️ 10 минут</span>
            </div>

            {/* Главное изображение */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <OptimizedImage
                src="/Mark"
                alt="Олимпиадная подготовка по английскому языку"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  🏆 Победитель ВСОШ
                </div>
              </div>
            </div>
          </header>

          {/* Содержание статьи */}
          <div className="prose max-w-none">
            
            {/* Введение */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-6 mb-8 border border-yellow-200">
              <h2 className="font-arsenal text-2xl font-bold text-black mb-4">
                🎯 Ключевая идея
              </h2>
              <p className="font-anonymous text-lg text-black/80 leading-relaxed">
                Олимпиада по английскому языку — это не просто соревнование в знании языка. Это интеллектуальный вызов, 
                который требует креативности, аналитического мышления и глубокого понимания языка как системы. 
                <strong> Успех здесь на 30% зависит от языковых навыков и на 70% от стратегического мышления.</strong>
              </p>
            </div>

            {/* Личный опыт */}
            <div className="bg-gradient-to-r from-brand-secondary/20 to-[#C4A698]/20 rounded-2xl p-6 mb-10 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <OptimizedImage
                    src="/me"
                    alt="Марат Фассахов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-arsenal text-lg font-bold text-black mb-2 flex items-center gap-2">
                    👨‍🏫 Мой опыт <span className="text-yellow-600">🏆</span>
                  </h3>
                  <p className="font-anonymous text-black/80 leading-relaxed">
                    Я прошел путь от обычного школьника до <strong>победителя Всероссийской олимпиады школьников</strong>. 
                    За годы преподавания помог десяткам учеников стать призерами региональных и всероссийских олимпиад. 
                    Знаю все подводные камни и секреты успеха.
                  </p>
                </div>
              </div>
            </div>

            {/* Основной контент */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🏆 Структура олимпиадных заданий
              </h2>
              
              <p className="font-anonymous text-lg text-black/80 mb-6 leading-relaxed">
                Олимпиада кардинально отличается от ЕГЭ. Здесь нет готовых шаблонов и стандартных решений. 
                Каждое задание — это головоломка, требующая нестандартного подхода.
              </p>

              <div className="grid gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🎧 Аудирование: детективная работа
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Особенности олимпиадного аудирования:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Записи с различными акцентами (не только британский)</li>
                      <li>Задания на понимание подтекста и иронии</li>
                      <li>Аутентичные материалы: лекции, интервью, дискуссии</li>
                      <li>Требуется понимание эмоциональной окраски</li>
                    </ul>
                    <div className="bg-blue-200 p-3 rounded-lg mt-3">
                      <strong>💡 Секрет:</strong> Слушайте подкасты TED Talks, BBC Radio 4, NPR. 
                      Олимпиадные задания часто основаны на таких материалах.
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    📖 Чтение: академический уровень
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Типы текстов:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Научные статьи и исследования</li>
                      <li>Литературные отрывки с анализом стиля</li>
                      <li>Философские и публицистические тексты</li>
                      <li>Задания на понимание авторской позиции</li>
                    </ul>
                    <div className="bg-green-200 p-3 rounded-lg mt-3">
                      <strong>💡 Стратегия:</strong> Читайте The Guardian, The New Yorker, Scientific American. 
                      Учитесь анализировать не только содержание, но и авторский стиль.
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🧩 Use of English: лингвистическая головоломка
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Сложные задания:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Фразовые глаголы в неожиданных контекстах</li>
                      <li>Редкие идиомы и коллокации</li>
                      <li>Словообразование с "ловушками"</li>
                      <li>Грамматика на уровне native speaker</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    ✍️ Письмо: креативность + академичность
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Типы заданий:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Эссе с оригинальной аргументацией</li>
                      <li>Анализ статистических данных</li>
                      <li>Креативное письмо (рассказы, письма)</li>
                      <li>Сравнительный анализ текстов</li>
                    </ul>
                    <div className="bg-orange-200 p-3 rounded-lg mt-3">
                      <strong>🎯 Главное:</strong> Оригинальность мышления важнее безупречной грамматики. 
                      Жюри ценит нестандартные идеи и глубину анализа.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Стратегии подготовки */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                📈 Стратегии эффективной подготовки
              </h2>

              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    📅 Долгосрочная подготовка (12+ месяцев)
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">🎯 Языковая база</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Уровень С1-С2 по CEFR</li>
                          <li>Словарный запас 8000+ слов</li>
                          <li>Свободное владение всеми временами</li>
                          <li>Понимание тонкостей грамматики</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">🧠 Развитие мышления</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Критический анализ текстов</li>
                          <li>Логическое построение аргументов</li>
                          <li>Креативное письмо</li>
                          <li>Межкультурная компетенция</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🚀 Интенсивная подготовка (3-6 месяцев)
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-bold mb-2">📚 Изучение формата</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Анализ заданий прошлых лет</li>
                          <li>Понимание критериев оценки</li>
                          <li>Типичные ловушки</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">💪 Практика</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Ежедневные тренировки</li>
                          <li>Разбор сложных заданий</li>
                          <li>Работа со слабыми местами</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">🎯 Фокус</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Олимпиадная лексика</li>
                          <li>Нестандартные задания</li>
                          <li>Скорость выполнения</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ментальная подготовка */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🧘‍♂️ Психологическая подготовка: недооцененный фактор
              </h2>
              
              <p className="font-anonymous text-lg text-black/80 mb-6 leading-relaxed">
                Многие фокусируются только на языковой подготовке, забывая о психологическом аспекте. 
                Олимпиада — это стресс, ограниченное время и нестандартные задания.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">💪 Что развивать</h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Стрессоустойчивость</strong> — тренировки в сжатые сроки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Концентрацию</strong> — медитация и фокусировка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Гибкость мышления</strong> — решение головоломок</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><strong>Уверенность</strong> — позитивные установки</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">🎯 Техники</h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span><strong>Визуализация</strong> успеха перед олимпиадой</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span><strong>Дыхательные упражнения</strong> для снятия стресса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span><strong>Тайм-менеджмент</strong> — распределение времени</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span><strong>Позитивная самонастройка</strong> — "я готов к вызову"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ресурсы для подготовки */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                📚 Топ ресурсов для олимпиадной подготовки
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">📖 Чтение</h3>
                  <div className="grid md:grid-cols-2 gap-4 font-anonymous text-black/80">
                    <div>
                      <h4 className="font-bold mb-2">Газеты и журналы:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>The Guardian (opinion section)</li>
                        <li>The New Yorker</li>
                        <li>The Economist</li>
                        <li>National Geographic</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Академические источники:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Scientific American</li>
                        <li>Harvard Business Review</li>
                        <li>Philosophy Now</li>
                        <li>Literary Review</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">🎧 Аудирование</h3>
                  <div className="grid md:grid-cols-2 gap-4 font-anonymous text-black/80">
                    <div>
                      <h4 className="font-bold mb-2">Подкасты:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>TED Talks (ежедневно)</li>
                        <li>BBC Radio 4 documentaries</li>
                        <li>NPR All Things Considered</li>
                        <li>Philosophy Talk</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Лекции:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>MIT OpenCourseWare</li>
                        <li>Stanford Online</li>
                        <li>Oxford Podcasts</li>
                        <li>Cambridge Talks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Типичные ошибки */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                ❌ Топ-7 ошибок олимпиадников
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">1. Подготовка как к ЕГЭ</h4>
                  <p className="font-anonymous text-black/80">Используют шаблоны и стандартные подходы вместо креативного мышления</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">2. Фокус только на грамматике</h4>
                  <p className="font-anonymous text-black/80">Забывают о развитии критического мышления и аналитических навыков</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">3. Игнорирование культурного контекста</h4>
                  <p className="font-anonymous text-black/80">Не изучают англоязычную культуру, историю, литературу</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">4. Недооценка письменной части</h4>
                  <p className="font-anonymous text-black/80">Мало практикуют различные жанры письма и анализ текстов</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">5. Позднее начало подготовки</h4>
                  <p className="font-anonymous text-black/80">Олимпиадная подготовка требует минимум 2 года систематической работы</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">6. Работа без наставника</h4>
                  <p className="font-anonymous text-black/80">Олимпиадные задания требуют экспертной оценки и обратной связи</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">7. Пренебрежение психологической подготовкой</h4>
                  <p className="font-anonymous text-black/80">Не готовятся к стрессу и нестандартным ситуациям на олимпиаде</p>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎯 Ключевые выводы
              </h2>
              
              <div className="bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-2xl p-6">
                <ul className="space-y-3 font-anonymous text-lg text-black/80">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">🏆</span>
                    <span>Олимпиада — это интеллектуальный вызов, требующий нестандартного мышления</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">🧠</span>
                    <span>Развивайте критическое и креативное мышление, а не только языковые навыки</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">📚</span>
                    <span>Читайте академические тексты и слушайте интеллектуальные подкасты</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">⏰</span>
                    <span>Начинайте подготовку минимум за 2 года до олимпиады</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">👨‍🏫</span>
                    <span>Работайте с опытным наставником, знающим специфику олимпиад</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">💪</span>
                    <span>Готовьтесь психологически к стрессу и нестандартным ситуациям</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 text-center">
              <h3 className="font-arsenal text-2xl font-bold text-black mb-4">
                🏆 Хочешь стать призером олимпиады?
              </h3>
              <p className="font-arsenal text-lg text-black/80 mb-6 max-w-2xl mx-auto">
                Как <strong>победитель ВСОШ</strong>, я знаю все секреты успешной олимпиадной подготовки. 
                Запишись на консультацию и узнай, как достичь призового места
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