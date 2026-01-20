import { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallUs from "./components/CallUs";
import LeadProblem from "./components/LeadProblem";
import Timeline from "./components/lead-problem/Timeline";
import FailureCards from "./components/lead-problem/FailureCards";
import Funnel from "./components/lead-problem/Funnel";
import CTA from "./components/lead-problem/CTA";
import LayoutToggle from "./components/ui/LayoutToggle";

// Lazy load non-critical sections
const Workforce = lazy(() => import("./components/Workforce"));
const IndustrySnapshots = lazy(() => import("./components/IndustrySnapshots"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Proof = lazy(() => import("./components/Proof"));
const FAQ = lazy(() => import("./components/FAQ"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isDark, setIsDark] = useState(true);

  // Sync theme with data attribute on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  return (
    <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen">
      <Navbar />
      <LayoutToggle isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      {/* Hero: No sticky, it's the base */}
      <div className="relative z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-(--background)">
        <CallUs />
      </div>

      {/* The Problem Series */}
      <div className="relative z-20 bg-(--background)">
        <LeadProblem />
      </div>
      <div className="relative z-22 bg-(--background)">
        <Timeline />
      </div>
      <div className="relative z-23 bg-(--background)">
        <FailureCards />
      </div>
      <div className="relative z-24 bg-(--background)">
        <Funnel />
      </div>
      <div className="relative z-25 bg-(--background)">
        <CTA />
      </div>

      <Suspense fallback={<div className="h-screen bg-(--background)" />}>
        <div className="relative z-30 bg-(--background)">
          <Workforce />
        </div>

        <div className="relative z-40 bg-(--background)">
          <IndustrySnapshots />
        </div>

        <div className="relative z-50 bg-(--background)">
          <ROICalculator />
        </div>

        <div className="relative z-60 bg-(--background)">
          <Proof />
        </div>

        <div className="relative z-70 bg-(--background)">
          <FAQ />
        </div>

        <div className="relative z-80 bg-(--background)">
          <FinalCTA />
        </div>

        <div className="relative z-90 bg-(--background) shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <Footer />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
