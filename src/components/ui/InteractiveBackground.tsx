import React, { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const InteractiveBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();

  // Parallax transforms for the background orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Different spring settings for multi-layered trailing effect
  const primaryX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const primaryY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const secondaryX = useSpring(mouseX, { stiffness: 25, damping: 25 });
  const secondaryY = useSpring(mouseY, { stiffness: 25, damping: 25 });

  const tertiaryX = useSpring(mouseX, { stiffness: 15, damping: 30 });
  const tertiaryY = useSpring(mouseY, { stiffness: 15, damping: 30 });

  const quaternaryX = useSpring(mouseX, { stiffness: 10, damping: 35 });
  const quaternaryY = useSpring(mouseY, { stiffness: 10, damping: 35 });

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
        Layer 1: Primary Cyan Signal (Fastest)
      */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-25 dark:opacity-20 blur-[120px]"
        style={{
          x: primaryX,
          y: primaryY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--color-brand-primary) 0%, transparent 70%)",
        }}
      />

      {/* 
        Layer 2: Deep Cerulean / Atlantic Blue (Medium Delay)
      */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-15 blur-[100px]"
        style={{
          x: secondaryX,
          y: secondaryY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
        }}
      />

      {/* 
        Layer 3: Mint / Aqua Ambient (Slowest, largest)
      */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-15 dark:opacity-10 blur-[130px]"
        style={{
          x: tertiaryX,
          y: tertiaryY,
          translateX: "-55%",
          translateY: "-45%",
          background:
            "radial-gradient(circle, var(--color-brand-success) 0%, transparent 70%)",
        }}
      />

      {/* 
        Layer 4: Electric Violet / Purple Accent (Deepest Delay, localized)
      */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-12 blur-[110px]"
        style={{
          x: quaternaryX,
          y: quaternaryY,
          translateX: "-40%",
          translateY: "-60%",
          background:
            "radial-gradient(circle, var(--color-electric-accent) 0%, transparent 70%)",
        }}
      />

      {/* Static Depth Orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[10%] left-[10%]"
      >
        <div className="w-[400px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full animate-float-orb" />
      </motion.div>

      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[10%] right-[10%]"
      >
        <div className="w-[500px] h-[500px] bg-brand-success/5 blur-[120px] rounded-full animate-float-orb-reverse" />
      </motion.div>
    </div>
  );
};

export default InteractiveBackground;
