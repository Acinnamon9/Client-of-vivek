import React, { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const InteractiveBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the glow position
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 
        The "Hue" Layer
        We use a large radial gradient that follows the mouse. 
        It's positioned at -50% -50% of its own size so the center aligns with the coordinates.
      */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 dark:opacity-15 blur-[100px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--color-brand-primary) 0%, transparent 70%)",
        }}
      />

      {/* Optional: Add a secondary static glow for depth if needed */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default InteractiveBackground;
