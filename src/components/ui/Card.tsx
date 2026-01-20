import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "white" | "dark" | "outline";
}

const Card: React.FC<CardProps> = ({
  className,
  variant = "white",
  ...props
}) => {
  const variants = {
    white:
      "bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)]",
    glass:
      "bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.05)]",
    dark: "bg-brand-dark text-white border border-white/5",
    outline: "bg-transparent border-2 border-black/5",
  };

  return (
    <div
      className={cn(
        "rounded-[32px] overflow-hidden transition-all duration-400 ease-out",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
};

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("p-8 sm:p-10", className)} {...props} />;

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("p-8 sm:p-10 pt-0", className)} {...props} />;

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("p-8 sm:p-10 border-t border-black/[0.03]", className)}
    {...props}
  />
);

export { Card, CardHeader, CardContent, CardFooter };
