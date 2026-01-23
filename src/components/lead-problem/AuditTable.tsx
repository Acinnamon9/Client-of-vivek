import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * AuditTable Component
 * Renders the "Brutal Math" comparison table.
 * Features: Interactive hover states, dynamic scaling, and hardware-verified proof badges.
 * Now enhanced with the 'Verdict Card' high-end glassmorphism and glow style.
 */
const AuditTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const rows = [
    {
      label: "Monthly Cost",
      current: "$25,000/mo",
      ai: "$497/mo",
      impact: "↓ 98%",
    },
    { label: "Appointments", current: "250/mo", ai: "500+/mo", impact: "↑ 2×" },
    { label: "Show Rate", current: "60%", ai: "87%", impact: "↑ 45%" },
    {
      label: "Actual Shows",
      current: "150/mo",
      ai: "435/mo",
      impact: "↑ 2.9×",
    },
    {
      label: "Cost Per Show",
      current: "$166",
      ai: "$1.14",
      impact: "145× CHEAPER",
    },
  ];

  return (
    <div className="relative w-full max-w-2xl lg:ml-auto">
      {/* 
        LAYERED GLASS MODULE (THE GLOW)
        Outer container provides the iridescent rim.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="group/glow relative p-1 rounded-[32px] bg-linear-to-br from-brand-primary/20 via-transparent to-brand-accent/20 shadow-2xl shadow-black/10 hover:shadow-brand-primary/10 transition-all duration-700"
      >
        <div className="bg-(--card)/80 backdrop-blur-2xl rounded-[30px] p-8 md:p-10 relative overflow-hidden border border-(--border) group/card transition-all duration-700">
          {/* Subtle technical accents for that specific "Verdict Glow" */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-accent/5 blur-3xl rounded-full pointer-events-none"></div>

          {/* Header */}
          <div className="flex justify-between items-start mb-12 relative z-10">
            <div>
              <h3 className="text-4xl font-black text-(--foreground) tracking-tighter uppercase mb-2">
                Brutal Math
              </h3>
              <p className="text-xs font-bold text-(--muted-foreground) uppercase tracking-[0.3em] pl-1">
                Efficiency Audit
              </p>
            </div>
            <div className="bg-brand-primary/10 text-brand-primary text-[10px] font-black px-4 py-2 rounded-full border border-brand-primary/20 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(0,194,255,0.1)]">
              verified proof
            </div>
          </div>

          <div className="w-full relative z-10">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-4 pb-6 border-b border-(--border) mb-2 text-[10px] font-black tracking-[0.2em] text-(--muted-foreground) uppercase px-4">
              <div>Metric</div>
              <div className="text-right">Baseline</div>
              <div className="text-right">AI System</div>
              <div className="text-right pr-4">Impact</div>
            </div>

            {/* Body Rows */}
            <div className="space-y-2">
              {rows.map((row, idx) => {
                const isLast = idx === rows.length - 1;
                const isHovered = hoveredRow === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredRow(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={cn(
                      "grid grid-cols-[1.2fr_1fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-4 py-5 px-4 rounded-xl transition-all duration-300 items-center relative overflow-hidden cursor-default",
                      isLast
                        ? "bg-brand-primary/5 border border-brand-primary/20 mt-6 shadow-xl"
                        : "hover:bg-brand-primary/5",
                      isHovered &&
                        !isLast &&
                        "scale-[1.02] bg-brand-primary/10 transition-transform",
                    )}
                  >
                    {/* Hover Glow Effect */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-primary/5 to-transparent skew-x-12 animate-shimmer pointer-events-none"></div>
                    )}

                    {/* 1. Metric */}
                    <div
                      className={cn(
                        "text-xs md:text-sm font-black uppercase tracking-tight transition-colors relative z-10",
                        isLast
                          ? "text-(--foreground)"
                          : "text-(--muted-foreground) group-hover/card:text-(--foreground)",
                        isHovered && "text-(--foreground)",
                      )}
                    >
                      {row.label}
                    </div>

                    {/* 2. Baseline */}
                    <div
                      className={cn(
                        "text-right text-sm md:text-base font-bold transition-all relative z-10",
                        isLast
                          ? "text-(--foreground)/80"
                          : "text-brand-action opacity-80",
                        isHovered && "scale-110 opacity-100",
                      )}
                    >
                      <span
                        className={cn(
                          !isLast && isHovered
                            ? ""
                            : "blur-[0.2px] group-hover/card:blur-0 transition-all duration-500",
                        )}
                      >
                        {row.current}
                      </span>
                    </div>

                    {/* 3. AI System */}
                    <div className="text-right relative z-10">
                      <div
                        className={cn(
                          "flex items-center justify-end gap-2 text-sm md:text-base font-black text-brand-success transition-all",
                          isHovered && "scale-110 text-brand-success",
                        )}
                      >
                        {row.ai}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          className={cn(
                            "transition-transform duration-300",
                            isHovered ? "rotate-12 scale-125" : "",
                          )}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>

                    {/* 4. Impact / Final Verdict */}
                    <div className="text-right relative z-10">
                      {isLast ? (
                        <span className="inline-block bg-brand-success text-white text-[10px] md:text-xs font-black px-3 py-1.5 rounded shadow-[0_0_15px_rgba(34,197,94,0.4)] whitespace-nowrap tracking-wide animate-pulse">
                          {row.impact}
                        </span>
                      ) : (
                        <span
                          className={cn(
                            "text-xs md:text-sm font-black text-brand-success transition-all block",
                            isHovered
                              ? "translate-x-0 opacity-100"
                              : "translate-x-2 opacity-70",
                          )}
                        >
                          {row.impact}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuditTable;
