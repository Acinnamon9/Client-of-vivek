import { motion } from "framer-motion";
import brainImage from "./brain_blue.webp"; // Import the local asset

interface NeuralNetworkProps {
  x?: string; // e.g. "-15%" or "20%"
  y?: string; // e.g. "50%"
  rotate?: number; // e.g. 5 or 30
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  x = "-15%",
  y = "50%",
  rotate = 5,
}) => {
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
          style={{
            filter:
              "drop-shadow(0 0 35px var(--color-brain-glow)) brightness(1.15) contrast(1.1)",
          }}
        />
      </motion.div>
    </div>
  );
};
