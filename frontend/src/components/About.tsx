"use client";

import { motion, Variants } from "framer-motion";
import GlassCard from "./GlassCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 30 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative z-10 flex min-h-screen items-center justify-center py-24 px-6 md:px-12 pointer-events-auto">
      <div className="w-full max-w-4xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <GlassCard className="flex flex-col p-10 md:p-16">
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]"
            >
              Welcome to Arachno World
            </motion.h2>
            
            <motion.div variants={textVariants} className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed font-sans">
              <p>
                Hi, I'm Vidit Bitthal. At 21 years old, I’ve spent the last three years deeply immersed in the fascinating world of arachnids. Arachno World was built out of pure passion and a desire to understand these often-misunderstood creatures.
              </p>
              <p>
                I am an enthusiast and dedicated keeper—not a breeder. My focus is entirely on observation, education, and mastering proper husbandry to give my collection the best possible care.
              </p>
              <p>
                Whether you are a fellow hobbyist or simply curious about these incredible eight-legged wonders, this space is dedicated to sharing genuine experiences, husbandry tips, and the striking beauty of arachnids.
              </p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
