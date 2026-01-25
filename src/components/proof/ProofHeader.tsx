import React from "react";
import Badge from "../ui/Badge";

/**
 * ProofHeader Component
 * Displays the section title and case study badge.
 */
const ProofHeader: React.FC = () => {
  return (
    <div className="text-center mb-0">
      <Badge
        variant="secondary"
        className="uppercase tracking-[0.3em] font-black text-[10px] mb-6"
      >
        Evidence Archive
      </Badge>
      <h2 className="text-4xl sm:text-6xl font-black text-(--foreground) tracking-tighter mb-4 uppercase">
        Verified Impact
      </h2>
      <p className="text-(--muted-foreground) max-w-2xl mx-auto text-lg font-medium opacity-80">
        Operational deployments documented and verified for high-scale revenue
        performance.
      </p>
    </div>
  );
};

export default ProofHeader;
