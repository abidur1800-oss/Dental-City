import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ShinyButton } from './ui/shiny-button';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center border-glow group-hover:scale-110 transition-transform duration-300">
            <span className="text-dark font-display font-bold text-xl">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-primary transition-colors">DENTAL CITY</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-medium -mt-1">Dhaka, Bangladesh</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:text-glow"
            >
              {link.name}
            </a>
          ))}
          <ShinyButton
            href="tel:+8801730448606"
            className="flex items-center space-x-3 shadow-[0_0_20px_rgba(0,191,255,0.3)]"
          >
            <Phone size={16} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs">Call Now</span>
              <span className="text-[10px] opacity-80">01730-448606</span>
            </div>
          </ShinyButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-semibold text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <ShinyButton
                href="tel:+8801730448606"
                className="flex items-center space-x-3 px-8 py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                <div className="flex flex-col items-start leading-none">
                  <span>Call Now</span>
                  <span className="text-xs opacity-80 font-medium">01730-448606</span>
                </div>
              </ShinyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
