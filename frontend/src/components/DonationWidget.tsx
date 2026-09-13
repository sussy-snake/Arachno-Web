"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import Image from "next/image";

interface DonationConfig {
  upiId: string;
  payeeName: string;
  currency: string;
  qrImagePath: string;
}

export default function DonationWidget() {
  const [showQR, setShowQR] = useState(false);
  const [config, setConfig] = useState<DonationConfig | null>(null);

  useEffect(() => {
    // Determine backend URL
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/donation');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        }
      } catch (error) {
        console.error("Failed to fetch donation config:", error);
      }
    };
    
    fetchConfig();
  }, []);

  if (!config) {
    return null; // Do not render until config is loaded
  }

  const upiUrl = `upi://pay?pa=${config.upiId}&pn=${encodeURIComponent(config.payeeName)}&cu=${config.currency}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="z-10 relative max-w-md mx-4 md:mx-auto mt-20 mb-10 pointer-events-auto will-change-transform"
    >
      <GlassCard className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight drop-shadow-[0_0_10px_rgba(52,211,153,0.2)] mb-6">
          Support Arachno World
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href={upiUrl}
            className="flex-1 px-6 py-3 min-h-[44px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md active:bg-white/20 hover:bg-white/10 transition-colors duration-300 text-white/90 font-medium text-sm text-center"
          >
            Pay with UPI ID
          </a>
          
          <button
            onClick={() => setShowQR(!showQR)}
            className="flex-1 px-6 py-3 min-h-[44px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md active:bg-white/20 hover:bg-white/10 transition-colors duration-300 text-white/90 font-medium text-sm text-center"
          >
            {showQR ? "Hide QR Code" : "Show QR Code"}
          </button>
        </div>

        <AnimatePresence>
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full overflow-hidden flex justify-center"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl border border-white/20 p-2 bg-white/5 backdrop-blur-md overflow-hidden">
                <Image
                  src={config.qrImagePath}
                  alt="UPI QR Code"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  );
}
