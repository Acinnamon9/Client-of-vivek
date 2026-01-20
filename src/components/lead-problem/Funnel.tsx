import React from "react";
import { motion } from "framer-motion";
import { manualFunnel, aiFunnel } from "../../constants/leadProblemData";
import { Section, Container } from "../ui/Layout";

/**
 * Funnel Component
 * Comparison between the manual 'Leaky' funnel and the 'Automated' AI engine.
 * Features: High-end glass containers and shimmering stage modules.
 */
const Funnel: React.FC = () => {
  const handleRedirect = () => {
    window.open("https://atomicx.ravan.ai/book", "_blank");
  };

  return (
    <Section
      id="lead-problem-funnel"
      className="bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      <Container className="max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          {/* 1. CURRENT SYSTEM: Manual & Leaky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={handleRedirect}
            className="group relative p-1 rounded-[48px] bg-linear-to-br from-brand-action/20 via-transparent to-transparent cursor-pointer transition-all duration-700 hover:shadow-2xl"
          >
            <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[46px] p-12 border border-(--border) flex flex-col items-center">
              <div className="text-center mb-16">
                <span className="text-[10px] font-black text-brand-action opacity-60 uppercase tracking-[0.4em]">
                  Your Current System
                </span>
                <h3 className="text-3xl font-black text-(--foreground) mt-4 uppercase tracking-tighter">
                  Manual & Leaky
                </h3>
              </div>

              <div className="w-full flex flex-col items-center gap-4">
                {manualFunnel.map((stage, i) => (
                  <div
                    key={i}
                    className="w-full relative group/stage transition-transform duration-500 hover:scale-[1.02]"
                    style={{ maxWidth: `${100 - i * 12}%` }}
                  >
                    <div className="h-20 lg:h-24 bg-linear-to-r from-brand-action/40 to-brand-action/60 rounded-2xl flex items-center justify-center relative overflow-hidden border border-brand-action/20 px-8">
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/stage:opacity-100 transition-opacity" />
                      <span className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter relative z-10 text-center leading-none">
                        {stage.text}
                      </span>
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.2em] block transform transition-all group-hover/stage:text-brand-action">
                        {stage.subText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. AI SYSTEM: Automated Engine */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={handleRedirect}
            className="group relative p-1 rounded-[48px] bg-linear-to-br from-brand-success/20 via-transparent to-transparent cursor-pointer transition-all duration-700 hover:shadow-2xl shadow-brand-success/5"
          >
            <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[46px] p-12 border border-(--border) flex flex-col items-center">
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-brand-success/10 border border-brand-success/20 rounded-full text-[10px] font-black text-brand-success tracking-[0.3em] uppercase mb-4">
                  AI POWERED
                </div>
                <h3 className="text-3xl font-black text-(--foreground) uppercase tracking-tighter">
                  Automated Engine
                </h3>
              </div>

              <div className="w-full flex flex-col items-center gap-4">
                {aiFunnel.map((stage, i) => (
                  <div
                    key={i}
                    className="w-full relative group/stage transition-transform duration-500 hover:scale-[1.03]"
                    style={{ maxWidth: `${100 - i * 12}%` }}
                  >
                    <div className="h-20 lg:h-24 bg-linear-to-r from-brand-success/40 to-brand-success/60 rounded-2xl flex items-center justify-center relative overflow-hidden px-8 shadow-2xl shadow-brand-success/10 border border-brand-success/20">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine pointer-events-none" />
                      <span className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter relative z-10 text-center leading-none">
                        {stage.text}
                      </span>
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-[10px] font-black text-brand-success uppercase tracking-[0.2em] block transform transition-all group-hover/stage:scale-110">
                        {stage.subText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Funnel;
