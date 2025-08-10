import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';

export default function EgePreparation() {
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('#contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Как эффективно подготовиться к ЕГЭ по английскому языку 2024"
        description="Проверенная стратегия подготовки к ЕГЭ по английскому от эксперта. Планы, методики, секреты высоких баллов. Гарантированный результат 80+."
        keywords="ЕГЭ английский, подготовка ЕГЭ, английский экзамен, высокие баллы ЕГЭ"
        author="Марат Фассахов"
        image="https://marat-english.com/blog/ege-preparation.jpg"
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
              📚 ЕГЭ/ОГЭ • 8 минут чтения
            </div>
          </div>
        </nav>

        {/* Заголовок статьи */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal font-bold px-4 py-2 rounded-full text-sm">
                ЕГЭ/ОГЭ ПОДГОТОВКА
              </span>
            </div>
            
            <h1 className="font-arsenal text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Как эффективно подготовиться к ЕГЭ по английскому языку
            </h1>
            
            <p className="font-arsenal text-xl text-brand-secondary mb-8 max-w-3xl mx-auto">
              Проверенная стратегия, которая помогла сотням учеников набрать 80+ баллов на ЕГЭ. 
              Пошаговый план подготовки от эксперта с опытом 5+ лет.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-black/60 font-anonymous mb-8">
              <span>👨‍🏫 Марат Фассахов</span>
              <span>📅 15 января 2024</span>
              <span>⏱️ 8 минут</span>
            </div>

            {/* Главное изображение */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
              <OptimizedImage
                src="/english"
                alt="Подготовка к ЕГЭ по английскому языку"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </header>

          {/* Содержание статьи */}
          <div className="prose max-w-none">
            
            {/* Введение */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/40">
              <h2 className="font-arsenal text-2xl font-bold text-black mb-4">
                💡 Ключевая идея
              </h2>
              <p className="font-anonymous text-lg text-black/80 leading-relaxed">
                ЕГЭ по английскому — это не просто экзамен на знание языка. Это проверка вашей способности 
                применять английский в академических ситуациях. Успех зависит на 40% от знания языка и на 60% 
                от понимания формата и стратегий выполнения заданий.
              </p>
            </div>

            {/* Основной контент */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎯 Структура ЕГЭ: что нужно знать
              </h2>
              
              <p className="font-anonymous text-lg text-black/80 mb-6 leading-relaxed">
                Экзамен состоит из <strong>письменной части (80 баллов)</strong> и <strong>устной части (20 баллов)</strong>. 
                Многие недооценивают устную часть, хотя она может кардинально изменить итоговый результат.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#FFF6F6] to-[#F0E8E8] rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">📝 Письменная часть</h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• <strong>Аудирование:</strong> 30 мин, 20 заданий</li>
                    <li>• <strong>Чтение:</strong> 30 мин, 20 заданий</li>
                    <li>• <strong>Грамматика:</strong> 40 мин, 20 заданий</li>
                    <li>• <strong>Письмо:</strong> 80 мин, 2 задания</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-[#F0F8F0] to-[#E8F0E8] rounded-2xl p-6 shadow-lg">
                  <h3 className="font-arsenal text-xl font-bold text-black mb-4">🎤 Устная часть</h3>
                  <ul className="space-y-2 font-anonymous text-black/80">
                    <li>• <strong>Чтение вслух:</strong> 1 задание</li>
                    <li>• <strong>Диалог-расспрос:</strong> 4 вопроса</li>
                    <li>• <strong>Монолог:</strong> описание фото</li>
                    <li>• <strong>Сравнение:</strong> 2 фотографии</li>
                  </ul>
                </div>
              </div>
            </section>

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
                    👨‍🏫 Об авторе
                  </h3>
                  <p className="font-anonymous text-black/80 leading-relaxed">
                    Меня зовут Марат, я сертифицированный преподаватель английского языка и победитель ВСОШ. 
                    За 5 лет помог более 200 ученикам успешно сдать ЕГЭ со средним баллом 85+. 
                    Обучался в американских университетах 3 года.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                📅 Оптимальные сроки подготовки
              </h2>
              
              <p className="font-anonymous text-lg text-black/80 mb-6 leading-relaxed">
                <strong>Главное правило:</strong> начинайте готовиться минимум за 12 месяцев до экзамена. 
                Почему именно столько? ЕГЭ проверяет не только языковые навыки, но и специфические стратегии.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-green-500">
                  <h4 className="font-arsenal font-bold text-black mb-2">🟢 12+ месяцев до экзамена</h4>
                  <p className="font-anonymous text-black/80">Закрепление базовой грамматики, активное расширение словарного запаса</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-yellow-500">
                  <h4 className="font-arsenal font-bold text-black mb-2">🟡 6-8 месяцев до экзамена</h4>
                  <p className="font-anonymous text-black/80">Изучение форматов заданий ЕГЭ, отработка стратегий выполнения</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-orange-500">
                  <h4 className="font-arsenal font-bold text-black mb-2">🟠 3-4 месяца до экзамена</h4>
                  <p className="font-anonymous text-black/80">Интенсивная работа со слабыми местами, регулярные пробники</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-l-4 border-red-500">
                  <h4 className="font-arsenal font-bold text-black mb-2">🔴 1-2 месяца до экзамена</h4>
                  <p className="font-anonymous text-black/80">Решение полных вариантов, психологическая подготовка</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🚀 Проверенные стратегии для каждого раздела
              </h2>

              <div className="space-y-8">
                {/* Аудирование */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    🎧 Аудирование
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Главная ошибка:</strong> попытка понять каждое слово</p>
                    <p><strong>Правильная стратегия:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Читайте вопросы ДО прослушивания</li>
                      <li>Фокусируйтесь на ключевых словах</li>
                      <li>Тренируйте предсказание ответов</li>
                      <li>Слушайте британское произношение ежедневно (BBC)</li>
                    </ul>
                  </div>
                </div>

                {/* Чтение */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    📖 Чтение
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Техники скорочтения:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Skimming</strong> — беглое чтение для общего понимания</li>
                      <li><strong>Scanning</strong> — поиск конкретной информации</li>
                      <li><strong>Работа с заголовками</strong> — 80% информации в первых строках абзацев</li>
                      <li><strong>Исключение дистракторов</strong> — неправильные варианты всегда содержат слова из текста</li>
                    </ul>
                  </div>
                </div>

                {/* Грамматика */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    ⚙️ Грамматика и лексика
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Приоритеты изучения:</strong></p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>Времена английского глагола (особенно Perfect и Continuous)</li>
                      <li>Фразовые глаголы (минимум 100 самых частых)</li>
                      <li>Словообразование (суффиксы и приставки)</li>
                      <li>Устойчивые выражения и коллокации</li>
                    </ol>
                  </div>
                </div>

                {/* Письмо */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                  <h3 className="font-arsenal text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    ✍️ Письмо
                  </h3>
                  <div className="space-y-3 font-anonymous text-black/80">
                    <p><strong>Структура эссе:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Введение:</strong> перефразируйте тему (не копируйте!)</li>
                      <li><strong>2-3 аргумента "за":</strong> каждый в отдельном абзаце</li>
                      <li><strong>1-2 аргумента "против"</strong> с их опровержением</li>
                      <li><strong>Заключение:</strong> ваша позиция без новой информации</li>
                    </ul>
                    <p className="bg-yellow-100 p-3 rounded-lg mt-3">
                      <strong>🎯 Секрет:</strong> используйте linking words, но НЕ злоупотребляйте ими. 
                      Экзаменаторы сразу видят заученные шаблоны.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Типичные ошибки */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                ❌ Топ-5 ошибок, которые стоят баллов
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">1. Неправильное распределение времени</h4>
                  <p className="font-anonymous text-black/80">Многие тратят слишком много времени на первые задания и не успевают до письма</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">2. Игнорирование устной части</h4>
                  <p className="font-anonymous text-black/80">20 баллов устной части могут поднять общий результат с 60 до 80</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">3. Заучивание готовых эссе</h4>
                  <p className="font-anonymous text-black/80">Эксперты легко распознают шаблоны и снижают баллы за содержание</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">4. Невнимание к критериям оценивания</h4>
                  <p className="font-anonymous text-black/80">Не изучают, за что конкретно ставят баллы в каждом задании</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4">
                  <h4 className="font-arsenal font-bold text-black mb-2">5. Отсутствие практики в экзаменационных условиях</h4>
                  <p className="font-anonymous text-black/80">Решают задания дома в комфорте, но теряются на реальном экзамене</p>
                </div>
              </div>
            </section>

            {/* Заключение */}
            <section className="mb-10">
              <h2 className="font-arsenal text-3xl font-bold text-black mb-6">
                🎯 Ключевые выводы
              </h2>
              
              <div className="bg-gradient-to-r from-brand-secondary/30 to-[#C4A698]/30 rounded-2xl p-6">
                <ul className="space-y-3 font-anonymous text-lg text-black/80">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Начинайте подготовку минимум за 12 месяцев</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Изучите формат каждого задания и критерии оценивания</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Тренируйтесь в условиях, максимально приближенных к экзамену</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Не забывайте про устную часть — это 20% от общего балла</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Работайте с опытным преподавателем для получения обратной связи</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand-secondary to-[#C4A698] rounded-3xl p-8 text-center">
              <h3 className="font-arsenal text-2xl font-bold text-black mb-4">
                🚀 Готовы начать подготовку к ЕГЭ?
              </h3>
              <p className="font-arsenal text-lg text-black/80 mb-6 max-w-2xl mx-auto">
                Запишитесь на <strong>бесплатную консультацию</strong>, где мы определим ваш текущий уровень, 
                выявим слабые места и составим индивидуальный план подготовки к ЕГЭ
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