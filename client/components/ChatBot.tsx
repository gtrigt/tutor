import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

interface ChatBotProps {
  className?: string;
}

export const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState<{goal?: string, level?: string, name?: string}>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Привет! 👋 Я помогу подобрать программу обучения. Как тебя зовут?",
          ["Начать диалог", "Пропустить"]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        isBot: true,
        timestamp: new Date(),
        options
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 секунды "печатания"
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date()
    }]);
  };

  const handleOptionClick = (option: string, messageId: number) => {
    addUserMessage(option);
    
    // Убираем опции из предыдущего сообщения
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, options: undefined } : msg
    ));

    // Логика ответов бота
    setTimeout(() => {
      handleBotResponse(option);
    }, 500);
  };

  const handleBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();

    // Логика диалога
    if (lowerMessage.includes('начать') || lowerMessage.includes('привет')) {
      addBotMessage(
        "Отлично! Скажи, к чему готовишься? 🎯",
        ["ЕГЭ/ОГЭ", "Олимпиады", "Общий английский", "IELTS"]
      );
    }
    else if (lowerMessage.includes('егэ') || lowerMessage.includes('огэ')) {
      setUserInfo(prev => ({ ...prev, goal: 'ЕГЭ/ОГЭ' }));
      addBotMessage(
        "Супер! ЕГЭ/ОГЭ — это серьёзно. Какой у тебя сейчас уровень? 📚",
        ["Начинающий", "Средний", "Хороший", "Не знаю"]
      );
    }
    else if (lowerMessage.includes('олимпиад')) {
      setUserInfo(prev => ({ ...prev, goal: 'Олимпиады' }));
      addBotMessage(
        "Олимпиады — это круто! 🏆 В каких уже участвовал?",
        ["Школьные", "ВСОШ", "Перечневые", "Ещё не участвовал"]
      );
    }
    else if (lowerMessage.includes('общий') || lowerMessage.includes('разговор')) {
      setUserInfo(prev => ({ ...prev, goal: 'Общий английский' }));
      addBotMessage(
        "Отличная цель! Хочешь свободно говорить? 💬",
        ["Да, говорить", "Грамматику подтянуть", "Всё сразу"]
      );
    }
    else if (lowerMessage.includes('ielts')) {
      setUserInfo(prev => ({ ...prev, goal: 'IELTS' }));
      addBotMessage(
        "IELTS — серьёзный экзамен! На какой балл нацеливаешься? 🎯",
        ["6.0-6.5", "7.0-7.5", "8.0+", "Не знаю"]
      );
    }
    else if (lowerMessage.includes('начинающий') || lowerMessage.includes('средний') || lowerMessage.includes('хороший')) {
      setUserInfo(prev => ({ ...prev, level: lowerMessage }));
      addBotMessage(
        `Понял! ${generateRecommendation()}`,
        ["Записаться на урок", "Узнать цены", "Есть вопросы"]
      );
    }
    else if (lowerMessage.includes('не знаю')) {
      addBotMessage(
        "Без проблем! У нас есть быстрый тест на определение уровня 📊",
        ["Пройти тест", "Записаться сразу", "Узнать больше"]
      );
    }
    else if (lowerMessage.includes('записаться') || lowerMessage.includes('урок')) {
      sendLeadToTelegram();
      addBotMessage(
        "Отлично! Сейчас перенаправлю к форме записи. Марат свяжется с тобой в течение часа! 🚀"
      );
      setTimeout(() => {
        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }, 2000);
    }
    else if (lowerMessage.includes('цены') || lowerMessage.includes('стоимость')) {
      addBotMessage(
        "Актуальные цены:\n• Пробный урок: БЕСПЛАТНО\n• 4 урока: 19,000₽ (скидка 32%)\n• 8 уроков: 38,000₽ (скидка 32%)",
        ["Записаться", "Есть вопросы", "Спасибо"]
      );
    }
    else if (lowerMessage.includes('тест')) {
      addBotMessage(
        "Отлично! Тест займёт всего 30 секунд. После него ты получишь персональные рекомендации! 🎯"
      );
      // Здесь можно интегрировать с MiniLevelTest
    }
    else if (lowerMessage.includes('пропустить') || lowerMessage.includes('спасибо')) {
      addBotMessage(
        "Понял! Если будут вопросы — пиши. Удачи в изучении английского! 😊",
        ["Записаться всё-таки", "Закрыть"]
      );
    }
    else if (lowerMessage.includes('закрыть')) {
      setIsOpen(false);
    }
    else {
      // Дефолтный ответ
      addBotMessage(
        "Интересно! А если серьёзно, то лучше обсудить детали с Маратом лично 😊",
        ["Записаться на урок", "Узнать цены", "Есть вопросы"]
      );
    }
  };

  const generateRecommendation = () => {
    const goal = userInfo.goal;
    const level = userInfo.level;

    if (goal === 'ЕГЭ/ОГЭ') {
      if (level?.includes('начинающий')) {
        return "Для ЕГЭ с твоим уровнем нужно минимум 6 месяцев интенсивной подготовки. Сначала база, потом формат экзамена.";
      } else if (level?.includes('средний')) {
        return "Хорошо! За 4-5 месяцев можно подготовиться на 80+ баллов. Фокус на формат ЕГЭ и сложные темы.";
      } else {
        return "Отлично! С твоим уровнем можно нацеливаться на 90+ баллов. Шлифуем детали и тренируем формат.";
      }
    } else if (goal === 'Олимпиады') {
      return "Для олимпиад нужна специальная подготовка. Сложные задания, творческое мышление, нестандартные подходы.";
    } else if (goal === 'Общий английский') {
      return "Классно! Будем развивать разговорные навыки, преодолевать языковой барьер и учиться думать на английском.";
    } else {
      return "IELTS требует знания специфического формата. Подготовлю к каждому блоку: Listening, Reading, Writing, Speaking.";
    }
  };

  const sendLeadToTelegram = async () => {
    try {
      const botToken = '8059904436:AAF8kJbXOKbMgv6tvq5hMCEmvorfHt608ow';
      const chatId = '-1002835359630';
      const message = `\n🤖 ЧАТ-БОТ ЛИДОГЕНЕРАЦИЯ!\n\n🎯 Цель: ${userInfo.goal || 'Не указана'}\n📊 Уровень: ${userInfo.level || 'Не указан'}\n👤 Имя: ${userInfo.name || 'Не указано'}\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Источник: ChatBot`;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      }).catch(() => {});
    } catch {}
  };

  const resetChat = () => {
    setMessages([]);
    setUserInfo({});
    setIsTyping(false);
  };

  return (
    <div className={`fixed bottom-20 right-6 z-40 ${className}`}>
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 mb-4 border border-gray-200 flex flex-col animate-in slide-in-from-bottom-5 fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🤖</span>
              </div>
              <div>
                <h3 className="font-arsenal font-bold text-sm">Помощник Марата</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs p-3 rounded-2xl ${
                  message.isBot 
                    ? 'bg-gray-100 text-black' 
                    : 'bg-brand-primary text-white'
                }`}>
                  <p className="text-sm font-anonymous whitespace-pre-line">{message.text}</p>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option, message.id)}
                          className="block w-full text-left p-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Reset Button */}
          <div className="p-3 border-t border-gray-100">
            <button
              onClick={resetChat}
              className="w-full text-sm text-gray-500 hover:text-gray-700 font-anonymous"
            >
              🔄 Начать заново
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary 
          text-white shadow-2xl hover:scale-110 transition-all duration-300
          flex items-center justify-center
          ${isOpen ? 'rotate-180' : ''}
        `}
      >
        {isOpen ? '×' : '💬'}
      </Button>

      {/* Pulse animation */}
      {!isOpen && (
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-20 animate-ping pointer-events-none" />
      )}
    </div>
  );
};