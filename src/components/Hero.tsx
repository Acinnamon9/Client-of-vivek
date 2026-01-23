import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroStats, heroBenefits, heroBadgeLines } from "../constants/heroData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";
import { Card } from "./ui/Card";
import AnimatedNumber from "./ui/AnimatedNumber";
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
  showStats: false, // Set to true to show Leads Generated / Qualified Leads
  showBenefits: true,
  showVisualAssets: true, // The Woman and Guy images
};

const Hero: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const moveX1 = useTransform(springX, [0, window.innerWidth], [-20, 20]);
  const moveY1 = useTransform(springY, [0, window.innerHeight], [-20, 20]);
  const moveX2 = useTransform(springX, [0, window.innerWidth], [20, -20]);
  const moveY2 = useTransform(springY, [0, window.innerHeight], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
      {/* Visual Assets (Sliding Up) */}
      {HERO_CONFIG.showVisualAssets && (
        <>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ x: moveX1, y: moveY1 }}
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
            style={{ x: moveX2, y: moveY2 }}
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

      {/* Neural Network Decoration */}
      <div className="absolute inset-0 z-0 neural-network-bg pointer-events-none">
        <NeuralNetwork
          dotColor="#0081A7"
          lineColor="#0081A7"
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
              cursorColor="#0081A7"
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
            <Magnetic>
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
            </Magnetic>
            <Tooltip content="Try our AI bot from within this page">
              <Magnetic>
                <Button
                  as="a"
                  href="#demo"
                  variant="glass"
                  size="xl"
                  className="px-12"
                >
                  Try Now
                </Button>
              </Magnetic>
            </Tooltip>
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
