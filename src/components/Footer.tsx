'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="relative pt-24 pb-12 overflow-hidden bg-white/30 backdrop-blur-md border-t border-slate-200/50 mt-12">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-400/10 blur-[120px] rounded-full -z-10 translate-y-[-50%]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sky-400/10 blur-[120px] rounded-full -z-10 translate-y-[50%]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start text-center lg:text-left">
            <Logo className="mb-6 lg:mx-0 text-[10vw] sm:text-[40px]" />
            
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              Turning reading frustration into confidence through sound-based adventures. Designed for dyslexic learners.
            </p>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col gap-6">
              <h4 className="text-indigo-950 font-black uppercase tracking-widest text-sm" style={{ fontFamily: 'Lexend, sans-serif' }}>Explore</h4>
              <nav className="flex flex-col gap-4">
                <a href="#about" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">About</a>
                <a href="#gallery" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">Journey</a>
                <a href="#features" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">Features</a>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-indigo-950 font-black uppercase tracking-widest text-sm" style={{ fontFamily: 'Lexend, sans-serif' }}>Learn</h4>
              <nav className="flex flex-col gap-4">
                <a href="#science" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">The Science</a>
                <a href="#promise" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">Our Promise</a>
              </nav>
            </div>

            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h4 className="text-indigo-950 font-black uppercase tracking-widest text-sm" style={{ fontFamily: 'Lexend, sans-serif' }}>Connect</h4>
              <nav className="flex flex-col flex-wrap md:flex-col gap-4">
                <a href="https://mail.google.com/mail/u/1/?pli=1#inbox" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest transition-colors">Contact Us</a>
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p suppressHydrationWarning className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} SonicPath. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => setLegalType('privacy')} className="text-[10px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer">Privacy Policy</button>
            <button onClick={() => setLegalType('terms')} className="text-[10px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors bg-transparent border-none cursor-pointer">Terms of Service</button>
          </div>
        </div>

      </div>
      </footer>

      <LegalModal 
        isOpen={!!legalType} 
        type={legalType} 
        onClose={() => setLegalType(null)} 
      />
    </>
  );
}
