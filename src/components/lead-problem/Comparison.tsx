import React from "react";
import { cva } from "class-variance-authority";
import { mathComparison } from "../../constants/leadProblemData";
import { Card } from "../ui/Card";
import { Section, Container } from "../ui/Layout";

const systemVariants = cva(
  "rounded-[32px] p-10 border-4 bg-(--card) shadow-xl transition-all duration-500 hover:-translate-y-2",
  {
    variants: {
      type: {
        current: "border-brand-primary/20",
        ai: "border-brand-success/20",
      },
    },
    defaultVariants: {
      type: "current",
    },
  },
);

const systemTitleVariants = cva(
  "text-xs font-black tracking-widest uppercase",
  {
    variants: {
      type: {
        current: "text-brand-primary",
        ai: "text-brand-success",
      },
    },
    defaultVariants: {
      type: "current",
    },
  },
);

const systemCostVariants = cva("text-5xl font-black tracking-tighter", {
  variants: {
    type: {
      current: "text-brand-primary",
      ai: "text-brand-success",
    },
  },
  defaultVariants: {
    type: "current",
  },
});

const Comparison: React.FC = () => {
  return (
    <Section
      id="lead-problem-comparison"
      className="bg-(--background) py-24 sm:py-32"
    >
      <Container>
        <Card
          variant="white"
          className="p-8 sm:p-16 shadow-2xl border-(--border) relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/2 blur-[80px] pointer-events-none"></div>

          <h3 className="text-4xl font-black text-center mb-16 text-(--foreground) tracking-tight uppercase">
            The Brutal Math of Your Current System
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center mb-16">
            {mathComparison.map((sys, idx) => {
              const type = sys.id === "current" ? "current" : ("ai" as const);
              return (
                <React.Fragment key={sys.id}>
                  <div className={systemVariants({ type })}>
                    <div className="text-center mb-10">
                      <span className={systemTitleVariants({ type })}>
                        {sys.title}
                      </span>
                    </div>
                    <div className="space-y-6">
                      {sys.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center pb-5 border-b border-(--border) last:border-0 last:pb-0"
                        >
                          <span className="text-(--muted-foreground) font-bold">
                            {stat.label}
                          </span>
                          <span className="text-xl font-black text-(--foreground)">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                      <div className="pt-6 border-t-4 border-(--muted) mt-4 flex justify-between items-center">
                        <span className="text-sm font-black text-(--muted-foreground) uppercase">
                          Cost Per Show
                        </span>
                        <span className={systemCostVariants({ type })}>
                          {sys.costPerShow}
                        </span>
                      </div>
                    </div>
                  </div>
                  {idx === 0 && (
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white text-xl font-black shadow-xl shadow-brand-primary/30 animate-pulse scale-110">
                      VS
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="text-center text-2xl sm:text-3xl font-black text-(--foreground) uppercase tracking-tighter">
            You're paying{" "}
            <span className="text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-xl">
              145x more
            </span>{" "}
            per-appointment.
          </div>
        </Card>
      </Container>
    </Section>
  );
};

export default Comparison;
