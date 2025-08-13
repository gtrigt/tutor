import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface MobileModalProps {
  trigger?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function MobileModal({ trigger, title, children, className = '' }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const newY = e.touches[0].clientY;
    setCurrentY(newY);
    
    const deltaY = newY - startY;
    if (deltaY > 0) { // Only allow downward swipe
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If swiped down more than 100px, close the modal
    if (translateY > 100) {
      setIsOpen(false);
    }
    
    // Reset position
    setTranslateY(0);
  };

  const handleDialogChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTranslateY(0);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={`max-w-full max-h-[90vh] p-0 rounded-t-3xl rounded-b-none border-0 ${className}`}>
        <div 
          ref={modalRef}
          className="relative bg-white rounded-t-3xl overflow-hidden"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Swipe indicator */}
          <div className="flex justify-center py-3">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Header */}
          <DialogHeader className="px-6 pb-4">
            <DialogTitle className="font-arsenal text-xl text-center text-black">
              {title}
            </DialogTitle>
          </DialogHeader>
          
          {/* Content */}
          <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 