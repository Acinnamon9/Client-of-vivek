import React, { useId } from "react";

const ElectricOverlay: React.FC = () => {
  // Generate a unique ID for the filter to avoid conflicts if multiple frames exist
  const uniqueId = useId().replace(/:/g, "");
  const filterId = `turbulent-displace-${uniqueId}`;

  return (
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
  );
};

export default ElectricOverlay;
