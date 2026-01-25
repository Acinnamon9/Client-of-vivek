import React from "react";

interface RoleCardInfoProps {
  title: string;
  replaces: string;
  features: string[];
}

const RoleCardInfo: React.FC<RoleCardInfoProps> = ({
  title,
  replaces,
  features,
}) => {
  return (
    <div className="mb-3">
      {/* Header Area: Ultra-Compact Inline Status */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-brand-success animate-pulse"></span>
          <span className="text-[8px] font-black tracking-[0.2em] text-brand-success uppercase">
            Active
          </span>
        </div>
        <div className="text-[8px] font-black text-brand-primary/80 uppercase tracking-widest">
          {replaces} Replacement
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-black text-(--foreground) tracking-tighter uppercase leading-tight mb-2 group-hover:text-brand-primary transition-colors duration-500">
        {title}
      </h3>

      {/* Capabilities Manifest: Ultra-Compact */}
      <div className="space-y-1.5 mt-4 mb-1">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 group/feat transition-all duration-300"
          >
            <div className="w-1 h-1 rounded-full bg-brand-primary/30 group-hover/feat:bg-brand-primary transition-colors"></div>
            <p className="text-[11px] md:text-xs text-(--muted-foreground) font-bold group-hover/feat:text-(--foreground) transition-colors line-clamp-1">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleCardInfo;
