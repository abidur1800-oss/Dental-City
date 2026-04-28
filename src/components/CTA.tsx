import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 rounded-[60px] overflow-hidden bg-gradient-to-br from-primary to-primary/60 p-12 md:p-20 text-dark flex flex-col md:flex-row items-center justify-between gap-12 group"
        >
          {/* Animated Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Ready for a Brighter, Healthier Smile?
            </h2>
            <p className="text-xl text-dark/80 font-medium">
              Join the Dental City family today and experience the gold standard 
              of dental care in Dhaka.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0">
            <ShinyButton className="flex items-center justify-center shadow-2xl">
              <div className="flex items-center space-x-3">
                <Calendar size={20} />
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </div>
            </ShinyButton>
          </div>
        </motion.div>
      </div>
      
      {/* Visual Depth */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10" />
    </section>
  );
};
