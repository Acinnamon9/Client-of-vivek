import { motion } from "framer-motion";
import brainImage from "./brain_blue.webp"; // Import the local asset

interface NeuralNetworkProps {
  x?: string; // e.g. "-15%" or "20%"
  y?: string; // e.g. "50%"
  rotate?: number; // e.g. 5 or 30
  hueRotate?: number; // e.g. 90 or 180
  variant?: "color" | "black" | "white" | "orange" | "adaptive";
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  x = "-15%",
  y = "50%",
  rotate = 5,
  hueRotate = 0,
  variant = "color",
}) => {
  const getFilterStyle = () => {
    switch (variant) {
      case "black":
        return "grayscale(100%) brightness(0) drop-shadow(0 0 20px rgba(54, 85, 232, 0.4))";
      case "white":
        return "brightness(0) invert(1) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))";
      case "orange":
        return "brightness(1.1) contrast(1.1) hue-rotate(160deg) saturate(1.2)";
      case "adaptive":
        return undefined; // Handled by className
      default:
        return `brightness(1.15) contrast(1.1) hue-rotate(${hueRotate}deg)`;
    }
  };

  const getClassName = () => {
    if (variant === "adaptive") {
      // Light: Black variant styles
      // Dark: Orange variant styles
      return "filter grayscale brightness-0 drop-shadow-[0_0_20px_rgba(54,85,232,0.4)] dark:grayscale-0 dark:brightness-110 dark:contrast-110 dark:hue-rotate-[160deg] dark:saturate-150";
    }
    return "";
  };

  return (
    <div className="relative w-full h-full">
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
          className={`w-full h-full object-contain opacity-100 ${getClassName()}`}
          style={{
            filter: getFilterStyle(),
          }}
        />
      </motion.div>
    </div>
  );
};
