'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PromiseSection() {
  return (
    <section className="py-24 sm:py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <span className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-8 block">The SonicPath Promise</span>
          <p className="text-2xl sm:text-4xl text-slate-800 leading-[1.3] font-black italic tracking-tight">
            "We believe educational tools should never feel like compromises. By integrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Premium UX</span> with foundational phonics, we turn reading practice into an adventure every child deserves."
          </p>
          
          <div className="mt-12 flex items-center justify-center gap-4 opacity-20">
            <div className="h-1 w-12 bg-indigo-600 rounded-full" />
            <div className="h-2 w-2 bg-indigo-600 rounded-full" />
            <div className="h-1 w-12 bg-indigo-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
