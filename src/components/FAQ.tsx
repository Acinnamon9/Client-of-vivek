import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { motion, AnimatePresence } from "framer-motion";
import FAQItem from "./faq/FAQItem";
import FAQHeader from "./faq/FAQHeader";
import { faqCategories } from "../constants/faqData";
import { cn } from "../lib/utils";

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);

  const activeCategory =
    faqCategories.find((cat) => cat.id === activeTab) || faqCategories[0];

  return (
    <Section id="faq" className="font-jakarta py-24 md:py-32">
      <Container>
        <FAQHeader />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-16 max-w-6xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            <div className="mb-6 px-4">
              <span className="text-[10px] font-black text-brand-link uppercase tracking-[0.3em] opacity-80">
                Operational Pillars
              </span>
            </div>

            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-2 pb-4 lg:pb-0">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={cn(
                    "relative text-left px-5 py-4 rounded-xl transition-all duration-500 whitespace-nowrap lg:whitespace-normal group",
                    activeTab === category.id
                      ? "bg-brand-link/10 border border-brand-link/20"
                      : "hover:bg-brand-link/5 border border-transparent hover:border-brand-link/10",
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className={cn(
                        "text-[12px] font-bold tracking-tighter transition-colors duration-300",
                        activeTab === category.id
                          ? "text-brand-link"
                          : "text-(--muted-foreground)",
                      )}
                    >
                      {category.category}
                    </span>
                    <span
                      className={cn(
                        "text-[9px] font-black uppercase tracking-widest transition-opacity duration-300",
                        activeTab === category.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-40",
                      )}
                    >
                      {category.items.length} Intelligence Points
                    </span>
                  </div>

                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-brand-link hidden lg:block rounded-r-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Intelligence Pane */}
          <div className="lg:w-2/3 flex flex-col min-h-[500px]">
            <div className="mb-6 px-4 flex items-center justify-between border-b border-(--border)/30 pb-4">
              <h3 className="text-xl font-black text-(--foreground) uppercase tracking-tighter">
                {activeCategory.category.split(" / ")[1]}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-link animate-pulse" />
                <span className="text-[10px] font-black uppercase text-brand-link tracking-widest">
                  Live Sync
                </span>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="flex flex-col">
                    {activeCategory.items.map((item, idx) => (
                      <FAQItem key={idx} question={item.q}>
                        {item.a}
                      </FAQItem>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Global Footer Card - Commented Out
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden bg-brand-link/5 backdrop-blur-2xl border border-brand-link/20 rounded-[32px] p-12 text-center group">
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-(--foreground) uppercase mb-4 tracking-tighter">
                Still Processing?
              </h2>
              <p className="text-(--muted-foreground) mb-10 max-w-md mx-auto font-medium">
                Our strategic engineers are ready to build a custom
                implementation plan for your specific operational scale.
              </p>
              <button
                onClick={() =>
                  window.open("https://atomicx.ravan.ai/book", "_blank")
                }
                className="inline-flex items-center gap-3 bg-brand-link hover:bg-brand-link/90 text-black px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-brand-link/20 scale-100 hover:scale-105"
              >
                Schedule Strategic Setup
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
        */}
      </Container>
    </Section>
  );
};

export default FAQ;
