import React from "react";
import { motion } from "framer-motion";
import InteractiveTilt from "../ui/InteractiveTilt";
import { Narrative } from "../../constants/journeyData";

interface NarrativeHeroCardProps {
    narrative: Narrative;
}

const NarrativeHeroCard: React.FC<NarrativeHeroCardProps> = ({ narrative }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="xl:col-span-7 h-full min-h-[400px]"
        >
            <InteractiveTilt className="h-full">
                <div className="group relative w-full h-full p-px rounded-[32px] bg-linear-to-b from-brand-primary/40 to-brand-primary/5 overflow-hidden shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]">
                    <div className="relative bg-(--card)/80 backdrop-blur-xl rounded-[31px] p-8 md:p-10 h-full flex flex-col md:flex-row gap-8 items-center overflow-hidden">
                        {/* Left: Text Content */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <div className="inline-flex justify-center md:justify-start items-center gap-2 px-3 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black tracking-widest uppercase">
                                <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {narrative.metricLabel}
                            </div>

                            <div>
                                <div className="text-7xl md:text-8xl font-black text-brand-primary tracking-tighter leading-none mb-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                    {narrative.metricValue}
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-(--foreground) tracking-tight uppercase">
                                    {narrative.title}
                                </h4>
                            </div>

                            <p className="text-base md:text-lg text-(--muted-foreground) leading-relaxed md:border-l-2 md:border-brand-primary/30 md:pl-4 font-medium italic">
                                {narrative.subtitle}
                            </p>
                        </div>

                        {/* Right: Square Image */}
                        <div className="relative w-64 h-64 md:w-72 md:h-72 shrink-0 rounded-2xl overflow-hidden border border-brand-primary/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src={narrative.heroImage}
                                alt={narrative.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/30 to-transparent mix-blend-overlay"></div>
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-primary/50 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-[scan_3s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>
            </InteractiveTilt>
        </motion.div>
    );
};

export default NarrativeHeroCard;
