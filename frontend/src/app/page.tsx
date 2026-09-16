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
              className="flex flex-col w-full pt-24"
            >
              <div className="w-full max-w-7xl mx-auto px-4 flex justify-start mb-8">
                <button
                  onClick={() => setCurrentView('hub')}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all backdrop-blur-md"
                >
                  &larr; Back to Hub
                </button>
              </div>
              <SpeciesSpotlight />
              <CobaltBlueSpotlight />
              <ChacoGoldenKneeSpotlight />
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
