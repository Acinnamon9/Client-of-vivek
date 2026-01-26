import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { Card } from "./ui/Card";
import Button from "./ui/Button";
import Magnetic from "./ui/Magnetic";
import InteractiveTilt from "./ui/InteractiveTilt";
import ROISliderGroup from "./roi/ROISliderGroup";
import ROIResultCard from "./roi/ROIResultCard";

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(10);
  const [dealValue, setDealValue] = useState(500);
  const [closeRate, setCloseRate] = useState(1);

  const currentRevenue = leads * (closeRate / 100) * dealValue;
  const projectedRevenue = currentRevenue * 0.3;

  return (
    <Section
      id="roi"
      className="bg-transparent overflow-hidden relative py-24 md:py-32"
    >
      {/* Background Decor - Theme Consistent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-(--hero-gradient-from) rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-(--hero-gradient-to) rounded-full blur-[100px] opacity-10"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          <div className="max-w-xl text-center lg:text-left">
            <div className="mb-6">
              <span className="text-[10px] font-black text-brand-link uppercase tracking-[0.3em] opacity-80">
                Performance Analytics
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-(--foreground) mb-8 leading-[1.05] tracking-tighter uppercase">
              Project Your <br />
              <span className="text-brand-link">Revenue Uplift</span>
            </h2>
            <p className="text-lg text-(--muted-foreground) leading-relaxed font-medium mb-10 max-w-lg mx-auto lg:mx-0">
              Quantify the operational leakage in your current manual workflows.
              Our AI eliminates response delay and maximizes every unit of
              inbound lead traffic.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Magnetic>
                <Button
                  size="xl"
                  className="shadow-xl shadow-brand-link/20 group uppercase tracking-widest text-xs font-black"
                  onClick={() =>
                    window.open("https://atomicx.ravan.ai/book", "_blank")
                  }
                >
                  Request Strategic Setup
                </Button>
              </Magnetic>
              <span className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-widest opacity-60">
                *Verified by Danube & Emaar
              </span>
            </div>
          </div>

          <InteractiveTilt>
            <Card
              variant="white"
              className="p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-(--card)/40 backdrop-blur-xl border border-(--border)/30"
            >
              <div className="space-y-12">
                <ROISliderGroup
                  leads={leads}
                  setLeads={setLeads}
                  dealValue={dealValue}
                  setDealValue={setDealValue}
                  closeRate={closeRate}
                  setCloseRate={setCloseRate}
                />

                <ROIResultCard projectedRevenue={projectedRevenue} />
              </div>

              {/* Technical Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-link/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
            </Card>
          </InteractiveTilt>
        </div>
      </Container>
    </Section>
  );
};

export default ROICalculator;
