import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-to-br from-brand-primary to-brand-accent text-white shadow-[0_16px_40px_rgba(255,87,34,0.35)] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,87,34,0.5)]",
        secondary:
          "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
        outline:
          "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
        black: "bg-brand-dark text-white hover:bg-[#333]",
        ghost: "text-slate-600 hover:text-brand-dark bg-transparent",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base font-bold rounded-xl",
        lg: "px-8 py-4 text-lg font-extrabold rounded-2xl",
        xl: "px-10 py-5 text-xl font-black rounded-[20px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
