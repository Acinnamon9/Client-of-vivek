import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, currentTime }) => {
  return (
    <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[50px] bg-(--card) p-3 shadow-2xl shadow-brand-primary/20 border-4 border-(--muted) ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
      <div className="relative w-full h-full bg-(--background) rounded-[40px] overflow-hidden flex flex-col isolate">
        {/* Gloss Reflection */}
        <div className="absolute inset-0 bg-linear-to-tr from-(--foreground)/5 to-transparent pointer-events-none z-20 opacity-30"></div>

        {/* Ambient Background Glow */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-brand-primary)_180deg,transparent_360deg)] animate-[rotate-slow_10s_linear_infinite] opacity-10 pointer-events-none z-0 mix-blend-plus-lighter"></div>
        <div className="absolute inset-0 bg-(--background)/90 z-0 backdrop-blur-2xl"></div>

        {/* Status Bar */}
        <div className="relative z-30 px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-(--muted-foreground)">
          <span>{currentTime}</span>
          <div className="flex gap-1.5 items-center">
            <div className="flex gap-0.5 items-end h-2.5">
              <div className="w-0.5 h-1 bg-(--foreground)/60"></div>
              <div className="w-0.5 h-1.5 bg-(--foreground)/60"></div>
              <div className="w-0.5 h-2 bg-(--foreground)/60"></div>
              <div className="w-0.5 h-2.5 bg-(--foreground)/60"></div>
            </div>
            <span className="text-[9px]">5G</span>
            <div className="w-5 h-2.5 border border-(--foreground)/30 rounded-[2px] relative">
              <div className="absolute inset-0.5 bg-(--foreground)/80 w-[80%]"></div>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="relative z-10 flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto no-scrollbar">
          {children}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-(--foreground)/20 rounded-full z-30"></div>
      </div>
    </div>
  );
};

export default PhoneFrame;
