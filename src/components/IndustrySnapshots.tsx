import React, { useState } from "react";
import { industries, type Industry } from "../constants/industryData";
import { Section, Container } from "./ui/Layout";
import SectorCard from "./industry/SectorCard";
import CenterCard from "./industry/CenterCard";
import IndustryHeader from "./industry/IndustryHeader";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { cn } from "../lib/utils";

const IndustrySnapshots: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<Industry | null>(null);

  return (
    <Section
      id="industry"
      className="font-jakarta py-16 md:py-20 overflow-hidden"
    >
      <Container>
        <IndustryHeader />

        <div className="flex flex-col gap-12">
          {/* Grid Suite with Integrated CenterCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AnimatePresence mode="popLayout">
              {/* First Industry */}
              <motion.div
                key={industries[0].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4 }}
              >
                <SectorCard
                  industry={industries[0]}
                  onHover={setHoveredIndustry}
                />
              </motion.div>

              {/* Universal Core Anchor (Always Visible as 2nd Card) */}
              <motion.div
                key="universal-core"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                layout
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <CenterCard hoveredIndustry={hoveredIndustry} />
              </motion.div>

              {/* Remaining Industries */}
              {(isExpanded ? industries.slice(1) : industries.slice(1, 2)).map(
                (ind, idx) => (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                      y: 10,
                      transition: { duration: 0.2 },
                    }}
                    transition={{
                      duration: 0.4,
                      delay: isExpanded ? (idx + 2) * 0.05 : 0.1,
                    }}
                    layout
                  >
                    <SectorCard industry={ind} onHover={setHoveredIndustry} />
                  </motion.div>
                ),
              )}
            </AnimatePresence>
          </div>

          {/* Expand Controller */}
          <motion.div layout className="flex justify-center">
            <Button
              variant="glass"
              onClick={() => {
                if (isExpanded) {
                  document
                    .getElementById("industry")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                setIsExpanded(!isExpanded);
              }}
              className="group px-10 py-4 rounded-full border-brand-link/20 hover:border-brand-link/50 text-[11px] font-black tracking-[0.2em] uppercase transition-all bg-brand-link/5"
            >
              <span className="flex items-center gap-4">
                {isExpanded
                  ? "Close Full Suite"
                  : "Unlock Sector Intelligence Suite"}
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-500",
                    isExpanded ? "rotate-180" : "group-hover:translate-y-0.5",
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default IndustrySnapshots;
