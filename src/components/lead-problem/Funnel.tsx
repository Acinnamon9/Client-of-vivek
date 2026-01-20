import React from "react";
import { manualFunnel, aiFunnel } from "../../constants/leadProblemData";

const Funnel: React.FC = () => {
  return (
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
  );
};

export default Funnel;
