import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-sky-50">
      {/* Global Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300/30 via-sky-100/10 to-white" />
      
      {/* Floating Blobs — pure CSS animations for zero JS overhead */}
      <div className="blob-1 absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-indigo-300/10 blur-[120px]" />
      <div className="blob-2 absolute top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-200/20 blur-[120px]" />
      <div className="blob-3 absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-sky-400/10 rounded-full blur-[100px]" />
    </div>
  );
}
