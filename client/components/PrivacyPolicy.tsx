import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, FileText, Users, Database } from 'lucide-react';

interface PrivacyPolicyProps {
  trigger?: React.ReactNode;
}

export function PrivacyPolicy({ trigger }: PrivacyPolicyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="font-arsenal text-sm text-gray-600 border-gray-300 hover:bg-gray-50">
            <Shield className="w-4 h-4 mr-2" />
            Политика конфиденциальности
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-arsenal text-2xl text-center text-black">
            🔒 Политика конфиденциальности
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 text-sm">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <h3 className="font-arsenal text-lg font-bold text-blue-800 mb-2">
              Ваша конфиденциальность важна для нас
            </h3>
            <p className="font-anonymous text-blue-700">
              Мы обязуемся защищать вашу личную информацию и соблюдать все требования по защите данных.
            </p>
          </div>

          {/* Data Collection */}
          <div className="space-y-4">
            <h3 className="font-arsenal text-lg font-bold text-black flex items-center gap-2">
              <Database className="w-5 h-5 text-brand-secondary" />
              Какие данные мы собираем
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h4 className="font-arsenal font-bold text-black mb-2">Персональные данные</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Имя и фамилия</li>
                  <li>• Email адрес</li>
                  <li>• Номер телефона</li>
                  <li>• Telegram username</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h4 className="font-arsenal font-bold text-black mb-2">Технические данные</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• IP адрес</li>
                  <li>• Тип устройства</li>
                  <li>• Браузер</li>
                  <li>• Время посещения</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div className="space-y-4">
            <h3 className="font-arsenal text-lg font-bold text-black flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-secondary" />
              Как мы используем ваши данные
            </h3>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <ul className="space-y-2 text-green-800">
                <li>• Для связи с вами по вопросам обучения</li>
                <li>• Для отправки учебных материалов</li>
                <li>• Для улучшения качества наших услуг</li>
                <li>• Для соблюдения юридических обязательств</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="space-y-4">
            <h3 className="font-arsenal text-lg font-bold text-black flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-secondary" />
              Как мы защищаем ваши данные
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h4 className="font-arsenal font-bold text-purple-800 mb-2">Техническая защита</h4>
                <ul className="space-y-1 text-purple-700">
                  <li>• SSL-шифрование</li>
                  <li>• Защищенные серверы</li>
                  <li>• Регулярные обновления</li>
                  <li>• Резервное копирование</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h4 className="font-arsenal font-bold text-purple-800 mb-2">Организационная защита</h4>
                <ul className="space-y-1 text-purple-700">
                  <li>• Ограниченный доступ</li>
                  <li>• Обучение персонала</li>
                  <li>• Политики безопасности</li>
                  <li>• Регулярные аудиты</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GDPR Rights */}
          <div className="space-y-4">
            <h3 className="font-arsenal text-lg font-bold text-black flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-secondary" />
              Ваши права по GDPR
            </h3>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-arsenal font-bold text-orange-800 mb-2">Права доступа</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Получить копию данных</li>
                    <li>• Узнать о обработке</li>
                    <li>• Исправить неточности</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-arsenal font-bold text-orange-800 mb-2">Права контроля</h4>
                  <ul className="space-y-1 text-orange-700">
                    <li>• Удалить данные</li>
                    <li>• Ограничить обработку</li>
                    <li>• Перенести данные</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-secondary/10 rounded-2xl p-4 border border-brand-secondary/20">
            <h3 className="font-arsenal text-lg font-bold text-black mb-2">
              📧 Свяжитесь с нами
            </h3>
            <p className="font-anonymous text-gray-700 mb-3">
              Если у вас есть вопросы о защите данных или вы хотите воспользоваться своими правами:
            </p>
            <div className="space-y-2">
              <p className="font-arsenal text-sm">
                <strong>Email:</strong> privacy@maratfassakhov.com
              </p>
              <p className="font-arsenal text-sm">
                <strong>Telegram:</strong> @maratfassakhov
              </p>
              <p className="font-arsenal text-sm">
                <strong>Время ответа:</strong> В течение 24 часов
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-xs">
            <p>Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
            <p>Версия: 1.0</p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button 
            onClick={() => setIsOpen(false)}
            className="bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal font-bold px-8 py-3 rounded-2xl"
          >
            Понятно
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 