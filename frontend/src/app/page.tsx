"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundScene from "@/components/BackgroundScene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortalSelection from "@/components/PortalSelection";
import SpeciesSpotlight from "@/components/SpeciesSpotlight";
import CobaltBlueSpotlight from "@/components/CobaltBlueSpotlight";
import ChacoGoldenKneeSpotlight from "@/components/ChacoGoldenKneeSpotlight";
import Footer from "@/components/Footer";
import DonationWidget from "@/components/DonationWidget";
import GlassCard from "@/components/GlassCard";

type ViewState = 'landing' | 'hub' | 'araneae';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  return (
    <main className="min-h-screen text-white relative">
      <BackgroundScene />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center min-h-screen"
            >
              <Hero onEnter={() => setCurrentView('hub')} />
            </motion.div>
          )}

          {currentView === 'hub' && (
            <motion.div
              key="hub"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col w-full"
            >
              <About />
              <PortalSelection onSelectAraneae={() => setCurrentView('araneae')} />
              <div className="h-16" />
              <DonationWidget />
              <div className="h-16" />
              <Footer />
            </motion.div>
          )}

          {currentView === 'araneae' && (
            <motion.div
              key="araneae"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col w-full relative"
            >
              {/* Sticky Liquid Glass Back Button */}
              <div className="sticky top-6 z-50 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex justify-start pointer-events-none mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView('hub')}
                  className="pointer-events-auto will-change-transform"
                >
                  <GlassCard className="px-6 py-3 flex items-center gap-3 !rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                    <svg 
                      width="18" height="18" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="group-hover:-translate-x-1 transition-transform duration-300"
                    >
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    <span className="font-bold tracking-widest text-sm uppercase text-white/90">Back to Hub</span>
                  </GlassCard>
                </motion.button>
              </div>

              <div className="pt-8">
                <SpeciesSpotlight />
                <CobaltBlueSpotlight />
                <ChacoGoldenKneeSpotlight />
              </div>
              <div className="h-16" />
              <DonationWidget />
              <div className="h-16" />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
