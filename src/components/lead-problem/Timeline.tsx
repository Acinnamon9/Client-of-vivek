import React from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "../../constants/leadProblemData";
import { Section, Container } from "../ui/Layout";
import InteractiveTilt from "../ui/InteractiveTilt";

/**
 * Timeline Component
 * Visualizes the "Split Reality" between instantaneous AI response and legacy degradation.
 * Pattern: High-impact Bento Grid with a large Hero Win and a vertical failure column.
 * Aesthetic: Technical HUD / Audit Report.
 * Layout: Compacted for better visual balance and information density.
 */
const Timeline: React.FC = () => {
  // Split data into the "Hero" (the win) and the "Degradation" (the losses)
  const heroEvent = timelineEvents[0];
  const lossEvents = timelineEvents.slice(1);

  return (
    <Section
      id="lead-problem-timeline"
      className="bg-(--background) py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Technical Background Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-[grid-size:40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
          }}
        ></div>
      </div>

      <Container className="max-w-7xl relative z-10">
        {/* Header Section: High-Clarity Narrative */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-10 bg-linear-to-r from-transparent to-brand-primary/40"></div>
            <span className="text-[9px] font-black tracking-[0.5em] text-brand-primary uppercase">
              Time-To-Value Analysis
            </span>
            <div className="h-px w-10 bg-linear-to-l from-transparent to-brand-primary/40"></div>
          </motion.div>
          <h3 className="text-4xl md:text-6xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9]">
            The Cost of <br />
            <span className="text-brand-primary italic">Seconds</span>
          </h3>
          <p className="mt-6 text-(--muted-foreground) text-xs md:text-base font-bold max-w-xl mx-auto uppercase tracking-[0.4em] leading-relaxed opacity-80">
            A real-time visual audit of{" "}
            <span className="text-brand-primary">lead spoilage</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative">
          {/* THE OPTIMAL PATH (Hero Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-7 group/hero"
          >
            <InteractiveTilt className="h-full">
              <div className="relative h-full p-px rounded-[36px] bg-linear-to-br from-brand-success/40 via-transparent to-transparent shadow-2xl shadow-brand-success/10">
                <div className="bg-(--card)/90 backdrop-blur-3xl rounded-[34px] p-8 md:p-12 border border-brand-success/30 h-full flex flex-col relative overflow-hidden">
                  {/* HUD Corner Accents ... content stays same ... */}
                  {/* HUD Corner Accents */}
                  <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-brand-success/20"></div>
                  <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-brand-success/20"></div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 relative z-10">
                    <div>
                      <div className="text-7xl md:text-8xl font-black text-brand-success tracking-tighter leading-none mb-3 drop-shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                        {heroEvent.time}
                      </div>
                      <div className="text-lg md:text-2xl font-black text-(--foreground) uppercase tracking-tighter flex items-center gap-3">
                        {heroEvent.event}
                        <span className="h-1 w-1 rounded-full bg-brand-success animate-pulse"></span>
                      </div>
                    </div>
                    <div className="bg-brand-success/10 text-brand-success border border-brand-success/40 px-6 py-2 rounded-xl text-[9px] font-black tracking-[0.4em] uppercase whitespace-nowrap backdrop-blur-md">
                      {heroEvent.result}
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-brand-success/20 mb-8 bg-black/40 group-hover/hero:border-brand-success/60 transition-all duration-700 shadow-xl">
                    <motion.img
                      src={heroEvent.image}
                      alt={heroEvent.event}
                      className="w-full h-full object-cover grayscale group-hover/hero:grayscale-0 group-hover/hero:scale-105 transition-all duration-1000 opacity-80"
                    />
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-success/5 to-transparent h-16 -translate-y-full group-hover/hero:animate-[scan_3s_linear_infinite] pointer-events-none"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-brand-success/30 to-transparent mix-blend-overlay"></div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-linear-to-b from-brand-success to-transparent rounded-full opacity-40"></div>
                      <p className="text-lg md:text-xl text-(--muted-foreground)/90 font-medium leading-relaxed italic">
                        "The only interval that matters. This is where growth is
                        captured or surrendered."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveTilt>
          </motion.div>

          {/* THE DEGRADATION COLUMN */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4 lg:gap-6 relative h-full">
            {/* Visual Trace Line */}
            <div className="absolute left-8 md:left-10 top-16 bottom-16 w-px bg-linear-to-b from-brand-primary/60 via-brand-primary/20 to-transparent hidden sm:block"></div>

            {lossEvents.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 + 0.3 }}
                className="group/item relative flex-1"
              >
                <InteractiveTilt className="h-full">
                  <div className="p-px rounded-[28px] bg-linear-to-r from-brand-primary/20 to-transparent hover:from-brand-primary/40 transition-all duration-700 shadow-lg hover:shadow-brand-primary/5 h-full">
                    <div className="bg-(--card)/70 backdrop-blur-2xl rounded-[26px] p-6 border border-(--border)/50 hover:border-brand-primary/40 transition-all flex flex-col md:flex-row items-center gap-6 h-full relative overflow-hidden">
                      {/* Technical Tick Mark */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-brand-primary/5 rounded-bl-[30px] group-hover:bg-brand-primary/10 transition-colors"></div>

                      {/* Compact Image with Frame */}
                      <div className="relative w-full md:w-48 aspect-3/4 shrink-0 rounded-2xl overflow-hidden border border-(--border)/80 bg-black/40 shadow-inner group-hover:border-brand-primary/30 transition-all">
                        <img
                          src={item.image}
                          alt={item.event}
                          className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-700 opacity-60 group-hover/item:opacity-100"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-primary/20 to-transparent"></div>
                      </div>

                      <div className="flex-1 w-full text-center md:text-left space-y-3">
                        <div className="flex flex-col gap-2">
                          <span className="text-4xl font-black text-brand-primary tracking-tighter leading-none drop-shadow-[0_0_10px_rgba(255,87,34,0.1)]">
                            {item.time}
                          </span>
                          <div className="h-px w-full bg-linear-to-r from-brand-primary/60 to-transparent"></div>
                        </div>

                        <div>
                          <h4 className="text-lg font-black text-(--foreground) uppercase tracking-tight mb-1.5 leading-tight">
                            {item.event}
                          </h4>
                          <div className="inline-block text-[9px] font-black text-brand-primary border border-brand-primary/30 tracking-[0.3em] uppercase bg-brand-primary/10 px-4 py-1.5 rounded-lg backdrop-blur-md">
                            {item.result}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </InteractiveTilt>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,87,34,0.03),transparent_70%)] pointer-events-none"></div>
    </Section>
  );
};

export default Timeline;
