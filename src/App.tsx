import Hero from "./components/Hero";
import LeadProblem from "./components/LeadProblem";
import Workforce from "./components/Workforce";
import IndustrySnapshots from "./components/IndustrySnapshots";
import ROICalculator from "./components/ROICalculator";
import Proof from "./components/Proof";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-main">
      <Hero />
      <LeadProblem />
      <Workforce />
      <IndustrySnapshots />
      <ROICalculator />
      <Proof />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
