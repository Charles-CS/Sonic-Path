'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Instagram, Send, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white">
            Connect with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#39ff14]">Studio</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base uppercase tracking-[0.3em] font-medium">
            Let's build the future of play together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-xl bg-black/40 shadow-2xl relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff6b00]/5 rounded-full blur-[80px]" />
            
            <form className="space-y-6 relative">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39ff14]/50 transition-all placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39ff14]/50 transition-all placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#39ff14]/50 transition-all placeholder:text-white/20 resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#39ff14] text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12 pt-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-widest">Get in touch</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Whether you have a question about our games, want to collaborate, or just want to say hi, my team is always ready to connect.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#ff6b00]/50 transition-all">
                  <Mail className="w-5 h-5 text-[#ff6b00]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email US</p>
                  <p className="text-white font-bold text-lg">hello@sonicpath.studio</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#39ff14]/50 transition-all">
                  <Globe className="w-5 h-5 text-[#39ff14]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</p>
                  <p className="text-white font-bold text-lg">Manila, Philippines</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Follow the journey</p>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Github, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all"
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
            </motion.div>
        </div>
      </div>
    </main>
  );
}
