import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

interface SecurityIndicatorProps {
  className?: string;
}

export function SecurityIndicator({ className = '' }: SecurityIndicatorProps) {
  const [isSecure, setIsSecure] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Проверяем, использует ли сайт HTTPS
    setIsSecure(window.location.protocol === 'https:');
  }, []);

  return (
    <div className={`${className}`}>
      {/* Security Badge */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-green-200/50">
          <div className="flex items-center gap-2">
            {isSecure ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <Shield className="w-5 h-5 text-red-600" />
            )}
            <span className="font-arsenal text-sm font-bold text-gray-800">
              {isSecure ? 'Защищено' : 'Не защищено'}
            </span>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="ml-2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Security Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowDetails(false)} />
          <div className="relative bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-arsenal text-xl font-bold text-black mb-2">
                Безопасность данных
              </h3>
              <p className="font-anonymous text-gray-600">
                Мы заботимся о защите вашей информации
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {/* SSL Certificate */}
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                <Lock className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-arsenal text-sm font-bold text-green-800">
                    SSL-шифрование
                  </p>
                  <p className="font-anonymous text-xs text-green-600">
                    Все данные передаются в зашифрованном виде
                  </p>
                </div>
              </div>

              {/* GDPR Compliance */}
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-arsenal text-sm font-bold text-blue-800">
                    GDPR соответствие
                  </p>
                  <p className="font-anonymous text-xs text-blue-600">
                    Соблюдаем европейские стандарты защиты данных
                  </p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-200">
                <Eye className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-arsenal text-sm font-bold text-purple-800">
                    Защита персональных данных
                  </p>
                  <p className="font-anonymous text-xs text-purple-600">
                    Ваши данные не передаются третьим лицам
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDetails(false)}
              className="w-full bg-gradient-to-r from-brand-secondary to-[#C4A698] text-black font-arsenal font-bold py-3 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 