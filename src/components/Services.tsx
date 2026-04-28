import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '@/src/constants';

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Specialized Care for <br /> Every Patient
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 leading-relaxed"
          >
            From simple checkups to complex orthodontic procedures, we utilize state-of-the-art
            technology to ensure you receive the most effective treatment possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  key?: any;
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-3xl glass hover:border-glow transition-all duration-500 flex flex-col items-start hover:-translate-y-2 overflow-hidden"
    >
      {/* Card Glow Effect on Hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-500">
        <service.icon className="text-primary group-hover:text-dark transition-colors duration-500" size={32} />
      </div>
      
      <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
        {service.description}
      </p>

      <div className="mt-8 flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <span>Learn More</span>
        <div className="w-8 h-[1px] bg-primary" />
      </div>
    </motion.div>
  );
};
