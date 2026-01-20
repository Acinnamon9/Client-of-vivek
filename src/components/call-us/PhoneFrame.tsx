import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, currentTime }) => {
  return (
    <div className="relative h-[min(640px,75vh)] aspect-9/17 rounded-[48px] bg-white/80 dark:bg-black/60 backdrop-blur-2xl p-1 shadow-2xl shadow-brand-primary/10 dark:shadow-brand-primary/20 border border-white/60 dark:border-white/5 ring-1 ring-black/5 transition-all duration-700 hover:scale-[1.02]">
      <div className="relative w-full h-full bg-transparent rounded-[44px] overflow-hidden flex flex-col isolate border border-white/40 dark:border-white/5">
        {/* Gloss Reflection */}
        <div className="absolute inset-0 bg-linear-to-tr from-white dark:from-white/10 to-transparent pointer-events-none z-20 opacity-50 dark:opacity-20"></div>

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
