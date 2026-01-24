import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBadgeLines } from "../../constants/heroData";
import { itemVariants } from "../../animations";

const HeroBadge: React.FC = () => {
    const [badgeIndex, setBadgeIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBadgeIndex((prev) => (prev + 1) % heroBadgeLines.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
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
    );
};

export default HeroBadge;
