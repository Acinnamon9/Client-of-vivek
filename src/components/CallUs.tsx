import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants, itemVariants } from "../animations";
import { useCallLogic } from "./call-us/useCallLogic";
import PhoneFrame from "./call-us/PhoneFrame";
import CallForm from "./call-us/CallForm";
import CallingAnimation from "./call-us/CallingAnimation";
import SuccessScreen from "./call-us/SuccessScreen";
import SpotlightEffect from "./ui/SpotlightEffect";

const CallUs: React.FC = () => {
  const {
    countries,
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    name,
    setName,
    email,
    setEmail,
    isCalling,
    isSubmitted,
    errorMsg,
    currentTime,
    loadingText,
    handleCall,
    resetForm,
  } = useCallLogic();

  const [mousePos, setMousePos] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const sectionRef = React.useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <Section
      id="demo"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 sm:py-32 bg-linear-to-b from-(--background) to-(--muted) overflow-hidden relative group/section"
    >
      {/* Interactive Background Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse Spotlight - more intense */}
        <div
          className="absolute inset-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-700 z-0"
          style={{
            background: mousePos
              ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 87, 34, 0.12), transparent 80%)`
              : "",
          }}
        />

        {/* Dynamic Orbs - Bolder and more reactive */}
        <motion.div
          animate={{
            x: mousePos ? mousePos.x * 0.08 - 150 : 0,
            y: mousePos ? mousePos.y * 0.08 - 150 : 0,
            opacity: mousePos ? 0.8 : 0.4,
            scale: mousePos ? [1.1, 1.15, 1.1] : 1,
          }}
          transition={{
            x: { type: "spring", damping: 30, stiffness: 40, mass: 1.5 },
            y: { type: "spring", damping: 30, stiffness: 40, mass: 1.5 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/6 left-1/6 w-[650px] h-[650px] bg-brand-primary/20 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{
            x: mousePos ? mousePos.x * -0.06 + 150 : 0,
            y: mousePos ? mousePos.y * -0.06 + 150 : 0,
            opacity: mousePos ? 0.6 : 0.3,
            scale: mousePos ? [1.2, 1.25, 1.2] : 1.1,
          }}
          transition={{
            x: { type: "spring", damping: 35, stiffness: 30, mass: 2 },
            y: { type: "spring", damping: 35, stiffness: 30, mass: 2 },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="absolute bottom-1/6 right-1/6 w-[750px] h-[750px] bg-brand-primary/15 rounded-full blur-[130px]"
        />

        {/* Additional "Energy" Layer */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,87,34,0.1),transparent_70%)]" />
      </div>

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
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 tracking-tight text-(--foreground) leading-[1.05]"
          >
            Don't believe us? <br />
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent italic">
              The AI will call YOU.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-(--muted-foreground) opacity-60 font-normal mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Experience the speed and human-like conversation of our AI agents
            firsthand. Enter your details into the secure terminal.
          </motion.p>
        </motion.div>

        {/* Right Side: Phone Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group perspective-1000"
        >
          <PhoneFrame currentTime={currentTime}>
            <div className="mb-8 text-center">
              {!isCalling && (
                <>
                  <SpotlightEffect className="w-16 h-16 bg-brand-primary/5 dark:bg-white/5 rounded-2xl mx-auto flex items-center justify-center mb-4 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),inset_0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-md">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary relative z-10 drop-shadow-[0_0_10px_rgba(255,87,34,0.3)]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </SpotlightEffect>
                  <h3 className="text-(--foreground) font-medium text-xl tracking-tight">
                    AI Dialer
                  </h3>
                  <p className="text-(--foreground)/40 text-[10px] mt-1 font-normal tracking-wider uppercase">
                    Secure Connection Request
                  </p>
                </>
              )}
            </div>

            <AnimatePresence mode="wait">
              {isCalling ? (
                <CallingAnimation loadingText={loadingText} />
              ) : !isSubmitted ? (
                <CallForm
                  countries={countries}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  errorMsg={errorMsg}
                  isCalling={isCalling}
                  onSubmit={handleCall}
                />
              ) : (
                <SuccessScreen
                  countryCode={countryCode}
                  phoneNumber={phoneNumber}
                  onDismiss={resetForm}
                />
              )}
            </AnimatePresence>
          </PhoneFrame>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CallUs;
