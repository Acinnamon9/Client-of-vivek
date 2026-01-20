import React from "react";
import { motion } from "framer-motion";

/**
 * ProblemIntro: The narrative "Hook" for the LeadProblem section.
 * This component handles the supporting story following the master header.
 * Primary focus: High-impact glassmorphism and lean, high-clarity copy.
 */
const ProblemIntro: React.FC = () => {
  return (
    <div className="flex flex-col justify-center max-w-full">
      {/* 
        1. THE VERDICT CARD
        Displays the primary "Climax Metric" (145x) in a high-end glass container.
        Pattern: Dual-layer glass. Outer container provides the iridescent border gradient, 
        inner container handles the blur and card background.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="group relative p-1 rounded-[32px] bg-linear-to-br from-brand-primary/20 via-transparent to-brand-accent/20 max-w-xl shadow-2xl shadow-black/10 hover:shadow-brand-primary/10 transition-all duration-700 mb-12"
      >
        <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[30px] p-8 md:p-10 relative overflow-hidden border border-(--border)">
          {/* Internal Glow Accents: Adds depth to the glass effect without impacting readability */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-accent/5 blur-2xl rounded-full"></div>

          {/* HUD Header: Reinforces the "Technical Audit" theme with a scan-line and tracking-heavy typography */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-linear-to-r from-brand-primary/40 to-transparent"></div>
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] whitespace-nowrap">
              Final Efficiency Verdict
            </p>
          </div>

          {/* Metric Presentation: High-contrast typography with italic brand gradient for the hero number */}
          <p className="text-3xl md:text-4xl text-(--foreground) font-black tracking-tighter leading-tight relative z-10">
            You are paying <br className="hidden md:block" />
            <span className="text-5xl md:text-6xl bg-linear-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              145x more
            </span>
            <br /> per scheduled meeting.
          </p>

          {/* Trust Indicators: Subtle "App Status" style badges to signify data integrity */}
          <div className="mt-8 flex items-center gap-4 text-[10px] font-bold text-(--muted-foreground) uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
              Calculated Real-Time
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-success"></span>
              Verified Baseline
            </span>
          </div>
        </div>
      </motion.div>

      {/* 
        2. LEAN NARRATIVE
        Provides the 'Why' behind the numbers.
        Styling: Left-border accent tie-in with brand colors and high-contrast bolding for emphasis terms.
      */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-(--muted-foreground) leading-relaxed max-w-xl font-medium tracking-tight border-l-2 border-brand-primary/20 pl-6"
      >
        Every second is a $1,000 mistake. Your current legacy system is an
        <span className="text-(--foreground) font-bold"> efficiency sieve</span>
        , evaporating growth through the cracks of human failure.
      </motion.p>
    </div>
  );
};

export default ProblemIntro;
