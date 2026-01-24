import { motion } from 'framer-motion';
import { useMemo } from 'react';
import brainImage from './brain_blue.webp'; // Import the local asset

const WIDTH = 1920;
const HEIGHT = 1080;

// Helper: Generate "Long Lines" that extend out from the brain to the left
const generateLongLines = (bx: number, by: number) => {
    // Adjust these start points to match visual "nodes" on the image
    return [
        // Top-ish line
        { d: `M ${bx - 100},${by - 150} C ${bx - 400},${by - 200} ${bx - 800},${by - 300} -1500,${by - 400}`, delay: 0 },
        // Mid-upper
        { d: `M ${bx - 140},${by - 50} C ${bx - 400},${by - 100} ${bx - 800},${by - 100} -1500,${by - 150}`, delay: 1.5 },
        // Mid-lower
        { d: `M ${bx - 140},${by + 50} C ${bx - 400},${by + 100} ${bx - 800},${by + 100} -1500,${by + 150}`, delay: 0.8 },
        // Bottom-ish
        { d: `M ${bx - 100},${by + 150} C ${bx - 400},${by + 200} ${bx - 800},${by + 300} -1500,${by + 400}`, delay: 2.2 },
        // Center direct
        { d: `M ${bx - 150},${by} C ${bx - 350},${by} ${bx - 600},${by} -1500,${by}`, delay: 3.0 },
    ];
}

interface NeuralNetworkProps {
    x?: string;      // e.g. "-15%" or "20%"
    y?: string;      // e.g. "50%"
    rotate?: number; // e.g. 5 or 30
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
    x = "-15%",
    y = "50%",
    rotate = 5
}) => {
    // Parse percentage strings for SVG math
    const xPct = (parseFloat(x) || 0) / 100;
    const yPct = (parseFloat(y) || 0) / 100;

    const longLines = useMemo(() => {
        const bx = WIDTH * xPct;
        const by = HEIGHT * yPct;
        return generateLongLines(bx, by);
    }, [xPct, yPct]);

    return (
        <div className="relative w-full h-full">
            {/* Background Glow */}
            <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-brain-glow/25 blur-[120px] rounded-full"
                style={{ left: x, top: y }}
            />

            {/* The Brain Image Asset */}
            <motion.div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[80vw] h-auto z-10 pointer-events-none"
                style={{ left: x, top: y, rotate }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img
                    src={brainImage}
                    alt="AI Brain"
                    className="w-full h-full object-contain opacity-100"
                    style={{ filter: "drop-shadow(0 0 35px var(--color-brain-glow)) brightness(1.15) contrast(1.1)" }}
                />
            </motion.div>

            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                className="w-full h-full overflow-visible absolute top-0 left-0 z-0 opacity-40"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Long Lines (Extensions) */}
                {longLines.map((line, i) => (
                    <motion.path
                        key={i}
                        d={line.d}
                        fill="none"
                        stroke="var(--color-connection-line-start)"
                        strokeWidth="1.5"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 3, delay: line.delay, repeat: Infinity, repeatType: "reverse" }}
                    />
                ))}
            </svg>
        </div>
    );
};
