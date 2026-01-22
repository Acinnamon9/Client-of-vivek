import React from "react";

interface StatusBarProps {
  currentTime: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ currentTime }) => {
  return (
    <div className="relative z-30 px-6 pt-6 pb-2 flex justify-between items-center text-[10px] font-medium text-(--muted-foreground)">
      <span>{currentTime}</span>
      <div className="flex gap-2 items-center">
        {/* Signal Strength Bars */}
        <div className="flex gap-1 items-end h-2.5">
          <div className="w-0.5 h-1 bg-(--foreground)/60"></div>
          <div className="w-0.5 h-1.5 bg-(--foreground)/60"></div>
          <div className="w-0.5 h-2 bg-(--foreground)/60"></div>
          <div className="w-0.5 h-2.5 bg-(--foreground)/60"></div>
        </div>
        <span className="text-[9px]">5G</span>
        {/* Battery Icon */}
        <div className="w-5 h-2.5 border border-(--foreground)/30 rounded-[2px] relative">
          <div className="absolute inset-0.5 bg-(--foreground)/80 w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
