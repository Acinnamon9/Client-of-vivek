import React from "react";

interface ProofDetailsProps {
  challenge: string;
  solution: string;
  solutionPoints?: string[];
}

/**
 * ProofDetails Component
 * Displays the Challenge vs Solution narrative blocks.
 */
const ProofDetails: React.FC<ProofDetailsProps> = ({ challenge, solution }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
          The Challenge
        </h3>
        <p className="text-(--muted-foreground) leading-relaxed text-sm font-medium">
          {challenge}
        </p>
      </div>
      <div>
        <h3 className="text-xs font-bold text-brand-link uppercase tracking-widest mb-2">
          The Ravan Solution
        </h3>
        <p className="text-(--foreground) leading-relaxed font-medium">
          {solution}
        </p>
      </div>
    </div>
  );
};

export default ProofDetails;
