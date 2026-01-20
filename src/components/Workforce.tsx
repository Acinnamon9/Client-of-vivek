import React from "react";
import { motion } from "framer-motion";
import { workforceRoles } from "../constants/workforceData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";
import RoleCard from "./workforce/RoleCard";

/**
 * Workforce Component
 * Presents the AI Workforce as a high-end command center.
 */
const Workforce: React.FC = () => {
  return (
    <Section
      id="workforce"
      className="font-jakarta bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Precision Grid Background */}
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
        {/* Header Section: Technical Identification */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-linear-to-r from-transparent to-brand-primary/40"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-brand-primary uppercase">
              Operational Fleet
            </span>
            <div className="h-px w-10 bg-linear-to-l from-transparent to-brand-primary/40"></div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9] mb-8">
            Your 24/7 <br />
            <span className="text-brand-primary italic">AI Salesforce</span>
          </h2>

          <p className="text-lg md:text-xl text-(--muted-foreground) leading-relaxed font-medium max-w-2xl mx-auto">
            De-risk your growth by replacing manual overhead with
            <span className="text-white">
              {" "}
              precision-engineered digital agents
            </span>{" "}
            that never sleep, never miss a lead, and never underperform.
          </p>
        </div>

        {/* Workforce Dossiers Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 mb-24">
          {workforceRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <RoleCard role={role} />
            </motion.div>
          ))}
        </div>

        {/* Global Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="xl"
              className="px-12 md:px-20 h-16 md:h-20 text-lg md:text-xl font-black tracking-widest rounded-2xl shadow-2xl shadow-brand-primary/20"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              DEPLOY YOUR AI FORWARD FLEET
            </Button>
            <p className="mt-8 text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.4em] opacity-50">
              Initial setup completed in under 72 hours
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Atmospheric Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,87,34,0.03),transparent_70%)] pointer-events-none"></div>
    </Section>
  );
};

export default Workforce;
