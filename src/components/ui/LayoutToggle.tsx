import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Layers, MousePointer2 } from "lucide-react";

interface LayoutToggleProps {
  isStacked: boolean;
  onToggleLayout: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

const LayoutToggle: React.FC<LayoutToggleProps> = ({
  isStacked,
  onToggleLayout,
  isDark,
  onToggleTheme,
}) => {
  return (
    <div className="fixed bottom-8 left-8 z-[200] flex flex-col gap-3">
      {/* Container */}
      <div className="bg-(--card)/80 backdrop-blur-xl p-4 rounded-3xl border border-(--border) shadow-2xl flex flex-col gap-5 w-64">
        {/* Layout Mode Switch */}
        <div className="flex items-center justify-between group">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-(--muted-foreground)/60 leading-none mb-1">
              Experience
            </span>
            <div className="flex items-center gap-2">
              {isStacked ? (
                <Layers size={14} className="text-brand-primary" />
              ) : (
                <MousePointer2 size={14} className="text-brand-primary" />
              )}
              <span className="text-xs font-bold text-(--foreground) uppercase tracking-tighter">
                {isStacked ? "Stacked" : "Scroll"}
              </span>
            </div>
          </div>

          <button
            onClick={onToggleLayout}
            className="relative w-12 h-6 bg-brand-primary/10 rounded-full flex items-center p-1 transition-colors hover:bg-brand-primary/20"
          >
            <motion.div
              animate={{ x: isStacked ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 bg-brand-primary rounded-full shadow-lg"
            />
          </button>
        </div>

        {/* Separator */}
        <div className="h-px bg-(--border) w-full" />

        {/* Theme Mode Switch */}
        <div className="flex items-center justify-between group">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-(--muted-foreground)/60 leading-none mb-1">
              Appearance
            </span>
            <div className="flex items-center gap-2">
              {isDark ? (
                <Moon size={14} className="text-brand-primary" />
              ) : (
                <Sun size={14} className="text-brand-primary" />
              )}
              <span className="text-xs font-bold text-(--foreground) uppercase tracking-tighter">
                {isDark ? "Midnight" : "Horizon"}
              </span>
            </div>
          </div>

          <button
            onClick={onToggleTheme}
            className="relative w-12 h-6 bg-brand-primary/10 rounded-full flex items-center p-1 transition-colors hover:bg-brand-primary/20"
          >
            <motion.div
              animate={{ x: !isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 bg-brand-primary rounded-full shadow-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutToggle;
