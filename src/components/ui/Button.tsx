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
        glass:
          "bg-white/5 backdrop-blur-xl border border-white/10 text-(--foreground) shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_15px_30px_rgba(0,0,0,0.15)]",
        "glass-primary":
          "bg-brand-primary/10 backdrop-blur-xl border border-brand-primary/20 text-brand-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,87,34,0.1),0_10px_20px_rgba(255,87,34,0.1)] hover:bg-brand-primary/20 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_15px_30px_rgba(255,87,34,0.2)]",
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
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, as: Component = "button", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
