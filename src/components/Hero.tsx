import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroStats, heroBenefits, heroBadgeLines } from "../constants/heroData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";
import { Card } from "./ui/Card";
import AnimatedNumber from "./ui/AnimatedNumber";
import { containerVariants, itemVariants } from "../animations";

import Typewriter from "./ui/Typewriter";
import Tooltip from "./ui/Tooltip";

/**
 * FEATURE TOGGLES
 * Change these booleans to show/hide sections instantly
 */
const HERO_CONFIG = {
  showBadge: true,
  showStats: false, // Set to true to show Leads Generated / Qualified Leads
  showBenefits: true,
  showVisualAssets: true, // The Woman and Guy images
};

const Hero: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % heroBadgeLines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-linear-to-t from-(--muted) to-(--background) min-h-[90vh] pt-32 sm:pt-40 flex items-center relative overflow-hidden font-jakarta">
      {/* Visual Assets (Sliding Up) */}
      {HERO_CONFIG.showVisualAssets && (
        <>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute bottom-0 left-[-5%] w-[400px] hidden lg:block pointer-events-none z-0"
          >
            <img
              src="https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Woman.png"
              alt="AI Team Member"
              className="w-full h-auto object-contain opacity-80"
            />
          </motion.div>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute bottom-0 right-[-5%] w-[420px] hidden lg:block pointer-events-none z-0"
          >
            <img
              src="https://vite-react-kkfb43u6q-abhijeets-projects-1922facd.vercel.app/assets/Guy.png"
              alt="AI Team Member"
              className="w-full h-auto object-contain opacity-80"
            />
          </motion.div>
        </>
      )}

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-link/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <Container className="relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dynamic Badge */}
          {HERO_CONFIG.showBadge && (
            <motion.div
              variants={itemVariants}
              className="mb-10 w-full max-w-md"
            >
              <div className="bg-(--card) px-6 py-3 rounded-full border border-brand-primary/20 shadow-xl shadow-brand-primary/5 flex items-center gap-4 overflow-hidden relative">
                <span className="w-2.5 h-2.5 bg-brand-primary rounded-full animate-pulse shrink-0"></span>
                <div className="relative h-5 flex-1 text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={badgeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "anticipate" }}
                      className="absolute inset-0 text-[11px] sm:text-xs font-black text-brand-primary uppercase tracking-widest whitespace-nowrap"
                    >
                      {heroBadgeLines[badgeIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.05] text-(--foreground) mb-12 tracking-tighter max-w-5xl"
          >
            <Typewriter
              delay={0.6}
              segments={[
                { text: "Full AI " },
                {
                  text: "Sales & Marketing",
                  className:
                    "bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent",
                },
                { text: " Team" },
              ]}
              cursorColor="#ff5722"
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-(--muted-foreground) leading-relaxed mb-16 max-w-4xl font-medium tracking-tight"
          >
            Hundreds of qualified appointments every month —{" "}
            <span className="text-(--foreground) font-semibold italic">
              while you sleep.
            </span>
          </motion.p>

          {/* Stats Grid */}
          {HERO_CONFIG.showStats && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 w-full"
            >
              {heroStats.map((item, idx) => (
                <Card
                  key={idx}
                  variant="white"
                  className="p-8 border-black/3 group hover:border-brand-primary/30 transition-all duration-500"
                >
                  <div className="text-4xl md:text-5xl font-black text-brand-primary mb-2 tracking-tighter">
                    <AnimatedNumber value={item.value} />
                  </div>
                  <div className="text-[10px] text-[#94a3b8] uppercase tracking-[0.2em] font-black">
                    {item.label}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16 w-full sm:w-auto"
          >
            <Button
              variant="glass-primary"
              size="xl"
              className="px-12"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              Book Demo
            </Button>
            <Tooltip content="Try our AI bot from within this page">
              <Button variant="glass" size="xl" className="px-12">
                Try Now
              </Button>
            </Tooltip>
          </motion.div>

          {/* Benefits List */}
          {HERO_CONFIG.showBenefits && (
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <div className="flex flex-col gap-4">
                {heroBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-5 bg-(--card)/40 backdrop-blur-md rounded-2xl border border-(--border) transition-all hover:bg-(--card) hover:shadow-xl hover:shadow-brand-primary/5 group"
                  >
                    <span className="w-7 h-7 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-black shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
                      ✓
                    </span>
                    <span className="text-(--muted-foreground) font-bold text-base sm:text-lg text-left">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
