import { motion } from 'framer-motion';
import { useMemo } from 'react';
import brainImage from './brain_blue.webp'; // Import the local asset

const WIDTH = 1920;
const HEIGHT = 1080;

// Helper: Generate "Long Lines" that extend out from the brain to the left
// Coordinates tuned to match the "ports" of the brain_blue.webp image roughly placed at right
const generateLongLines = () => {
    // Brain image is roughly centered at 75% width, 50% height
    // We want lines to appear to come from "nodes" on the brain surface
    const bx = WIDTH * 0.72; // Approximate center X of the brain image visual
    const by = HEIGHT * 0.5; // Approximate center Y

    // Adjust these start points to match visual "nodes" on the image
    return [
        // Top-ish line
        { d: `M ${bx - 100},${by - 150} C ${bx - 400},${by - 200} ${bx - 800},${by - 300} 0,${by - 400}`, delay: 0 },
        // Mid-upper
        { d: `M ${bx - 140},${by - 50} C ${bx - 400},${by - 100} ${bx - 800},${by - 100} 0,${by - 150}`, delay: 1.5 },
        // Mid-lower
        { d: `M ${bx - 140},${by + 50} C ${bx - 400},${by + 100} ${bx - 800},${by + 100} 0,${by + 150}`, delay: 0.8 },
        // Bottom-ish
        { d: `M ${bx - 100},${by + 150} C ${bx - 400},${by + 200} ${bx - 800},${by + 300} 0,${by + 400}`, delay: 2.2 },
        // Center direct
        { d: `M ${bx - 150},${by} C ${bx - 350},${by} ${bx - 600},${by} 0,${by}`, delay: 3.0 },
    ];
}

export const NeuralNetwork = () => {
    const longLines = useMemo(() => generateLongLines(), []);

    return (
        <div className="relative w-full h-full">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-brain-glow/25 blur-[120px] rounded-full" />

            {/* The Brain Image Asset */}
            {/* Positioned absolutely to match the SVG coordinate system visually */}
            <motion.div
                className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-auto z-10 pointer-events-none"
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
                className="w-full h-full overflow-visible absolute top-0 left-0 z-0"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* Long Lines (Extensions) */}
                {/* Long Lines (Extensions) - REMOVED per user request for cleaner look */}

            </svg>
        </div>
    );
};
