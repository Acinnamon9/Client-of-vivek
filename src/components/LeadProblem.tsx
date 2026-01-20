import React from "react";
import { cva } from "class-variance-authority";
import {
  mathComparison,
  timelineEvents,
  failureCards,
  manualFunnel,
  aiFunnel,
} from "../constants/leadProblemData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card } from "./ui/Card";
import { cn } from "../lib/utils";

const systemVariants = cva(
  "rounded-[32px] p-10 border-4 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2",
  {
    variants: {
      type: {
        current: "border-brand-primary/20 bg-brand-primary/1",
        ai: "border-brand-success/20 bg-brand-success/1",
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

const LeadProblem: React.FC = () => {
  return (
    <Section className="bg-linear-to-b from-[#faf8f5] to-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] animate-float-orb"></div>
        <div
          className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-success/2 rounded-full blur-[100px] animate-float-orb"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <Badge variant="brand" className="mb-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            The Sales System Problem
          </Badge>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-brand-dark leading-[1.1] mb-8 tracking-tighter">
            You're Still Bleeding Appointments
            <br />
            While Competitors Run{" "}
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent relative inline-block">
              Automated Revenue Machines
              <span
                className="absolute bottom-1 left-0 w-full h-1 bg-brand-primary/30 rounded-full scale-x-0 animate-expand-underline origin-left"
                style={{ animationDelay: "0.5s" }}
              ></span>
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-[#64748b] leading-relaxed max-w-3xl mx-auto font-medium">
            Think of your leads like milk from expensive cows — every second
            counts before it spoils. Here's exactly what's happening to your
            $100,000 ad spend:
          </p>
        </div>

        {/* Comparison Section */}
        <Card
          variant="white"
          className="p-8 sm:p-16 mb-20 shadow-2xl border-brand-primary/5 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.02),transparent)]"
        >
          <h3 className="text-4xl font-black text-center mb-16 text-brand-dark tracking-tight">
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
                          className="flex justify-between items-center pb-5 border-b border-black/4 last:border-0 last:pb-0"
                        >
                          <span className="text-[#64748b] font-bold">
                            {stat.label}
                          </span>
                          <span className="text-xl font-black text-brand-dark">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                      <div className="pt-6 border-t-4 border-black/3 mt-4 flex justify-between items-center">
                        <span className="text-sm font-black text-[#94a3b8] uppercase">
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

          <div className="text-center text-2xl sm:text-3xl font-black text-brand-dark">
            You're paying{" "}
            <span className="text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-xl">
              145x more
            </span>{" "}
            per appointment.
          </div>
        </Card>

        {/* Timeline Visual */}
        <div className="bg-brand-dark rounded-[40px] p-12 sm:p-20 mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,87,34,0.1),transparent_60%)] animate-pulse"></div>
          <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-16 relative z-10">
            What Happens to Your Leads Right Now
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl font-black text-brand-primary mb-6 transition-transform group-hover:scale-110 duration-500">
                  {item.time}
                </div>
                <div className="text-xl font-black text-white mb-3">
                  {item.event}
                </div>
                <div
                  className={cn(
                    "font-bold px-4 py-1.5 rounded-full inline-block text-sm",
                    item.type === "won"
                      ? "bg-brand-success/10 text-brand-success"
                      : "bg-brand-primary/10 text-brand-primary",
                  )}
                >
                  {item.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Failure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {failureCards.map((card, idx) => (
            <Card
              key={idx}
              variant="white"
              className="p-10 text-center border-brand-primary/10 hover:border-brand-primary/40 hover:shadow-brand-primary/10 transition-all duration-500 group"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-xl shadow-brand-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {card.icon}
              </div>
              <h4 className="text-2xl font-black text-brand-dark mb-4">
                {card.title}
              </h4>
              <p className="text-[#64748b] font-medium leading-relaxed mb-8 min-h-[80px]">
                {card.desc}
              </p>
              <div className="text-5xl font-black text-brand-primary mb-2">
                {card.metric}
              </div>
              <div className="text-xs font-black text-brand-primary/60 tracking-widest uppercase">
                {card.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Funnel Section */}
        <div className="bg-brand-deep rounded-[40px] p-10 sm:p-20 mb-20 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-success/5 blur-[120px] rounded-full"></div>

          <h3 className="text-3xl sm:text-4xl font-black text-white text-center mb-20 relative z-10">
            The Leaky Bucket vs The Automated Pipeline
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Manual Funnel */}
            <div className="bg-white/3 border border-white/10 rounded-[32px] p-10 backdrop-blur-sm">
              <div className="text-center mb-12">
                <h4 className="text-2xl font-black text-white mb-2">
                  Your Current System
                </h4>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
                  Manual Lead Processing
                </p>
              </div>
              <div className="space-y-6 relative h-[450px]">
                {manualFunnel.map((stage, i) => (
                  <div
                    key={i}
                    className="mx-auto text-center flex flex-col items-center group transition-all duration-500"
                    style={{ width: stage.width }}
                  >
                    <div className="h-12 w-full bg-linear-to-r from-red-600 to-red-400 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-red-900/20 group-hover:scale-105 transition-transform">
                      {stage.text}
                    </div>
                    {stage.subText && (
                      <span className="text-white/60 text-xs font-bold mt-2">
                        {stage.subText}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Funnel */}
            <div className="bg-white/5 border border-brand-success/20 rounded-[32px] p-10 backdrop-blur-sm relative">
              <div className="text-center mb-12">
                <h4 className="text-2xl font-black text-white mb-2">
                  AI Sales Team System
                </h4>
                <p className="text-brand-success/60 font-bold uppercase tracking-widest text-xs">
                  Automated Pipeline
                </p>
              </div>
              <div className="space-y-6 relative h-[450px]">
                {aiFunnel.map((stage, i) => (
                  <div
                    key={i}
                    className="mx-auto text-center flex flex-col items-center group transition-all duration-500 relative"
                    style={{ width: stage.width }}
                  >
                    {stage.badge && (
                      <div className="absolute -top-6 -right-12 bg-brand-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg animate-badge-float z-20">
                        {stage.badge}
                      </div>
                    )}
                    <div className="h-12 w-full bg-linear-to-r from-brand-success to-brand-success-deep rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-brand-success/20 group-hover:scale-105 transition-transform overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      {stage.text}
                    </div>
                    {stage.subText && (
                      <span className="text-white/60 text-xs font-bold mt-2">
                        {stage.subText}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA in section */}
        <Card
          variant="white"
          className="p-12 sm:p-20 text-center border-brand-primary/20 shadow-2xl relative overflow-hidden animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.03),transparent)]"></div>
          <div className="relative z-10">
            <h3 className="text-4xl sm:text-5xl font-black text-brand-dark mb-6 tracking-tight">
              Stop the Leak. Start the Flow.
            </h3>
            <p className="text-xl sm:text-2xl text-[#64748b] mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              You're paying{" "}
              <strong className="text-brand-primary font-black">
                4.3x more
              </strong>{" "}
              per appointment. Plus missing{" "}
              <strong className="text-brand-primary font-black">
                3x the leads
              </strong>
              . Let's fix that in 48 hours.
            </p>
            <Button
              size="xl"
              className="px-12"
              onClick={() =>
                window.open("https://myteam.ravan.ai/book", "_blank")
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
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-[#94a3b8] font-black uppercase text-xs tracking-widest">
              <span>✓ Live AI Demo</span>
              <span className="hidden sm:block opacity-20">|</span>
              <span>✓ Custom ROI Audit</span>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

export default LeadProblem;
