import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { REVIEWS } from '@/src/constants';

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-darker overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Patient Satisfaction
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              Real Stories from <br />
              Our <span className="text-primary">Happy Patients</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 mb-10 leading-relaxed"
            >
              Join thousands of satisfied clients who have transformed their lives
              with our premium dental care services.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-bold">4.9/5 Average Rating</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Google</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Verified Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative z-10 p-8 md:p-12 glass rounded-[40px] min-h-[350px] flex flex-col justify-center border-glow">
              <Quote size={60} className="text-primary/10 absolute top-10 right-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative space-y-6"
                >
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90">
                    "{REVIEWS[index].text}"
                  </p>
                  
                  <div className="flex items-baseline space-x-4">
                    <span className="text-lg font-bold text-primary">{REVIEWS[index].name}</span>
                    <span className="text-sm text-white/40">{REVIEWS[index].date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center space-x-4 mt-12">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full glass hover:bg-primary hover:text-dark transition-all flex items-center justify-center group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full glass hover:bg-primary hover:text-dark transition-all flex items-center justify-center group"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
            
            {/* Background Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
