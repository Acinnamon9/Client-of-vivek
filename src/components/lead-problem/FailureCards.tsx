import React from "react";
import { motion } from "framer-motion";
import { failureCards } from "../../constants/leadProblemData";
import { Section, Container } from "../ui/Layout";

/**
 * FailureCards Component
 * Visualizes specific system failure points (Lead Spoilage, Speed to Lead, etc.).
 * Pattern: Triple-grid of technical modular glass cards.
 */
const FailureCards: React.FC = () => {
  return (
    <Section
      id="lead-problem-failure"
      className="bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      <Container className="max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {failureCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-1 rounded-[40px] bg-linear-to-br from-brand-primary/10 via-transparent to-transparent hover:from-brand-primary/20 transition-all duration-700 hover:shadow-2xl shadow-black/5"
            >
              <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[38px] p-10 text-center relative overflow-hidden border border-(--border) h-full flex flex-col items-center">
                {/* 1. Technical Icon Slot */}
                <div className="w-20 h-20 mb-8 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-xl shadow-brand-primary/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {React.cloneElement(card.icon as React.ReactElement, {
                    size: 32,
                    strokeWidth: 2.5,
                  })}
                </div>

                {/* 2. Content Hierarchy */}
                <h4 className="text-2xl font-black text-(--foreground) mb-4 uppercase tracking-tighter">
                  {card.title}
                </h4>
                <p className="text-(--muted-foreground) font-medium leading-relaxed mb-10 text-sm tracking-tight grow px-2">
                  {card.desc}
                </p>

                {/* 3. The Quantitative Punchline */}
                <div className="mt-auto pt-8 border-t border-(--border) w-full">
                  <div className="text-5xl font-black text-brand-primary mb-2 tracking-tighter">
                    {card.metric}
                  </div>
                  <div className="text-[10px] font-black text-brand-primary/60 tracking-[0.34em] uppercase">
                    {card.label}
                  </div>
                </div>

                {/* Internal Decorative element */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-primary/5 blur-2xl rounded-full group-hover:bg-brand-primary/10 transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FailureCards;
