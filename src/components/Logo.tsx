import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center font-black tracking-[-0.04em] leading-none drop-shadow-sm pb-1 ${className}`}
      style={{ fontFamily: 'Lexend, sans-serif' }}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-indigo-800">S</span>
      
      {/* Static Wheel 'o' */}
      <div className="relative mx-[0.02em] inline-flex items-center justify-center translate-y-[0.08em]">
        <svg width="0.75em" height="0.75em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wheelGradLogoStatic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
          </defs>
          <g style={{ transformOrigin: '50% 50%' }}>
            <circle cx="50" cy="50" r="42" stroke="url(#wheelGradLogoStatic)" strokeWidth="10" fill="transparent" />
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
            <circle cx="50" cy="50" r="12" fill="url(#wheelGradLogoStatic)" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      </div>
      
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-900">nic</span>
      
      <span className="relative ml-[0.04em]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-950">Path</span>
        {/* Static Underline path/road */}
        <span className="absolute -bottom-[0.02em] left-0 right-0 h-[0.05em] bg-indigo-600/10 rounded-full overflow-hidden block">
          <span className="absolute inset-0 flex items-center justify-around">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="w-[15%] h-[40%] bg-indigo-500/40 rounded-full block" />
            ))}
          </span>
        </span>
      </span>
    </div>
  );
}
