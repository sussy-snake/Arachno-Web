"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

export default function Hero({ onEnter }: { onEnter?: () => void }) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-auto px-4">
      <GlassCard className="flex flex-col items-center justify-center p-10 md:p-16 text-center w-full max-w-2xl min-h-[300px]">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-500 to-cyan-500 mb-8 tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          ARACHNO WORLD
        </motion.h1>
        
        <motion.button
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          onClick={onEnter}
          className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-500 border border-white/20 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] relative overflow-hidden group"
        >
          <span className="relative z-10">Enter The Web</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </motion.button>
      </GlassCard>
    </div>
  );
}
