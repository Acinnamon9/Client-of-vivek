import React, { useRef, useCallback, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticProps {
    children: React.ReactElement;
    distance?: number;
}

const Magnetic: React.FC<MagneticProps> = ({ children, distance = 0.15 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!ref.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            if (Math.abs(deltaX) < width && Math.abs(deltaY) < height) {
                x.set(deltaX * distance);
                y.set(deltaY * distance);
            } else {
                x.set(0);
                y.set(0);
            }
        },
        [distance, x, y]
    );

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    return (
        <motion.div ref={ref} style={{ x: springX, y: springY }}>
            {children}
        </motion.div>
    );
};

export default Magnetic;
