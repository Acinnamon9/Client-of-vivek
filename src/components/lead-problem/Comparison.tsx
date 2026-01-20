import React from "react";
import { motion } from "framer-motion";
import { mathComparison } from "../../constants/leadProblemData";
import { Section, Container } from "../ui/Layout";
import { cn } from "../../lib/utils";

/**
 * Comparison Component (Legacy Reference / Alternative Layout)
 * Visualizes the Current vs AI system comparison as a dual-card breakdown.
 * Styled with the same premium glassmorphism as the Verdict and Audit blocks.
 */
const Comparison: React.FC = () => {
  return (
    <Section
      id="lead-problem-comparison"
      className="bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      <Container className="max-w-screen-2xl">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--foreground) tracking-tighter uppercase mb-6">
            The Brutal Math
          </h3>
          <p className="text-xl text-(--muted-foreground) max-w-2xl mx-auto font-medium">
            Side-by-side efficiency audit of your legacy infrastructure vs. the
            AI System.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">
          {mathComparison.map((sys, idx) => {
            const isAI = sys.id === "ai";

            return (
              <React.Fragment key={sys.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={cn(
                    "group relative p-1 rounded-[40px] transition-all duration-700",
                    isAI
                      ? "bg-linear-to-br from-brand-success/20 via-transparent to-brand-success/5 shadow-brand-success/5"
                      : "bg-linear-to-br from-brand-primary/20 via-transparent to-brand-primary/5 shadow-brand-primary/5",
                    "hover:shadow-2xl",
                  )}
                >
                  <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[38px] p-10 md:p-12 border border-(--border) relative overflow-hidden">
                    {/* Background technical glow */}
                    <div
                      className={cn(
                        "absolute top-0 right-0 w-48 h-48 blur-[100px] rounded-full opacity-10",
                        isAI ? "bg-brand-success" : "bg-brand-primary",
                      )}
                    ></div>

                    {/* Component Header */}
                    <div className="flex items-center gap-3 mb-10">
                      <div
                        className={cn(
                          "h-px flex-1 bg-linear-to-r to-transparent",
                          isAI
                            ? "from-brand-success/40"
                            : "from-brand-primary/40",
                        )}
                      ></div>
                      <span
                        className={cn(
                          "text-xs font-black uppercase tracking-[0.4em] whitespace-nowrap",
                          isAI ? "text-brand-success" : "text-brand-primary",
                        )}
                      >
                        {sys.title}
                      </span>
                    </div>

                    {/* Stats List */}
                    <div className="space-y-8">
                      {sys.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-end pb-4 border-b border-(--border)/50 last:border-0 last:pb-0"
                        >
                          <span className="text-sm font-bold text-(--muted-foreground) uppercase tracking-wide">
                            {stat.label}
                          </span>
                          <span className="text-2xl font-black text-(--foreground) tracking-tight">
                            {stat.value}
                          </span>
                        </div>
                      ))}

                      {/* Final Result / Cost Per Show */}
                      <div
                        className={cn(
                          "mt-10 p-8 rounded-3xl border transition-all duration-500",
                          isAI
                            ? "bg-brand-success/5 border-brand-success/20 group-hover:bg-brand-success/10"
                            : "bg-brand-primary/5 border-brand-primary/20 group-hover:bg-brand-primary/10",
                        )}
                      >
                        <p className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.3em] mb-4">
                          Cost Per Show
                        </p>
                        <p
                          className={cn(
                            "text-5xl md:text-6xl font-black tracking-tighter",
                            isAI ? "text-brand-success" : "text-brand-primary",
                          )}
                        >
                          {sys.costPerShow}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {idx === 0 && (
                  <div className="flex flex-row lg:flex-col items-center gap-4 justify-center">
                    <div className="h-px lg:w-px lg:h-24 bg-linear-to-b from-transparent via-(--border) to-transparent flex-1"></div>
                    <div className="w-14 h-14 rounded-full border border-(--border) bg-(--card) flex items-center justify-center text-xs font-black text-(--muted-foreground) shadow-xl relative z-10 backdrop-blur-md">
                      VS
                    </div>
                    <div className="h-px lg:w-px lg:h-24 bg-linear-to-b from-transparent via-(--border) to-transparent flex-1"></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Global Verdict Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-[40px] bg-(--card)/40 backdrop-blur-3xl border border-(--border) shadow-2xl">
            <p className="text-3xl md:text-4xl font-black text-(--foreground) tracking-tighter uppercase">
              You're paying <br className="sm:hidden" />
              <span className="text-brand-primary bg-brand-primary/10 px-6 py-2 rounded-2xl mx-2">
                145x more
              </span>{" "}
              per-appointment.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Comparison;
