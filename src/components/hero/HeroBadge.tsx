import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroBadgeLines } from "../../constants/heroData";
import { itemVariants } from "../../animations";
import Badge from "../ui/Badge";

const HeroBadge: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % heroBadgeLines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div variants={itemVariants} className="mb-6 lg:mb-8">
      <a
        href="https://atomicx.ravan.ai/book"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group focus:outline-none"
      >
        <Badge
          variant="glass"
          size="md"
          className="pl-3 pr-5 py-2 flex items-center gap-3 overflow-hidden backdrop-blur-xl border-white/10 shadow-lg group-hover:border-white/30 transition-colors"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0"></span>
            <span className="absolute w-2 h-2 bg-brand-orange rounded-full animate-ping opacity-75"></span>
          </div>

          <div className="flex-1 text-left py-0.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={badgeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[10px] sm:text-[11px] font-bold text-(--foreground)/80 uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {heroBadgeLines[badgeIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </Badge>
      </a>
    </motion.div>
  );
};

export default HeroBadge;
