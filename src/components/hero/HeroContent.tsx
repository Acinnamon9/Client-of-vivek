import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../ui/Typewriter";
import { itemVariants } from "../../animations";
import { trustedLogos } from "../../constants/proofData";
import { useIsMobile } from "../../hooks/useIsMobile";

interface HeroContentProps {
  showTrustedBy?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ showTrustedBy = true }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="p-6 sm:p-8 md:p-9 lg:p-10 rounded-[32px] sm:rounded-[36px] md:rounded-[40px] bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10 shadow-2xl relative z-10 overflow-hidden w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl"
      initial={{ opacity: 1, x: isMobile ? 0 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none"></div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-(--foreground) mb-6 sm:mb-7 md:mb-8 tracking-tighter"
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
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-(--muted-foreground) leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg font-medium tracking-tight"
      >
        Hundreds of qualified appointments every month —{" "}
        <span className="text-(--foreground) font-semibold italic">
          while you sleep.
        </span>
      </motion.p>

      {/* Trusted By Strip - Infinite Horizontal Scroller */}
      {showTrustedBy && (
        <motion.div variants={itemVariants} className="mt-6 sm:mt-7 md:mt-8">
          <div className="text-[9px] sm:text-[10px] font-bold text-(--muted-foreground) uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4 sm:mb-5 md:mb-6 opacity-60">
            Trusted by Forward-Thinking Enterprises
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Infinite Horizontal Scroller */}

            <motion.div
              className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center whitespace-nowrap"
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
                  className="text-base sm:text-lg md:text-xl font-black text-(--foreground) tracking-tighter opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-default"
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
