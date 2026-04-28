import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-darker/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-glow">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="Our Technology"
                className="w-full h-auto aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -top-10 -left-10 p-6 glass rounded-2xl z-20 hidden md:block">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Digital Precision</span>
              </div>
              <p className="text-[10px] text-white/60">3D Scanning Technology</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Excellence Redefined
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              Why Trust <span className="text-primary">Dental City</span> & Orthodontics?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              Located in the heart of Dhaka, we bring international standards of dental care to Bangladesh. 
              Our clinic combines luxury environment with cutting-edge medical technology to provide 
              a truly unique patient experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {[
                "Advanced 3D Imaging & Digital Scanners",
                "Certified International Specialists",
                "Comfort-First Patient Philosophy",
                "Strict Hygiene & Sterilization Protocols"
              ].map((item, id) => (
                <div key={id} className="flex items-center space-x-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <CheckCircle2 size={14} className="text-primary group-hover:text-dark transition-colors" />
                  </div>
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
            >
              Learn Our History
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
