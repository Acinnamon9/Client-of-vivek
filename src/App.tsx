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

      {/* Hero: No sticky, it's the base */}
      <div className="relative z-0">
        <Hero />
      </div>

      <div className="sticky -top-px z-10 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <CallUs />
      </div>

      {/* The Problem Series */}
      <div className="sticky -top-px z-20 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <LeadProblem />
      </div>
      <div className="sticky -top-px z-21 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <Comparison />
      </div>
      <div className="sticky -top-px z-22 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <Timeline />
      </div>
      <div className="sticky -top-px z-23 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <FailureCards />
      </div>
      <div className="sticky -top-px z-24 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <Funnel />
      </div>
      <div className="sticky -top-px z-25 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
        <CTA />
      </div>

      <Suspense fallback={<div className="h-screen bg-(--background)" />}>
        <div className="sticky -top-px z-30 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
          <Workforce />
        </div>

        <div className="sticky -top-px z-40 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
          <IndustrySnapshots />
        </div>

        <div className="sticky -top-px z-50 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
          <ROICalculator />
        </div>

        <div className="sticky -top-px z-60 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
          <Proof />
        </div>

        <div className="sticky -top-px z-70 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
          <FAQ />
        </div>

        <div className="sticky -top-px z-80 shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.1)] bg-(--background)">
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
