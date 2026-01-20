import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import BackgroundDecor from "./lead-problem/BackgroundDecor";
import ProblemIntro from "./lead-problem/ProblemIntro";
import AuditTable from "./lead-problem/AuditTable";

/**
 * LeadProblem Orchestrator
 * High-level section that visualizes the "System Failure" of legacy lead management.
 * Layout: Full-width master header followed by a 2-column technical audit grid.
 */
const LeadProblem: React.FC = () => {
  return (
    <Section className="bg-(--background) relative overflow-hidden font-jakarta flex items-center py-24 sm:py-32">
      <BackgroundDecor />

      <Container className="relative z-10 w-full max-w-screen-2xl px-8 lg:px-12">
        {/* Section Header - Promoted to top-level to dominate the section */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-brand-action/5 border border-brand-action/20 rounded-lg w-fit mb-10 backdrop-blur-sm"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-action opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-action shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
            </div>
            <span className="text-[11px] font-black tracking-[0.3em] text-brand-action uppercase">
              System Critical: Leak Detected
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl sm:text-8xl lg:text-9xl xl:text-[11rem] font-black leading-[0.8] tracking-[calc(-0.06em)] uppercase overflow-visible"
          >
            <span className="text-(--muted-foreground)/30 block mb-4">
              You're
            </span>
            <span className="text-(--foreground) block">Bleeding</span>
            <span className="bg-linear-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent italic block pb-4">
              Appointments
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start">
          <ProblemIntro />
          <AuditTable />
        </div>
      </Container>
    </Section>
  );
};

export default LeadProblem;
