import React from "react";
import { motion } from "framer-motion";
import { JOURNEY_NARRATIVES } from "../../constants/journeyData";
import { cn } from "../../lib/utils";

interface JourneyTabsProps {
    activeId: string;
    onTabChange: (id: string) => void;
}

const JourneyTabs: React.FC<JourneyTabsProps> = ({ activeId, onTabChange }) => {
    return (
        <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                {JOURNEY_NARRATIVES.map((narrative) => (
                    <button
                        key={narrative.id}
                        onClick={() => onTabChange(narrative.id)}
                        className={cn(
                            "relative px-6 py-3 rounded-xl text-sm font-black tracking-tight transition-all duration-300",
                            activeId === narrative.id
                                ? "text-brand-primary"
                                : "text-(--muted-foreground) hover:text-(--foreground) hover:bg-white/5"
                        )}
                    >
                        {activeId === narrative.id && (
                            <motion.div
                                layoutId="active-journey-tab"
                                className="absolute inset-0 bg-brand-primary/10 border border-brand-primary/20 rounded-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{narrative.tabLabel}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JourneyTabs;
