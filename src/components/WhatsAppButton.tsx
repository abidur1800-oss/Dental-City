import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "8801730448606";
  const message = "Hello Dental City & Orthodontics, I'd like to book an appointment.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="mb-2 px-4 py-2 bg-white text-dark text-sm font-bold rounded-xl shadow-xl border-l-4 border-[#25D366] relative"
      >
        Need help? Chat with us
        {/* Triangle pointer */}
        <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white rotate-45" />
      </motion.div>

      {/* WhatsApp Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-40 group-hover:opacity-100 transition-opacity animate-pulse" />
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
          {/* Custom SVG for closer WhatsApp look if preferred, but MessageCircle is clean */}
          <MessageCircle size={32} fill="currentColor" />
          
          {/* Notification Badge */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
        </div>
      </a>
    </motion.div>
  );
};
