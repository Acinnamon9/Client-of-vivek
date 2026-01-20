import { Suspense, lazy, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallUs from "./components/CallUs";
import LeadProblem from "./components/LeadProblem";
import Comparison from "./components/lead-problem/Comparison";
import Timeline from "./components/lead-problem/Timeline";
import FailureCards from "./components/lead-problem/FailureCards";
import Funnel from "./components/lead-problem/Funnel";
import CTA from "./components/lead-problem/CTA";
import LayoutToggle from "./components/ui/LayoutToggle";
import { cn } from "./lib/utils";

// Lazy load non-critical sections
const Workforce = lazy(() => import("./components/Workforce"));
const IndustrySnapshots = lazy(() => import("./components/IndustrySnapshots"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Proof = lazy(() => import("./components/Proof"));
const FAQ = lazy(() => import("./components/FAQ"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isStacked, setIsStacked] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Sync theme with data attribute on HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  const stickyClass = isStacked
    ? "sticky -top-px bg-(--background) shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
    : "relative bg-(--background) transition-all duration-500";

  return (
    <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen">
      <Navbar />
      <LayoutToggle
        isStacked={isStacked}
        onToggleLayout={() => setIsStacked(!isStacked)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Hero: No sticky, it's the base */}
      <div className="relative z-0">
        <Hero />
      </div>

      <div className={cn(stickyClass, "z-10")}>
        <CallUs />
      </div>

      {/* The Problem Series */}
      <div className={cn(stickyClass, "z-20")}>
        <LeadProblem />
      </div>
      <div className={cn(stickyClass, "z-21")}>
        <Comparison />
      </div>
      <div className={cn(stickyClass, "z-22")}>
        <Timeline />
      </div>
      <div className={cn(stickyClass, "z-23")}>
        <FailureCards />
      </div>
      <div className={cn(stickyClass, "z-24")}>
        <Funnel />
      </div>
      <div className={cn(stickyClass, "z-25")}>
        <CTA />
      </div>

      <Suspense fallback={<div className="h-screen bg-(--background)" />}>
        <div className={cn(stickyClass, "z-30")}>
          <Workforce />
        </div>

        <div className={cn(stickyClass, "z-40")}>
          <IndustrySnapshots />
        </div>

        <div className={cn(stickyClass, "z-50")}>
          <ROICalculator />
        </div>

        <div className={cn(stickyClass, "z-60")}>
          <Proof />
        </div>

        <div className={cn(stickyClass, "z-70")}>
          <FAQ />
        </div>

        <div className={cn(stickyClass, "z-80")}>
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
