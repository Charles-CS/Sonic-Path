'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const team = [
  {
    name: 'Raziel Lloyd Sevilla',
    role: 'Game Designer',
    image: '/Team-Profiles/RazielLoydSevilla.png',
  },
  {
    name: 'Charles Platon',
    role: 'Lead Programmer',
    image: '/Team-Profiles/CharlesPlaton.png',
  },
  {
    name: 'Kurt Joshua Cayaga',
    role: 'UI and UX designer',
    image: '/Team-Profiles/KurtJoshuaCayaga.png',
  },
  {
    name: 'Emiel james escuzar',
    role: 'UI and UX designer',
    image: '/Team-Profiles/EmielJamesEscuzar.png',
  },
];

export default function StudioPage() {
  return (
    <main className="relative min-h-screen bg-sky-50 flex flex-col justify-center py-24 overflow-hidden">
      <Navbar />
      
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center relative z-10 pt-16">
        <h1 className="text-4xl font-black tracking-tighter text-slate-950 sm:text-7xl leading-none" style={{ fontFamily: 'Lexend, sans-serif' }}>
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-sky-600 font-extrabold">Creative</span> Force
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-medium lowercase italic opacity-80">
          Meet the visionaries behind SonicPath.
        </p>
      </div>

      <div className="relative max-w-[100vw] mx-auto pb-8 pt-4 z-10">
        
        {/* Infinite Scroll Container */}
        <div className="flex w-max drop-shadow-sm">
          
          {/* First Block of Team Members */}
          <div className="flex animate-marquee shrink-0 items-stretch justify-start gap-0 pr-0">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="relative w-[85vw] sm:w-[50vw] lg:w-[40vw] shrink-0 bg-white/80 backdrop-blur-xl border-y-2 border-r-2 border-dashed border-indigo-200/50 p-6 sm:p-10 flex items-center justify-center group"
                style={{
                  maskImage: 'radial-gradient(circle at left, transparent 24px, black 25px), radial-gradient(circle at right, transparent 24px, black 25px)',
                  maskPosition: 'left center, right center',
                  maskSize: '51% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskImage: 'radial-gradient(circle at left, transparent 24px, black 25px), radial-gradient(circle at right, transparent 24px, black 25px)',
                  WebkitMaskPosition: 'left center, right center',
                  WebkitMaskSize: '51% 100%',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-x-8 inset-y-4 border border-indigo-100/30 rounded-2xl pointer-events-none" />
                
                <div className="absolute top-1/2 left-3 -translate-y-1/2 -rotate-90 text-[9px] font-black uppercase tracking-[0.4em] text-indigo-400 opacity-60">
                   SonicPath CORE TEAM No. 00{index + 1}
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-8 overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-slate-900/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#ff6b00] text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Second Block for perfect looping */}
          <div className="flex animate-marquee shrink-0 items-stretch justify-start gap-0 pr-0" aria-hidden="true">
            {team.map((member, index) => (
              <div 
                key={`dup-${index}`} 
                className="relative w-[85vw] sm:w-[50vw] lg:w-[40vw] shrink-0 bg-white/80 backdrop-blur-xl border-y-2 border-r-2 border-dashed border-indigo-200/50 p-6 sm:p-10 flex items-center justify-center group"
                style={{
                  maskImage: 'radial-gradient(circle at left, transparent 24px, black 25px), radial-gradient(circle at right, transparent 24px, black 25px)',
                  maskPosition: 'left center, right center',
                  maskSize: '51% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskImage: 'radial-gradient(circle at left, transparent 24px, black 25px), radial-gradient(circle at right, transparent 24px, black 25px)',
                  WebkitMaskPosition: 'left center, right center',
                  WebkitMaskSize: '51% 100%',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-x-8 inset-y-4 border border-indigo-100/30 rounded-2xl pointer-events-none" />
                
                <div className="absolute top-1/2 left-3 -translate-y-1/2 -rotate-90 text-[9px] font-black uppercase tracking-[0.4em] text-indigo-400 opacity-60">
                   SonicPath CORE TEAM No. 00{index + 1}
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-8 overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-slate-900/5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#ff6b00] text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade Out Edges */}
        <div className="absolute top-0 bottom-8 left-0 w-16 sm:w-[15vw] bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent z-30 pointer-events-none"></div>
        <div className="absolute top-0 bottom-8 right-0 w-16 sm:w-[15vw] bg-gradient-to-l from-sky-50 via-sky-50/80 to-transparent z-30 pointer-events-none"></div>

      </div>
      <Footer />
    </main>

  );
}
