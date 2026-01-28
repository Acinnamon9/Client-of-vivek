import React from "react";
import { motion } from "framer-motion";

interface DashboardPanelProps {
  title: string;
  status: string;
  className?: string;
  children: React.ReactNode;
  animate: any;
  transition: any;
  statusColor?: string;
  statusText?: string;
}

const DashboardPanel: React.FC<DashboardPanelProps> = ({
  title,
  status,
  className,
  children,
  animate,
  transition,
  statusColor = "brand-success",
  statusText,
}) => {
  return (
    <motion.div
      className={`absolute w-24 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-2 flex flex-col justify-between ${className}`}
      animate={animate}
      transition={transition}
    >
      <div className="flex justify-between items-start">
        <span className="text-[7px] font-bold text-white/40 uppercase">
          {title}
        </span>
        {statusText ? (
          <span
            className={`text-[6px] text-${statusColor} font-mono tracking-tighter`}
          >
            {statusText}
          </span>
        ) : (
          <span
            className={`w-1 h-1 rounded-full bg-${statusColor} shadow-[0_0_4px_var(--${statusColor})]`}
          />
        )}
      </div>
      <div
        className={`text-[10px] font-black text-${statusColor} leading-tight truncate`}
      >
        {status}
      </div>
      {children}
    </motion.div>
  );
};

export default DashboardPanel;
