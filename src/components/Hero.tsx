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
      className="bg-(--background) min-h-screen flex items-center relative overflow-hidden p-0"
    >
      {/* Background Lines spans 62% of the section and connects to the brain */}
      <div className="absolute left-0 top-[19%] w-full h-[62%] z-0 pointer-events-none opacity-70 dark:opacity-60">
        <ConnectionLines focalPointX={0.79} focalPointY={0.88} />
      </div>

      {/* Outer Brain (Adaptive: Black on Light, Orange on Dark) - visible on main background */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-1"
        style={{
          clipPath:
            "polygon(0 0, 55% 0, 55% 7.5%, 100% 7.5%, 100% 92.5%, 55% 92.5%, 55% 100%, 0 100%)",
        }}
      >
        <NeuralNetwork x="77.5%" y="80%" rotate={10} variant="adaptive" />
      </div>

      {/* Right-side Decorative Backdrop (Pure Orange Impact) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-[45%] bg-linear-to-br from-[#f97316] via-[#ea580c] to-[#c2410c] rounded-l-[100px] z-1 shadow-[0_0_120px_rgba(249,115,22,0.35)] border-l border-white/20 overflow-hidden">
        {/* Inner Brain (White) - visible only inside the orange shape */}
        <NeuralNetwork x="50%" y="80%" rotate={10} variant="white" />
      </div>

      <Container className="relative z-20 w-full max-w-full lg:max-w-[1400px] px-6 lg:px-12">
        {/* Split Layout Grid - Hybrid Balance (55% Text : 45% Visual overlap) */}
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-0 items-center min-h-screen py-24 lg:py-0">
          {/* Left Column: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pr-10"
          >
            {HERO_CONFIG.showBadge && <HeroBadge />}
            <HeroContent showTrustedBy={HERO_CONFIG.showTrustedBy} />
          </motion.div>

          {/* Right Column: Phone Interface */}
          <HeroPhone />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
