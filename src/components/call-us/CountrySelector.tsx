import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CountryInfo } from "./useCallLogic";
import { cn } from "../../lib/utils";

interface CountrySelectorProps {
  countries: CountryInfo[];
  selectedCode: string;
  onSelect: (code: string) => void;
  className?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  countries,
  selectedCode,
  onSelect,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countries.find((c) => c.code === selectedCode) || countries[0];

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative z-20 shrink-0", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center gap-2 w-[104px] bg-white/5 dark:bg-zinc-800/40 border-none rounded-xl px-2 py-3.5 text-sm text-(--foreground) outline-none transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md cursor-pointer hover:bg-white/10 dark:hover:bg-zinc-700/50"
      >
        {selectedCountry && (
          <>
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.label}
              className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
            />
            <span className="font-mono text-xs">{selectedCountry.label}</span>
          </>
        )}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={cn(
            "transition-transform duration-300 opacity-50",
            isOpen && "rotate-180",
          )}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-[280px] bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-top-left"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-white/5">
              <input
                autoFocus
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border-none rounded-lg px-3 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all shadow-inner"
              />
            </div>

            {/* List */}
            <div className="max-h-[300px] overflow-y-auto no-scrollbar p-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => (
                  <button
                    key={`${c.code}-${c.label}`}
                    type="button"
                    onClick={() => {
                      onSelect(c.code);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs transition-colors hover:bg-white/5",
                      selectedCode === c.code &&
                        "bg-brand-primary/10 text-brand-primary",
                    )}
                  >
                    <img
                      src={c.flag}
                      alt={c.label}
                      className="w-5 h-3.5 object-cover rounded-sm"
                    />
                    <span className="font-bold w-6">{c.label}</span>
                    <span className="flex-1 truncate opacity-70">{c.name}</span>
                    <span className="font-mono opacity-50">{c.code}</span>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-xs text-white/30 italic">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountrySelector;
