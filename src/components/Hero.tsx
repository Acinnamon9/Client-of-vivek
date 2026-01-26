import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants } from "../animations";
import { NeuralNetwork } from "../animation-bundle/NeuralNetwork";
import { ConnectionLines } from "../animation-bundle/ConnectionLines";
import HeroBadge from "./hero/HeroBadge";
import HeroContent from "./hero/HeroContent";
import HeroPhone from "./hero/HeroPhone";
import { useIsMobile } from "../hooks/useIsMobile";

/**
 * FEATURE TOGGLES
 */
const HERO_CONFIG = {
  showBadge: true,
  showTrustedBy: true,
};

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <Section
      id="hero"
      className="bg-(--background) min-h-dvh flex items-center relative overflow-hidden p-0 z-10"
    >
      {/* Background Lines - Dynamic Focal Point for Mobile vs Desktop */}
      <div className="hidden lg:block absolute left-0 top-[15%] md:top-[18%] lg:top-[19%] w-full h-[70%] md:h-[65%] lg:h-[62%] z-0 pointer-events-none opacity-40 md:opacity-50 lg:opacity-70 dark:opacity-50 dark:md:opacity-60">
        <div className="w-full h-full">
          <ConnectionLines focalPointX={0.8} focalPointY={0.5} />
        </div>
      </div>

      {/* Outer Brain (Adaptive) - Desktop Only */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-1"
        style={{
          clipPath: "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 0, 55% 0, 55% 7.5%, 100% 7.5%, 100% 92.5%, 55% 92.5%, 55% 100%, 0 100%)",
          }}
        >
          <NeuralNetwork x="77.5%" y="80%" rotate={10} variant="adaptive" />
        </div>
      </div>

      {/* Right-side Decorative Backdrop (Pure Orange Impact) / Mobile: Bottom Glow */}
      <div className="absolute right-0 bottom-0 md:bottom-0 lg:top-1/2 lg:-translate-y-1/2 h-[45vh] md:h-[50vh] lg:h-[85%] w-full md:w-[60%] lg:w-[45%] bg-linear-to-t lg:bg-linear-to-br from-brand-orange via-[#ea580c] to-[#c2410c] md:rounded-l-[60px] lg:rounded-l-[100px] z-1 shadow-[0_0_80px_rgba(249,115,22,0.25)] md:shadow-[0_0_100px_rgba(249,115,22,0.3)] lg:shadow-[0_0_120px_rgba(249,115,22,0.35)] border-t md:border-l lg:border-l md:border-t-0 lg:border-t-0 border-white/20 overflow-hidden lg:block">
        {/* Inner Brain - Synchronized with Outer Brain scale/position */}
        <div className="hidden lg:block absolute inset-0">
          {/* This container matches the section height (100/85 = 117.647%) and padding (7.5/85 = 8.823%) */}
          <div className="absolute right-0 top-[-8.823%] w-screen h-[117.647%]">
            <NeuralNetwork x="77.5%" y="80%" rotate={10} variant="white" />
          </div>
        </div>
      </div>

      <Container className="relative z-20 w-full max-w-full lg:max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Split Layout Grid - Optimized for Mobile Flow (Shifted Upwards) */}
        <div className="grid lg:grid-cols-[55%_45%] gap-8 sm:gap-10 md:gap-12 lg:gap-0 items-start lg:items-center min-h-dvh py-20 sm:py-24 md:py-28 lg:py-0">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial={isMobile ? "visible" : "hidden"}
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start md:pr-2 lg:pr-4 md:-ml-8 lg:-ml-16 pt-8 sm:pt-12 md:pt-16 lg:pt-0"
          >
            {HERO_CONFIG.showBadge && <HeroBadge />}
            <HeroContent showTrustedBy={HERO_CONFIG.showTrustedBy} />
          </motion.div>

          {/* Right Column: Phone Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pb-6 sm:pb-8 md:pb-10 lg:pb-0"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
