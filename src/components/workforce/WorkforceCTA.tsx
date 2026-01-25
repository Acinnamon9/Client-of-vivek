import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const WorkforceCTA: React.FC = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Button
          variant="glass-primary"
          size="lg"
          className="px-8 py-4 font-black tracking-widest rounded-2xl"
          onClick={() => window.open("https://atomicx.ravan.ai/book", "_blank")}
        >
          DEPLOY YOUR AI WORKFORCE
        </Button>
        <p className="mt-4 text-[9px] font-black text-(--muted-foreground) uppercase tracking-[0.4em] opacity-40">
          Setup in under 72 hours
        </p>
      </motion.div>
    </div>
  );
};

export default WorkforceCTA;
