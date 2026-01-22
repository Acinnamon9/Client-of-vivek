import React from "react";
import { motion } from "framer-motion";
import { CountryInfo } from "./useCallLogic";
import CountrySelector from "./CountrySelector";
import SpotlightEffect from "../ui/SpotlightEffect";

interface CallFormProps {
  countries: CountryInfo[];
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  countryCode: string;
  setCountryCode: (val: string) => void;
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  errorMsg: string;
  isCalling: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

const CallForm: React.FC<CallFormProps> = ({
  countries,
  name,
  setName,
  email,
  setEmail,
  countryCode,
  setCountryCode,
  phoneNumber,
  setPhoneNumber,
  errorMsg,
  isCalling,
  onSubmit,
}) => {
  return (
    <motion.form
      key="phone-form"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={onSubmit}
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
          <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="relative w-full bg-white/5 dark:bg-zinc-800/40 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-white/20 placeholder:font-light placeholder:tracking-wide outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md"
          />
        </div>

        <div className="group/input relative">
          <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative w-full bg-white/5 dark:bg-zinc-800/40 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-white/20 placeholder:font-light placeholder:tracking-wide outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md"
          />
        </div>

        <div className="group/input relative flex gap-4">
          <CountrySelector
            countries={countries}
            selectedCode={countryCode}
            onSelect={setCountryCode}
          />

          <div className="relative flex-1">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="relative z-10 w-full bg-white/5 dark:bg-zinc-800/40 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-white/20 placeholder:font-light placeholder:tracking-wide outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all font-mono shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md"
            />
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="text-brand-action text-[10px] text-center bg-brand-action/5 py-2 rounded-lg border border-brand-action/20">
          {errorMsg}
        </div>
      )}

      <div className="mt-auto pt-6">
        <SpotlightEffect
          as="button"
          type="submit"
          disabled={isCalling}
          className="w-full bg-[#10b981]/10 hover:bg-[#10b981]/15 active:scale-[0.98] text-[#10b981] font-bold py-5 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_0_30px_rgba(255,255,255,0.1),0_10px_20px_rgba(16,185,129,0.1)] transition-all duration-300 flex items-center justify-center gap-3 group/call disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-[#10b981]/20 backdrop-blur-md relative overflow-hidden"
        >
          {isCalling ? (
            <div className="w-5 h-5 border-2 border-[#10b981]/30 border-t-[#10b981] rounded-full animate-spin relative z-10"></div>
          ) : (
            <>
              <span className="w-9 h-9 rounded-full bg-[#10b981]/10 flex items-center justify-center -ml-2 group-hover/call:scale-110 transition-all duration-300 shadow-sm shadow-[#10b981]/20 relative z-10">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#10b981]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className="tracking-[0.12em] text-sm text-[#10b981] relative z-10">
                INITIATE CALL
              </span>
            </>
          )}
        </SpotlightEffect>
        <p className="text-center text-[10px] text-(--muted-foreground) mt-4 font-normal tracking-wide opacity-50">
          SECURE ENCRYPTED CONNECTION
        </p>
      </div>
    </motion.form>
  );
};

export default CallForm;
