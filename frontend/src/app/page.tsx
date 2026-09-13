"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundScene from "@/components/BackgroundScene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SpeciesSpotlight from "@/components/SpeciesSpotlight";
import CobaltBlueSpotlight from "@/components/CobaltBlueSpotlight";
import ChacoGoldenKneeSpotlight from "@/components/ChacoGoldenKneeSpotlight";
import Footer from "@/components/Footer";
import DonationWidget from "@/components/DonationWidget";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="min-h-screen text-white relative">
      <BackgroundScene />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <motion.div
              key="hero"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center min-h-screen"
            >
              <Hero onEnter={() => setHasEntered(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col w-full"
            >
              <About />
              <SpeciesSpotlight />
              <CobaltBlueSpotlight />
              <ChacoGoldenKneeSpotlight />
              
              <div className="h-16" /> {/* Spacer between content and widget */}
              <DonationWidget />
              <div className="h-16" /> {/* Spacer between widget and footer */}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
