'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Headphones, Music, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative overflow-hidden pt-44 pb-32 bg-transparent min-h-[95vh] flex items-center justify-center">
      {/* Premium Minimal Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[110vw] max-w-[1100px] max-h-[1100px] border-[1px] border-indigo-200/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1.5px] border-sky-100/40 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] border-[0.5px] border-indigo-100/50 rounded-full" />
        {/* Subtle blur orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 blur-[100px] rounded-full" />
        
        {/* Floating Abstract Icons for "Visual Design" */}
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] left-[10%] sm:left-[15%] opacity-40 hidden sm:flex">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 rotate-12 flex items-center justify-center shadow-2xl shadow-indigo-500/20 border border-white/20">
             <Music className="w-8 h-8 text-white" />
           </div>
        </motion.div>
        
        <motion.div animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] right-[10%] sm:right-[15%] opacity-40 hidden sm:flex">
           <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-sky-400 to-blue-600 -rotate-12 flex items-center justify-center shadow-2xl shadow-sky-500/20 border border-white/20">
             <Headphones className="w-10 h-10 text-white" />
           </div>
        </motion.div>
        
        <motion.div animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[20%] sm:right-[30%] opacity-30 z-0">
           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 rotate-45 flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-white/20">
             <Star className="w-6 h-6 text-white -rotate-45" fill="currentColor" />
           </div>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative text-center w-full max-w-6xl mx-auto flex flex-col items-center">
          
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center justify-center relative mb-4"
          >
            {/* Sleek Illustrative Branding */}
            <div
              className="flex items-center justify-center font-black tracking-[-0.04em] leading-none text-indigo-950 drop-shadow-sm pb-2"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', fontFamily: 'Lexend, sans-serif' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-indigo-800">S</span>
              {/* Rotating Wheel 'o' */}
              <div className="relative mx-[0.02em] inline-flex items-center justify-center translate-y-[0.08em]">
                <svg width="0.75em" height="0.75em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wheelGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#312e81" />
                    </linearGradient>
                  </defs>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: '50% 50%' }}
                  >
                    <circle cx="50" cy="50" r="42" stroke="url(#wheelGradHero)" strokeWidth="10" fill="transparent" />
                    {[0, 60, 120, 180, 240, 300].map(deg => (
                      <line
                        key={deg}
                        x1="50"
                        y1="50"
                        x2={(50 + 40 * Math.cos(deg * Math.PI / 180)).toFixed(2)}
                        y2={(50 + 40 * Math.sin(deg * Math.PI / 180)).toFixed(2)}
                        stroke="#4f46e5"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeOpacity="0.3"
                      />
                    ))}
                    <circle cx="50" cy="50" r="12" fill="url(#wheelGradHero)" stroke="white" strokeWidth="2" />
                  </motion.g>
                </svg>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-900">nic</span>
              <span className="relative ml-[0.04em]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-950">Path</span>
                {/* Animated Underline path/road */}
                <span className="absolute -bottom-[0.02em] left-0 right-0 h-[0.05em] bg-indigo-600/10 rounded-full overflow-hidden block">
                  <motion.span
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-around"
                  >
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="w-[15%] h-[40%] bg-indigo-500/40 rounded-full block" />
                    ))}
                  </motion.span>
                </span>
              </span>
            </div>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[1.05] text-indigo-950 max-w-5xl mb-12 drop-shadow-sm"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Reading</span> Through Sound and Play
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#cta" className="group flex items-center gap-4 bg-white/80 backdrop-blur-md border border-white text-indigo-950 px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgba(79,70,229,0.12)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)] hover:-translate-y-1 hover:bg-white transition-all duration-300">
              <span className="text-lg tracking-wide uppercase">Play Demo</span>
              <div className="flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-full w-8 h-8 group-hover:translate-x-1 group-hover:bg-indigo-100 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            <a href="#bridge-gaps" className="text-slate-500 font-bold uppercase tracking-widest text-sm hover:text-indigo-600 transition-colors px-6 py-4">
              How It Works
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
