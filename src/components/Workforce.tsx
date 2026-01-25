import React from "react";
import { Section, Container } from "./ui/Layout";
import WorkforceHeader from "./workforce/WorkforceHeader";
import WorkforceMarquee from "./workforce/WorkforceMarquee";
import WorkforceGrid from "./workforce/WorkforceGrid";
import WorkforceCTA from "./workforce/WorkforceCTA";

/**
 * WORKFORCE CONFIGURATION
 * Toggle between 'marquee' (infinite scroll) and 'grid' (static cards).
 */
const WORKFORCE_CONFIG = {
  layout: "grid" as "marquee" | "grid",
};

/**
 * Workforce Component
 * Presents the AI Workforce as a high-end command center.
 */
const Workforce: React.FC = () => {
  return (
    <Section
      id="workforce"
      className="font-jakarta bg-(--background) py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Precision Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-[grid-size:40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
          }}
        ></div>
      </div>

      <Container className="max-w-7xl relative z-10">
        <WorkforceHeader />
        {WORKFORCE_CONFIG.layout === "grid" && <WorkforceGrid />}
      </Container>

      {/* Workforce Marquee: Truly Infinite Interactive Fleet */}
      {WORKFORCE_CONFIG.layout === "marquee" && <WorkforceMarquee />}

      <Container className="max-w-7xl relative z-10 mt-12">
        <WorkforceCTA />
      </Container>

      {/* Atmospheric Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)] pointer-events-none"></div>
    </Section>
  );
};

export default Workforce;
