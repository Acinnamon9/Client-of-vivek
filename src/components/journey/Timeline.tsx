import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JOURNEY_NARRATIVES } from "../../constants/journeyData";
import { Section, Container } from "../ui/Layout";
import BackgroundDecor from "./BackgroundDecor";
import JourneyHeader from "./JourneyHeader";
import JourneyTabs from "./JourneyTabs";
import NarrativeStepCard from "./NarrativeStepCard";

/**
 * JourneyTimeline Component
 * A modularized, high-end visual audit of revenue leaks.
 * Supports multiple narratives: Time Decay, Human Bottleneck, and Trust Erosion.
 * Layout: Numbered 4-card horizontal grid for sequential storytelling.
 */
const JourneyTimeline: React.FC = () => {
  const [activeNarrativeId, setActiveNarrativeId] = useState(JOURNEY_NARRATIVES[0].id);
  const activeNarrative = JOURNEY_NARRATIVES.find(n => n.id === activeNarrativeId) || JOURNEY_NARRATIVES[0];

  return (
    <Section
      id="journey-timeline"
      className="bg-transparent py-20 md:py-28 relative overflow-hidden"
    >
      <BackgroundDecor />

      <Container className="max-w-[1400px] relative z-10 px-6">
        <JourneyHeader />

        <JourneyTabs
          activeId={activeNarrativeId}
          onTabChange={setActiveNarrativeId}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeNarrativeId}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {activeNarrative.cards.map((card, idx) => (
              <NarrativeStepCard key={idx} card={card} index={idx} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default JourneyTimeline;
