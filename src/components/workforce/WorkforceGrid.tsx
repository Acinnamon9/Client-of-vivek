import React, { useState } from "react";
import { workforceRoles } from "../../constants/workforceData";
import RoleCard from "./RoleCard";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

/**
 * WorkforceGrid Component
 * Displays the AI Workforce in a static, responsive grid layout.
 * Includes a "Show More" toggle to view the full fleet.
 */
const WorkforceGrid: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define how many items to show in the "collapsed" state based on viewport
  // We'll show 4 by default as it covers the largest row size
  const INITIAL_COUNT = 4;
  const visibleRoles = isExpanded
    ? workforceRoles
    : workforceRoles.slice(0, INITIAL_COUNT);

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-6 sm:px-0 auto-rows-fr w-full">
        <AnimatePresence mode="popLayout">
          {visibleRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="w-full flex justify-center"
              layout
            >
              <div className="w-full max-w-[300px]">
                <RoleCard role={role} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div layout>
        <Button
          variant="glass"
          onClick={() => {
            if (isExpanded) {
              document
                .getElementById("workforce")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            setIsExpanded(!isExpanded);
          }}
          className="group px-8 py-3 rounded-full border-brand-primary/20 hover:border-brand-primary/50 text-[11px] font-black tracking-[0.2em] uppercase transition-all"
        >
          <span className="flex items-center gap-3">
            {isExpanded ? "Minimize Fleet" : "Expand Full Workforce"}
            <svg
              className={cn(
                "w-4 h-4 transition-transform duration-500",
                isExpanded ? "rotate-180" : "group-hover:translate-y-0.5",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </Button>
      </motion.div>
    </div>
  );
};

export default WorkforceGrid;
