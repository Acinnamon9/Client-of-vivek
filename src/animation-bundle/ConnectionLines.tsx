import { motion } from "framer-motion";
import { useMemo } from "react";

const WIDTH = 1920;
const HEIGHT = 1080;

interface LineData {
  path: string;
  opacity: number;
  strokeWidth: number;
  startNode: { x: number; y: number };
}

interface ConnectionLinesProps {
  focalPointX?: number; // 0-1 normalized
  focalPointY?: number; // 0-1 normalized
}

// Generate horizontal connection lines flowing from left to right
const generateConnectionLines = (fX: number, fY: number): LineData[] => {
  const lines: LineData[] = [];
  const numLines = 18;

  const targetX = WIDTH * fX;
  const targetY = HEIGHT * fY;

  for (let i = 0; i < numLines; i++) {
    const baseY = (HEIGHT / (numLines + 1)) * (i + 1);
    const startY = baseY;

    // Opacity logic: lines are more visible as they converge towards the center
    const distFromCenter = Math.abs(startY - targetY);
    const normalizedDist = distFromCenter / (HEIGHT / 2);
    const opacity = Math.max(0.3, 0.7 - normalizedDist * 0.4);

    const startX = 100;
    const endX = targetX;
    const endY = targetY;

    const horizontalLength = endX - startX;

    // Pathing Logic (Trait-Based):
    // 1. Delayed curvature: Stay horizontal for 92% of the length.
    // 2. Parallel entry: Arrive at targetY perfectly horizontally.
    // 3. Low vertical aggression: Y-movement suppressed until the very end.
    // 4. Monotonic: Single clean sweep, no overshoot.
    const cp1x = startX + horizontalLength * 0.92;
    const cp1y = startY;

    const cp2x = endX - horizontalLength * 0.05;
    const cp2y = endY;

    const path = `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
    const strokeWidth = 1.4;

    lines.push({
      path,
      opacity,
      strokeWidth,
      startNode: { x: startX, y: startY },
    });
  }

  return lines;
};

export const ConnectionLines: React.FC<ConnectionLinesProps> = ({
  focalPointX = 0.8,
  focalPointY = 0.5,
}) => {
  const lines = useMemo(
    () => generateConnectionLines(focalPointX, focalPointY),
    [focalPointX, focalPointY],
  );

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full h-full absolute top-0 left-0 pointer-events-none"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Inverse gradient: contrast is now fully controlled by CSS variables */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            stopColor="var(--color-connection-line-start)"
            stopOpacity="1"
          />
          <stop
            offset="60%"
            stopColor="var(--color-connection-line-start)"
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor="var(--color-connection-line-end)"
            stopOpacity="1"
          />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {lines.map((line, i) => (
        <g key={`connection-line-${i}`}>
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
              opacity: line.opacity,
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />

          <motion.circle
            cx={line.startNode.x}
            cy={line.startNode.y}
            r={2.5}
            fill="var(--color-connection-line-start)"
            opacity={line.opacity}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.08 + 0.2 }}
          />

          {/* Animated pulse traveling along the line */}
          <circle
            r="3.5"
            fill="var(--color-connection-pulse)"
            style={{
              filter: "url(#glow)",
              opacity: 0.9,
            }}
          >
            <animateMotion
              dur={`${4 + (i % 4)}s`}
              repeatCount="indefinite"
              path={line.path}
              begin={`${i * 0.3}s`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.1;0.9;1"
              dur={`${4 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Intake Glow at focal point */}
      <circle
        cx={WIDTH * focalPointX}
        cy={HEIGHT * focalPointY}
        r="40"
        fill="var(--color-connection-pulse)"
        opacity="0.1"
        className="animate-pulse"
      />
    </svg>
  );
};
