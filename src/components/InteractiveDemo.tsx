import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";

const InteractiveDemo: React.FC = () => {
    return (
        <Section id="demo" className="bg-transparent py-24 relative overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-brand-orange uppercase bg-brand-orange/10 rounded-full border border-brand-orange/20">
                        Interactive Demo
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-(--foreground) tracking-tighter mb-6">
                        Experience Our <span className="text-brand-orange">AI Solutions</span>
                    </h2>
                    <p className="text-xl text-(--muted-foreground) max-w-3xl mx-auto font-medium leading-relaxed">
                        Try live demos of our AI solutions and see how they can transform your business instantly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 shadow-2xl shadow-black/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-(--foreground) mb-3">AI Website Voice Widget</h3>
                                    <p className="text-(--muted-foreground) text-lg leading-relaxed">
                                        AI speech-to-speech bot that engages visitors and converts leads 24/7
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 shadow-2xl shadow-black/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-(--foreground) mb-3">AI Calling</h3>
                                    <p className="text-(--muted-foreground) text-lg leading-relaxed">
                                        AI phone caller that handles calls, books appointments, and follows up
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 shadow-2xl shadow-black/20"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center shrink-0 border border-brand-orange/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-(--foreground) mb-3">AI Automation</h3>
                                    <p className="text-(--muted-foreground) text-lg leading-relaxed">
                                        Custom AI workflows and automated business processes to scale your operations effortlessly
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full flex justify-center lg:justify-end">
                        <HeroPhone />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default InteractiveDemo;
