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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full border-2 border-[#0A0A0A] bg-zinc-800 flex items-center justify-center text-[8px] font-bold`}
                >
                  AI
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-white/80">
              White-glove Onboarding
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6"
          >
            Up and running in{" "}
            <span className="text-brand-primary">48 hours</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto py-48">
          {/* Main Horizontal Line (Background) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full hidden md:block" />

          {/* Progress Line (Animated) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 left-0 w-full h-1 bg-brand-primary -translate-y-1/2 rounded-full origin-left hidden md:block shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 relative">
            {TIMELINE_STEPS.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center group"
              >
                {/* Mobile: Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10 md:hidden" />

                {/* Desktop: Node Dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0A0A] border-2 border-brand-primary rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-150 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-brand-primary rounded-full animate-ping opacity-20" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: step.position === "top" ? 20 : -20,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={cn(
                    "relative ml-16 md:ml-0 md:w-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 cursor-default",
                    "md:absolute md:left-1/2 md:-translate-x-1/2 md:w-64",
                    step.position === "top"
                      ? "md:bottom-full md:mb-12"
                      : "md:top-full md:mt-12",
                  )}
                >
                  {/* Connecting Line (Desktop) */}
                  <div
                    className={cn(
                      "hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-brand-primary/50 to-transparent h-12",
                      step.position === "top" ? "top-full" : "bottom-full",
                    )}
                  />

                  {/* Mobile: Icon Node */}
                  <div className="absolute -left-10 md:hidden w-10 h-10 rounded-full bg-black border border-brand-primary/50 flex items-center justify-center z-10 text-brand-primary shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    {step.icon}
                  </div>

                  <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-2">
                    {step.day}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Mobile Spacer */}
                <div className="h-4 md:hidden" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OnboardingTimeline;
