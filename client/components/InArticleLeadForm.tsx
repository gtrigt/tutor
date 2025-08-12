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

interface InArticleLeadFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  leadMagnet?: 'checklist' | 'consultation' | 'lesson';
}

export const InArticleLeadForm: React.FC<InArticleLeadFormProps> = ({
  title = "Получить персональную консультацию",
  description = "Определим твой уровень и составим план занятий под твою цель",
  buttonText = "Записаться бесплатно",
  leadMagnet = 'consultation'
}) => {
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
    const goal = (formData.get('goal') as string || '').trim();

    try {
      const botToken = '8059904436:AAF8kJbXOKbMgv6tvq5hMCEmvorfHt608ow';
      const chatId = '-1002835359630';
      
      let messageType = '';
      switch(leadMagnet) {
        case 'checklist':
          messageType = 'ЗАПРОС ЧЕК-ЛИСТА "10 ОШИБОК ЕГЭ"';
          break;
        case 'consultation':
          messageType = 'ЗАПРОС КОНСУЛЬТАЦИИ ИЗ СТАТЬИ';
          break;
        case 'lesson':
          messageType = 'ЗАПИСЬ НА ПРОБНЫЙ УРОК ИЗ СТАТЬИ';
          break;
      }
      
      const message = `\n🆕 ${messageType}!\n\n👤 Имя: ${name || '—'}\n📧 Email: ${email || '—'}\n📱 Telegram: ${telegram || 'Не указан'}\n📞 Телефон: ${phone || '—'}\n🎯 Цель: ${goal || 'Не указана'}\n\n⏰ Время: ${new Date().toLocaleString('ru-RU')}\n🌐 Источник: In-Article Form`;

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
      <div className="my-8 p-6 bg-gradient-to-r from-brand-secondary/20 to-[#C4A698]/20 rounded-2xl border border-brand-secondary/30">
        <div className="text-center">
          <h3 className="font-arsenal text-xl font-bold text-black mb-2">{title}</h3>
          <p className="font-anonymous text-black/70 mb-4">{description}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brand-secondary text-black font-arsenal font-bold px-6 py-3 rounded-2xl hover:bg-brand-secondary/90">
                {buttonText}
              </Button>
            </DialogTrigger>
            <DialogContent className="course-modal bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-xl">
              <DialogHeader>
                <DialogTitle className="font-arsenal text-2xl text-black">{title}</DialogTitle>
                <DialogDescription className="font-anonymous text-black/70">
                  Заполни форму, и мы свяжемся с тобой в течение часа
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
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
                />
                <input 
                  name="telegram" 
                  placeholder="Telegram (через @) — опционально" 
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
                />
                <input 
                  name="phone" 
                  placeholder="Телефон — опционально" 
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black placeholder-black/40 font-arsenal text-sm font-bold border-0 shadow-inner" 
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }} 
                />
                <select 
                  name="goal" 
                  className="w-full px-4 py-3 rounded-lg bg-[#E8DED6] text-black font-arsenal text-sm font-bold border-0 shadow-inner" 
                  style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25) inset' }}
                >
                  <option value="">Выбери свою цель</option>
                  <option value="ЕГЭ/ОГЭ">ЕГЭ/ОГЭ подготовка</option>
                  <option value="Олимпиада">Олимпиадная подготовка</option>
                  <option value="Разговорный">Свободное общение</option>
                  <option value="IELTS">IELTS подготовка</option>
                  <option value="Другое">Другое</option>
                </select>
                
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90">
                    {isSubmitting ? 'Отправляем…' : 'Отправить заявку'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Success Popup */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl sm:max-w-md text-center">
          <div className="mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #A99F9B, #C4A698)' }}>
            <span className="text-white text-2xl">✓</span>
          </div>
          <DialogTitle className="font-arsenal text-2xl text-black">Заявка отправлена!</DialogTitle>
          <DialogDescription className="font-anonymous text-black/70">
            Мы свяжемся с тобой в течение часа. Проверь Telegram или телефон.
          </DialogDescription>
          <div className="mt-4">
            <Button onClick={() => setIsSuccessOpen(false)} className="bg-brand-secondary text-black font-arsenal font-bold hover:bg-brand-secondary/90 w-full">
              Закрыть
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};