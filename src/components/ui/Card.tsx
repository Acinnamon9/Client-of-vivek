import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  "rounded-[32px] overflow-hidden transition-all duration-400 ease-out",
  {
    variants: {
      variant: {
        white:
          "bg-(--card) text-(--card-foreground) border border-(--border) shadow-[0_20px_60px_rgba(0,0,0,0.03)]",
        glass:
          "bg-(--card)/90 backdrop-blur-xl border border-(--border) shadow-[0_20px_60px_rgba(0,0,0,0.05)]",
        dark: "bg-brand-dark text-white border border-white/5",
        outline: "bg-transparent border-2 border-(--border)",
      },
    },
    defaultVariants: {
      variant: "white",
    },
  },
);

interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card: React.FC<CardProps> = ({ className, variant, ...props }) => {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
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
    className={cn("p-8 sm:p-10 border-t border-black/3", className)}
    {...props}
  />
);

export { Card, CardHeader, CardContent, CardFooter };
