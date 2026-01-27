import React from "react";
import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import HeroPhone from "./hero/HeroPhone";

const PhoneSection: React.FC = () => {
    return (
        <Section id="demo" className="bg-transparent py-20 relative overflow-hidden">
            <Container className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-(--foreground) tracking-tighter mb-4">
                        Try our AI Agent <span className="text-brand-orange">Right Now</span>
                    </h2>
                    <p className="text-xl text-(--muted-foreground) max-w-2xl mx-auto font-medium">
                        Experience the future of sales interactions. Enter your number and our AI will call you back instantly.
                    </p>
                </motion.div>

                <div className="w-full flex justify-center">
                    <HeroPhone />
                </div>
            </Container>
        </Section>
    );
};

export default PhoneSection;
