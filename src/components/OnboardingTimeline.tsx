import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { cn } from "../lib/utils";
import { CheckCircle2, Clock, Rocket, Zap, Search } from "lucide-react";

const TIMELINE_STEPS = [
  {
    id: "audit",
    title: "Discovery Audit",
    description: "Deep dive into your current lead flow bottlenecks.",
    day: "Hour 0-4",
    icon: <Search className="w-5 h-5" />,
    position: "top",
  },
  {
    id: "strategy",
    title: "Custom Strategy",
    description: "We architect the exact AI agents you need.",
    day: "Hour 5-12",
    icon: <Zap className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "build",
    title: "System Build",
    description: "Configuring your voice, chat, and nurture bots.",
    day: "Hour 13-36",
    icon: <Clock className="w-5 h-5" />,
    position: "top",
  },
  {
    id: "train",
    title: "Knowledge Training",
    description: "Feeding the AI your scripts, objections, and FAQs.",
    day: "Hour 37-47",
    icon: <CheckCircle2 className="w-5 h-5" />,
    position: "bottom",
  },
  {
    id: "launch",
    title: "Live Launch",
    description: "Your AI workforce goes live. Leads convert instantly.",
    day: "Hour 48",
    icon: <Rocket className="w-5 h-5" />,
    position: "top",
  },
];

const OnboardingTimeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Calculate progress based on hoveredIndex (0 to 4)
  // Each segment is 25% of the total 100% (for 4 segments between 5 nodes)
  // Progress = (hoveredIndex / 4) * 100
  const progressPercent =
    hoveredIndex !== null ? hoveredIndex / (TIMELINE_STEPS.length - 1) : 0;

  return (
    <Section
      id="timeline"
      className="bg-transparent py-32 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--foreground)/5 border border-(--foreground)/10 mb-6 backdrop-blur-md"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full border-2 border-(--background) bg-(--foreground)/10 flex items-center justify-center text-[8px] font-bold text-(--foreground)`}
                >
                  AI
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-(--foreground)/80">
              White-glove Onboarding
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-(--foreground) mb-6"
          >
            Up and running in{" "}
            <span className="text-brand-primary">48 hours</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto py-48">
          {/* Main Horizontal Line (Background) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-(--foreground)/10 -translate-y-1/2 rounded-full hidden md:block" />

          {/* Progress Line (Animated & Interactive) */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-1/2 left-0 h-1 bg-brand-primary -translate-y-1/2 rounded-full origin-left hidden md:block shadow-[0_0_20px_var(--color-brand-primary)] z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative">
            {TIMELINE_STEPS.map((step, index) => {
              const isActive = hoveredIndex !== null && index <= hoveredIndex;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center group/item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Mobile: Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-(--foreground)/10 md:hidden" />

                  {/* Desktop: Node Dot */}
                  <motion.div
                    className={cn(
                      "hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-(--background) border-2 rounded-full z-10 transition-all duration-300",
                      isActive
                        ? "border-brand-primary scale-125 shadow-[0_0_15px_var(--color-brand-primary)]"
                        : "border-(--foreground)/20 scale-100",
                    )}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20" />
                    )}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: step.position === "top" ? 20 : -20,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={cn(
                      "relative ml-16 md:ml-0 md:w-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer",
                      "md:absolute md:left-1/2 md:-translate-x-1/2 md:w-64",
                      step.position === "top"
                        ? "md:bottom-full md:mb-12"
                        : "md:top-full md:mt-12",
                      isActive
                        ? "bg-(--foreground)/10 border-brand-primary/50 shadow-2xl shadow-brand-primary/10"
                        : "bg-(--foreground)/5 border-(--foreground)/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100",
                    )}
                  >
                    {/* Connecting Line (Desktop) */}
                    <div
                      className={cn(
                        "hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-12 transition-colors duration-300",
                        step.position === "top" ? "top-full" : "bottom-full",
                        isActive
                          ? "bg-linear-to-b from-brand-primary/50 to-transparent"
                          : "bg-(--foreground)/10",
                      )}
                    />

                    {/* Mobile: Icon Node */}
                    <div
                      className={cn(
                        "absolute -left-10 md:hidden w-10 h-10 rounded-full bg-(--background) border flex items-center justify-center z-10 transition-all duration-300",
                        isActive
                          ? "border-brand-primary text-brand-primary shadow-[0_0_15px_var(--color-brand-primary)]"
                          : "border-(--foreground)/20 text-(--foreground)/20",
                      )}
                    >
                      {step.icon}
                    </div>

                    <div
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-widest mb-2 transition-colors duration-300",
                        isActive
                          ? "text-brand-primary"
                          : "text-(--muted-foreground)",
                      )}
                    >
                      {step.day}
                    </div>
                    <h3
                      className={cn(
                        "text-lg font-bold mb-2 transition-colors duration-300",
                        isActive
                          ? "text-(--foreground)"
                          : "text-(--muted-foreground)",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed transition-colors duration-300",
                        isActive
                          ? "text-(--foreground)/80"
                          : "text-(--muted-foreground)/60",
                      )}
                    >
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Mobile Spacer */}
                  <div className="h-4 md:hidden" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OnboardingTimeline;
