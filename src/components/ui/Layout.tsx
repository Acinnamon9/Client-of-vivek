import React from "react";
import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, dark = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-[110px] lg:py-[140px] px-5 relative overflow-hidden",
          "bg-(--background) text-(--foreground)",
          dark && "bg-brand-deep text-white", // Maintain specific overrides if needed
          className,
        )}
        {...props}
      />
    );
  },
);

Section.displayName = "Section";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("max-w-[1200px] mx-auto relative z-10", className)}
      {...props}
    />
  );
};

export { Section, Container };
