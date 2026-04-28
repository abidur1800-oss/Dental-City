/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Doctors } from './components/Doctors';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white selection:bg-primary selection:text-dark overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
