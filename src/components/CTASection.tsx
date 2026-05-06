'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, ArrowRight, Compass } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative pt-32 pb-32 overflow-hidden bg-transparent flex flex-col items-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        <div className="w-full bg-white/40 backdrop-blur-3xl border border-white/80 p-10 sm:p-20 rounded-[3.5rem] shadow-[0_45px_100px_rgba(30,27,75,0.08)] flex flex-col items-center justify-center gap-12 sm:gap-14 relative overflow-hidden text-center">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/10 blur-[100px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/10 blur-[100px] rounded-full -z-10 -translate-x-1/3 translate-y-1/3" />

          {/* Centered User-Focused Text */}
          <div className="z-10 w-full max-w-3xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'Lexend, sans-serif' }}>
              Turn reading frustration into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">confidence.</span>
            </h2>
            <p className="text-lg sm:text-2xl text-slate-500 font-medium leading-relaxed">
              Every sound mastered unlocks a new piece of the world. Are you ready to discover where the journey takes you?
            </p>
          </div>

          {/* Centered CTA Button */}
          <div className="shrink-0 flex flex-col items-center z-10 w-full sm:w-auto">
            <a href="/SonicPath.zip" download className="group relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-slate-200 px-6 py-5 sm:px-12 sm:py-6 rounded-full shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:shadow-[0_30px_60px_rgba(79,70,229,0.2)] hover:border-indigo-300 hover:-translate-y-2 transition-all duration-500 overflow-hidden w-full sm:w-auto min-w-[320px]">
              
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="flex items-center gap-5 w-full justify-center sm:justify-start">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 shadow-sm shrink-0">
                  <DownloadCloud className="w-7 h-7" />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-950 transition-colors duration-300">
                    Play the Game
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Download Windows Build
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex w-10 h-10 bg-slate-50 rounded-full items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-500 shrink-0 ml-4 border border-slate-100">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
