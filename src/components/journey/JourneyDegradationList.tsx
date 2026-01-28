import React from "react";
import { motion } from "framer-motion";
import { NarrativeStep } from "../../constants/journeyData";

interface NarrativeDetailListProps {
    steps: NarrativeStep[];
}

const NarrativeDetailList: React.FC<NarrativeDetailListProps> = ({ steps }) => {
    return (
        <div className="xl:col-span-5 flex flex-col justify-between gap-4 relative">
            {/* Connector Line */}
            <div className="absolute left-[35px] top-6 bottom-6 w-0.5 bg-linear-to-b from-brand-primary/20 via-brand-primary/10 to-red-500/20 hidden xl:block"></div>

            {steps.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2 }}
                    className="relative group w-full flex-1"
                >
                    <div className="flex items-center gap-6 bg-(--card)/40 hover:bg-(--card)/60 p-4 rounded-2xl border border-transparent hover:border-red-500/20 transition-all duration-300 h-full">
                        {/* Timeline Node */}
                        <div className="w-3 h-3 rounded-full bg-(--background) border-2 border-(--muted-foreground) group-hover:border-red-500 shrink-0 relative z-10 hidden xl:block translate-x-[26px] mr-8"></div>

                        {/* Compact Card Content */}
                        <div className="flex gap-5 items-center w-full">
                            <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-(--border) relative grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <img
                                    src={item.image}
                                    alt={item.event}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="flex items-baseline justify-between gap-2">
                                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] opacity-50">
                                        {item.label}
                                    </span>
                                    {item.time && (
                                        <span className="text-xl font-black text-(--foreground)/60 group-hover:text-red-500/90 transition-colors tracking-tighter leading-none">
                                            {item.time}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-base font-bold text-(--foreground) leading-tight truncate">
                                    {item.event}
                                </h4>
                                <p className="text-xs text-(--muted-foreground) font-medium italic">
                                    Result: {item.result}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}

            {/* The Warning Footer */}
            <div className="mt-2 pl-4 lg:pl-12 relative opacity-60">
                <p className="text-[9px] uppercase tracking-wide text-(--muted-foreground) font-medium text-center xl:text-left">
                    * Analysis based on industry benchmarks.
                </p>
            </div>
        </div>
    );
};

export default NarrativeDetailList;
