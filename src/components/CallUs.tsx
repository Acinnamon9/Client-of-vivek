import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { containerVariants, itemVariants } from "../animations";
import { useCallLogic } from "./call-us/useCallLogic";
import PhoneFrame from "./call-us/PhoneFrame";
import CallForm from "./call-us/CallForm";
import CallingAnimation from "./call-us/CallingAnimation";
import SuccessScreen from "./call-us/SuccessScreen";

const CallUs: React.FC = () => {
  const {
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
              The AI will call YOU.
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
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl mx-auto flex items-center justify-center mb-4 border border-brand-primary/20 shadow-[0_0_30px_rgba(255,87,34,0.15)]">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-(--foreground) font-bold text-xl tracking-tight">
                    AI Dialer
                  </h3>
                  <p className="text-(--muted-foreground) text-xs mt-1">
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
