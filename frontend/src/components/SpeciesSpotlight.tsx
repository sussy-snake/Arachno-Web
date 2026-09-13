"use client";

import { motion, Variants } from "framer-motion";
import GlassCard from "./GlassCard";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SpeciesSpotlight() {
  return (
    <section id="species" className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex items-center justify-center py-24 pointer-events-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-8 w-full max-w-full mx-4 md:mx-auto will-change-transform"
      >
        {/* Data Card - Spans 2 rows on large screens */}
        <motion.div variants={itemVariants} className="lg:col-span-1 lg:row-span-2 h-full">
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-start">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)] tracking-tight">
              Green Bottle Blue
            </h3>
            <p className="italic text-white/70 mb-8 font-serif">
              Chromatopelma cyaneopubescens
            </p>

            <ul className="space-y-6 text-white/90 text-sm leading-relaxed">
              <li>
                <span className="font-bold text-emerald-400">Origin:</span> Paraguaná Peninsula, Venezuela
              </li>
              <li>
                <span className="font-bold text-emerald-400">Habitat:</span> Arid scrubland (Terrestrial / Heavy Webber)
              </li>
              <li>
                <span className="font-bold text-emerald-400">Growth Rate:</span> Fast
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="font-bold text-emerald-400 block mb-2">Keeper's Notes:</span>
                One of the hobby's most striking display tarantulas, renowned for their dramatic ontogenetic color changes from spiderling to adulthood. They are prolific webbers, quickly coating their enclosures in complex, thick silk tunnels. While fast and occasionally skittish, they boast a voracious feeding response and prefer dry environments, making them highly rewarding for dedicated enthusiasts to observe.
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        {/* Sling Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/gbb-sling.jpg" 
                alt="GBB Sling" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-emerald-300">Sling Stage:</strong> Characterized by a distinct tiger-striped abdomen and brownish carapace.
            </p>
          </GlassCard>
        </motion.div>

        {/* Juvenile Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/gbb-juv.jpg" 
                alt="GBB Juvenile" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-emerald-300">Juvenile Stage:</strong> Transitioning into metallic green carapaces and emerging blue legs.
            </p>
          </GlassCard>
        </motion.div>

        {/* Adult Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/gbb-adult.jpg" 
                alt="GBB Adult" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-emerald-300">Adult Stage:</strong> Displaying striking vivid blue legs, a teal carapace, and a bright orange abdomen.
            </p>
          </GlassCard>
        </motion.div>

        {/* Deep Dive Details Card - Fills bottom space under images */}
        <motion.div variants={itemVariants} className="lg:col-span-3 h-full">
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white mb-4 tracking-wider">Husbandry Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80 leading-relaxed">
              <div>
                <strong className="text-emerald-400 block mb-1">Diet & Feeding</strong>
                Incredible feeding response. Sling and juveniles will aggressively take down prey their own size. Offer appropriately sized crickets, roaches, or mealworms 1-2 times a week.
              </div>
              <div>
                <strong className="text-emerald-400 block mb-1">Enclosure Setup</strong>
                Provide a dry, terrestrial setup with plenty of anchor points (cork bark, fake plants) to encourage their extensive webbing behavior. A small water dish is essential.
              </div>
              <div>
                <strong className="text-emerald-400 block mb-1">Temperament</strong>
                Can be skittish and extremely fast when startled, often retreating into their web tunnels. They are generally reluctant to bite, preferring flight over fight, and will flick urticating hairs if stressed.
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
