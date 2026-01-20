import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallUs from "./components/CallUs";
import LeadProblem from "./components/LeadProblem";

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
    <div>
      <Navbar />
      <Hero />
      <CallUs />
      <LeadProblem />
      <Suspense fallback={<div className="h-20" />}>
        <Workforce />
        <IndustrySnapshots />
        <ROICalculator />
        <Proof />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
