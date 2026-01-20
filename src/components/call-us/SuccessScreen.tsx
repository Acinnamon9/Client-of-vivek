import React from "react";
import { motion } from "framer-motion";

interface SuccessScreenProps {
  countryCode: string;
  phoneNumber: string;
  onDismiss: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  countryCode,
  phoneNumber,
  onDismiss,
}) => {
  return (
    <motion.div
      key="success-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col items-center justify-center text-center"
    >
      <div className="w-20 h-20 rounded-full bg-brand-success/10 border-2 border-brand-success flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.2)] animate-pulse">
        <span className="text-3xl text-brand-success">✓</span>
      </div>
      <h4 className="text-(--foreground) font-bold text-2xl mb-2">
        Connecting...
      </h4>
      <p className="text-(--muted-foreground) text-sm mb-8 px-4">
        Agent is dialing{" "}
        <span className="text-(--foreground) font-mono">
          {countryCode}
          {phoneNumber}
        </span>
      </p>
      {/* 
      <div className="w-full bg-(--muted) rounded-2xl p-4 border border-(--border) mb-8">
        <div className="flex justify-between text-[10px] text-(--muted-foreground) mb-2 uppercase tracking-wider">
          <span>Status</span>
          <span className="text-brand-success">Active</span>
        </div>
        <div className="h-1 w-full bg-(--foreground)/10 rounded-full overflow-hidden">
          <div className="h-full bg-brand-success w-[60%] animate-[shine-slow_2s_linear_infinite]"></div>
        </div>
      </div> */}

      <button
        onClick={onDismiss}
        className="text-(--muted-foreground) hover:text-(--foreground) text-xs font-medium transition-colors cursor-pointer"
      >
        Dismiss
      </button>
    </motion.div>
  );
};

export default SuccessScreen;
