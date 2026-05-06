'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Monitor, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StudioSpotlight() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-6">Built for the Modern Web</h2>
        <p className="text-lg text-slate-600 mb-8">
          The SonicPath platform is engineered for speed, inclusivity, and premium user experience.
        </p>
        <Link 
          href="/studio" 
          className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          MEET THE STUDIO
        </Link>
      </div>
    </section>
  );
}
