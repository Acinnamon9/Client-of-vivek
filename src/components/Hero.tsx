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

      {/* Right-side Blue Backdrop (Edge-to-Edge) - Hybrid Floating Panel */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-[42%] bg-linear-to-br from-hero-gradient-from via-hero-gradient-via to-hero-gradient-to rounded-l-[80px] z-1 shadow-2xl shadow-brand-primary/20">
        <div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            clipPath: "polygon(-200% -200%, 300% -200%, 300% 100%, -200% 100%)",
          }}
        >
          <NeuralNetwork x="50%" y="80%" rotate={10} />
        </div>
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
