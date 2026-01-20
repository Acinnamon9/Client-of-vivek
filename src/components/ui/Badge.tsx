import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-wider transition-all",
  {
    variants: {
      variant: {
        brand:
          "bg-linear-to-br from-brand-primary to-brand-secondary text-white shadow-[0_8px_20px_rgba(255,87,34,0.25)]",
        secondary:
          "bg-(--muted) text-(--muted-foreground) border border-(--border)",
        outline:
          "bg-transparent border border-brand-primary/20 text-brand-primary",
        ghost:
          "bg-brand-primary/10 text-brand-primary border border-transparent",
        glass:
          "bg-white/5 backdrop-blur-md border border-white/10 text-(--foreground) shadow-sm",
      },
      size: {
        sm: "px-3 py-1 text-[11px]",
        md: "px-4 py-1.5 text-xs",
        lg: "px-6 py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "md",
    },
  },
);

interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
};

export default Badge;
