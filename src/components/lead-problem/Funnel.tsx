import React from "react";
import { manualFunnel, aiFunnel } from "../../constants/leadProblemData";

const Funnel: React.FC = () => {
  const handleRedirect = () => {
    window.open("https://atomicx.ravan.ai/book", "_blank");
  };

  return (
    <div className="bg-(--card) rounded-[40px] p-10 sm:p-20 mb-20 relative overflow-hidden shadow-2xl border border-(--border)">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-success/5 blur-[120px] rounded-full"></div>

      <h3 className="text-3xl sm:text-4xl font-black text-(--foreground) text-center mb-20 relative z-10">
        The Leaky Bucket vs The Automated Pipeline
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Manual Funnel */}
        <div
          onClick={handleRedirect}
          className="bg-slate-500/5 border border-(--border) rounded-[32px] p-10 backdrop-blur-sm cursor-pointer hover:bg-slate-500/10 transition-colors group/manual"
        >
          <div className="text-center mb-12">
            <h4 className="text-2xl font-black text-(--foreground) mb-2">
              Your Current System
            </h4>
            <p className="text-(--muted-foreground) font-bold uppercase tracking-widest text-xs">
              Manual Lead Processing
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 relative h-[450px]">
            {manualFunnel.map((stage, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center relative"
                style={{ width: stage.width }}
              >
                <div className="h-12 w-full bg-linear-to-r from-rose-400 to-rose-500 rounded-xl flex items-center justify-center text-white font-black border border-white/20 transition-transform group-hover/manual:scale-[1.01]">
                  {stage.text}
                </div>
                {stage.subText && (
                  <span className="text-(--muted-foreground) text-xs font-bold mt-2">
                    {stage.subText}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Funnel */}
        <div
          onClick={handleRedirect}
          className="bg-emerald-500/5 border border-emerald-500/20 rounded-[32px] p-10 backdrop-blur-sm relative cursor-pointer hover:bg-emerald-500/10 transition-colors group/ai"
        >
          <div className="text-center mb-12">
            <h4 className="text-2xl font-black text-(--foreground) mb-2">
              AI Sales Team System
            </h4>
            <p className="text-emerald-600/60 font-bold uppercase tracking-widest text-xs">
              Automated Pipeline
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 relative h-[450px]">
            {aiFunnel.map((stage, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center group/stage relative"
                style={{ width: stage.width }}
              >
                {stage.badge && (
                  <div className="absolute -top-6 -right-12 bg-brand-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg animate-badge-float z-20">
                    {stage.badge}
                  </div>
                )}
                <div className="h-12 w-full bg-linear-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center text-white font-black border border-white/20 transition-all duration-300 group-hover/ai:scale-[1.01] group-hover/stage:scale-[1.03]">
                  {stage.text}
                </div>
                {stage.subText && (
                  <span className="text-(--muted-foreground) text-xs font-bold mt-2 group-hover/ai:text-emerald-500 transition-colors">
                    {stage.subText}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funnel;
