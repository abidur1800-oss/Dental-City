import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-darker via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Welcome to Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Premium Dental Care <br />
              <span className="text-primary text-glow">& Orthodontics</span> in Dhaka
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Experience safe, comfortable, and advanced dental treatments 
              from Bangladesh's leading experts in oral health.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ShinyButton
              href="#contact"
              className="flex items-center justify-center space-x-3 px-8 py-4 shadow-[0_0_30px_rgba(0,191,255,0.4)]"
            >
              <span className="mr-3">Book Appointment</span>
              <ArrowRight size={20} className="inline-block translate-y-[1px]" />
            </ShinyButton>
            <a
              href="tel:+8801730448606"
              className="flex items-center justify-center space-x-3 px-8 py-4 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all group"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col items-start leading-none">
                <span>Call Now</span>
                <span className="text-xs opacity-60 font-medium">01730-448606</span>
              </div>
            </a>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center space-x-12"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-primary">15k+</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Happy Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-primary">12+</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Expert Dentists</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-primary">24/7</span>
              <span className="text-xs uppercase tracking-wider text-white/50">Emergency Care</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
