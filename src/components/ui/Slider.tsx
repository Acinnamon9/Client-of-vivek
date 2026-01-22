import React from "react";
import { cn } from "../../lib/utils";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  valueDisplay?: React.ReactNode;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, valueDisplay, ...props }, ref) => {
    return (
      <div className="space-y-4">
        {(label || valueDisplay) && (
          <div className="flex justify-between items-center font-black">
            {label && (
              <span className="text-(--muted-foreground) uppercase tracking-widest text-[10px]">
                {label}
              </span>
            )}
            {valueDisplay && (
              <span className="text-brand-primary text-2xl font-black">
                {valueDisplay}
              </span>
            )}
          </div>
        )}
        <input
          type="range"
          ref={ref}
          className={cn(
            "w-full h-2 bg-(--muted) rounded-full appearance-none cursor-pointer accent-brand-primary",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
