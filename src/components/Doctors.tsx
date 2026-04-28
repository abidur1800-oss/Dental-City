import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { DOCTORS } from '@/src/constants';

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Experts Behind Your Smile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Meet Our World-Class Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 leading-relaxed"
          >
            Our team consists of highly trained dental professionals committed 
            to delivering the highest quality of clinical excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {DOCTORS.map((doctor, index) => (
            <DoctorCard key={doctor.name} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DoctorCardProps {
  key?: any;
  doctor: typeof DOCTORS[0];
  index: number;
}

const DoctorCard = ({ doctor, index }: DoctorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[40px] glass p-4"
    >
      <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center backdrop-blur-[2px]">
          <p className="text-white/80 text-sm italic px-8 text-center mb-6 leading-relaxed">
            "{doctor.bio}"
          </p>
          <div className="flex items-center space-x-4">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Linkedin} />
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 text-center">
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
          {doctor.name}
        </h3>
        <p className="text-primary font-bold text-xs uppercase tracking-widest">
          {doctor.specialty}
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
    <Icon size={18} />
  </a>
);
