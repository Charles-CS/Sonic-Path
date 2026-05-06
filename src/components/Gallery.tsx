'use client';
import React from 'react';
import Image from 'next/image';

const images = [
  "Main-menu-1.png",
  "Level1_Intro-Image.png",
  "Level2_Intro-Image.png",
  "Level3_Intro-Image.png",
  "Level4_Intro-Image.png",
  "Level5_Intro-Image.png",
  "Main-menu-2.png"
];

export default function Gallery() {

  return (
    <section className="pt-24 pb-8 bg-transparent overflow-hidden relative border-y border-slate-100">
      


      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl font-black tracking-tighter text-slate-950 sm:text-7xl leading-none" style={{ fontFamily: 'Lexend, sans-serif' }}>
          A <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-sky-600 font-extrabold">Glimpse</span> into the Adventure
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Explore the vibrant worlds and dyslexic-friendly UI of SonicPath.
        </p>
      </div>

      <div className="relative max-w-[100vw] mx-auto pb-8 pt-4">
        
        {/* Infinite Scroll Container */}
        <div className="flex w-max drop-shadow-sm">
          
          {/* First Block of Images */}
          <div className="flex animate-marquee shrink-0 items-stretch justify-start gap-0 pr-0">
            {images.map((src, index) => (
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
                   SonicPath No. 00{index + 1}
                </div>
                
                <div className="relative w-full aspect-video overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-slate-900/5">
                  <Image
                    src={`/sonicpath-images/${src}`}
                    alt={`SonicPath Game Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 50vw"
                    priority={index < 3}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Second Block of Images for perfect looping */}
          <div className="flex animate-marquee shrink-0 items-stretch justify-start gap-0 pr-0" aria-hidden="true">
            {images.map((src, index) => (
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
                   SonicPath No. 00{index + 1}
                </div>

                <div className="relative w-full aspect-video overflow-hidden rounded-[1.25rem] shadow-md ring-1 ring-slate-900/5">
                  <Image
                    src={`/sonicpath-images/${src}`}
                    alt={`SonicPath Game Screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 50vw"
                    priority={false}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fade Out Edges to blend with background seamlessly */}
        <div className="absolute top-0 bottom-8 left-0 w-16 sm:w-[15vw] bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent z-30 pointer-events-none"></div>
        <div className="absolute top-0 bottom-8 right-0 w-16 sm:w-[15vw] bg-gradient-to-l from-sky-50 via-sky-50/80 to-transparent z-30 pointer-events-none"></div>

      </div>
    </section>
  );
}
