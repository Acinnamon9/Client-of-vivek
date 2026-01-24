import { motion } from 'framer-motion';
import { useMemo } from 'react';

const WIDTH = 1920;
const HEIGHT = 1080;

interface LineData {
    path: string;
    opacity: number;
    strokeWidth: number;
    startNode: { x: number; y: number }; // Only one node at the start (left edge)
}

// Generate horizontal connection lines flowing from left to right
const generateConnectionLines = (): LineData[] => {
    const lines: LineData[] = [];
    const numLines = 16; // Match original count

    // Single focal point where ALL lines converge
    const focalX = WIDTH * 0.62;
    const focalY = HEIGHT * 0.5;

    for (let i = 0; i < numLines; i++) {
        // Vertical distribution - evenly spaced
        const baseY = (HEIGHT / (numLines + 1)) * (i + 1);
        const startY = baseY;

        // Calculate distance from center for opacity and styling
        const distFromCenter = Math.abs(startY - HEIGHT / 2);
        const normalizedDist = distFromCenter / (HEIGHT / 2); // 0 at center, 1 at edges
        const opacity = Math.max(0.2, 0.5 - normalizedDist * 0.3);

        // VARYING start positions - lines closer to center start further left
        // This creates the staggered effect seen in the original
        const baseStartX = 100; // Visible start position for node
        const startX = baseStartX;

        // The actual line path starts from node position

        // End point - ALL lines converge to the SAME focal point
        const endX = focalX;
        const endY = focalY;

        // Calculate horizontal length
        const horizontalLength = endX - startX;

        // Control points for VERY long horizontal section, gentle curve at end
        // CP1: Stay completely horizontal for 75% of the path
        const cp1x = startX + horizontalLength * 0.75;
        const cp1y = startY; // Perfectly horizontal

        // CP2: Start gentle curve only in last 15%
        const cp2x = startX + horizontalLength * 0.92;
        const cp2y = startY + (endY - startY) * 0.5; // Gentle blend

        // Create cubic Bézier path
        const path = `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;

        // Node at the start point
        const startNode = { x: startX, y: startY };

        // Thin consistent stroke
        const strokeWidth = 1.2;

        lines.push({
            path,
            opacity,
            strokeWidth,
            startNode
        });
    }

    return lines;
};

export const ConnectionLines = () => {
    const lines = useMemo(() => generateConnectionLines(), []);

    return (
        <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="w-full h-full absolute top-0 left-0 pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
            style={{ zIndex: 1 }}
        >
            <defs>
                {/* Very light gray color matching original */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-connection-line-start)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--color-connection-line-end)" stopOpacity="0.6" />
                </linearGradient>
            </defs>

            {lines.map((line, i) => (
                <g key={`connection-line-${i}`}>
                    {/* The connection line */}
                    <motion.path
                        d={line.path}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth={line.strokeWidth}
                        opacity={line.opacity}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: line.opacity
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            ease: "easeOut"
                        }}
                    />

                    {/* Small circle node at the start - matching original */}
                    <motion.circle
                        cx={line.startNode.x}
                        cy={line.startNode.y}
                        r={3}
                        fill="none"
                        stroke="var(--color-connection-line-start)"
                        strokeWidth={1}
                        opacity={line.opacity * 1.2}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: line.opacity * 1.2
                        }}
                        transition={{
                            duration: 0.3,
                            delay: i * 0.1 + 0.2
                        }}
                    />

                    {/* Animated pulse traveling along the line */}
                    <circle
                        r="4"
                        fill="var(--color-connection-pulse)"
                        opacity="0.8"
                        style={{ filter: "drop-shadow(0 0 6px var(--color-connection-pulse))" }}
                    >
                        <animateMotion
                            dur={`${5 + (i % 3)}s`}
                            repeatCount="indefinite"
                            path={line.path}
                            begin={`${i * 0.4}s`}
                        />
                        <animate
                            attributeName="opacity"
                            values="0;0.9;0.9;0"
                            keyTimes="0;0.1;0.9;1"
                            dur={`${5 + (i % 3)}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
        </svg>
    );
};
