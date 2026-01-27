import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants, itemVariants } from "../animations";
import { heroBadgeLines } from "../constants/heroData";
import NeuralNetworkCanvas from "./ui/NeuralNetworkCanvas";
import Typewriter from "./ui/Typewriter";
import Button from "./ui/Button";
import Tooltip from "./ui/Tooltip";
import { heroBenefits } from "../constants/heroData";
import { ArrowRight } from "lucide-react";

/**
 * FEATURE TOGGLES
 */
const HERO_CONFIG = {
    showBadge: true,
    showBenefits: true,
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
            {/* Neural Network Decoration (Canvas) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <NeuralNetworkCanvas
                    dotColor="#00c2ff"
                    lineColor="#00c2ff"
                    className="w-full h-full opacity-40 dark:opacity-20"
                />
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-link/2 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <Container className="relative z-10 w-full max-w-full lg:max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">
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
                            cursorColor="#00c2ff"
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
                            <Button
                                as="a"
                                href="#demo"
                                variant="glass"
                                size="xl"
                                className="px-12"
                            >
                                Try Now
                            </Button>
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
