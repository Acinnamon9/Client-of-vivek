import React, { useState, useEffect } from "react";
import { workforceRoles } from "../../constants/workforceData";
import RoleCard from "./RoleCard";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WorkforceGrid Component
 * Displays the AI Workforce in a static, responsive grid layout.
 * Includes a "Show More" toggle to view the full fleet.
 */
interface WorkforceGridProps {
  isExpanded: boolean;
}

const WorkforceGrid: React.FC<WorkforceGridProps> = ({ isExpanded }) => {
  // Define how many items to show in the "collapsed" state based on viewport
  // We'll show dynamic count based on screen width to fill exactly one row
  const [initialCount, setInitialCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        // 2xl: 4 cols
        setInitialCount(4);
      } else if (width >= 1024) {
        // lg: 3 cols
        setInitialCount(3);
      } else if (width >= 768) {
        // md: 2 cols
        setInitialCount(2);
      } else {
        // default: 1 col
        setInitialCount(1);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    // Preload all images in the background
    workforceRoles.forEach((role) => {
      if (role.image) {
        const img = new Image();
        img.src = role.image;
      }
    });

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const visibleRoles = isExpanded
    ? workforceRoles
    : workforceRoles.slice(0, initialCount);

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
    </div>
  );
};

export default WorkforceGrid;
