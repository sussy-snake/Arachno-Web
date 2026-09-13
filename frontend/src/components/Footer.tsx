"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full max-w-[1400px] mx-auto px-8 pb-12 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <GlassCard className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-md">
            <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              ARACHNO WORLD
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Dedicated to the observation, education, and masterful husbandry of arachnids. Join us in demystifying these incredible eight-legged wonders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            <div className="flex flex-col gap-3 text-center md:text-left text-sm">
              <h4 className="text-white/90 font-bold uppercase tracking-wider mb-1">Navigation</h4>
              <a href="/" className="text-white/50 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#species" className="text-white/50 hover:text-emerald-400 transition-colors">Species Database</a>
              <a href="#about" className="text-white/50 hover:text-emerald-400 transition-colors">About</a>
            </div>
            
            <div className="flex flex-col gap-3 text-center md:text-left text-sm sm:pl-8 sm:border-l border-white/10">
              <h4 className="text-white/90 font-bold uppercase tracking-wider mb-1">Connect</h4>
              <a href="https://www.instagram.com/arachnoworld_150725?stkn=cDd3c3EwM3RsNXNt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-emerald-400 transition-colors">Instagram</a>
              <a href="https://youtube.com/@arachnoworld?si=KA1pScaJ1nIayvfR" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-emerald-400 transition-colors">YouTube</a>
              <a href="mailto:arachnoworld2005@gmail.com" className="text-white/50 hover:text-emerald-400 transition-colors">Contact Vidit</a>
            </div>
          </div>

        </GlassCard>
        
        <div className="mt-8 text-center text-white/30 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Arachno World. All Rights Reserved.
        </div>
      </motion.div>
    </footer>
  );
}
