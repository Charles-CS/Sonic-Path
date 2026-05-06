'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Map, Headphones, Monitor, Star } from 'lucide-react';

const timelineNodes = [
  {
    title: "A Path to Reading",
    subtitle: "SonicPath Framework",
    phase: "Phase 1",
    description: "A dyslexia-friendly adventure where players master phonics by moving through fun, sound-based challenges. Designed to build core reading skills through engaging gameplay.",
    icon: Map,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-500",
    logoColor: "bg-white border-2 border-indigo-50"
  },
  {
    title: "Listen & Learn",
    subtitle: "Multi-Sensory Audio",
    phase: "Phase 2",
    description: "Match sounds to letters and build words at your own pace with clear audio prompts and clean visuals. Focuses on auditory processing and phonemic awareness.",
    icon: Headphones,
    iconColor: "text-sky-500",
    bgColor: "bg-sky-500",
    logoColor: "bg-white border-2 border-sky-50"
  },
  {
    title: "Distraction-Free",
    subtitle: "Premium UX Design",
    phase: "Phase 3",
    description: "One clear task per screen. No visual clutter. Pause, replay, and learn comfortably without overwhelming noise. Minimizes cognitive load for better focus.",
    icon: Monitor,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500",
    logoColor: "bg-white border-2 border-emerald-50"
  },
  {
    title: "Rewarding Progress",
    subtitle: "Confidence Loop",
    phase: "Phase 4",
    description: "Earn rewards as you learn. A gentle learning curve reduces anxiety and builds true, lasting reading confidence through positive reinforcement and small wins.",
    icon: Star,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500",
    logoColor: "bg-white border-2 border-amber-50"
  }
];

export default function GameDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="about" ref={containerRef} className="relative py-24 sm:py-32 bg-transparent font-sans overflow-hidden">

      {/* Header Content */}
      <div className="mx-auto max-w-4xl text-center mb-24 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-slate-950 sm:text-7xl mb-4 tracking-tighter"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-sky-600 font-extrabold">Journey</span>
        </motion.h2>
        <div className="h-1.5 w-32 bg-sky-400 content-none mx-auto rounded-full mb-8" />
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* The Vertical Line Track */}
        <div className="absolute top-0 bottom-0 left-[34px] md:left-1/2 w-[2px] -translate-x-1/2 bg-slate-200/50" />

        {/* Animated Line Overlay */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-[34px] md:left-1/2 w-[2px] -translate-x-1/2 bg-sky-400"
        />

        {/* Timeline Nodes */}
        <div className="relative z-10 space-y-12 md:space-y-0">
          {timelineNodes.map((node, index) => {
            const Icon = node.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative md:flex md:items-center md:justify-between md:mb-32 last:mb-0">
                {/* Node Dot & Connector (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 z-30">
                  <div className="w-3 h-3 rounded-full bg-sky-400 ring-8 ring-sky-400/10 shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                  {/* Horizontal Branch */}
                  <div className={`absolute top-1/2 h-[1px] bg-slate-200 w-12 ${isEven ? 'right-4' : 'left-4'}`} />
                </div>

                {/* Node Dot (Mobile) */}
                <div className="md:hidden absolute left-[34px] top-6 -translate-x-1/2 flex items-center justify-center w-6 h-6 z-30">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-sky-400/10 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                </div>

                {/* Card Content */}
                <div className={`flex w-full md:w-[45%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-[72px] md:ml-0 group relative bg-[#f1f5f9]/80 backdrop-blur-sm border border-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-full w-full"
                  >
                    {/* Left Column: Details & Logo */}
                    <div className="w-full md:w-[42%] p-8 bg-white/50 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1" style={{ fontFamily: 'Lexend, sans-serif' }}>
                          {node.title}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium mb-4">{node.subtitle}</p>
                        <span className="text-slate-300/60 font-black text-3xl block mb-6 uppercase tracking-tighter">{node.phase}</span>
                      </div>

                      <div className={`w-12 h-12 rounded-full ${node.logoColor} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-6 h-6 ${node.iconColor}`} />
                      </div>
                    </div>

                    {/* Right Column: Description */}
                    <div className="w-full md:w-[58%] p-8 flex items-center">
                      <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                        {node.description}
                      </p>
                    </div>

                    {/* Subtle Hover Reveal */}
                    <div className="absolute top-0 right-0 w-1 h-0 bg-sky-400 group-hover:h-full transition-all duration-700" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
