import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericMatch = value.match(/(\d+)/);
  const suffixMatch = value.match(/([^\d].*)/);

  const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });

  const display = useTransform(
    spring,
    (latest) => Math.floor(latest).toLocaleString() + suffix,
  );

  useEffect(() => {
    if (isInView) {
      spring.set(targetValue);
    }
  }, [isInView, spring, targetValue]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default AnimatedNumber;
