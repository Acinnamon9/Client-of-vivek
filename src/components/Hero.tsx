import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number and suffix (e.g., "100k+" -> 100, "k+")
  const numericMatch = value.match(/(\d+)/);
  const suffixMatch = value.match(/([^\d].*)/);

  const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(
    spring,
    (latest) => Math.floor(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (isInView) {
      spring.set(targetValue);
    }
  }, [isInView, spring, targetValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Hero: React.FC = () => {
  const [badgeIndex, setBadgeIndex] = useState(0);
  const badgeLines = [
    "Proud to be Sponsoring Global AI Show",
    "Abu Dhabi • December 2025",
    "World's First AI Sales Workforce",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badgeLines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-linear-to-b from-[#faf8f5] to-[#f5ede5] py-20 px-5 min-h-screen relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <motion.div
        className="max-w-[900px] mx-auto text-center flex flex-col items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 bg-white px-7 py-3.5 rounded-full mb-7 border border-[#ff5722]/25 shadow-[0_4px_16px_rgba(255,87,34,0.12)] min-w-[420px] transition-all duration-300 animate-[badge-float_4s_ease-in-out_infinite] text-left"
        >
          <span className="w-2 h-2 bg-[#ff5722] rounded-full animate-[pulse-dot_2s_infinite]"></span>
          <div className="relative h-[18px] overflow-hidden flex-1">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={badgeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full text-[13px] font-extrabold text-[#ff5722] uppercase tracking-[0.08em]"
                  style={{
                    position: "relative",
                    display: "block",
                  }}
                >
                  {badgeLines[badgeIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(38px,5.5vw,62px)] font-black leading-[1.08] text-black mb-8 tracking-[-0.03em]"
        >
          Deploy a Full AI Sales & Marketing Team That Books
          <span className="text-[#ff5722] bg-linear-to-br from-[#ff5722] to-[#ff8a65] bg-clip-text text-transparent relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[5px] after:bg-linear-to-r after:from-[#ff5722] after:to-[#ff8a65] after:opacity-35 after:rounded-[3px] after:animate-[expand-line_1s_ease-out_0.3s_forwards] after:origin-left after:scale-x-0">
            {" "}
            300-500 Qualified Appointments{" "}
          </span>
          Every Month — On Autopilot
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[clamp(18px,2.3vw,22px)] text-[#444] leading-[1.65] mx-auto mb-10 max-w-[700px] font-normal"
        >
          <strong className="text-black font-extrabold">
            Never miss another lead.
          </strong>{" "}
          Your AI team calls within
          <span className="text-black font-extrabold bg-linear-to-b from-transparent from-60% via-[#ff5722]/20 via-60% to-[#ff5722]/20 px-1 rounded-[2px]">
            {" "}
            3 minutes
          </span>
          , follows up
          <span className="text-black font-extrabold bg-linear-to-b from-transparent from-60% via-[#ff5722]/20 via-60% to-[#ff5722]/20 px-1 rounded-[2px]">
            {" "}
            12+ times
          </span>
          , and books appointments
          <span className="text-black font-extrabold bg-linear-to-b from-transparent from-60% via-[#ff5722]/20 via-60% to-[#ff5722]/20 px-1 rounded-[2px]">
            {" "}
            while you sleep
          </span>{" "}
          — all for 80% less than hiring SDRs.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-5 mb-10 flex-wrap w-full"
        >
          {[
            { label: "Leads Generated", value: "100k+" },
            { label: "Qualified Leads", value: "20000" },
            { label: "Appointments", value: "9000" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[100px] p-5 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5 text-center transition-all duration-400 relative overflow-hidden group hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_12px_28px_rgba(255,87,34,0.15)] hover:border-[#ff5722]/20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#ff5722]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="text-4xl font-black text-[#ff5722] block mb-1.5 tracking-[-0.02em] relative z-10">
                <AnimatedNumber value={item.value} />
              </div>
              <div className="text-[12px] text-[#666] uppercase tracking-[0.08em] font-bold relative z-10">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-5 mb-9 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full text-lg font-bold transition-all duration-400 relative overflow-hidden z-10 bg-[#d33200] text-white shadow-[0_10px_20px_rgba(211,50,0,0.2)] group hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
          >
            Enterprise Demo
            <span className="w-2.5 h-2.5 bg-white rounded-full relative"></span>
            <span className="absolute w-[300%] pb-[300%] rounded-full bg-white/15 top-1/2 left-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 scale-0 pointer-events-none group-hover:animate-[pulse-from-dot_1.2s_cubic-bezier(0,0.55,0.45,1)_infinite]"></span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full text-lg font-bold transition-all duration-400 relative overflow-hidden z-10 bg-[#2d2d2d] text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] group hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
          >
            Join Waitlist
            <span className="w-2.5 h-2.5 border-2 border-[#555] rounded-full bg-transparent relative"></span>
            <span className="absolute w-[300%] pb-[300%] rounded-full bg-white/15 top-1/2 left-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 scale-0 pointer-events-none group-hover:animate-[pulse-from-dot_1.2s_cubic-bezier(0,0.55,0.45,1)_infinite]"></span>
          </motion.button>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          className="list-none flex flex-col items-center gap-4 w-full"
        >
          {[
            "Watch 3 real appointments get booked during your demo",
            "Get your custom implementation plan in 48 hours",
            "30-day money-back guarantee - zero risk",
          ].map((benefit, idx) => (
            <motion.li
              key={idx}
              whileHover={{ x: 8 }}
              className="text-[#555] text-base flex items-center gap-3.5 px-5 py-4 bg-white/60 rounded-xl transition-all duration-300 border border-black/5 font-medium hover:bg-white hover:shadow-[0_4px_16px_rgba(255,87,34,0.1)] hover:border-[#ff5722]/20"
            >
              <span className="w-7 h-7 bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-full flex items-center justify-center text-white text-base font-black shrink-0 shadow-[0_4px_12px_rgba(255,87,34,0.3)]">
                ✓
              </span>
              {benefit}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Hero;
