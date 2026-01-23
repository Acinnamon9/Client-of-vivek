import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface SpotlightEffectProps<T extends React.ElementType = "div"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

const SpotlightEffect = <T extends React.ElementType = "div">({
  as,
  children,
  className,
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  spotlightSize = 600,
  ...props
}: SpotlightEffectProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "div";
  const divRef = useRef<HTMLElement>(null);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--spotlight-x", `${x}px`);
    divRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <Component
      ref={divRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden group", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          opacity,
          background: `radial-gradient(${spotlightSize}px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </Component>
  );
};

export default SpotlightEffect;
