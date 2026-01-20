import React from "react";
import { timelineEvents } from "../../constants/leadProblemData";
import { cn } from "../../lib/utils";

const Timeline: React.FC = () => {
  return (
    <div className="bg-(--card) rounded-[40px] p-12 sm:p-20 mb-20 relative overflow-hidden shadow-2xl border border-(--border)">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,87,34,0.05),transparent_60%)]"></div>
      <h3 className="text-3xl sm:text-4xl font-black text-(--foreground) text-center mb-16 relative z-10">
        What Happens to Your Leads Right Now
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {timelineEvents.map((item, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-5xl font-black text-brand-primary mb-6 transition-transform group-hover:scale-110 duration-500">
              {item.time}
            </div>
            <div className="text-xl font-black text-(--foreground) mb-3">
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
  );
};

export default Timeline;
