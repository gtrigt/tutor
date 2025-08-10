import React from 'react';
import { Link } from 'react-router-dom';

interface SitemapSection {
  title: string;
  links: {
    label: string;
    path: string;
    description?: string;
  }[];
}

interface SitemapProps {
  sections: SitemapSection[];
}

export const Sitemap: React.FC<SitemapProps> = ({ sections }) => {
  return (
    <section className="py-16 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-arsenal text-3xl font-bold text-black mb-4">
            Карта сайта
          </h2>
          <div className="w-32 h-1 bg-brand-secondary mx-auto"></div>
          <p className="font-arsenal text-lg text-black opacity-70 mt-4">
            Навигация по всем разделам сайта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="font-arsenal text-xl font-bold text-black border-b-2 border-brand-secondary pb-2">
                {section.title}
              </h3>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="font-anonymous text-black hover:text-brand-secondary transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                    {link.description && (
                      <p className="font-anonymous text-sm text-black opacity-60 ml-4">
                        {link.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 text-center">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="font-arsenal text-xl font-bold text-black mb-3">
              Полезные ссылки
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/sitemap.xml"
                className="font-anonymous text-black hover:text-brand-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                XML Sitemap
              </a>
              <a
                href="/robots.txt"
                className="font-anonymous text-black hover:text-brand-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Robots.txt
              </a>
              <a
                href="https://t.me/maratenglish"
                className="font-anonymous text-black hover:text-brand-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram канал
              </a>
              <a
                href="https://instagram.com/marat_english"
                className="font-anonymous text-black hover:text-brand-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 