import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
// import { Card } from "./ui/Card"; // Using custom phone card
import Button from "./ui/Button";
import { containerVariants, itemVariants } from "../animations";

const CallUs: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMgs, setErrorMsg] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const canMakeCall = () => {
    const today = new Date().toDateString();
    const storageKey = `daily_call_count_${today}`;
    const count = parseInt(localStorage.getItem(storageKey) || "0", 10);
    return count < 3;
  };

  const incrementCallCount = () => {
    const today = new Date().toDateString();
    const storageKey = `daily_call_count_${today}`;
    const count = parseInt(localStorage.getItem(storageKey) || "0", 10);
    localStorage.setItem(storageKey, (count + 1).toString());
  };

  const handleCall = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Bot detection
    const hp = (document.getElementById("website_hp") as HTMLInputElement)
      ?.value;
    if (hp) {
      console.warn("Bot detected.");
      return;
    }

    if (!name.trim() || !email.trim() || !phoneNumber.trim()) {
      setErrorMsg("Required details missing.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Invalid email format.");
      return;
    }

    if (phoneNumber.length < 7) {
      setErrorMsg("Invalid phone number.");
      return;
    }

    if (!canMakeCall()) {
      setErrorMsg("Daily limit reached (3/3).");
      return;
    }

    setIsCalling(true);

    const fullNumber = phoneNumber.startsWith("+")
      ? phoneNumber
      : `+1${phoneNumber}`;

    const payload = {
      email: email,
      receiver_number: fullNumber,
      name: name,
      new_agent: 172,
      access_key: "testmycall",
      calling_number: "+13364438645",
    };

    try {
      const res = await fetch(
        "https://app.closerx.ai/api/testcall/voizerfreeaccount/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      await res.json();
      incrementCallCount();
      setIsCalling(false);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Speed Call Error:", err);
      let msg = "Connection failed. Retry?";
      if (err.message.includes("401") || err.message.includes("403")) {
        msg = "Auth Error.";
      } else if (err.message.includes("429")) {
        msg = "Too many requests.";
      }
      setErrorMsg(msg);
      setIsCalling(false);
    }
  };

  return (
    <Section className="py-24 sm:py-32 bg-linear-to-b from-(--background) to-(--muted) overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Container className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
        {/* Left Side: Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8 mx-auto lg:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">
              Live AI Demonstration
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter text-(--foreground) leading-[1.05]"
          >
            Don't believe us? <br />
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent italic">
              Picking up the phone?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-(--muted-foreground) mb-10 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Experience the speed and human-like conversation of our AI agents
            firsthand. Enter your details into the secure terminal.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-(--background) bg-(--muted) overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-(--muted-foreground)">
              <strong className="text-(--foreground)">128+</strong> calls
              initiated today
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Futuristic Phone Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group perspective-1000"
        >
          {/* Phone Frame */}
          <div className="relative w-[340px] sm:w-[380px] h-[720px] rounded-[50px] bg-[#1a1a1a] p-3 shadow-2xl shadow-brand-primary/20 border-4 border-[#2a2a2a] ring-1 ring-white/10 transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
            {/* Screen Container */}
            <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden flex flex-col isolate">
              {/* Gloss Reflection */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none z-20 opacity-50"></div>

              {/* Ambient Background Glow */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,87,34,0.1)_180deg,transparent_360deg)] animate-[rotate-slow_10s_linear_infinite] opacity-30 pointer-events-none z-0"></div>
              <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-black/95 z-0 backdrop-blur-3xl"></div>

              {/* Status Bar */}
              <div className="relative z-30 px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-white/60">
                <span>{currentTime}</span>
                <div className="flex gap-1.5 items-center">
                  <div className="flex gap-0.5 items-end h-2.5">
                    <div className="w-0.5 h-1 bg-white/60"></div>
                    <div className="w-0.5 h-1.5 bg-white/60"></div>
                    <div className="w-0.5 h-2 bg-white/60"></div>
                    <div className="w-0.5 h-2.5 bg-white/60"></div>
                  </div>
                  <span className="text-[9px]">5G</span>
                  <div className="w-5 h-2.5 border border-white/30 rounded-[2px] relative">
                    <div className="absolute inset-0.5 bg-white/80 w-[80%]"></div>
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="relative z-10 flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto no-scrollbar">
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl mx-auto flex items-center justify-center mb-4 border border-brand-primary/30 shadow-[0_0_30px_rgba(255,87,34,0.3)]">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-white font-bold text-xl tracking-tight">
                    AI Dialer
                  </h3>
                  <p className="text-white/40 text-xs mt-1">
                    Secure Connection Request
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="phone-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleCall}
                      className="flex flex-col gap-4 flex-1"
                    >
                      <input
                        type="text"
                        id="website_hp"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="space-y-4">
                        <div className="group/input relative">
                          <div className="absolute inset-0 bg-brand-primary/20 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all"
                          />
                        </div>

                        <div className="group/input relative">
                          <div className="absolute inset-0 bg-brand-primary/20 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all"
                          />
                        </div>

                        <div className="group/input relative">
                          <div className="absolute inset-0 bg-brand-primary/20 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
                          <input
                            type="tel"
                            placeholder="Phone Number (+1...)"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all font-mono"
                          />
                        </div>
                      </div>

                      {errorMgs && (
                        <div className="text-red-400 text-[10px] text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                          {errorMgs}
                        </div>
                      )}

                      <div className="mt-auto pt-6">
                        <button
                          type="submit"
                          disabled={isCalling}
                          className="w-full bg-brand-primary hover:bg-brand-accent active:scale-95 text-white font-bold py-4 rounded-2xl shadow-[0_10px_30px_rgba(255,87,34,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group/call disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {isCalling ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          ) : (
                            <>
                              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -ml-2 group-hover/call:bg-white/30 transition-colors">
                                📞
                              </span>
                              <span className="tracking-wide text-sm">
                                INITIATE CALL
                              </span>
                            </>
                          )}
                        </button>
                        <p className="text-center text-[10px] text-white/30 mt-3 font-medium tracking-wide">
                          SECURE ENCRYPTED CONNECTION
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex-1 flex flex-col items-center justify-center text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(34,197,94,0.4)] animate-pulse">
                        <span className="text-3xl">✓</span>
                      </div>
                      <h4 className="text-white font-bold text-2xl mb-2">
                        Connecting...
                      </h4>
                      <p className="text-white/60 text-sm mb-8 px-4">
                        Agent is dialing{" "}
                        <span className="text-white font-mono">
                          {phoneNumber}
                        </span>
                      </p>

                      <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 mb-8">
                        <div className="flex justify-between text-[10px] text-white/40 mb-2 uppercase tracking-wider">
                          <span>Status</span>
                          <span className="text-green-400">Active</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[60%] animate-[shine-slow_2s_linear_infinite]"></div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setPhoneNumber("");
                          setName("");
                          setEmail("");
                        }}
                        className="text-white/40 hover:text-white text-xs font-medium transition-colors"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CallUs;
