import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-darker border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/10leDvijlOOZhM26yP-oKNNfr450C8l7x" 
                  alt="Dental City Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white leading-none">DENTAL CITY</span>
                <span className="text-[8px] uppercase tracking-widest text-primary font-bold">Orthodontics</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Dhaka's premier destination for luxury dental care. 
              We combine world-class expertise with advanced technology 
              offered in a state-of-the-art environment.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLink Icon={Facebook} href="https://www.facebook.com/DCOrthodontics/" />
              <SocialLink Icon={Instagram} href="#" />
              <SocialLink Icon={Twitter} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#about">About Clinic</FooterLink>
              <FooterLink href="#doctors">Specialists</FooterLink>
              <FooterLink href="#reviews">Patient Reviews</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="#services">Orthodontics</FooterLink>
              <FooterLink href="#services">Dental Implants</FooterLink>
              <FooterLink href="#services">Teeth Whitening</FooterLink>
              <FooterLink href="#services">Root Canal</FooterLink>
              <FooterLink href="#services">Pediatric Care</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/50">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>3 No Sahanur Mansion, Elephant Road, Dhaka 1205</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/50">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+8801730448606" className="hover:text-primary transition-colors">01730-448606</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/50">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:shanto_dental@yahoo.com" className="hover:text-primary transition-colors">shanto_dental@yahoo.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} Dental City & Orthodontics. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-white/30 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ Icon, href }: { Icon: any, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-dark transition-all hover:-translate-y-1"
  >
    <Icon size={18} />
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-sm text-white/50 hover:text-primary transition-colors flex items-center group">
      <div className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2" />
      {children}
    </a>
  </li>
);
