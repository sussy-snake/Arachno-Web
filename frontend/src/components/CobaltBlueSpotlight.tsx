"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CobaltBlueSpotlight() {
  return (
    <section className="relative z-10 w-full max-w-[1400px] mx-auto min-h-screen flex items-center justify-center py-24 pointer-events-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-full"
      >
        {/* Data Card - Spans 2 rows on large screens */}
        <motion.div variants={itemVariants} className="lg:col-span-1 lg:row-span-2 h-full">
          <GlassCard className="h-full p-8 flex flex-col justify-start">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-300 mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] tracking-tight">
              Cobalt Blue
            </h3>
            <p className="italic text-white/70 mb-8 font-serif">
              Cyriopagopus lividus
            </p>

            <ul className="space-y-6 text-white/90 text-sm leading-relaxed">
              <li>
                <span className="font-bold text-blue-400">Origin:</span> Southeast Asia (Myanmar, Thailand, Laos, Vietnam)
              </li>
              <li>
                <span className="font-bold text-blue-400">Habitat:</span> Tropical rainforest (Obligate Fossorial / Deep Burrower)
              </li>
              <li>
                <span className="font-bold text-blue-400">Growth Rate:</span> Medium to Fast
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="font-bold text-blue-400 block mb-2">Keeper's Notes:</span>
                A stunning but notoriously defensive and fast species. As obligate burrowers, they require deep, moist substrate to construct extensive underground tunnels. Because they spend the vast majority of their time hidden in their burrows, they are considered a "pet hole" by many hobbyists. They are recommended only for experienced keepers due to their speed, potent venom, and aggressive temperament when disturbed.
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        {/* Sling Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cb-sling.jpg" 
                alt="Cobalt Blue Sling" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-blue-300">Sling Stage:</strong> Earthy brown and grey coloration, completely lacking the signature blue hues.
            </p>
          </GlassCard>
        </motion.div>

        {/* Juvenile Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cb-juv.jpg" 
                alt="Cobalt Blue Juvenile" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-blue-300">Juvenile Stage:</strong> The striking iridescent blue tint begins to emerge on the femurs and lower legs.
            </p>
          </GlassCard>
        </motion.div>

        {/* Adult Card */}
        <motion.div variants={itemVariants} className="h-full">
          <GlassCard className="h-full p-3 flex flex-col group hover:bg-white/10 transition-colors duration-500">
            <div className="relative w-full aspect-square md:aspect-auto md:h-64 rounded-3xl overflow-hidden mb-4">
              <Image 
                src="/cb-adult.jpg" 
                alt="Cobalt Blue Adult" 
                fill 
                className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <p className="text-sm text-white/80 px-2 pb-2 leading-relaxed mt-auto">
              <strong className="text-blue-300">Adult Stage:</strong> Females display breathtaking, metallic cobalt-blue legs contrasting with a light grey carapace.
            </p>
          </GlassCard>
        </motion.div>

        {/* Deep Dive Details Card - Fills bottom space under images */}
        <motion.div variants={itemVariants} className="lg:col-span-3 h-full">
          <GlassCard className="h-full p-8 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white mb-4 tracking-wider">Husbandry Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80 leading-relaxed">
              <div>
                <strong className="text-blue-400 block mb-1">Diet & Feeding</strong>
                Aggressive eaters. Offer crickets, mealworms, or roaches. Exercise extreme caution when opening the enclosure for feeding, as they can bolt or strike with lightning speed.
              </div>
              <div>
                <strong className="text-blue-400 block mb-1">Enclosure Setup</strong>
                Provide an obligate fossorial setup with at least 8-10 inches of deep, moist substrate (e.g., coconut fiber or peat moss) to allow for their extensive burrowing habits. 
              </div>
              <div>
                <strong className="text-blue-400 block mb-1">Temperament</strong>
                Notoriously defensive, aggressive, and incredibly fast. They pack potent venom and will not hesitate to bite if they feel cornered. Strictly for observation, never handling.
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </motion.div>
    </section>
  );
}
