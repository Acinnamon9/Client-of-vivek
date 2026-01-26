import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants } from "../animations";
import { NeuralNetwork } from "../animation-bundle/NeuralNetwork";
import { ConnectionLines } from "../animation-bundle/ConnectionLines";
import HeroBadge from "./hero/HeroBadge";
import HeroContent from "./hero/HeroContent";
import HeroPhone from "./hero/HeroPhone";

/**
 * FEATURE TOGGLES
 */
const HERO_CONFIG = {
  showBadge: true,
  showTrustedBy: true,
};

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="bg-(--background) min-h-screen flex items-center relative overflow-hidden p-0 z-10"
    >
      {/* Background Lines - Dynamic Focal Point for Mobile vs Desktop */}
      <div className="absolute left-0 top-[19%] w-full h-[62%] z-0 pointer-events-none opacity-50 lg:opacity-70 dark:opacity-60">
        <div className="hidden lg:block w-full h-full">
          <ConnectionLines focalPointX={0.8} focalPointY={0.5} />
        </div>
        <div className="block lg:hidden w-full h-full">
          <ConnectionLines focalPointX={0.5} focalPointY={0.85} />
        </div>
      </div>

      {/* Outer Brain (Adaptive) - Mobile: Centered & Subliminal, Desktop: Right-pinned */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          clipPath: "none",
        }}
      >
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            clipPath:
              "polygon(0 0, 55% 0, 55% 7.5%, 100% 7.5%, 100% 92.5%, 55% 92.5%, 55% 100%, 0 100%)",
          }}
        >
          <NeuralNetwork x="77.5%" y="80%" rotate={10} variant="adaptive" />
        </div>
        <div className="block lg:hidden absolute inset-0 opacity-20 transform translate-y-20">
          <NeuralNetwork x="50%" y="85%" rotate={5} variant="adaptive" />
        </div>
      </div>

      {/* Right-side Decorative Backdrop (Pure Orange Impact) / Mobile: Bottom Glow */}
      <div className="absolute right-0 bottom-0 lg:top-1/2 lg:-translate-y-1/2 h-[50vh] lg:h-[85%] w-full lg:w-[45%] bg-linear-to-t lg:bg-linear-to-br from-brand-orange via-[#ea580c] to-[#c2410c] lg:rounded-l-[100px] z-1 shadow-[0_0_120px_rgba(249,115,22,0.35)] lg:border-l border-t lg:border-t-0 border-white/20 overflow-hidden lg:block">
        {/* Inner Brain - Synchronized with Outer Brain scale/position */}
        <div className="hidden lg:block absolute inset-0">
          {/* This container matches the section height (100/85 = 117.647%) and padding (7.5/85 = 8.823%) */}
          <div className="absolute right-0 top-[-8.823%] w-screen h-[117.647%]">
            <NeuralNetwork x="77.5%" y="80%" rotate={10} variant="white" />
          </div>
        </div>
        <div className="block lg:hidden w-full h-full opacity-40">
          <NeuralNetwork x="50%" y="100%" rotate={0} variant="white" />
        </div>
      </div>

      <Container className="relative z-20 w-full max-w-full lg:max-w-[1400px] px-6 lg:px-12">
        {/* Split Layout Grid - Optimized for Mobile Flow (Shifted Upwards) */}
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-0 items-start lg:items-center min-h-svh py-32 lg:py-0">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pr-4 lg:-ml-16 pt-16 lg:pt-0"
          >
            {HERO_CONFIG.showBadge && <HeroBadge />}
            <HeroContent showTrustedBy={HERO_CONFIG.showTrustedBy} />
          </motion.div>

          {/* Right Column: Phone Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pb-10 lg:pb-0"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
