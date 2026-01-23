import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroBenefits, heroBadgeLines } from "../constants/heroData";
import { trustedLogos } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";

import { containerVariants, itemVariants } from "../animations";

import Typewriter from "./ui/Typewriter";
import Tooltip from "./ui/Tooltip";
import NeuralNetwork from "./ui/NeuralNetwork";
import Magnetic from "./ui/Magnetic";

/**
 * FEATURE TOGGLES
 * Change these booleans to show/hide sections instantly
 */
const HERO_CONFIG = {
  showBadge: true,
  showStats: false,
  showBenefits: true,
  showVisualAssets: false, // Disabled for cleaner Enterprise look
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
    <Section
      id="hero"
      className="bg-linear-to-t from-(--muted) to-(--background) min-h-screen pt-32 sm:pt-48 lg:pt-64 flex items-center relative overflow-hidden"
    >
      {/* Background Decor */}
      {/* Background Decor - Minimalist */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-30"></div>

      {/* Neural Network Decoration */}
      <div className="absolute inset-0 z-0 neural-network-bg pointer-events-none opacity-40">
        <NeuralNetwork
          dotColor="#0f766e"
          lineColor="#0f766e"
          className="w-full h-full"
        />
      </div>

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
              <div className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full border border-black/5 shadow-sm flex items-center gap-4 overflow-hidden relative">
                <span className="w-2 h-2 bg-brand-depth rounded-full animate-pulse shrink-0"></span>
                <div className="relative h-5 flex-1 text-left">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={badgeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "anticipate" }}
                      className="absolute inset-0 text-[11px] sm:text-xs font-bold text-brand-depth uppercase tracking-widest whitespace-nowrap"
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
                  className: "text-(--foreground)", // Removed gradient, plain strong text
                },
                { text: " Team" },
              ]}
              cursorColor="#0f172a"
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

          {/* Stats Grid - Removed as per clean up */}

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16 w-full sm:w-auto"
          >
            <Magnetic>
              <Button
                variant="primary"
                size="xl"
                className="px-12 rounded-full"
                onClick={() =>
                  window.open("https://atomicx.ravan.ai/book", "_blank")
                }
              >
                Book Demo
              </Button>
            </Magnetic>
            <Tooltip content="Try our AI bot from within this page">
              <Magnetic>
                <Button
                  as="a"
                  href="#demo"
                  variant="outline"
                  size="xl"
                  className="px-12 rounded-full border-brand-depth/20"
                >
                  Try Now
                </Button>
              </Magnetic>
            </Tooltip>
          </motion.div>

          {/* Trusted By Strip (New) */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-[0.3em] mb-6 opacity-60">
              Trusted by Forward-Thinking Enterprises
            </div>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-40 grayscale hover:opacity-70 transition-opacity duration-500">
              {trustedLogos.map((logo, idx) => (
                <span key={idx} className="text-xl sm:text-2xl font-black text-(--foreground) tracking-tighter">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Benefits List */}
          {HERO_CONFIG.showBenefits && (
            <motion.div variants={itemVariants} className="max-w-2xl">
              <div className="flex flex-col items-center gap-4">
                {heroBenefits.map((benefit, idx) => (
                  <motion.a
                    key={idx}
                    href={benefit.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 transition-all shadow-[inset_0_0_30px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.3)] group cursor-pointer text-left no-underline rounded-2xl"
                  >
                    <span className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-primary/20 to-brand-primary/5 text-brand-primary flex items-center justify-center border border-brand-primary/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform shrink-0">
                      <ArrowRight size={18} strokeWidth={3} />
                    </span>
                    <span className="text-(--foreground) font-bold text-base sm:text-lg whitespace-nowrap">
                      {benefit.label}
                    </span>
                  </motion.a>
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
