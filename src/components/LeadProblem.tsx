import React from "react";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import { cn } from "../lib/utils";

const LeadProblem: React.FC = () => {
  const rows = [
    {
      label: "Monthly Cost",
      current: "$25,000/mo",
      ai: "$497/mo",
      impact: "↓ 98%",
      isImprovement: true,
    },
    {
      label: "Appointments",
      current: "250/mo",
      ai: "500+/mo",
      impact: "↑ 2×",
      isImprovement: true,
    },
    {
      label: "Show Rate",
      current: "60%",
      ai: "87%",
      impact: "↑ 45%",
      isImprovement: true,
    },
    {
      label: "Actual Shows",
      current: "150/mo",
      ai: "435/mo",
      impact: "↑ 2.9×",
      isImprovement: true,
    },
    {
      label: "Cost Per Show",
      current: "$166",
      ai: "$1.14",
      impact: "↓ 99%",
      isImprovement: true,
    },
  ];

  return (
    <Section className="bg-(--background) relative overflow-hidden font-jakarta flex items-center py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-linear-to-b from-(--muted)/20 to-transparent"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] animate-float-orb"></div>
        <div
          className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-success/2 rounded-full blur-[100px] animate-float-orb"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <Badge variant="brand" className="mb-6">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="mr-2"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              The System Failure
            </Badge>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-(--foreground) leading-[1.05] mb-8 tracking-tighter uppercase max-w-xl">
              You're Bleeding
              <br />
              <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent italic">
                Appointments
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-(--muted-foreground) leading-relaxed max-w-xl font-medium tracking-tight mb-8">
              Think of your leads like fresh milk. Every second matters before
              it spoils. Right now, your $100,000 ad spend is evaporating
              through the cracks of your legacy system.
            </p>

            <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 max-w-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-r from-brand-primary/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
              <p className="text-lg font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                The Verdict:
              </p>
              <p className="text-2xl text-(--foreground) font-black tracking-tight leading-tight relative z-10">
                You are paying{" "}
                <span className="text-brand-primary underline underline-offset-4 decoration-4">
                  145x more
                </span>{" "}
                per booked meeting.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up delay-200">
            <div className="bg-(--card)/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-[40px] p-6 mb:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-success/5 blur-[80px] pointer-events-none"></div>

              <div className="mb-8">
                <h3 className="text-2xl font-black text-(--foreground) tracking-tighter uppercase mb-1">
                  Brutal Math
                </h3>
                <p className="text-xs font-bold text-(--muted-foreground) uppercase tracking-[0.2em]">
                  Efficiency Audit
                </p>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[500px]">
                  {/* Header Row */}
                  <div className="grid grid-cols-4 gap-4 pb-4 border-b border-(--border) mb-4 text-[10px] font-black tracking-widest text-(--muted-foreground) uppercase">
                    <div>Metric</div>
                    <div className="text-right">Current</div>
                    <div className="text-right text-brand-success">
                      AI System
                    </div>
                    <div className="text-right">Impact</div>
                  </div>

                  {/* Body Rows */}
                  <div className="space-y-1">
                    {rows.map((row, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "grid grid-cols-4 gap-4 py-4 px-2 rounded-xl transition-colors items-center",
                          idx === rows.length - 1
                            ? "bg-brand-success/5 border border-brand-success/20 mt-4"
                            : "hover:bg-white/5",
                        )}
                      >
                        <div className="text-xs font-bold text-(--muted-foreground) uppercase tracking-tighter">
                          {row.label}
                        </div>
                        <div className="text-right text-sm font-black text-(--foreground)/40 line-through decoration-brand-primary/30">
                          {row.current}
                        </div>
                        <div className="text-right text-sm font-black text-brand-success flex items-center justify-end gap-1.5">
                          {row.ai}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="text-brand-success"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="text-right text-xs font-black text-brand-success">
                          {row.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-brand-primary text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl shadow-brand-primary/30 uppercase tracking-[0.2em] z-20">
              verified proof
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LeadProblem;
