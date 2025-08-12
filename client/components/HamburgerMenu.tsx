import React from 'react';
import OptimizedImage from './OptimizedImage';

export const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick = (e: React.MouseEvent, targetId?: string) => {
    if (targetId) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpen(false);
  };

  return (
    <div className="hamburger-menu-right">
      {/* Hamburger button (morphs to X) */}
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        className={`hamburger ${open ? 'is-open' : ''}`}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menu Overlay */}
      <div 
        className="menu-overlay-right" 
        style={{ 
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1000,
          transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)'
        }}
      >
        {/* Menu items */}
        <nav className="menu-nav-right">
          <a href="#services" onClick={e => handleMenuClick(e, '#services')} className="menu-item-right">
            <span>УСЛУГИ</span>
            <svg className="menu-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1L11.5 6L6.5 11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" onClick={e => handleMenuClick(e, '#about')} className="menu-item-right">ОБО МНЕ</a>
          <a href="#advantages" onClick={e => handleMenuClick(e, '#advantages')} className="menu-item-right">ПРЕИМУЩЕСТВА</a>
          <a href="#courses" onClick={e => handleMenuClick(e, '#courses')} className="menu-item-right">КУРСЫ</a>
          <a href="#blog" onClick={e => handleMenuClick(e, '#blog')} className="menu-item-right">БЛОГ</a>
          <a href="#reviews" onClick={e => handleMenuClick(e, '#reviews')} className="menu-item-right">ОТЗЫВЫ</a>
          <a href="#contacts" onClick={e => handleMenuClick(e, '#contacts')} className="menu-item-right">КОНТАКТЫ</a>
        </nav>

        {/* Social icons */}
        <div className="menu-social-right">
          <div className="social-icons-right">
            <a href="https://t.me/m/VX8q96qONjYy" className="social-icon-right social-hover is-telegram" target="_blank" rel="noopener noreferrer" title="Telegram">
              <OptimizedImage
                src="/telegram"
                alt="Telegram"
                className="object-contain"
              />
            </a>
            <a href="https://instagram.com/marat_english" className="social-icon-right social-hover is-instagram" target="_blank" rel="noopener noreferrer" title="Instagram">
              <OptimizedImage
                src="/instagram"
                alt="Instagram"
                className="object-contain"
              />
            </a>
            <a href="https://wa.me/79172676373" className="social-icon-right social-hover is-whatsapp" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <OptimizedImage
                src="/whatsapp"
                alt="WhatsApp"
                className="object-contain"
              />
            </a>
          </div>
          <a href="tel:+79172676373" className="phone-number-right">+7 917 267 6373</a>
        </div>
      </div>
    </div>
  );
};
