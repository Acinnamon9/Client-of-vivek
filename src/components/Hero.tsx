import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { heroStats, heroBenefits, heroBadgeLines } from "../constants/heroData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card } from "./ui/Card";
import { cn } from "../lib/utils";

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericMatch = value.match(/(\d+)/);
  const suffixMatch = value.match(/([^\d].*)/);

  const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(
    spring,
    (latest) => Math.floor(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (isInView) {
      spring.set(targetValue);
    }
  }, [isInView, spring, targetValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Hero: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % heroBadgeLines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section className="bg-linear-to-b from-[#faf8f5] to-[#f5ede5] min-h-[90vh] flex items-center relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
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
          <motion.div variants={itemVariants} className="mb-10 w-full max-w-md">
            <div className="bg-white px-6 py-3 rounded-full border border-brand-primary/20 shadow-xl shadow-brand-primary/5 flex items-center gap-4 overflow-hidden relative">
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

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] text-brand-dark mb-10 tracking-tighter"
          >
            Deploy a Full AI Sales & Marketing Team That Books
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent relative inline-block mx-2">
              300-500 Qualified Appointments
              <span
                className="absolute bottom-2 left-0 w-full h-1.5 bg-brand-primary/20 rounded-full scale-x-0 animate-expand-underline origin-left"
                style={{ animationDelay: "0.8s" }}
              ></span>
            </span>
            Every Month — On Autopilot
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-[#475569] leading-relaxed mb-12 max-w-3xl font-medium"
          >
            <strong className="text-brand-dark font-black">
              Never miss another lead.
            </strong>{" "}
            Your AI team calls within
            <span className="text-brand-dark font-black bg-brand-primary/10 px-2 py-0.5 rounded-lg mx-1">
              3 minutes
            </span>
            , follows up{" "}
            <span className="text-brand-dark font-black bg-brand-primary/10 px-2 py-0.5 rounded-lg mx-1">
              12+ times
            </span>
            , and books appointments{" "}
            <span className="text-brand-dark font-black bg-brand-primary/10 px-2 py-0.5 rounded-lg mx-1">
              while you sleep
            </span>
            .
          </motion.p>

          {/* Stats Grid */}
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

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16 w-full sm:w-auto"
          >
            <Button
              size="xl"
              className="px-12 shadow-2xl shadow-brand-primary/30"
              onClick={() =>
                window.open("https://myteam.ravan.ai/book", "_blank")
              }
            >
              Enterprise Demo
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="px-12 bg-white/50 backdrop-blur-sm border-black/10 text-brand-dark"
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* Benefits List */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl">
            <div className="flex flex-col gap-4">
              {heroBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-5 bg-white/40 backdrop-blur-md rounded-2xl border border-black/3 transition-all hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 group"
                >
                  <span className="w-7 h-7 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-black shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span className="text-[#64748b] font-bold text-base sm:text-lg text-left">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
