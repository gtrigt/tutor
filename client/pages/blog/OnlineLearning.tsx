import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

export default function OnlineLearning() {
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Онлайн-обучение английскому: преимущества и особенности 2024"
        description="Почему онлайн-уроки английского могут быть эффективнее традиционных занятий. Современные технологии и методики дистанционного обучения."
        keywords="онлайн английский, дистанционное обучение, онлайн уроки английского, преимущества онлайн обучения"
        author="Марат Фассахов"
        image="https://marat-english.com/blog/online-learning.jpg"
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
              💻 Онлайн-обучение • 7 минут чтения
            </div>
          </div>
        </nav>

        {/* Заголовок статьи */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white font-arsenal font-bold px-4 py-2 rounded-full text-sm">
                💻 ОНЛАЙН-ОБУЧЕНИЕ
              </span>
            </div>
            
            <h1 className="font-arsenal text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Онлайн-обучение: преимущества и особенности
            </h1>
            
            <p className="font-arsenal text-xl text-brand-secondary mb-8 max-w-3xl mx-auto">
              Развенчиваем мифы об онлайн-образовании и рассказываем, почему цифровые уроки английского 
              могут быть эффективнее традиционных занятий в классе.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-black/60 font-anonymous mb-8">
              <span>👨‍🏫 Марат Фассахов</span>
              <span>📅 1 января 2024</span>
              <span>⏱️ 7 минут</span>
            </div>

            {/* Главное изображение */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <OptimizedImage
                src="/english"
                alt="Онлайн-обучение английскому языку"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  🚀 Будущее образования
                </div>
              </div>
            </div>
          </header>

          {/* Содержание статьи */}
          <div className="prose max-w-none">
            
            {/* Введение */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-8 border border-blue-200">
              <h2 className="font-arsenal text-2xl font-bold text-black mb-4">
                🌐 Онлайн — это новая норма
              </h2>
              <p className="font-anonymous text-lg text-black/80 leading-relaxed">
                Пандемия навсегда изменила образование. <strong>75% учеников, попробовавших онлайн-обучение, 
                продолжают заниматься дистанционно даже после снятия ограничений</strong>. 
                И это не случайность — цифровые технологии открывают возможности, 
                которых просто нет в традиционном формате.
              </p>
            </div>

            {/* О преподавателе */}
            <div className="bg-gradient-to-r from-brand-secondary/20 to-[#C4A698]/20 rounded-2xl p-6 mb-10 border-l-4 border-blue-500">
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
                    👨‍🏫 Мой опыт онлайн-преподавания
                  </h3>
                  <p className="font-anonymous text-black/80 leading-relaxed">
                    За 5 лет преподавания я провел более 3000 онлайн-уроков. Обучался в американских университетах, 
                    где онлайн-образование развито на высочайшем уровне. Видел эволюцию цифрового обучения изнутри 
                    и знаю все его преимущества.
                  </p>
                </div>
              </div>
            </div>

            {/* Мифы и реальность */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎭 Мифы vs Реальность онлайн-обучения
              </h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                    <h3 className="font-arsenal text-lg font-bold text-red-700 mb-3">❌ МИФ</h3>
                    <p className="font-anonymous text-black/80">"Онлайн — это менее эффективно, чем очно"</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h3 className="font-arsenal text-lg font-bold text-green-700 mb-3">✅ РЕАЛЬНОСТЬ</h3>
                    <p className="font-anonymous text-black/80">Исследования показывают, что онлайн-обучение может быть на 25-30% эффективнее при правильной организации</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                    <h3 className="font-arsenal text-lg font-bold text-red-700 mb-3">❌ МИФ</h3>
                    <p className="font-anonymous text-black/80">"Нет живого общения и эмоционального контакта"</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h3 className="font-arsenal text-lg font-bold text-green-700 mb-3">✅ РЕАЛЬНОСТЬ</h3>
                    <p className="font-anonymous text-black/80">Современные платформы позволяют полноценное видеообщение, интерактивные доски и групповую работу</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                    <h3 className="font-arsenal text-lg font-bold text-red-700 mb-3">❌ МИФ</h3>
                    <p className="font-anonymous text-black/80">"Сложно контролировать внимание ученика"</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                    <h3 className="font-arsenal text-lg font-bold text-green-700 mb-3">✅ РЕАЛЬНОСТЬ</h3>
                    <p className="font-anonymous text-black/80">Интерактивные задания и геймификация удерживают внимание лучше традиционных методов</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Преимущества */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🚀 8 ключевых преимуществ онлайн-обучения
              </h2>

              <div className="space-y-6">
                {/* Преимущество 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        🌍 Доступ к лучшим преподавателям мира
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        География больше не ограничивает выбор. Можете заниматься с носителями языка из Лондона, 
                        экспертами по ЕГЭ из Москвы или олимпиадными тренерами из любой точки мира.
                      </p>
                      <div className="bg-blue-200 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80 text-sm">
                          <strong>Пример:</strong> Мои ученики из Владивостока занимаются с преподавателем из Москвы, 
                          получая тот же уровень образования, что и столичные школьники.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Преимущество 2 */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        ⏰ Гибкость расписания
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Никаких поездок на другой конец города. Занимайтесь в удобное время из любого места. 
                        Особенно важно для занятых взрослых и школьников с насыщенным расписанием.
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-white/60 p-2 rounded">
                          <strong>Традиционно:</strong> 2 часа на дорогу + 1 час урок = 3 часа
                        </div>
                        <div className="bg-white/60 p-2 rounded">
                          <strong>Онлайн:</strong> 0 часов на дорогу + 1 час урок = 1 час
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Преимущество 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        🎯 Персонализация и адаптивность
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Цифровые платформы позволяют адаптировать урок под индивидуальные особенности ученика в реальном времени. 
                        AI-системы анализируют прогресс и подстраивают сложность заданий.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm font-anonymous text-black/70">
                        <li>Автоматическое повторение сложных тем</li>
                        <li>Персональные рекомендации по изучению</li>
                        <li>Адаптация темпа под скорость восприятия</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Преимущество 4 */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        💰 Экономическая эффективность
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Онлайн-уроки обычно стоят на 20-40% дешевле очных. Плюс экономия на транспорте, 
                        учебных материалах (многие ресурсы цифровые) и времени.
                      </p>
                      <div className="bg-orange-200 p-3 rounded-lg">
                        <p className="font-anonymous text-black/80 text-sm">
                          <strong>Подсчет:</strong> Очный урок 2000₽ + 200₽ транспорт + 2 часа времени vs 
                          Онлайн урок 1500₽ + 0₽ транспорт + экономия времени
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Преимущество 5 */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        🎮 Интерактивность и геймификация
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Современные образовательные платформы используют элементы игр: достижения, уровни, 
                        соревнования. Это повышает мотивацию и делает обучение увлекательным.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm font-anonymous text-black/70">
                        <li>Интерактивные упражнения и викторины</li>
                        <li>Виртуальные симуляции реальных ситуаций</li>
                        <li>Instant feedback и прогресс-трекинг</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Преимущество 6 */}
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        📊 Детальная аналитика прогресса
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Цифровые платформы собирают данные о каждом действии ученика: время выполнения заданий, 
                        типы ошибок, сложные темы. Это позволяет точно корректировать программу обучения.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Преимущество 7 */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      7
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        🔄 Возможность пересмотра материала
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Многие онлайн-уроки записываются, что позволяет пересматривать сложные моменты неограниченное количество раз. 
                        В традиционном классе такой возможности нет.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Преимущество 8 */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      8
                    </div>
                    <div>
                      <h3 className="font-arsenal text-xl font-bold text-black mb-3">
                        🌡️ Комфортная среда обучения
                      </h3>
                      <p className="font-anonymous text-black/80 mb-3">
                        Ученик находится в привычной домашней обстановке, что снижает стресс и барьеры. 
                        Особенно важно для стеснительных людей и детей с особенностями развития.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Современные технологии */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🔬 Современные технологии в онлайн-обучении
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🤖 Искусственный интеллект
                  </h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• Автоматическая проверка произношения</li>
                    <li>• Персональные рекомендации по обучению</li>
                    <li>• Адаптивные тесты и упражнения</li>
                    <li>• Предсказание сложных тем для ученика</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🥽 VR/AR технологии
                  </h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• Виртуальные путешествия в англоязычные страны</li>
                    <li>• Симуляция реальных ситуаций общения</li>
                    <li>• 3D-визуализация грамматических правил</li>
                    <li>• Интерактивные языковые игры</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    🧠 Нейротехнологии
                  </h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• Анализ когнитивной нагрузки в реальном времени</li>
                    <li>• Оптимизация времени обучения</li>
                    <li>• Персональные режимы концентрации</li>
                    <li>• Биофидбек для лучшего запоминания</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4 flex items-center gap-2">
                    ☁️ Облачные технологии
                  </h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• Синхронизация прогресса между устройствами</li>
                    <li>• Доступ к материалам 24/7</li>
                    <li>• Автоматические бэкапы работ</li>
                    <li>• Совместная работа в реальном времени</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Вызовы и решения */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                ⚡ Вызовы онлайн-обучения и их решения
              </h2>

              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 flex items-center gap-2">
                    🚫 Вызов: Отвлекающие факторы дома
                  </h3>
                  <p className="font-anonymous text-black/80 mb-3">
                    Домашняя обстановка может отвлекать: семья, домашние животные, соцсети.
                  </p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="font-anonymous text-black/80"><strong>✅ Решение:</strong> 
                    Создание dedicated workspace, использование техник time-blocking, 
                    геймификация для удержания внимания.</p>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 flex items-center gap-2">
                    📶 Вызов: Технические проблемы
                  </h3>
                  <p className="font-anonymous text-black/80 mb-3">
                    Проблемы с интернетом, звуком, видео могут прерывать учебный процесс.
                  </p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="font-anonymous text-black/80"><strong>✅ Решение:</strong> 
                    Backup-планы (мобильный интернет), техническая поддержка, 
                    простые и надежные платформы.</p>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                  <h3 className="font-arsenal text-lg font-bold text-black mb-3 flex items-center gap-2">
                    👥 Вызов: Недостаток социального взаимодействия
                  </h3>
                  <p className="font-anonymous text-black/80 mb-3">
                    Меньше общения с одноклассниками и spontaneous interactions.
                  </p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="font-anonymous text-black/80"><strong>✅ Решение:</strong> 
                    Групповые онлайн-активности, языковые клубы, 
                    peer-to-peer обучение через цифровые платформы.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎯 Ключевые выводы
              </h2>
              
              <div className="bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-2xl p-6">
                <ul className="space-y-3 font-anonymous text-lg text-black/80">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🚀</span>
                    <span>Онлайн-обучение — это не временная замена, а эволюция образования</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🎯</span>
                    <span>Персонализация и адаптивность — главные преимущества цифрового формата</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">💡</span>
                    <span>Современные технологии делают онлайн-уроки интерактивнее традиционных</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">💰</span>
                    <span>Экономия времени и денег без потери качества образования</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">🌍</span>
                    <span>Доступ к лучшим преподавателям независимо от географии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">📊</span>
                    <span>Детальная аналитика прогресса для максимальной эффективности</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-8 text-center text-white">
              <h3 className="font-arsenal text-2xl font-bold mb-4">
                💻 Попробуйте онлайн-обучение прямо сейчас!
              </h3>
              <p className="font-arsenal text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Убедитесь в эффективности современного цифрового образования на собственном опыте. 
                Запишитесь на <strong>бесплатный пробный онлайн-урок</strong> и ощутите все преимущества!
              </p>
              <Button 
                onClick={scrollToContacts}
                className="bg-white hover:bg-white/90 text-blue-600 font-arsenal text-lg font-bold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                Записаться на пробный урок
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