import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCallLogic } from "../call-us/useCallLogic";
import PhoneFrame from "../call-us/PhoneFrame";
import CallForm from "../call-us/CallForm";
import CallingAnimation from "../call-us/CallingAnimation";
import SuccessScreen from "../call-us/SuccessScreen";
import SpotlightEffect from "../ui/SpotlightEffect";

const HeroPhone: React.FC = () => {
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
    <div className="relative flex items-center justify-center min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-0 md:-ml-12 lg:-ml-24 xl:-ml-32">
      {/* Phone Interface */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -10 }}
        animate={{
          opacity: 1,
          rotateY: 0,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          rotateY: { duration: 0.8, delay: 0.3 },
        }}
        className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-0"
      >
        <PhoneFrame currentTime={currentTime}>
          <div className="mb-6 text-center">
            {!isCalling && (
              <>
                <SpotlightEffect className="w-14 h-14 bg-brand-orange/5 dark:bg-white/5 rounded-2xl mx-auto flex items-center justify-center mb-3 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),inset_0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-md">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-orange relative z-10 drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </SpotlightEffect>
                <h3 className="text-(--foreground) font-medium text-lg tracking-tight">
                  AI Dialer
                </h3>
                <p className="text-(--foreground)/40 text-[9px] mt-1 font-normal tracking-wider uppercase">
                  Try it now — Enter your number
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
    </div>
  );
};

export default HeroPhone;
