import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveDemo from "./components/InteractiveDemo";
import JourneyTimeline from "./components/journey/Timeline";
import LayoutToggle from "./components/ui/LayoutToggle";

// Lazy load non-critical sections
const AITeam = lazy(() => import("./components/AITeam"));
const IndustrySolutions = lazy(() => import("./components/IndustrySolutions"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Approach = lazy(() => import("./components/Approach"));
const SocialProof = lazy(() => import("./components/SocialProof"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));

import InteractiveBackground from "./components/ui/InteractiveBackground";

function App() {
  return (
    <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen">
      <InteractiveBackground />
      <Navbar />
      <LayoutToggle />

      {/* Hero: No sticky, it's the base */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Phone Section: Relocated from Hero */}
      <div className="relative z-15 bg-transparent">
        <InteractiveDemo />
      </div>

      <div className="relative z-22 bg-transparent">
        <JourneyTimeline />
      </div>

      <Suspense fallback={<div className="h-screen bg-transparent" />}>
        <div className="relative z-30 bg-transparent">
          <AITeam />
        </div>

        <div className="relative z-40 bg-transparent">
          <IndustrySolutions />
        </div>

        <div className="relative z-50 bg-transparent">
          <ROICalculator />
        </div>

        <div className="relative z-55 bg-transparent">
          <Approach />
        </div>

        <div className="relative z-60 bg-transparent">
          <SocialProof />
        </div>

        <div className="relative z-70 bg-transparent">
          <FAQ />
        </div>

        {/* 
        <div className="relative z-80 bg-transparent">
          <FinalCTA />
        </div>
        */}

        <div className="relative z-90 bg-transparent shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
