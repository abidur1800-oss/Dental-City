import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, GraduationCap, CheckCircle2, ChevronDown } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Doctors = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullBio = `Dr. Kamal Abdullah is a highly experienced dental surgeon and orthodontist based in Dhaka, specializing in advanced smile transformations. With over a decade of clinical excellence, he has become a leading name in orthodontics and cosmetic dentistry. 

His philosophy centers on "Gentle Precision"—the belief that modern dental care should be completely pain-free, transparent, and tailored to the unique facial aesthetics of every patient. He is deeply committed to staying at the forefront of dental technology, utilizing the latest 3D imaging and minimally invasive techniques to ensure superior results. 

Dr. Kamal's approach goes beyond just treating teeth; he focuses on building lifelong relationships with his patients, ensuring they feel empowered and comfortable throughout their smile journey. From complex orthodontic corrections to sophisticated cosmetic veneers, his meticulous eye for detail and compassionate chair-side manner make him a trusted practitioner for families across Dhaka.`;

  return (
    <section id="doctors" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT: IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] rounded-[40px] overflow-hidden glass p-3">
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/d/1FbrJh2zn72TERZjORvOLS9EYQn3DGntF"
                  alt="Dr. Kamal Abdullah"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Rating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-6 -right-6 z-20 glass px-6 py-4 rounded-2xl border-glow shadow-2xl flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
              </div>
              <div>
                <p className="text-white font-bold leading-none">5.0 Rating</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Highly Trusted</p>
              </div>
            </motion.div>

            {/* Degree Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 glass px-6 py-5 rounded-2xl border-glow shadow-2xl flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-white font-bold leading-none text-lg">BDS, MS (Dental)</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Dental Surgeon & Orthodontist</p>
              </div>
            </motion.div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-[40px] blur-[40px] -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

          {/* RIGHT: CONTENT SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 text-left"
          >
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">
              Meet Our Principal Dentist
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              Dr. Kamal Abdullah
            </h2>
            <p className="text-lg text-white/60 mb-8 font-medium">
              BDS, MS • Dental Surgeon & Orthodontist
            </p>

            <div className="flex items-center space-x-2 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/40 text-sm font-medium ml-2">Trusted Practitioner</span>
            </div>

            <div className="relative mb-8">
              <div className="text-white/80 leading-[1.8] text-lg transition-all duration-500 font-light">
                {isExpanded ? (
                  <div className="space-y-6">
                    <p>
                      Dr. Kamal Abdullah is a <span className="text-white font-semibold underline decoration-primary/30 underline-offset-4">highly experienced dental surgeon and orthodontist</span> based in Dhaka, specializing in advanced smile transformations. With over a decade of clinical excellence, he has become a <span className="text-primary font-medium">leading name in orthodontics and cosmetic dentistry</span>.
                    </p>
                    <p>
                      His philosophy centers on <span className="text-white font-semibold italic">"Gentle Precision"</span>—the belief that modern dental care should be <span className="text-white font-medium">completely pain-free</span>, transparent, and tailored to the unique facial aesthetics of every patient. He is deeply committed to staying at the forefront of dental technology.
                    </p>
                    <p>
                      Dr. Kamal's approach goes beyond just treating teeth; he focuses on building <span className="text-primary font-medium">lifelong relationships</span> with his patients. From complex orthodontic corrections to sophisticated cosmetic veneers, his meticulous eye for detail makes him a <span className="text-white font-semibold">trusted practitioner</span> for families across Dhaka.
                    </p>
                  </div>
                ) : (
                  <p>
                    Dr. Kamal Abdullah is a <span className="text-white font-semibold">highly experienced dental surgeon and orthodontist</span> based in Dhaka, specializing in advanced smile transformations. With over a decade of clinical excellence, he has become a leading name in orthodontics and cosmetic dentistry...
                  </p>
                )}
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-primary font-bold hover:underline inline-flex items-center gap-1 transition-all group/btn text-sm uppercase tracking-widest"
                >
                  {isExpanded ? 'Show Less' : 'Read More About Dr. Kamal'}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-1'}`} />
                </button>
              </div>
            </div>

            {/* Highlights List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                "Expert in Braces & Smile Correction",
                "Cosmetic & Restorative Specialist",
                "Advanced Root Canal & Implants",
                "Pain-Free, Patient-Friendly",
                "Modern Hygiene Standards"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-white/60 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <ShinyButton href="#contact" className="px-10 py-4 rounded-full shadow-glow">
              <span className="uppercase tracking-widest text-sm font-bold">Book a Consultation</span>
            </ShinyButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
