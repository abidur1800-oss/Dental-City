import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
            >
              Let's Start Your <br /> 
              <span className="text-primary">Smile Journey</span>
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              <ContactInfoItem 
                Icon={MapPin} 
                title="Location" 
                detail="3 No Sahanur Mansion, Elephant Road, S J Jahanara Imam Sharani, Dhaka 1205"
              />
              <ContactInfoItem 
                Icon={Phone} 
                title="Phone" 
                detail="01730-448606" 
              />
              <ContactInfoItem 
                Icon={Mail} 
                title="Email" 
                detail="shanto_dental@yahoo.com" 
              />
              <ContactInfoItem 
                Icon={Clock} 
                title="Working Hours" 
                detail="Sat - Thu: 11AM - 10PM | Friday: Closed" 
              />
            </div>

            {/* Google Map Interactive Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden glass h-80 border-glow relative group shadow-2xl">
              <iframe
                title="Dental City & Orthodontics Dhaka Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d456.5178553229618!2d90.3874036!3d23.7378467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c6561e67cb%3A0x709613d9634b5f52!2sDental%20City%20%26%20Orthodontics!5e0!3m2!1sen!2sbd!4v1714324000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <div className="px-3 py-1 rounded-full glass border-glow text-[10px] font-bold uppercase tracking-widest text-primary">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[40px] border-glow shadow-2xl relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[40px]" />
              
              <h3 className="text-2xl font-display font-bold mb-8">Book Appointment</h3>
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 font-bold mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all transition-duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 font-bold mb-2 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all transition-duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/50 font-bold mb-2 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your dental needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all transition-duration-300 resize-none"
                  />
                </div>
                
                <ShinyButton className="w-full py-5 rounded-2xl shadow-glow">
                  <div className="flex items-center justify-center space-x-3">
                    <span>Book Appointment</span>
                    <Send size={18} className="translate-y-[-1px]" />
                  </div>
                </ShinyButton>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ Icon, title, detail }: { Icon: any, title: string, detail: string }) => (
  <div className="flex items-start space-x-6 group">
    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-1">{title}</h4>
      <p className="text-lg text-white/90 group-hover:text-primary transition-colors cursor-default">{detail}</p>
    </div>
  </div>
);
