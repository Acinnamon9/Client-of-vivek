import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JOURNEY_NARRATIVES } from "../../constants/journeyData";
import { Section, Container } from "../ui/Layout";
import BackgroundDecor from "./BackgroundDecor";
import JourneyHeader from "./JourneyHeader";
import JourneyTabs from "./JourneyTabs";
import NarrativeHeroCard from "./JourneyOptimalCard";
import NarrativeDetailList from "./JourneyDegradationList";

/**
 * JourneyTimeline Component
 * A modularized, high-end visual audit of revenue leaks.
 * Supports multiple narratives: Time Decay, Human Bottleneck, and Trust Erosion.
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 relative items-stretch"
          >
            <NarrativeHeroCard narrative={activeNarrative} />
            <NarrativeDetailList steps={activeNarrative.steps} />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default JourneyTimeline;
