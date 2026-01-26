import React from "react";
import { Section, Container } from "./ui/Layout";
import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const Philosophy: React.FC = () => {
  return (
    <Section
      id="philosophy"
      className="py-24 md:py-32 relative overflow-hidden bg-transparent"
    >
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <Badge
              variant="outline"
              className="mb-8 border-brand-primary/30 text-brand-primary uppercase tracking-[0.2em] bg-brand-primary/5"
            >
              Core Philosophy
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--foreground) tracking-tighter mb-8 leading-[1.1]">
              We Tailor the Solution to{" "}
              <span className="text-brand-primary">You</span>.
              <br />
              <span className="opacity-40">Not the Other Way Around.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-(--muted-foreground) font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {/* <p>
                AI agents are powerful, but they're not always perfect.
                Sometimes they need guidance, oversight, and that human touch.
              </p> */}
              <p className="text-(--foreground)">
                <strong className="text-brand-primary">AtomicX</strong> provides
                an <strong>extra layer of service</strong> that ensures{" "}
                <strong className="text-brand-primary">
                  you're well cared for
                </strong>
                —guaranteeing <strong>last-mile delivery</strong> of your AI
                agents. We're the{" "}
                <strong className="text-brand-primary">
                  final human layer
                </strong>{" "}
                your clients need, <strong>bridging the gap</strong> between
                automation and excellence.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="glass-primary"
                size="lg"
                onClick={() =>
                  window.open("https://atomicx.ravan.ai/book", "_blank")
                }
                className="w-full md:w-auto px-6 md:px-8 py-4 font-black tracking-wider md:tracking-widest rounded-2xl text-[10px] md:text-xs whitespace-normal md:whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  START YOUR ADAPTATION
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Right: Visual Metaphor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-full"
          >
            <div className="relative aspect-square rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 via-transparent to-brand-depth/20" />

              {/* Central Hub */}
              <div className="relative z-10 w-32 h-32 rounded-2xl bg-(--card) border border-white/10 flex items-center justify-center">
                <div className="text-4xl font-black text-(--foreground)">
                  YOU
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 -m-12 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 -m-24 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                {/* Satellites */}
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-20 w-12 h-12 bg-brand-primary/20 backdrop-blur-md rounded-xl border border-brand-primary/40 flex items-center justify-center text-xs font-bold text-brand-primary animate-pulse">
                  AI
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-32 w-12 h-12 bg-brand-link/20 backdrop-blur-md rounded-xl border border-brand-link/40 flex items-center justify-center text-xs font-bold text-brand-link animate-pulse delay-75">
                  CRM
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 w-12 h-12 bg-brand-success/20 backdrop-blur-md rounded-xl border border-brand-success/40 flex items-center justify-center text-xs font-bold text-brand-success animate-pulse delay-150">
                  VOICE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Philosophy;
