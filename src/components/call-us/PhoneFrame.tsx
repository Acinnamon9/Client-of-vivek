import React, { useId } from "react";

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
  // Generate a unique ID for the filter to avoid conflicts if multiple frames exist
  const uniqueId = useId().replace(/:/g, "");
  const filterId = `turbulent-displace-${uniqueId}`;

  return (
    <div
      className="relative z-10 h-[min(640px,75vh)] aspect-9/17 rounded-[48px] p-1 transition-all duration-700 hover:scale-[1.02] mx-auto"
      style={{ transformStyle: "preserve-3d" }}
    >
      {isElectric && (
        <>
          {/* SVG Filter Definition */}
          <svg
            className="absolute w-0 h-0 overflow-hidden"
            aria-hidden="true"
            style={{ position: "absolute", width: 0, height: 0 }}
          >
            <defs>
              <filter
                id={filterId}
                colorInterpolationFilters="sRGB"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="noise1"
                  seed="1"
                />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                  <animate
                    attributeName="dy"
                    values="300; 0"
                    dur="1.5s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                </feOffset>

                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="noise2"
                  seed="2"
                />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                  <animate
                    attributeName="dy"
                    values="0; -300"
                    dur="1.5s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  />
                </feOffset>

                <feComposite
                  in="offsetNoise1"
                  in2="offsetNoise2"
                  result="part1"
                  operator="arithmetic"
                  k1="0"
                  k2="1"
                  k3="1"
                  k4="0"
                />
                <feBlend
                  in="part1"
                  in2="SourceGraphic"
                  mode="color-dodge"
                  result="combinedNoise"
                />

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="combinedNoise"
                  scale="25"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          {/* Electric Glow Layers (Deep Behind) */}
          <div className="absolute inset-[-12px] rounded-[60px] bg-[#dd8448]/20 blur-2xl animate-pulse -z-20"></div>
          <div className="absolute inset-[-4px] rounded-[52px] border-2 border-[#dd8448]/40 blur-[2px] -z-10"></div>

          {/* Background Glow Ambience */}
          <div className="absolute inset-0 bg-linear-to-b from-[#dd8448]/10 to-transparent blur-3xl opacity-40 -z-30 rounded-[48px]"></div>

          {/* The Electric Border Itself (Overlay) */}
          <div
            className="absolute inset-[-4px] rounded-[52px] border-[3px] border-[#dd8448] z-50 pointer-events-none"
            style={{ filter: `url(#${filterId})`, opacity: 0.8 }}
          ></div>
        </>
      )}

      {/* 
        Phone Body Chassis (Visual Layer)
        - Replaces the styles formerly on the parent div to allow z-index layering
      */}
      <div className="absolute inset-0 rounded-[48px] bg-white/80 dark:bg-[#f5ede5] backdrop-blur-2xl shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.1),-1px_-1px_0px_rgba(255,255,255,0.8)_inset] dark:shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.3),-1px_-1px_0px_rgba(255,255,255,0.4)_inset] border-t border-l border-white/60 dark:border-white/20 border-b border-r border-black/10 ring-1 ring-black/5 z-0"></div>

      {/* 
        Inner Digital Screen:
        - Houses the actual application content.
        - z-10 ensures it sits on top of the chassis
      */}
      <div className="relative z-10 w-full h-full bg-(--background) dark:bg-zinc-950/90 rounded-[44px] overflow-hidden flex flex-col isolate border-t border-l border-black/5 dark:border-white/5 border-b border-r border-white/20 dark:border-black/20">
        {/* Gloss Reflection: Adds a subtle glass-like shine from the top-left light source */}
        <div className="absolute inset-0 bg-linear-to-br from-white/30 dark:from-white/10 via-transparent to-transparent pointer-events-none z-20 opacity-50 dark:opacity-20"></div>

        {/* Status Bar: Displays time, signal strength, and battery */}
        <div className="relative z-30 px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-(--muted-foreground)">
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

        {/* App Content: The main area where children components (Form, Success, etc.) are rendered */}
        <div className="relative z-10 flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto no-scrollbar">
          {children}
        </div>

        {/* Home Indicator: The thin pill-shaped bar at the bottom of modern smartphones */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-(--foreground)/20 rounded-full z-30"></div>
      </div>
    </div>
  );
};

export default PhoneFrame;
