import React from 'react';

export const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" className={className}>
    <path d="M25.5 2L1.5 10L9.5 13L21.5 5L12 14.5L20.5 20L25.5 2Z" 
          fill="currentColor" opacity="0.7"/>
  </svg>
);

export const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg width="26" height="36" viewBox="0 0 26 36" fill="none" className={className}>
    <path d="M4 8H22M4 18H22M4 28H22" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" opacity="0.7"/>
  </svg>
);

export const MonitorIcon = ({ className = "" }: { className?: string }) => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className={className}>
    <rect x="2" y="4" width="25" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 24H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14.5 20V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const InteractiveBoardIcon = ({ className = "" }: { className?: string }) => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
    <rect x="3" y="5" width="29" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 15L12 11L16 15L24 7" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="11" r="1" fill="currentColor"/>
  </svg>
);

export const NotesIcon = ({ className = "" }: { className?: string }) => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
    <path d="M7 5C6.44772 5 6 5.44772 6 6V29C6 29.5523 6.44772 30 7 30H28C28.5523 30 29 29.5523 29 29V6C29 5.44772 28.5523 5 28 5H7Z" 
          stroke="currentColor" strokeWidth="2"/>
    <path d="M10 12H25M10 17H25M10 22H20" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round"/>
  </svg>
);

export const CareIcon = ({ className = "" }: { className?: string }) => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
    <path d="M17.5 29C17.5 29 28 22 28 15C28 11.1 24.9 8 21 8C19.3 8 17.8 8.8 17.5 10.5C17.2 8.8 15.7 8 14 8C10.1 8 7 11.1 7 15C7 22 17.5 29 17.5 29Z" 
          stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export const BookIcon = ({ className = "" }: { className?: string }) => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className={className}>
    <path d="M4 7C4 5.89543 4.89543 5 6 5H13C14.6569 5 16 6.34315 16 8V26C16 25.4477 15.5523 25 15 25H6C4.89543 25 4 25.8954 4 27V7Z" 
          stroke="currentColor" strokeWidth="2"/>
    <path d="M30 7C30 5.89543 29.1046 5 28 5H21C19.3431 5 18 6.34315 18 8V26C18 25.4477 18.4477 25 19 25H28C29.1046 25 30 25.8954 30 27V7Z" 
          stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const IncreaseIcon = ({ className = "" }: { className?: string }) => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className={className}>
    <path d="M7 25L13 19L18 24L28 14" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 14H28V21" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="23.5" cy="8.5" r="1.5" fill="currentColor"/>
  </svg>
);
