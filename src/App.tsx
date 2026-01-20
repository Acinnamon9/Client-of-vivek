import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallUs from "./components/CallUs";
import LeadProblem from "./components/LeadProblem";
import Comparison from "./components/lead-problem/Comparison";
import Timeline from "./components/lead-problem/Timeline";
import FailureCards from "./components/lead-problem/FailureCards";
import Funnel from "./components/lead-problem/Funnel";
import CTA from "./components/lead-problem/CTA";

// Lazy load non-critical sections
const Workforce = lazy(() => import("./components/Workforce"));
const IndustrySnapshots = lazy(() => import("./components/IndustrySnapshots"));
const ROICalculator = lazy(() => import("./components/ROICalculator"));
const Proof = lazy(() => import("./components/Proof"));
const FAQ = lazy(() => import("./components/FAQ"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="relative font-jakarta bg-(--background) selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />

      <div className="sticky top-0 z-0">
        <Hero />
      </div>

      <div className="sticky top-0 z-10 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <CallUs />
      </div>

      {/* The Problem Series */}
      <div className="sticky top-0 z-20 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <LeadProblem />
      </div>
      <div className="sticky top-0 z-21 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <Comparison />
      </div>
      <div className="sticky top-0 z-22 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <Timeline />
      </div>
      <div className="sticky top-0 z-23 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <FailureCards />
      </div>
      <div className="sticky top-0 z-24 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <Funnel />
      </div>
      <div className="sticky top-0 z-25 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
        <CTA />
      </div>

      <Suspense fallback={<div className="h-screen bg-(--background)" />}>
        <div className="sticky top-0 z-30 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <Workforce />
        </div>

        <div className="sticky top-0 z-40 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <IndustrySnapshots />
        </div>

        <div className="sticky top-0 z-50 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <ROICalculator />
        </div>

        <div className="sticky top-0 z-60 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <Proof />
        </div>

        <div className="sticky top-0 z-70 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
          <FAQ />
        </div>

        <div className="sticky top-0 z-80 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)]">
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
