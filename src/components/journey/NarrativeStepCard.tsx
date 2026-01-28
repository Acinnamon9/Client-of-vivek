import React, { useState } from "react";
import { motion } from "framer-motion";
import { NarrativeCard } from "../../constants/journeyData";
import { cn } from "../../lib/utils";
import InteractiveTilt from "../ui/InteractiveTilt";
import Modal from "../ui/Modal";

interface NarrativeStepCardProps {
  card: NarrativeCard;
  index: number;
}

const NarrativeStepCard: React.FC<NarrativeStepCardProps> = ({
  card,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFirst = index === 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={cn(
          "relative h-full",
          isFirst ? "lg:col-span-1" : "lg:col-span-1",
        )}
      >
        <InteractiveTilt className="h-full">
          <button
            onClick={() => setIsModalOpen(true)}
            className={cn(
              "group relative w-full h-full p-px rounded-[24px] overflow-hidden transition-all duration-500 text-left cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-brand-primary/50",
              isFirst
                ? "bg-linear-to-b from-brand-primary/60 to-brand-primary/10 shadow-[0_0_40px_-5px_rgba(34,211,238,0.2)] scale-[1.02] z-10"
                : "bg-linear-to-b from-white/10 to-transparent shadow-xl",
            )}
          >
            <div
              className={cn(
                "relative h-full flex flex-col p-6 rounded-[23px] backdrop-blur-xl overflow-hidden",
                isFirst ? "bg-(--card)/90" : "bg-(--card)/40",
              )}
            >
              {/* 1. Large Numbering Index */}
              <div className="absolute top-4 right-6 pointer-events-none">
                <span
                  className={cn(
                    "text-6xl font-black italic tracking-tighter opacity-10 select-none",
                    isFirst ? "text-brand-primary opacity-20" : "text-white",
                  )}
                >
                  0{index + 1}
                </span>
              </div>

              {/* 2. Top Metric / Badge */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase",
                    card.type === "won"
                      ? "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary"
                      : "bg-red-500/10 border border-red-500/20 text-red-500",
                  )}
                >
                  {card.metric || "Status"}
                </div>
              </div>

              {/* 3. Image with Scanner Effect */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 mb-6 group-hover:border-white/20 transition-all">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                {/* Scanner Line */}
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full h-0.5 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-[scan_3s_linear_infinite]",
                    isFirst ? "bg-brand-primary" : "bg-white/50",
                  )}
                />
              </div>

              {/* 4. Text Content */}
              <div className="flex-1 space-y-3 relative z-10">
                <h4
                  className={cn(
                    "text-xl font-bold tracking-tight uppercase leading-tight",
                    isFirst ? "text-brand-primary" : "text-(--foreground)",
                  )}
                >
                  {card.title}
                </h4>
                <p className="text-sm text-(--muted-foreground) leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Visual indicator for sequence */}
              {!isFirst && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-linear-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
              )}
            </div>
          </button>
        </InteractiveTilt>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          <div className="w-full md:w-3/5 h-64 md:h-auto relative bg-black/20">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-card">
            <div
              className={cn(
                "inline-flex self-start px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase mb-4",
                card.type === "won"
                  ? "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary"
                  : "bg-red-500/10 border border-red-500/20 text-red-500",
              )}
            >
              {card.metric || "Status"}
            </div>
            <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter text-white uppercase mb-4">
              {card.title}
            </h3>
            <p className="text-lg text-(--muted-foreground) leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NarrativeStepCard;
