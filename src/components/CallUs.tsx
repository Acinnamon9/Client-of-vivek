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

  return (
    <Section
      id="demo"
      className="py-24 sm:py-32 bg-linear-to-b from-(--background) to-(--muted) overflow-hidden relative"
    >
      {/* Electric Ambience Background - High Energy Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [-300, 400, -150, 250, 0],
            y: [-150, 300, -75, 200, 0],
            scale: [1, 1.6, 0.7, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-brand-primary/25 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [400, -300, 200, -400, 0],
            y: [300, -200, 150, -300, 0],
            scale: [1.4, 0.6, 1.2, 0.8, 1.4],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-20%] w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [-500, 500],
            y: [400, -400],
            scale: [0.5, 1.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[90px]"
        />
        <motion.div
          animate={{
            x: [0, -450, 450, 0],
            y: [0, 300, -300, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-brand-primary/15 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.9, 0.3],
            x: [200, -200, 200],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-brand-primary/25 rounded-full blur-[80px]"
        />
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
