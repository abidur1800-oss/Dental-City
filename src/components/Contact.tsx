import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Keep only digits
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a brief processing delay for a premium feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass py-8 md:py-10 px-8 md:px-12 rounded-[40px] border-glow shadow-2xl relative overflow-hidden h-full flex flex-col justify-start min-h-[600px]"
            >
              {/* Background Decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[40px]" />
              
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full py-20"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 border-2 border-primary/20 border-t-primary rounded-full"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.5, 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20 
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <CheckCircle size={40} className="text-primary" />
                      </motion.div>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 text-white/50 font-display font-medium tracking-widest text-xs uppercase"
                    >
                      Booking your appointment...
                    </motion.p>
                  </motion.div>
                ) : !isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative z-10"
                  >
                    <div className="mb-8">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">Reservation</span>
                      <h3 className="text-3xl md:text-3xl font-display font-bold leading-tight">Book Appointment</h3>
                      <div className="w-12 h-1 bg-primary mt-3 rounded-full" />
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Full Name</label>
                          <div className="relative group">
                            <input 
                              required
                              type="text" 
                              placeholder="John Doe"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-white/20"
                            />
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Phone Number</label>
                          <div className="relative group">
                            <input 
                              required
                              type="tel" 
                              value={phone}
                              onChange={handlePhoneChange}
                              placeholder="017XXXXXXXX"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-white/20"
                            />
                            <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Service Type</label>
                        <CustomSelect 
                          options={[
                            { value: 'checkup', label: 'Dental Checkup' },
                            { value: 'orthodontics', label: 'Orthodontics' },
                            { value: 'whitening', label: 'Teeth Whitening' },
                            { value: 'implants', label: 'Dental Implants' },
                            { value: 'other', label: 'Other' },
                          ]}
                          placeholder="Select a Service"
                          onChange={() => {}}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Additional Notes (Optional)</label>
                        <textarea 
                          rows={4}
                          placeholder="Please describe your concerns or specific requirements..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none placeholder:text-white/20"
                        />
                      </div>
                      
                      <ShinyButton className="w-full py-6 rounded-2xl shadow-glow mt-2">
                        <div className="flex items-center justify-center space-x-3">
                          <span className="text-sm font-bold uppercase tracking-[0.2em]">Confirm Booking</span>
                          <Send size={18} className="translate-y-[-1px] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </ShinyButton>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">Thank You!</h3>
                    <p className="text-white/60 mb-8 max-w-xs mx-auto">
                      Your appointment request has been received. Our team will contact you shortly to confirm your booking.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold uppercase tracking-widest text-xs hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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

const CustomSelect = ({ options, placeholder, onChange }: { options: { value: string, label: string }[], placeholder: string, onChange: (val: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedLabel = options.find(opt => opt.value === selected)?.label || placeholder;

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
      >
        <Clock size={16} className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isOpen ? 'text-primary' : 'text-white/20 group-hover:text-white/40'}`} />
        <span className={`${selected ? 'text-white' : 'text-white/20'}`}>{selectedLabel}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 left-0 right-0 mt-2 bg-[#0d121f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  setSelected(opt.value);
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className="px-6 py-4 text-white/70 hover:text-primary hover:bg-white/5 transition-colors cursor-pointer text-sm font-medium border-b border-white/[0.03] last:border-0"
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
