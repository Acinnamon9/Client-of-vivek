import React from "react";
import { manualFunnel, aiFunnel } from "../../constants/leadProblemData";
import Badge from "../ui/Badge";
import { Section, Container } from "../ui/Layout";

const Funnel: React.FC = () => {
  const handleRedirect = () => {
    window.open("https://atomicx.ravan.ai/book", "_blank");
  };

  return (
    <Section
      id="lead-problem-funnel"
      className="bg-(--background) py-24 sm:py-32"
    >
      <Container className="max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Current System */}
          <div
            onClick={handleRedirect}
            className="flex flex-col items-center bg-slate-500/5 p-12 rounded-[48px] border border-(--border) hover:bg-slate-500/10 transition-all duration-500 cursor-pointer group/system"
          >
            <div className="text-center mb-16">
              <span className="text-sm font-black text-(--muted-foreground) uppercase tracking-[0.2em]">
                Your Current System
              </span>
              <h3 className="text-3xl font-black text-(--foreground) mt-4 uppercase tracking-tight">
                Manual & Leaky
              </h3>
            </div>
            <div className="w-full flex flex-col items-center gap-4">
              {manualFunnel.map((stage, i) => (
                <div
                  key={i}
                  className="w-full relative group transition-transform duration-500 hover:scale-[1.02]"
                  style={{ maxWidth: `${100 - i * 12}%` }}
                >
                  <div className="h-20 lg:h-24 bg-linear-to-r from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center relative overflow-hidden px-8">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white font-black text-xl lg:text-2xl uppercase tracking-wider relative z-10 text-center">
                      {stage.text}
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-widest block transform transition-all group-hover:text-rose-500">
                      {stage.subText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI System */}
          <div
            onClick={handleRedirect}
            className="flex flex-col items-center bg-emerald-500/5 p-12 rounded-[48px] border border-emerald-500/10 hover:bg-emerald-500/10 transition-all duration-500 cursor-pointer group/system"
          >
            <div className="text-center mb-16">
              <Badge
                variant="ghost"
                className="mb-4 bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                AI POWERED
              </Badge>
              <h3 className="text-3xl font-black text-(--foreground) uppercase tracking-tight">
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
                  <div className="h-20 lg:h-24 bg-linear-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center relative overflow-hidden px-8 shadow-2xl shadow-emerald-500/10 group-hover/stage:shadow-emerald-500/20 transition-all">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine pointer-events-none" />
                    <span className="text-white font-black text-xl lg:text-2xl uppercase tracking-wider relative z-10 text-center">
                      {stage.text}
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-[10px] font-black text-brand-success/70 uppercase tracking-widest block transform transition-all group-hover/stage:text-emerald-500 group-hover/stage:scale-110">
                      {stage.subText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Funnel;
