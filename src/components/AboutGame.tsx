'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  Sparkles, MapPin, MousePointer2, Lock,
  Trees, Snowflake, CloudRain, Building2, Sun, Moon,
  ArrowDownCircle, Navigation
} from 'lucide-react';

const STATIC_NODESArr = [
  { id: 'menu', name: 'Main Menu', pos: { x: 10, y: 80 }, title: 'Intuitive Navigation', reason: 'Dyslexia-friendly Lexend font and high-contrast, uncluttered menu for stress-free starting.', color: 'bg-indigo-500', icon: <Navigation className="w-6 h-6" />, decoration: null },
  { id: 'l1', name: 'L1: Forest Day', pos: { x: 25, y: 40 }, title: 'Starting Letters & Vowels', reason: 'Listen to the prompt: what does the word start with? Practice identifying starting letters and vowel phases.', color: 'bg-emerald-500', icon: <Trees className="w-6 h-6" />, decoration: <div className="flex gap-4"><Sun className="w-10 h-10 text-slate-400" /></div> },
  { id: 'l2', name: 'L2: Forest Night', pos: { x: 45, y: 70 }, title: 'Image Recognition', reason: 'Connect visual cues with text through straightforward image recognition to build vocabulary.', color: 'bg-sky-600', icon: <Trees className="w-6 h-6" />, decoration: <div className="flex gap-4 mt-16 -ml-40"><Moon className="w-10 h-10 text-slate-400" /></div> },
  { id: 'l3', name: 'L3: Snowy', pos: { x: 60, y: 30 }, title: 'Letter Sounds', reason: 'Focus entirely on auditory processing by finding and matching the correct sound of the letter.', color: 'bg-blue-400', icon: <Snowflake className="w-6 h-6" />, decoration: <div className="flex gap-4"><Snowflake className="w-12 h-12 text-slate-400" /><Snowflake className="w-8 h-8 text-slate-400 mt-6" /></div> },
  { id: 'l4', name: 'L4: Rainy Forest', pos: { x: 75, y: 60 }, title: 'Correct Spelling', reason: 'Compare choices and identify which word has the correct spelling without visual clutter.', color: 'bg-slate-600', icon: <CloudRain className="w-6 h-6" />, decoration: <div className="flex gap-4 -mt-10 ml-8"><CloudRain className="w-10 h-10 text-slate-400" /></div> },
  { id: 'l5', name: 'L5: Urban', pos: { x: 90, y: 20 }, title: 'Complete the Sentence', reason: 'Bring together all the learned skills to choose the missing words and complete the full sentence.', color: 'bg-rose-500', icon: <Building2 className="w-6 h-6" />, decoration: <div className="flex gap-4"><Building2 className="w-12 h-12 text-slate-400" /><Building2 className="w-10 h-10 text-slate-400 mt-4" /></div> }
];

const PROG_STOPS = [0, 0.16, 0.38, 0.58, 0.78, 1.0];

function calculateBezier(p0: { x: number, y: number }, p1: { x: number, y: number }, p2: { x: number, y: number }, count = 30) {
  const result = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
    const y = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
    result.push({ x, y });
  }
  return result;
}

const SEG_DATA = [
  { p0: { x: 10, y: 80 }, p1: { x: 20, y: 40 }, p2: { x: 25, y: 40 } },
  { p0: { x: 25, y: 40 }, p1: { x: 30, y: 40 }, p2: { x: 45, y: 70 } },
  { p0: { x: 45, y: 70 }, p1: { x: 60, y: 100 }, p2: { x: 60, y: 30 } },
  { p0: { x: 60, y: 30 }, p1: { x: 60, y: -40 }, p2: { x: 75, y: 60 } },
  { p0: { x: 75, y: 60 }, p1: { x: 82, y: 35 }, p2: { x: 90, y: 20 } }
];

const baseD = "M 10 80 Q 20 40 25 40 Q 30 40 45 70 Q 60 100 60 30 Q 60 -40 75 60 Q 82 35 90 20";

export default function AboutGame() {
  const [activeStage, setActiveStage] = useState<typeof STATIC_NODESArr[0] | null>(null);
  const [unlockedPos, setUnlockedPos] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const mapControls = useAnimation();
  const currentStepRef = useRef(0);

  useEffect(() => { setIsReady(true); }, []);

  useEffect(() => {
    if (!isReady) return;
    let stop = false;
    const runDiscovery = async () => {
      while (!stop) {
        const step = currentStepRef.current;
        const stage = STATIC_NODESArr[step];
        if (!stage) break;

        // Show stage info immediately
        setActiveStage(stage);
        // We removed setUnlockedPos(step) here so the road doesn't fill ahead of time

        await new Promise(r => setTimeout(r, 1500));
        if (stop) break;

        const nextStep = (step + 1) % STATIC_NODESArr.length;
        setActiveStage(null);

        if (nextStep === 0) {
          await mapControls.start({ opacity: 0, scale: 0.9, transition: { duration: 0.6 } });
          mapControls.set({ left: '10%', top: '80%', opacity: 0, scale: 0.9 });
          await mapControls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
          setUnlockedPos(0);
        } else {
          const info = SEG_DATA[step];
          if (info) {
            const route = calculateBezier(info.p0, info.p1, info.p2, 35);
            await mapControls.start({
              left: route.map(p => `${p.x}%`),
              top: route.map(p => `${p.y}%`),
              transition: { duration: 3.0, ease: "linear" }
            });
            // Update path progress only AFTER reaching the next node
            setUnlockedPos(nextStep);
          }
        }
        currentStepRef.current = nextStep;
      }
    };
    runDiscovery();
    return () => { stop = true; };
  }, [isReady, mapControls]);

  if (!isReady) return <div className="min-h-screen bg-transparent" />;

  // Road path is defined globally now

  return (
    <section id="bridge-gaps" className="pt-16 pb-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-950 sm:text-7xl mb-6 tracking-tighter"
          >
            Bridge <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 font-extrabold">Reading Gaps</span>
          </motion.h2>
          <p className="text-[11px] font-black uppercase text-indigo-400 tracking-[0.5em] mt-2">
            Inside the SonicPath Learning Experience
          </p>
        </div>

        <div
          className="relative w-full h-[450px] sm:h-[600px] bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[4rem] shadow-2xl overflow-hidden mb-12 shadow-indigo-900/5 transform-gpu"
        >
          {/* Progress Overlay */}
          <div className="absolute top-[45px] left-[45px] z-[60]">
            <div className="px-5 py-2.5 rounded-full bg-indigo-900/80 backdrop-blur-sm border border-white/10 shadow-xl flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse ring-4 ring-sky-400/20"></div>
              <span className="text-[9px] font-black text-white/90 uppercase tracking-[0.2em]">
                PROGRESS: {Math.round((unlockedPos / (STATIC_NODESArr.length - 1)) * 100)}%
              </span>
            </div>
          </div>

          <div className="absolute inset-0 transform-gpu translate-y-9">
            <div className="absolute inset-0 pointer-events-none opacity-50 select-none">
              {STATIC_NODESArr.map((node) => (
                node.decoration && (
                  <div key={`d-${node.id}`} className="absolute" style={{ left: `${node.pos.x + 5}%`, top: `${node.pos.y - 12}%` }}>{node.decoration}</div>
                )
              ))}
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d={baseD} fill="none" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
              <path d={baseD} fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
              <motion.path
                d={baseD} fill="none" stroke="url(#activeR)" strokeWidth="2.2" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: PROG_STOPS[unlockedPos] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="activeR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>

            {/* Player Status Marker */}
            <motion.div
              className="absolute z-50 pointer-events-none transform-gpu -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: 'left, top' }}
              initial={{ left: '10%', top: '80%', opacity: 1 }}
              animate={mapControls}
            >
              <div className="flex flex-col items-center">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-[130%] whitespace-nowrap">
                  <div className="px-5 py-2.5 rounded-[1.3rem] bg-indigo-600 text-white shadow-2xl border border-white/20 flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest -mb-0.5">YOU ARE HERE</span>
                    <ArrowDownCircle className="w-4 h-4 text-white/50 mt-1" />
                  </div>
                </motion.div>
                <div className="w-8 h-8 rounded-full bg-white border-[6px] border-indigo-600 shadow-[0_0_40px_rgba(79,70,229,0.7)]"><div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-30"></div></div>
              </div>
            </motion.div>

            {STATIC_NODESArr.map((node, i) => {
              const isU = i <= unlockedPos;
              const isActive = activeStage?.id === node.id;
              return (
                <div key={node.id} className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.pos.x}%`, top: `${node.pos.y}%` }}>
                  <div className="relative group flex flex-col items-center">
                    <motion.div
                      animate={{ scale: isActive ? 1.5 : isU ? 1.1 : 0.9, opacity: isU ? 1 : 0.6 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[2.2rem] flex items-center justify-center text-white transition-all duration-700 ${isU ? node.color : 'bg-slate-200'} shadow-2xl border-4 border-white`}
                    >
                      {!isU ? <Lock className="w-5 h-5 text-slate-400" /> : node.icon}
                    </motion.div>
                    {isActive && <div className="absolute -inset-6 rounded-[2.5rem] bg-indigo-100/20 animate-pulse border-2 border-indigo-500/10"></div>}
                    <div className="mt-5"><span className={`text-[11px] font-black px-5 py-2 rounded-full border shadow-sm transition-all duration-500 ${isU ? (isActive ? 'bg-indigo-600 text-white border-indigo-700 shadow-xl' : 'bg-white text-slate-800 border-slate-200') : 'bg-slate-50 text-slate-400 border-slate-100'}`}>{node.name}</span></div>
                  </div>
                </div>
              );
            })}

            <AnimatePresence mode="wait">
              {activeStage && (
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, scale: 0.8, y: -15, x: activeStage.pos.x < 50 ? -15 : 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15, x: activeStage.pos.x < 50 ? -15 : 15 }}
                  transition={{ type: "spring", damping: 30, stiffness: 280 }}
                  style={{
                    left: activeStage.pos.x < 50 ? `${activeStage.pos.x + 8}%` : 'auto',
                    right: activeStage.pos.x >= 50 ? `${100 - activeStage.pos.x + 8}%` : 'auto',
                    top: `${Math.min(Math.max(activeStage.pos.y - (activeStage.id === 'menu' ? 34 : activeStage.id === 'l2' ? 28 : 18), 8), 92)}%`,
                    transform: 'translateY(-50%)'
                  }}
                  className="absolute z-[100] w-[220px] sm:w-[280px] bg-white/95 backdrop-blur-3xl border border-white/80 p-5 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center gap-4 shadow-indigo-900/10 pointer-events-none"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`${activeStage.color} w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-950 leading-tight">{activeStage.title}</h3>
                      <div className="text-[7px] font-black text-indigo-500 uppercase tracking-widest mt-0.5">RESEARCH INSIGHT</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-relaxed font-semibold bg-indigo-50/10 p-4 rounded-[1.5rem] border border-indigo-100/50 italic">
                    "{activeStage.reason}"
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-black text-[9px] px-3.5 py-1.5 bg-emerald-50/50 border border-emerald-100 rounded-full w-fit uppercase tracking-widest">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                    Goal Mastered
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
