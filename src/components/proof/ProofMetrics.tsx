import React from "react";

interface Metric {
  value: string;
  label: string;
}

interface ProofMetricsProps {
  metrics: Metric[];
}

/**
 * ProofMetrics Component
 * Renders a grid of key performance indicators for the case study.
 */
const ProofMetrics: React.FC<ProofMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className="bg-(--card) p-8 rounded-xl border border-(--border) relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-black/5 group-hover:bg-brand-depth transition-colors"></div>
          <span className="block text-4xl sm:text-5xl font-medium text-(--foreground) mb-2 tracking-tight">
            {metric.value}
          </span>
          <span className="block text-xs font-bold text-(--muted-foreground) uppercase tracking-widest">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProofMetrics;
