import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../ui/Typewriter";
import { itemVariants } from "../../animations";
import { trustedLogos } from "../../constants/proofData";

interface HeroContentProps {
  showTrustedBy?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ showTrustedBy = true }) => {
  return (
    <motion.div
      className="p-8 lg:p-10 rounded-[40px] bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10 shadow-2xl relative z-10 overflow-hidden max-w-[95vw] lg:max-w-3xl"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-(--foreground) mb-8 tracking-tighter"
      >
        <Typewriter
          delay={0.6}
          segments={[
            { text: "Full AI " },
            {
              text: "Sales & Marketing",
              className: "text-(--foreground)",
            },
            { text: " Team" },
          ]}
          cursorColor="#0f172a"
        />
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl text-(--muted-foreground) leading-relaxed mb-12 max-w-lg font-medium tracking-tight"
      >
        Hundreds of qualified appointments every month —{" "}
        <span className="text-(--foreground) font-semibold italic">
          while you sleep.
        </span>
      </motion.p>

      {/* Trusted By Strip - Infinite Horizontal Scroller */}
      {showTrustedBy && (
        <motion.div variants={itemVariants} className="mt-8">
          <div className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-[0.3em] mb-6 opacity-60">
            Trusted by Forward-Thinking Enterprises
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Infinite Horizontal Scroller */}

            <motion.div
              className="flex gap-12 sm:gap-16 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Double the logos to create the infinite loop effect */}
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <span
                  key={idx}
                  className="text-lg sm:text-xl font-black text-(--foreground) tracking-tighter opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-default"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroContent;
