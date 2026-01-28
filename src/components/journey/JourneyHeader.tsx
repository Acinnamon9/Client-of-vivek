import React from "react";
import { motion } from "framer-motion";

const JourneyHeader: React.FC = () => {
    return (
        <div className="text-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 mb-6 backdrop-blur-sm"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                <span className="text-[10px] font-black tracking-[0.25em] text-brand-primary uppercase">
                    Revenue Leak Analysis
                </span>
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-black text-(--foreground) tracking-tighter uppercase leading-[0.85] mb-6"
            >
                Three Ways <br />
                <span className="text-brand-primary/90">Leads Die</span>
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-(--muted-foreground) font-medium tracking-tight"
            >
                Before you ever speak to them.
            </motion.p>
        </div>
    );
};

export default JourneyHeader;
