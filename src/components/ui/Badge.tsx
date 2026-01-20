import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "brand",
  size = "md",
  children,
  ...props
}) => {
  const variants = {
    brand:
      "bg-linear-to-br from-[#ff5722] to-[#ff8a65] text-white shadow-[0_8px_20px_rgba(255,87,34,0.25)]",
    secondary: "bg-[#f1f5f9] text-[#475569]",
    outline: "bg-transparent border border-[#ff5722]/20 text-[#ff5722]",
    ghost: "bg-[#ff5722]/10 text-[#ff5722] border border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1 text-[11px]",
    md: "px-4 py-1.5 text-xs",
    lg: "px-6 py-2.5 text-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
