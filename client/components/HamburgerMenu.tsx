import React from 'react';

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
      {/* Hamburger button */}
      {!open && (
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{ 
            background: 'none', 
            border: 'none', 
            padding: 0, 
            margin: 0, 
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span className="hamburger-line-right"></span>
          <span className="hamburger-line-right"></span>
          <span className="hamburger-line-right"></span>
        </button>
      )}

      {/* Menu Overlay */}
      <div 
        className="menu-overlay-right" 
        style={{ 
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          zIndex: 1000,
          transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)'
        }}
      >
        {/* Close button */}
        <div className="close-button-right" onClick={() => setOpen(false)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

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
          <a href="#reviews" onClick={e => handleMenuClick(e, '#reviews')} className="menu-item-right">ОТЗЫВЫ</a>
          <a href="#contacts" onClick={e => handleMenuClick(e, '#contacts')} className="menu-item-right">КОНТАКТЫ</a>
        </nav>

        {/* Social icons */}
        <div className="menu-social-right">
          <div className="social-icons-right">
            <a href="https://t.me/m/VX8q96qONjYy" className="social-icon-right" target="_blank" rel="noopener noreferrer" title="Telegram">
              <img
                src="/telegram.png"
                alt="Telegram"
                className="w-8 h-8 object-contain"
              />
            </a>
            <a href="https://instagram.com/marat_english" className="social-icon-right" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-8 h-8 object-contain"
              />
            </a>
            <a href="https://wa.me/79172676373" className="social-icon-right" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>
          <a href="tel:+79172676373" className="phone-number-right">+7 917 267 6373</a>
        </div>
      </div>
    </div>
  );
};
