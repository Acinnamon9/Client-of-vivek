import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Section, Container } from "../ui/Layout";

/**
 * LeadProblem CTA Component
 * The final conversion point for the problem section.
 * Re-framed with a technical 'System Rescue' aesthetic using high-end glassmorphism.
 */
const CTA: React.FC = () => {
  return (
    <Section
      id="lead-problem-cta"
      className="bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      <Container className="max-w-[1000px]">
        {/* Cinematic outer glow for the CTA block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative p-1 rounded-[40px] bg-linear-to-br from-brand-primary/20 via-transparent to-brand-accent/20 shadow-2xl shadow-black/10"
        >
          <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[38px] p-12 sm:p-20 text-center relative overflow-hidden border border-(--border)">
            {/* Background technical accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.05),transparent)]"></div>

            <div className="relative z-10">
              <h3 className="text-4xl sm:text-6xl font-black text-(--foreground) mb-8 tracking-tighter uppercase leading-[0.9]">
                Stop the Leak.
                <br />
                <span className="bg-linear-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent italic">
                  Start the Flow.
                </span>
              </h3>

              <p className="text-xl sm:text-2xl text-(--muted-foreground) mb-12 leading-relaxed max-w-2xl mx-auto font-medium tracking-tight">
                You're paying{" "}
                <strong className="text-(--foreground) font-black underline decoration-brand-primary/40 decoration-4 underline-offset-4">
                  4.3x more
                </strong>{" "}
                per appointment. Plus missing{" "}
                <strong className="text-(--foreground) font-black">
                  3x the leads
                </strong>
                . Let's fix that in 48 hours.
              </p>

              <Button
                size="xl"
                className="px-12 hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20"
                onClick={() =>
                  window.open("https://atomicx.ravan.ai/book", "_blank")
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="mr-3"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Your Free Demo
              </Button>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-(--muted-foreground) font-black uppercase text-[10px] tracking-[0.3em]">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-success shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                  Live AI Demo
                </span>
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(255,87,34,0.5)]"></span>
                  Custom ROI Audit
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTA;
