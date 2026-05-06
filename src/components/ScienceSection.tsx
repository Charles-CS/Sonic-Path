'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BrainCircuit, Volume2, Trophy } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

export default function ScienceSection() {
  return (
    <section id="science" className="relative pt-12 pb-24 overflow-hidden bg-transparent">
      {/* Background Soft Glows replacing static gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl font-black text-slate-950 mb-8 tracking-tighter leading-none"
            style={{ fontFamily: 'Lexend, sans-serif' }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 font-extrabold uppercase">Science</span> of Reading
          </motion.h2>
          
          <div className="h-1.5 w-32 bg-indigo-600/10 rounded-full mx-auto" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto"
        >
          {/* Pillar 1 - Zero Clutter */}
          <motion.div variants={cardVariants} className="flex flex-col items-center text-center group">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/40 transition-colors duration-1000" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 bg-white/40 backdrop-blur-3xl border-2 border-white/80 rounded-full flex items-center justify-center shadow-[0_30px_60px_rgba(30,27,75,0.06)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-[0.16,1,0.3,1]">
                <BrainCircuit className="w-12 h-12 md:w-20 md:h-20 text-indigo-600" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-4 tracking-tighter">Zero-Clutter</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-bold max-w-xs">
              We eliminate visual noise to reduce reading anxiety.
            </p>
          </motion.div>

          {/* Pillar 2 - Multi Sensory */}
          <motion.div variants={cardVariants} className="flex flex-col items-center text-center group md:translate-y-16">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-sky-500/20 blur-[60px] rounded-full group-hover:bg-sky-500/40 transition-colors duration-1000" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 bg-white/40 backdrop-blur-3xl border-2 border-white/80 rounded-full flex items-center justify-center shadow-[0_30px_60px_rgba(30,27,75,0.06)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-[0.16,1,0.3,1]">
                <Volume2 className="w-12 h-12 md:w-20 md:h-20 text-sky-500" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-4 tracking-tighter">Multi-Sensory</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-bold max-w-xs">
              Precision audio prompts matched with visual mastery.
            </p>
          </motion.div>

          {/* Pillar 3 - Success Loop */}
          <motion.div variants={cardVariants} className="flex flex-col items-center text-center group">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/40 transition-colors duration-1000" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 bg-white/40 backdrop-blur-3xl border-2 border-white/80 rounded-full flex items-center justify-center shadow-[0_30px_60px_rgba(30,27,75,0.06)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-[0.16,1,0.3,1]">
                <Trophy className="w-12 h-12 md:w-20 md:h-20 text-indigo-500" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 mb-4 tracking-tighter">Pure Momentum</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-bold max-w-xs">
              Turning small victories into lifelong reading confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
