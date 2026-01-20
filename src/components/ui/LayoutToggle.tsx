import React from "react";
import { motion } from "framer-motion";

interface LayoutToggleProps {
  isStacked: boolean;
  onToggle: () => void;
}

const LayoutToggle: React.FC<LayoutToggleProps> = ({ isStacked, onToggle }) => {
  return (
    <div className="fixed bottom-8 left-8 z-[200] flex items-center gap-3 bg-(--card)/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-(--border) shadow-2xl transition-all hover:scale-105 active:scale-95 group">
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-black uppercase tracking-widest text-(--muted-foreground)/60 leading-none">
          Experience Mode
        </span>
        <span className="text-xs font-bold text-(--foreground) uppercase tracking-tighter">
          {isStacked ? "Stacked Cards" : "Standard Scroll"}
        </span>
      </div>

      <button
        onClick={onToggle}
        className="relative w-12 h-6 bg-brand-primary/10 rounded-full flex items-center p-1 transition-colors group-hover:bg-brand-primary/20"
      >
        <motion.div
          animate={{ x: isStacked ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="w-4 h-4 bg-brand-primary rounded-full shadow-lg"
        />
      </button>

      <div className="absolute -top-12 left-0 bg-brand-primary text-white text-[10px] font-black px-3 py-1.5 rounded-xl opacity-0 translate-y-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-y-0 uppercase tracking-widest whitespace-nowrap shadow-xl shadow-brand-primary/20">
        Switch to {isStacked ? "Scroll" : "Stack"} Mode
      </div>
    </div>
  );
};

export default LayoutToggle;
