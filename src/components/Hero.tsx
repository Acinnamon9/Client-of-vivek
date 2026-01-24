import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBadgeLines } from "../constants/heroData";
import { trustedLogos } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";

import { containerVariants, itemVariants } from "../animations";

import Typewriter from "./ui/Typewriter";
import { NeuralNetwork } from "../animation-bundle/NeuralNetwork";
import { ConnectionLines } from "../animation-bundle/ConnectionLines";

// Phone components
import { useCallLogic } from "./call-us/useCallLogic";
import PhoneFrame from "./call-us/PhoneFrame";
import CallForm from "./call-us/CallForm";
import CallingAnimation from "./call-us/CallingAnimation";
import SuccessScreen from "./call-us/SuccessScreen";
import SpotlightEffect from "./ui/SpotlightEffect";

/**
 * FEATURE TOGGLES
 */
const HERO_CONFIG = {
    showBadge: true,
    showTrustedBy: true,
};

const Hero: React.FC = () => {
    const [badgeIndex, setBadgeIndex] = useState(0);

    // Phone logic
    const {
        countries,
        countryCode,
        setCountryCode,
        phoneNumber,
        setPhoneNumber,
        name,
        setName,
        email,
        setEmail,
        isCalling,
        isSubmitted,
        errorMsg,
        currentTime,
        loadingText,
        handleCall,
        resetForm,
    } = useCallLogic();

    useEffect(() => {
        const timer = setInterval(() => {
            setBadgeIndex((prev) => (prev + 1) % heroBadgeLines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section
            id="hero"
            className="bg-(--background) min-h-screen flex items-center relative overflow-hidden p-0"
        >
            {/* Background Lines spanning whole section */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <ConnectionLines />
            </div>

            {/* Right-side Blue Backdrop (Edge-to-Edge) - Larger Floating Panel (~85% Height) */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-[38.2%] bg-gradient-to-br from-hero-gradient-from via-hero-gradient-via to-hero-gradient-to rounded-l-[60px] overflow-hidden z-1 shadow-2xl shadow-brand-primary/20">
                <div className="absolute inset-0 pointer-events-none opacity-100">
                    <NeuralNetwork />
                </div>
            </div>

            <Container className="relative z-20 w-full max-w-full lg:max-w-[1400px] px-6 lg:px-12">
                {/* Split Layout Grid - Golden Ratio (61.8% Text : 38.2% Visual) */}
                <div className="grid lg:grid-cols-[61.8%_38.2%] gap-12 lg:gap-0 items-center min-h-screen py-24 lg:py-0">
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left flex flex-col items-center lg:items-start lg:pr-16"
                    >
                        {/* Dynamic Badge */}
                        {HERO_CONFIG.showBadge && (
                            <motion.div
                                variants={itemVariants}
                                className="mb-8 w-full max-w-sm"
                            >
                                <div className="bg-white/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-black/5 shadow-sm flex items-center gap-3 overflow-hidden relative">
                                    <span className="w-2 h-2 bg-brand-depth rounded-full animate-pulse shrink-0"></span>
                                    <div className="relative h-5 flex-1 text-left">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={badgeIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.6, ease: "anticipate" }}
                                                className="absolute inset-0 text-[10px] sm:text-xs font-bold text-brand-depth uppercase tracking-widest whitespace-nowrap"
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
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-(--foreground) mb-8 tracking-tighter"
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
                            className="text-lg sm:text-xl md:text-2xl text-(--muted-foreground) leading-relaxed mb-12 max-w-lg font-medium tracking-tight"
                        >
                            Hundreds of qualified appointments every month —{" "}
                            <span className="text-(--foreground) font-semibold italic">
                                while you sleep.
                            </span>
                        </motion.p>

                        {/* Trusted By Strip */}
                        {HERO_CONFIG.showTrustedBy && (
                            <motion.div variants={itemVariants}>
                                <div className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-[0.3em] mb-4 opacity-60">
                                    Trusted by Forward-Thinking Enterprises
                                </div>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 opacity-40 grayscale hover:opacity-70 transition-opacity duration-500">
                                    {trustedLogos.map((logo, idx) => (
                                        <span key={idx} className="text-lg sm:text-xl font-black text-(--foreground) tracking-tighter">
                                            {logo}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right Column: Phone Interface */}
                    <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-0">
                        {/* Mobile-only blue bg overlay */}
                        <div className="lg:hidden absolute inset-0 -mx-6 bg-gradient-to-br from-hero-gradient-from top-0 bottom-0 to-hero-gradient-to rounded-3xl overflow-hidden z-0">
                        </div>

                        {/* Phone Interface */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateY: -10 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="relative z-10 py-12 lg:py-0"
                        >
                            <PhoneFrame currentTime={currentTime}>
                                <div className="mb-6 text-center">
                                    {!isCalling && (
                                        <>
                                            <SpotlightEffect className="w-14 h-14 bg-brand-primary/5 dark:bg-white/5 rounded-2xl mx-auto flex items-center justify-center mb-3 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),inset_0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-md">
                                                <svg
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-brand-primary relative z-10 drop-shadow-[0_0_10px_rgba(0,194,255,0.3)]"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            </SpotlightEffect>
                                            <h3 className="text-(--foreground) font-medium text-lg tracking-tight">
                                                AI Dialer
                                            </h3>
                                            <p className="text-(--foreground)/40 text-[9px] mt-1 font-normal tracking-wider uppercase">
                                                Try it now — Enter your number
                                            </p>
                                        </>
                                    )}
                                </div>

                                <AnimatePresence mode="wait">
                                    {isCalling ? (
                                        <CallingAnimation loadingText={loadingText} />
                                    ) : !isSubmitted ? (
                                        <CallForm
                                            countries={countries}
                                            name={name}
                                            setName={setName}
                                            email={email}
                                            setEmail={setEmail}
                                            countryCode={countryCode}
                                            setCountryCode={setCountryCode}
                                            phoneNumber={phoneNumber}
                                            setPhoneNumber={setPhoneNumber}
                                            errorMsg={errorMsg}
                                            isCalling={isCalling}
                                            onSubmit={handleCall}
                                        />
                                    ) : (
                                        <SuccessScreen
                                            countryCode={countryCode}
                                            phoneNumber={phoneNumber}
                                            onDismiss={resetForm}
                                        />
                                    )}
                                </AnimatePresence>
                            </PhoneFrame>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
