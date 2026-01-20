import React from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "../../constants/leadProblemData";
import { cn } from "../../lib/utils";
import { Section, Container } from "../ui/Layout";

/**
 * Timeline Component
 * Visualizes the degradation of leads over time in legacy systems.
 * Pattern: Horizontal progression inside a technical glass module.
 */
const Timeline: React.FC = () => {
  return (
    <Section
      id="lead-problem-timeline"
      className="bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      <Container className="max-w-screen-2xl">
        {/* Main Progression Module */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative p-1 rounded-[40px] bg-linear-to-br from-brand-primary/10 via-transparent to-brand-accent/10 shadow-3xl"
        >
          <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[38px] p-12 sm:p-20 relative overflow-hidden border border-(--border)">
            {/* Background technical atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,87,34,0.05),transparent_60%)]"></div>

            <h3 className="text-3xl sm:text-5xl font-black text-(--foreground) text-center mb-20 relative z-10 uppercase tracking-tighter leading-none">
              The Cost of{" "}
              <span className="text-brand-primary italic">Seconds</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {timelineEvents.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center group/item"
                >
                  {/* Quantitative Marker */}
                  <div className="text-6xl font-black text-brand-primary mb-6 transition-transform group-hover/item:scale-110 duration-700 tracking-tighter">
                    {item.time}
                  </div>

                  {/* Event Descriptor */}
                  <div className="text-xl font-black text-(--foreground) mb-4 uppercase tracking-tight">
                    {item.event}
                  </div>

                  {/* Status Badge */}
                  <div
                    className={cn(
                      "font-black px-5 py-2 rounded-lg inline-block text-[10px] tracking-[0.2em] uppercase transition-all duration-500",
                      item.type === "won"
                        ? "bg-brand-success/10 text-brand-success border border-brand-success/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                        : "bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-[0_0_15px_rgba(255,87,34,0.1)]",
                    )}
                  >
                    {item.result}
                  </div>

                  {/* Connecting Line (Desktop) */}
                  {idx < timelineEvents.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-6 w-12 h-px bg-linear-to-r from-brand-primary/30 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Timeline;
