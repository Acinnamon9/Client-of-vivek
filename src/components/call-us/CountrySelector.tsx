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
        className="relative flex items-center justify-center gap-2 w-[104px] bg-brand-primary/12 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-2 py-3.5 text-sm text-(--foreground) outline-none transition-all shadow-[inset_0_1px_3px_rgba(0,0,0,0.04),inset_0_0_15px_rgba(255,255,255,0.02)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] backdrop-blur-md cursor-pointer hover:bg-brand-primary/20 dark:hover:bg-white/10"
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
            className="absolute top-full left-0 mt-3 w-[260px] bg-(--card) border border-(--border) rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden origin-top-left z-50 backdrop-blur-xl"
          >
            {/* Search Input */}
            <div className="p-4 border-b border-(--border)">
              <input
                autoFocus
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-(--muted)/50 border-none rounded-xl px-4 py-2.5 text-sm text-(--foreground) placeholder:text-(--muted-foreground)/40 outline-none focus:ring-1 focus:ring-brand-primary/30 transition-all font-medium"
              />
            </div>

            {/* List */}
            <div className="max-h-[280px] overflow-y-auto no-scrollbar py-2 px-1">
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
                      "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all hover:bg-(--muted)/50 group",
                      selectedCode === c.code
                        ? "bg-brand-primary/10 text-brand-primary"
                        : "text-(--foreground)",
                    )}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={c.flag}
                        alt={c.label}
                        className="w-6 h-4 object-cover rounded shadow-sm border border-(--border)"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold tracking-tight">
                        {c.label}
                      </span>
                      <span className="text-[10px] truncate text-(--muted-foreground) uppercase tracking-wider">
                        {c.name}
                      </span>
                    </div>
                    <span className="ml-auto font-mono text-[10px] text-(--muted-foreground)/30 group-hover:text-(--muted-foreground)/60 transition-colors">
                      {c.code}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-(--muted-foreground)/60 italic">
                  No matches found
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
