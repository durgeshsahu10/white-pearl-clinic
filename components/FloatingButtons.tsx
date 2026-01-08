import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenAppointment: () => void;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenAppointment }) => {
  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-3 z-40">
      
      {/* Book Appointment (Sticky) */}
      <button
        onClick={onOpenAppointment}
        className="bg-primary text-white p-3 md:px-6 md:py-3 rounded-full shadow-xl hover:bg-blue-600 transition flex items-center gap-2 animate-bounce-slow"
      >
        <Calendar className="w-6 h-6" />
        <span className="hidden md:inline font-bold">Book Now</span>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:bg-[#20bd5a] transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingButtons;