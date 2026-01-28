import React from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "../../constants/leadProblemData";
import { Section, Container } from "../ui/Layout";
import InteractiveTilt from "../ui/InteractiveTilt";
import BackgroundDecor from "./BackgroundDecor";

/**
 * Timeline Component
 * A high-end visual audit of lead spoilage.
 * Structure:
 * 1. "Instant Win" Hero Section (Top)
 * 2. "Degradation Pipeline" (Bottom) - showing the decay of value over time.
 * Layout: Balanced Compact + Square Images
 */
const JourneyTimeline: React.FC = () => {
  const heroEvent = timelineEvents[0];
  const lossEvents = timelineEvents.slice(1);

  return (
    <Section
      id="journey-timeline"
      className="bg-transparent py-20 md:py-28 relative overflow-hidden"
    >
      <BackgroundDecor />

      <Container className="max-w-[1400px] relative z-10 px-6">
        {/* Header: Clinical Audit Style - Balanced */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-4 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.25em] text-brand-primary uppercase">
              Time-To-Value Analysis
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9]"
          >
            The Cost of <br />
            <span className="text-brand-primary/90">Seconds</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 relative items-stretch">
          {/* 1. THE INSTANT WIN (Hero Card) - Takes Left/Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="xl:col-span-7 h-full min-h-[400px]"
          >
            <InteractiveTilt className="h-full">
              <div className="group relative w-full h-full p-px rounded-[32px] bg-linear-to-b from-brand-success/40 to-brand-success/5 overflow-hidden shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)]">
                <div className="relative bg-(--card)/80 backdrop-blur-xl rounded-[31px] p-8 md:p-10 h-full flex flex-col md:flex-row gap-8 items-center overflow-hidden">
                  {/* Left: Text Content */}
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className="inline-flex justify-center md:justify-start items-center gap-2 px-3 py-1 rounded-lg bg-brand-success/10 border border-brand-success/20 text-brand-success text-[10px] font-black tracking-widest uppercase">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Optimal Outcome
                    </div>

                    <div>
                      <div className="text-7xl md:text-8xl font-black text-brand-success tracking-tighter leading-none mb-2 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        {heroEvent.time}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-(--foreground) tracking-tight">
                        {heroEvent.event}
                      </h4>
                    </div>

                    <p className="text-base md:text-lg text-(--muted-foreground) leading-relaxed md:border-l-2 md:border-brand-success/30 md:pl-4">
                      <span className="text-brand-success font-bold block text-xs uppercase tracking-wider mb-1">
                        Result: {heroEvent.result}
                      </span>
                      Capture interest at the absolute peak of intent.
                    </p>
                  </div>

                  {/* Right: Square Image */}
                  <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0 rounded-2xl overflow-hidden border border-brand-success/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                    <img
                      src={heroEvent.image}
                      alt="Instant Response"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-success/30 to-transparent mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-success/50 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-[scan_3s_linear_infinite]"></div>
                  </div>
                </div>
              </div>
            </InteractiveTilt>
          </motion.div>

          {/* 2. THE DEGRADATION PIPELINE (Loss Events) - Takes Right/Bottom */}
          <div className="xl:col-span-5 flex flex-col justify-between gap-4 relative">
            {/* Connector Line */}
            <div className="absolute left-[35px] top-6 bottom-6 w-0.5 bg-linear-to-b from-brand-success/20 via-brand-primary/20 to-red-500/20 hidden xl:block"></div>

            {lossEvents.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.2 }}
                className="relative group w-full flex-1"
              >
                <div className="flex items-center gap-6 bg-(--card)/40 hover:bg-(--card)/60 p-4 rounded-2xl border border-transparent hover:border-red-500/20 transition-all duration-300 h-full">
                  {/* Timeline Node */}
                  <div className="w-3 h-3 rounded-full bg-(--background) border-2 border-(--muted-foreground) group-hover:border-red-500 shrink-0 relative z-10 hidden xl:block translate-x-[26px] mr-8"></div>

                  {/* Compact Card Content */}
                  <div className="flex gap-5 items-center w-full">
                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-(--border) relative grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                      <img
                        src={item.image}
                        alt={item.event}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-black text-(--foreground)/60 group-hover:text-red-500/90 transition-colors tracking-tighter leading-none">
                          {item.time}
                        </span>
                        <span className="text-[10px] font-black text-red-500/80 uppercase tracking-wider bg-red-500/5 px-2 py-0.5 rounded-md border border-red-500/10">
                          {item.result}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-(--foreground) leading-tight truncate">
                        {item.event}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* The Warning Footer */}
            <div className="mt-2 pl-4 lg:pl-12 relative opacity-60">
              <p className="text-[9px] uppercase tracking-wide text-(--muted-foreground) font-medium text-center xl:text-left">
                * By 24h, conversion probability ≈ 0%.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default JourneyTimeline;
