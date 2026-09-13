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

export default function ChacoGoldenKneeSpotlight() {
  return (
    <section className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex items-center justify-center py-24 pointer-events-auto">
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
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-200 to-white mb-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)] tracking-tight">
              Chaco Golden Knee
            </h3>
            <p className="italic text-white/70 mb-8 font-serif">
              Grammostola pulchripes
            </p>

            <ul className="space-y-6 text-white/90 text-sm leading-relaxed">
              <li>
                <span className="font-bold text-yellow-400">Origin:</span> South America (Argentina, Paraguay)
              </li>
              <li>
                <span className="font-bold text-yellow-400">Habitat:</span> Pampas and scrublands (Terrestrial / Opportunistic Burrower)
              </li>
              <li>
                <span className="font-bold text-yellow-400">Growth Rate:</span> Slow to Medium
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="font-bold text-yellow-400 block mb-2">Keeper's Notes:</span>
                Widely considered one of the ultimate beginner tarantulas. They are incredibly docile, hardy, and tolerate a range of conditions. Reaching impressive sizes of up to 8 inches in diagonal leg span, they make fantastic display spiders as they often sit out in the open rather than hiding. While they possess urticating hairs, they are generally reluctant to kick them and have a very calm overall demeanor.
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        {/* Sling Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cgk-sling.jpg" 
                alt="Chaco Golden Knee Sling" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-yellow-300">Sling Stage:</strong> Light pinkish-brown coloration with a characteristic dark patch on the abdomen.
            </p>
          </GlassCard>
        </motion.div>

        {/* Juvenile Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cgk-juv.jpg" 
                alt="Chaco Golden Knee Juvenile" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-yellow-300">Juvenile Stage:</strong> Darkening overall coloration with the first hints of the signature golden striping on the leg joints.
            </p>
          </GlassCard>
        </motion.div>

        {/* Adult Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cgk-adult.jpg" 
                alt="Chaco Golden Knee Adult" 
                fill 
                className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-yellow-300">Adult Stage:</strong> A massive, fluffy tarantula displaying prominent, vibrant golden stripes at the 'knees' (patellae).
            </p>
          </GlassCard>
        </motion.div>

        {/* Deep Dive Details Card - Fills bottom space under images */}
        <motion.div variants={itemVariants} className="lg:col-span-3 h-full">
          <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white mb-4 tracking-wider">Husbandry Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80 leading-relaxed">
              <div>
                <strong className="text-yellow-400 block mb-1">Diet & Feeding</strong>
                Excellent eaters but slow growers. Feed appropriately sized crickets or roaches. Due to their slow metabolism, they may occasionally fast for long periods before a molt, which is completely normal.
              </div>
              <div>
                <strong className="text-yellow-400 block mb-1">Enclosure Setup</strong>
                A standard terrestrial setup works perfectly. Provide enough substrate for opportunistic burrowing (especially as juveniles), a cork bark hide, and a shallow water dish. They prefer drier environments but tolerate average household humidity well.
              </div>
              <div>
                <strong className="text-yellow-400 block mb-1">Temperament</strong>
                Incredibly docile, calm, and slow-moving. Often considered one of the best beginner tarantulas. They are very hardy and display a reluctant, gentle demeanor, making them a joy to observe.
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
