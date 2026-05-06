'use client';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { DownloadCloud, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#bridge-gaps' },
    { name: 'Studio', href: '/studio' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 py-4 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl shadow-indigo-900/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="relative flex items-center group cursor-pointer">
            <Logo className="text-[28px] sm:text-[32px]" />
          </Link>
        </div>

        <nav className="hidden sm:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-black text-slate-800 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
          <a
            href="/SonicPath.zip"
            download
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-[10px] font-black text-white shadow-xl shadow-indigo-600/20 hover:scale-105 hover:shadow-indigo-600/40 transition-all uppercase tracking-widest border border-white/20 active:scale-95"
          >
            <DownloadCloud className="w-4 h-4" />
            <span>Download Game</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="sm:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="sm:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] font-black text-slate-800 uppercase tracking-[0.2em]"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/SonicPath.zip"
            download
            className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-indigo-600 text-[10px] font-black text-white uppercase tracking-widest"
          >
            <DownloadCloud className="w-4 h-4" />
            Download Game
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
