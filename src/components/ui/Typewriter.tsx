import React from "react";
import { motion } from "framer-motion";

interface Segment {
    text: string;
    className?: string;
}

interface TypewriterProps {
    segments: Segment[];
    className?: string;
    delay?: number;
    speed?: number;
    cursorColor?: string;
    showCursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
    segments,
    className = "",
    delay = 0,
    speed = 0.05,
    cursorColor = "var(--brand-primary)",
    showCursor = true,
}) => {
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: speed,
                delayChildren: delay,
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            display: "inline",
        },
        hidden: {
            opacity: 0,
            display: "none",
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className={`inline ${className}`}
        >
            {segments.map((segment, sIdx) => {
                // We use a regular span for the segment to apply its className (like gradients)
                // but we MUST ensure the bg-clip-text etc. works on the individual characters
                // if they are nested. Actually, bg-clip-text only works if the background is on the SAME element.
                // So for the gradient part, we might need a different approach.

                const isGradient = segment.className?.includes("bg-clip-text");

                return (
                    <span key={sIdx} className={segment.className}>
                        {Array.from(segment.text).map((char, cIdx) => (
                            <motion.span
                                variants={child}
                                key={`${sIdx}-${cIdx}`}
                                style={isGradient ? { WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                );
            })}
            {showCursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[3px] h-[0.9em] ml-1 align-middle"
                    style={{ backgroundColor: cursorColor }}
                />
            )}
        </motion.span>
    );
};

export default Typewriter;
