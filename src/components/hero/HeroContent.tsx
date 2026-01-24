import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../ui/Typewriter";
import { itemVariants } from "../../animations";
import { trustedLogos } from "../../constants/proofData";

interface HeroContentProps {
    showTrustedBy?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ showTrustedBy = true }) => {
    return (
        <>
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
            {showTrustedBy && (
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
        </>
    );
};

export default HeroContent;
