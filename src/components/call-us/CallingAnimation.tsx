import React from "react";
import { motion } from "framer-motion";

interface CallingAnimationProps {
  loadingText: string;
}

const CallingAnimation: React.FC<CallingAnimationProps> = ({ loadingText }) => {
  return (
    <motion.div
      key="calling-animation"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex-1 flex flex-col items-center justify-center -mt-20"
    >
      <div className="relative w-48 h-48 flex items-center justify-center mb-8">
        {[0, 0.5, 1].map((delay) => (
          <motion.div
            key={delay}
            className="absolute inset-0 rounded-full border border-brand-primary/30"
            animate={{ scale: [1, 2], opacity: [1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay,
            }}
          />
        ))}

        <div className="absolute inset-4 rounded-full border-t-2 border-r-2 border-brand-primary/80 animate-spin [animation-duration:3s]"></div>
        <div className="absolute inset-8 rounded-full border-b-2 border-l-2 border-brand-primary/50 animate-spin [animation-duration:2s] direction-reverse"></div>

        <div className="w-16 h-16 rounded-full bg-brand-primary/10 backdrop-blur-md flex items-center justify-center border border-brand-primary shadow-[0_0_40px_rgba(255,87,34,0.6)] animate-pulse">
          <span className="text-2xl">📶</span>
        </div>
      </div>

      <motion.div
        key={loadingText}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="h-12 flex flex-col items-center justify-center"
      >
        <p className="text-brand-primary text-sm font-mono tracking-widest uppercase font-bold text-center px-4">
          {loadingText}
        </p>
      </motion.div>

      <div className="w-32 h-1 bg-(--muted) rounded-full overflow-hidden mt-6">
        <motion.div
          className="h-full bg-brand-primary"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default CallingAnimation;
