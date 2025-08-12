import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface ChecklistModalProps {
  trigger: React.ReactNode;
}

export const ChecklistModal: React.FC<ChecklistModalProps> = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('name') as string || '').trim();
    const email = (formData.get('email') as string || '').trim();
    const telegram = (formData.get('telegram') as string || '').trim();
    const phone = (formData.get('phone') as string || '').trim();

    try {
      const botToken = '8059904436:AAF8kJbXOKbMgv6tvq5hMCEmvorfHt608ow';
      const chatId = '-1002835359630';
      const message = `\n🎯 ЗАПРОС ЧЕК-ЛИСТА "10 ОШИБОК ЕГЭ"!\n\n👤 Имя: ${name || '—'}\n📧 Email: ${email || '—'}\n📱 Telegram: ${telegram || 'Не указан'}\n📞 Телефон: ${phone || '—'}\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Источник: Checklist Lead Magnet`;

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
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="course-modal bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-arsenal text-2xl text-black">
              🎯 Скачать чек-лист "10 ошибок ЕГЭ"
            </DialogTitle>
            <DialogDescription className="font-anonymous text-black/70">
              Заполни форму, и мы пришлем чек-лист на email + дадим персональные рекомендации в Telegram
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              name="name" 
              placeholder="Твоё имя" 
              required
              className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
              style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="Email для чек-листа" 
              required
              className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
              style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
            />
            <input 
              name="telegram" 
              placeholder="Telegram (через @) для рекомендаций" 
              className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
              style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
            />
            <input 
              name="phone" 
              placeholder="Телефон — опционально" 
              className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
              style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
            />
            
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white font-arsenal font-bold hover:bg-red-700">
                {isSubmitting ? 'Отправляем…' : '📥 Получить чек-лист'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-md text-center">
          <div className="mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
            <span className="text-white text-2xl">📥</span>
          </div>
          <DialogTitle className="font-arsenal text-2xl text-black">Чек-лист отправлен!</DialogTitle>
          <DialogDescription className="font-anonymous text-black/70">
            Проверь email и Telegram. Также мы свяжемся с тобой для персональных рекомендаций.
          </DialogDescription>
          <div className="mt-4 space-y-3">
            <Button onClick={() => setIsSuccessOpen(false)} className="bg-red-600 text-white font-arsenal font-bold hover:bg-red-700 w-full">
              Закрыть
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                setIsSuccessOpen(false);
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-red-600 text-red-600 font-arsenal font-bold hover:bg-red-50 w-full"
            >
              🎯 Записаться на пробный урок
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};