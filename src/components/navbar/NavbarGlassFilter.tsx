import React from "react";

const NavbarGlassFilter: React.FC = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        pointerEvents: "none",
      }}
    >
      <filter id="frosted-filter" primitiveUnits="objectBoundingBox">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves="3"
          result="noise"
        />
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.005" result="blur" />
        <feDisplacementMap
          in="blur"
          in2="noise"
          scale="0.02"
          xChannelSelector="R"
          yChannelSelector="G"
        >
          <animate
            attributeName="scale"
            to="0.04"
            dur="0.3s"
            begin="navbar-container.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="scale"
            to="0.02"
            dur="0.3s"
            begin="navbar-container.mouseout"
            fill="freeze"
          />
        </feDisplacementMap>
      </filter>
    </svg>
  );
};

export default NavbarGlassFilter;
