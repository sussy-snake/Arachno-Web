"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";

interface PortalSelectionProps {
  onSelectAraneae: () => void;
}

export default function PortalSelection({ onSelectAraneae }: PortalSelectionProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-12 pb-24 pointer-events-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
        {/* Araneae Portal Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-full cursor-pointer will-change-transform"
          onClick={onSelectAraneae}
        >
          <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]">
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] tracking-tight">
              Enter Araneae World
            </h3>
            <p className="text-white/70 text-sm md:text-base font-medium">Explore the Spiders</p>
          </GlassCard>
        </motion.div>

        {/* Scorpiones Portal Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-full cursor-pointer will-change-transform relative"
          onClick={() => setShowComingSoon(true)}
        >
          <GlassCard className="h-full p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)] tracking-tight">
              Enter Scorpiones World
            </h3>
            <p className="text-white/70 text-sm md:text-base font-medium">Explore the Scorpions</p>

            {/* Coming Soon Overlay / Feedback */}
            <AnimatePresence>
              {showComingSoon && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-sm border border-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowComingSoon(false);
                  }}
                >
                  <p className="text-white font-bold text-center px-6">
                    Coming Soon, Please Follow Us for more info
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
