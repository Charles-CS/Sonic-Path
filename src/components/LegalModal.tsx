'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-6 text-slate-600">
          <p suppressHydrationWarning><strong>Last Updated: {new Date().getFullYear()}</strong></p>
          <p>
            Welcome to SonicPath. Your privacy is critically important to us. This Privacy Policy outlines how we handle any information gathered through our app and website.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">1. Information Collection</h3>
          <p>
            SonicPath is designed for children and learners of all ages. We do not collect personally identifiable information (PII) from children without verifiable parental consent. As a standalone local application, your game progress and learning analytics are stored entirely on your local device.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">2. Usage Data</h3>
          <p>
            If you opt-in, we may collect anonymous, aggregated telemetry data strictly to improve our learning algorithms. This includes crash reports, interface interaction rates, and level completion times. This data is fully anonymized and cannot be linked back to any individual user.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">3. Data Security</h3>
          <p>
            We implement extreme care and necessary industry-standard offline and online protocols to protect any data associated with your interaction with SonicPath. We never sell your data to third parties.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">4. Contact Us</h3>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>hello@sonicpath.com</strong>.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-6 text-slate-600">
          <p suppressHydrationWarning><strong>Last Updated: {new Date().getFullYear()}</strong></p>
          <p>
            Welcome to SonicPath. By downloading, accessing, or using our website and application, you agree to be bound by these Terms of Service.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">1. License and Access</h3>
          <p>
            SonicPath grants you a limited, non-exclusive, non-transferable, revocable license to use the application strictly in accordance with these Terms. SonicPath is intended for personal and educational use.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">2. Intellectual Property</h3>
          <p>
            The Application, including its original content, features, audio prompts, and visual designs (specifically our dyslexia-friendly UI components and proprietary level paths), are owned by SonicPath and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">3. User Conduct</h3>
          <p>
            You agree not to use the application in a way that violates any applicable local, state, national, or international law or regulation. You must not attempt to reverse engineer, decompile, or extract proprietary code or assets from the SonicPath software bundle.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">4. Limitation of Liability</h3>
          <p>
            SonicPath and its developers shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the application.
          </p>
          <h3 className="text-xl font-bold text-indigo-950 mt-8 mb-4">5. Contact Info</h3>
          <p>
            For any queries regarding these terms, please connect with us at <strong>hello@sonicpath.com</strong>.
          </p>
        </div>
      )
    }
  };

  return (
    <AnimatePresence>
      {(isOpen && type) && (
        <div key="modal-wrapper">
          {/* Desktop Modal */}
          <div key="desktop-modal" className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-12 hidden sm:flex">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-3xl max-h-[75vh] flex flex-col bg-white/95 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden mt-12"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-100 bg-white">
                <h2 className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  {content[type].title}
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                {content[type].body}
              </div>

              {/* Footer Action */}
              <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                <button 
                  onClick={onClose}
                  className="px-8 py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all uppercase tracking-widest text-sm"
                >
                  Understand & Accept
                </button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Modal */}
          <div key="mobile-modal" className="fixed inset-0 z-[999] flex items-end justify-center sm:hidden">
             {/* Backdrop */}
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
              className="relative w-full h-[90vh] flex flex-col bg-white border-t border-white/50 rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="w-full flex justify-center pt-3 pb-1">
                 <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
              </div>
              {/* Header */}
              <div className="flex items-center justify-between px-6 pb-4 border-b border-slate-100">
                <h2 className="text-2xl font-black text-indigo-950 tracking-tight" style={{ fontFamily: 'Lexend, sans-serif' }}>
                  {content[type].title}
                </h2>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 pb-24 text-sm">
                {content[type].body}
              </div>

              {/* Footer Action */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 bg-white shadow-[0_-10px_20px_rgba(255,255,255,0.9)] flex justify-center">
                <button 
                  onClick={onClose}
                  className="w-full py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all uppercase tracking-widest text-sm"
                >
                  Understand & Accept
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
