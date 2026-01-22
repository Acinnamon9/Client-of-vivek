import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
// Custom wrap function: (value, min, max)
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
import { useRef, useEffect } from "react";
import { workforceRoles } from "../constants/workforceData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";
import RoleCard from "./workforce/RoleCard";

/**
 * Workforce Component
 * Presents the AI Workforce as a high-end command center.
 */
const Workforce: React.FC = () => {
  const baseX = useMotionValue(0);
  const isHovered = useRef(false);
  const isDragging = useRef(false);

  const x = useSpring(baseX, {
    damping: 50,
    stiffness: 400,
  });

  const wrappedX = useTransform(x, (v) => `${wrap(-25, -50, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!isHovered.current && !isDragging.current) {
      baseX.set(baseX.get() - 0.5 * (delta / 16));
    }
  });

  return (
    <Section
      id="workforce"
      className="font-jakarta bg-(--background) py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-[grid-size:40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
          }}
        ></div>
      </div>

      <Container className="max-w-7xl relative z-10">
        {/* Header Section: Technical Identification */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-linear-to-r from-transparent to-brand-primary/40"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-brand-primary uppercase">
              Operational Fleet
            </span>
            <div className="h-px w-10 bg-linear-to-l from-transparent to-brand-primary/40"></div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.9] mb-8">
            Your 24/7 <br />
            <span className="text-brand-primary italic">AI Salesforce</span>
          </h2>

          <p className="text-lg md:text-xl text-(--muted-foreground) leading-relaxed font-medium max-w-2xl mx-auto">
            De-risk your growth by replacing manual overhead with
            <span className="text-white">
              {" "}
              precision-engineered digital agents
            </span>{" "}
            that never sleep, never miss a lead, and never underperform.
          </p>
        </div>

        {/* Workforce Marquee: Truly Infinite Interactive Fleet */}
        <div
          className="group/marquee relative -mx-6 sm:-mx-12 mb-24 cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseEnter={() => (isHovered.current = true)}
          onMouseLeave={() => (isHovered.current = false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-(--background) via-(--background)/90 to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-(--background) via-(--background)/90 to-transparent z-20"></div>

          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/marquee:opacity-100 transition-all duration-500 pointer-events-none z-30">
            <div className="px-5 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full backdrop-blur-md flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">
                Drag to Navigate Fleet
              </span>
            </div>
          </div>

          <motion.div
            className="flex gap-8 px-6 sm:px-12"
            style={{ x: wrappedX, width: "fit-content" }}
            drag="x"
            onDragStart={() => (isDragging.current = true)}
            onDragEnd={() => (isDragging.current = false)}
            onDrag={(e, info) => {
              baseX.set(baseX.get() + info.delta.x * 0.02);
            }}
          >
            {[
              ...workforceRoles,
              ...workforceRoles,
              ...workforceRoles,
              ...workforceRoles,
            ].map((role, idx) => (
              <div
                key={`${role.id}-${idx}`}
                className="w-[85vw] md:w-[600px] shrink-0 select-none"
              >
                <RoleCard role={role} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Global Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="xl"
              className="px-12 md:px-20 h-16 md:h-20 text-lg md:text-xl font-black tracking-widest rounded-2xl shadow-2xl shadow-brand-primary/20"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              DEPLOY YOUR AI FORWARD FLEET
            </Button>
            <p className="mt-8 text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.4em] opacity-50">
              Initial setup completed in under 72 hours
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Atmospheric Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,87,34,0.03),transparent_70%)] pointer-events-none"></div>
    </Section>
  );
};

export default Workforce;
