import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<FAQProps> = ({ 
  items, 
  title = "Часто задаваемые вопросы" 
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-arsenal text-3xl font-bold text-black mb-4">
          {title}
        </h2>
        <div className="w-32 h-1 bg-brand-secondary mx-auto"></div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors rounded-2xl"
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-arsenal text-lg font-bold text-black">
                {item.question}
              </h3>
              <ChevronDownIcon
                className={`w-5 h-5 text-brand-secondary transition-transform ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`px-6 pb-4 transition-all duration-300 ${
                openItems.has(index) ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p className="font-anonymous text-black opacity-80 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Schema.org разметка для FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map((item, index) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
                "upvoteCount": 1,
                "dateCreated": new Date().toISOString()
              }
            })),
            "about": {
              "@type": "Service",
              "name": "Обучение английскому языку",
              "description": "Подготовка к ЕГЭ, олимпиадам и разговорная практике"
            }
          })
        }}
      />
    </section>
  );
}; 