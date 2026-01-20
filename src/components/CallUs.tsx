import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { Card } from "./ui/Card";
import Button from "./ui/Button";
import { containerVariants, itemVariants } from "../animations";

const CallUs: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCall = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalling(true);

    // Simulate AI processing / connection
    setTimeout(() => {
      setIsCalling(false);
      setIsSubmitted(true);
    }, 2500);
  };

  return (
    <Section className="py-24 sm:py-32 bg-linear-to-b from-(--background) to-(--muted) overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-link/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <Container className="relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">
              Live AI Demonstration
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter text-(--foreground) leading-[1.1]"
          >
            Dont believe us? <br />
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent italic">
              Let our AI agent call you right now.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-(--muted-foreground) mb-12 max-w-2xl mx-auto font-medium"
          >
            Trust the AI with your contact details and it will call you within 5
            minutes.
          </motion.p>

          <motion.div variants={itemVariants} className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="p-2 sm:p-2 bg-(--card)/40 backdrop-blur-2xl border-brand-primary/10 shadow-2xl shadow-brand-primary/5 group transition-all duration-500 hover:border-brand-primary/30">
                    <form
                      onSubmit={handleCall}
                      className="flex flex-col sm:flex-row gap-2"
                    >
                      <div className="relative flex-1">
                        <input
                          type="tel"
                          placeholder="Enter your phone number..."
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-transparent border-none focus:ring-0 px-6 py-4 text-lg font-semibold text-(--foreground) placeholder:text-(--muted-foreground)/40 outline-none"
                        />
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-brand-primary/20 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700"></div>
                      </div>
                      <Button
                        type="submit"
                        size="xl"
                        className="px-10 h-14 shadow-xl shadow-brand-primary/20 relative overflow-hidden group/btn"
                        disabled={isCalling}
                      >
                        <span className="relative z-10">
                          {isCalling ? "Initiating Call..." : "Call Me Now"}
                        </span>
                        {isCalling && (
                          <motion.div
                            className="absolute inset-0 bg-brand-primary-light"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        )}
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 rounded-3xl bg-brand-success/5 border border-brand-success/20 backdrop-blur-md"
                >
                  <div className="w-16 h-16 bg-brand-success rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg shadow-brand-success/20">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-(--foreground) mb-2">
                    Request Received!
                  </h3>
                  <p className="text-(--muted-foreground)">
                    Our AI agent is warming up. <br />
                    Expect a call at{" "}
                    <span className="text-brand-success font-bold">
                      {phoneNumber}
                    </span>{" "}
                    within 5 minutes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs font-black uppercase tracking-widest text-brand-primary hover:underline"
                  >
                    Use a different number
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-(--background) bg-(--muted) overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="user"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-(--muted-foreground)">
                42 calls in last hour
              </span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-(--border)"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-brand-success tracking-wide uppercase">
                Global Support
              </span>
              <span className="text-xs text-(--muted-foreground)/60">•</span>
              <span className="text-sm font-medium text-(--muted-foreground)">
                Ultra-low latency
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CallUs;
