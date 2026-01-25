import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = React.memo(({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "group border-b border-(--border)/30 last:border-0 transition-all duration-500",
        isOpen ? "bg-brand-link/5" : "hover:bg-brand-link/2",
      )}
    >
      <button
        className="w-full text-left py-6 px-4 bg-none border-none flex justify-between items-center cursor-pointer group/btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={cn(
            "text-base sm:text-lg font-black tracking-tight uppercase transition-colors duration-300",
            isOpen
              ? "text-brand-link"
              : "text-(--foreground) opacity-80 group-hover/btn:opacity-100",
          )}
        >
          {question}
        </span>

        <div
          className={cn(
            "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ml-4",
            isOpen
              ? "border-brand-link bg-brand-link text-black scale-90"
              : "border-(--border) text-(--muted-foreground) group-hover/btn:border-brand-link/50 group-hover/btn:text-brand-link",
          )}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={cn(
              "transition-transform duration-500",
              isOpen ? "rotate-45" : "rotate-0",
            )}
          >
            <path
              d="M6 1V11M1 6H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 -mt-2">
              <div className="flex gap-4">
                <div className="w-0.5 bg-brand-link/30 shrink-0 mt-1.5" />
                <div className="text-[14px] leading-relaxed text-(--muted-foreground) font-medium max-w-2xl">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default FAQItem;
