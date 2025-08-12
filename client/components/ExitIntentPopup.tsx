import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export const ExitIntentPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Тестовая кнопка удалена

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Показывать только если курсор уходит в верхнюю часть экрана или покидает документ
      if ((e.clientY <= 0 || e.relatedTarget === null) && !hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Альтернативный способ - при попытке закрыть вкладку/страницу
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('exitIntentShown', 'true');
        return '';
      }
    };

    // Проверяем, показывали ли уже попап
    const alreadyShown = localStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    // Задержка перед активацией (пользователь должен побыть на сайте минимум 10 сек для тестирования)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown, isOpen]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string || '').trim();
    const contact = (formData.get('contact') as string || '').trim();

    try {
      const botToken = '8059904436:AAF8kJbXOKbMgv6tvq5hMCEmvorfHt608ow';
      const chatId = '-1002835359630';
      const message = `\n🚨 EXIT-INTENT LEAD!\n\n👤 Имя: ${name || '—'}\n📱 Контакт: ${contact || '—'}\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Источник: Exit Intent Popup\n💡 Предложение: Первый блок за 17.000₽`;

      // Отправляем в Telegram (в фоне)
      try {
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        }).catch(() => {});
      } catch {}

      form.reset();
      setIsOpen(false);
      setIsSuccessOpen(true);
    } catch {
      setIsOpen(false);
      setIsSuccessOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-2xl sm:max-w-md animate-in zoom-in-95 duration-300">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">⏰</span>
            </div>
            <DialogTitle className="font-arsenal text-2xl text-red-800">
              Стой! Не уходи пока!
            </DialogTitle>
            <DialogDescription className="font-anonymous text-red-700 text-lg">
              Только для тебя — <span className="font-bold">специальная цена</span> на первый блок уроков
            </DialogDescription>
          </DialogHeader>
          
          <div className="text-center py-4">
            <div className="bg-red-600 text-white rounded-xl p-4 mb-4">
              <p className="font-arsenal text-lg font-bold">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</p>
              <p className="font-arsenal text-3xl font-bold">4 урока за 17.000₽</p>
              <p className="font-anonymous text-sm opacity-90">вместо 19.000₽</p>
            </div>
            <p className="font-anonymous text-black/70 text-sm mb-4">
              🔥 Предложение действует только сегодня<br/>
              ⚡ Оставь контакт — перезвоним в течение часа
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input 
              name="name" 
              placeholder="Твоё имя" 
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-red-200 text-black placeholder-black/50 font-arsenal text-sm font-bold focus:border-red-400 focus:outline-none" 
            />
            <input 
              name="contact" 
              placeholder="Telegram или телефон" 
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-red-200 text-black placeholder-black/50 font-arsenal text-sm font-bold focus:border-red-400 focus:outline-none" 
            />
            
            <DialogFooter className="gap-2">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                Нет, спасибо
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-red-600 text-white font-arsenal font-bold hover:bg-red-700 flex-1"
              >
                {isSubmitting ? 'Отправляем…' : '🎯 Получить за 17.000₽'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-md text-center">
          <div className="mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
            <span className="text-white text-2xl">🎉</span>
          </div>
          <DialogTitle className="font-arsenal text-2xl text-black">Супер! Скидка зафиксирована</DialogTitle>
          <DialogDescription className="font-anonymous text-black/70">
            Мы перезвоним тебе в течение часа и обсудим детали. Специальная цена действует до конца дня!
          </DialogDescription>
          <div className="mt-4">
            <Button onClick={() => setIsSuccessOpen(false)} className="bg-red-600 text-white font-arsenal font-bold hover:bg-red-700 w-full">
              Отлично!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};