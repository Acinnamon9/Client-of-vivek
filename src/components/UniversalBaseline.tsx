import React from "react";
import { UNIVERSAL_BASELINE } from "../constants/industryData";

const UniversalBaseline: React.FC = () => {
  return (
    <div className="mb-20 rounded-[32px] bg-white/3 p-10 border border-white/5 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-3">
            {UNIVERSAL_BASELINE.title}
          </h3>
          <p className="text-(--muted-foreground) text-sm font-bold tracking-[0.2em] uppercase">
            {UNIVERSAL_BASELINE.tags.join(" • ")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 flex-[1.5]">
          {UNIVERSAL_BASELINE.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-3xl font-black text-brand-success tracking-tighter">
                {metric.value}
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                {metric.label}
              </span>
              {metric.mechanism && (
                <span className="text-[9px] font-medium text-gray-400 italic mt-1.5 opacity-60">
                  {metric.mechanism}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversalBaseline;
