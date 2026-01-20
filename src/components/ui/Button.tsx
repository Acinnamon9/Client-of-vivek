import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "black" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-linear-to-br from-brand-primary to-brand-accent text-white shadow-[0_16px_40px_rgba(255,87,34,0.35)] hover:translate-y-[-4px] hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,87,34,0.5)]",
      secondary:
        "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
      outline:
        "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
      black: "bg-brand-dark text-white hover:bg-[#333]",
      ghost: "text-[#666] hover:text-brand-dark bg-transparent",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-bold",
      lg: "px-8 py-4 text-lg font-extrabold",
      xl: "px-10 py-5 text-xl font-black rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 ease-out cursor-pointer active:scale-95",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
