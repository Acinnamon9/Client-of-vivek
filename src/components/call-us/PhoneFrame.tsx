import React from "react";
import ElectricOverlay from "./ElectricOverlay";
import StatusBar from "./StatusBar";

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime: string;
  isElectric?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  currentTime,
  isElectric = false,
}) => {
  return (
    <div
      className="relative z-10 w-full max-w-[360px] aspect-[9/19] h-auto rounded-[48px] transition-all duration-700 hover:scale-[1.02] mx-auto shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.3)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {isElectric && <ElectricOverlay />}

      {/* 
        Inner Digital Screen:
        - Houses the actual application content.
      */}
      <div className="relative z-10 w-full h-full bg-(--background)/20 rounded-[48px] overflow-hidden flex flex-col isolate backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)]">
        {/* Gloss Reflection: Adds a subtle glass-like shine from the top light source */}
        <div className="absolute inset-0 bg-linear-to-b from-white/30 dark:from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-50 dark:opacity-20"></div>

        <StatusBar currentTime={currentTime} />

        {/* App Content: The main area where children components (Form, Success, etc.) are rendered */}
        <div className="relative z-10 flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto no-scrollbar">
          {children}
        </div>

        {/* Home Indicator: The thin pill-shaped bar at the bottom of modern smartphones */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-(--foreground)/20 rounded-full z-30"></div>
      </div>

      {/* Side Buttons (Physical Accents) */}
      <div className="absolute left-[-2px] top-24 w-[2px] h-12 bg-brand-orange/40 rounded-l shadow-[inset_-1px_0_1px_rgba(255,255,255,0.1)]"></div>
      <div className="absolute left-[-2px] top-40 w-[2px] h-12 bg-brand-orange/40 rounded-l shadow-[inset_-1px_0_1px_rgba(255,255,255,0.1)]"></div>
      <div className="absolute right-[-2px] top-32 w-[2px] h-16 bg-brand-orange/40 rounded-r shadow-[inset_1px_0_1px_rgba(255,255,255,0.1)]"></div>
    </div>
  );
};

export default PhoneFrame;
