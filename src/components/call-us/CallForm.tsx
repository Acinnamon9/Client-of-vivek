import React from "react";
import { motion } from "framer-motion";
import { CountryInfo } from "./useCallLogic";

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
            className="relative w-full bg-(--card) dark:bg-white/5 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-(--foreground)/40 outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] backdrop-blur-md"
          />
        </div>

        <div className="group/input relative">
          <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500"></div>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative w-full bg-(--card) dark:bg-white/5 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-(--foreground)/40 outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] backdrop-blur-md"
          />
        </div>

        <div className="group/input relative flex gap-4">
          <div className="w-[104px] relative shrink-0">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="relative z-10 appearance-none w-full bg-(--card) dark:bg-white/5 border-none rounded-xl px-3 py-3.5 text-sm text-(--foreground) outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] font-mono text-center cursor-pointer backdrop-blur-md"
            >
              {countries.map((c) => (
                <option
                  key={`${c.code}-${c.label}`}
                  value={c.code}
                  className="bg-(--background) text-(--foreground)"
                >
                  {c.code} {c.label}
                </option>
              ))}
              <option
                value=""
                className="bg-(--background) text-(--foreground)"
              >
                Other
              </option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-(--muted-foreground)/50">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="relative z-10 w-full bg-(--card) dark:bg-white/5 border-none rounded-xl px-4 py-3.5 text-sm text-(--foreground) placeholder:text-(--foreground)/40 outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all font-mono shadow-inner backdrop-blur-md"
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
        <button
          type="submit"
          disabled={isCalling}
          className="w-full bg-[#ff5722] hover:bg-[#ff6235] hover:shadow-[10px_10px_25px_rgba(255,87,34,0.25)] active:scale-[0.98] text-white/90 font-medium py-5 rounded-2xl shadow-[6px_6px_20px_rgba(255,87,34,0.15),inset_1px_1px_0px_rgba(255,255,255,0.2)] transition-all duration-500 flex items-center justify-center gap-3 group/call disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-white/10"
        >
          {isCalling ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          ) : (
            <>
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center -ml-2 group-hover/call:bg-white/15 transition-all duration-300">
                📞
              </span>
              <span className="tracking-[0.12em] text-sm font-medium">
                INITIATE CALL
              </span>
            </>
          )}
        </button>
        <p className="text-center text-[10px] text-(--muted-foreground) mt-4 font-normal tracking-wide opacity-50">
          SECURE ENCRYPTED CONNECTION
        </p>
      </div>
    </motion.form>
  );
};

export default CallForm;
