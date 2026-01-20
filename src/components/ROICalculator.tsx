import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import { Card } from "./ui/Card";
import Button from "./ui/Button";

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(1000);
  const [dealValue, setDealValue] = useState(2000);
  const [closeRate, setCloseRate] = useState(5);

  const currentRevenue = leads * (closeRate / 100) * dealValue;
  const projectedRevenue = currentRevenue * 0.3;

  const formatMoney = (number: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <Section className="bg-(--background) overflow-hidden relative font-jakarta">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="text-5xl sm:text-6xl font-black text-(--foreground) mb-8 leading-[1.1] tracking-tighter">
              Calculate Your{" "}
              <span className="text-brand-primary">Revenue Uplift</span>
            </h2>
            <p className="text-xl text-(--muted-foreground) leading-relaxed font-medium mb-10">
              See exactly how much revenue you're missing out on by relying on
              human-only sales teams. Our AI increases contact rates and
              follow-ups, leading to more closed deals.
            </p>
            <Button
              size="xl"
              className="shadow-2xl shadow-brand-primary/20"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              Get Your Custom Plan
            </Button>
          </div>

          <Card variant="white" className="p-8 sm:p-12 shadow-2xl">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center font-black">
                  <span className="text-(--muted-foreground) uppercase tracking-widest text-[10px]">
                    Monthly Leads
                  </span>
                  <span className="text-brand-primary text-2xl font-black">
                    {leads.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={leads}
                  className="w-full h-2 bg-(--muted) rounded-full appearance-none cursor-pointer accent-brand-primary"
                  onChange={(e) => setLeads(parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center font-black">
                  <span className="text-(--muted-foreground) uppercase tracking-widest text-[10px]">
                    Avg. Deal Value
                  </span>
                  <span className="text-brand-primary text-2xl font-black">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={dealValue}
                  className="w-full h-2 bg-(--muted) rounded-full appearance-none cursor-pointer accent-brand-primary"
                  onChange={(e) => setDealValue(parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center font-black">
                  <span className="text-(--muted-foreground) uppercase tracking-widest text-[10px]">
                    Current Close Rate
                  </span>
                  <span className="text-brand-primary text-2xl font-black">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={closeRate}
                  className="w-full h-2 bg-(--muted) rounded-full appearance-none cursor-pointer accent-brand-primary"
                  onChange={(e) => setCloseRate(parseFloat(e.target.value))}
                />
              </div>

              <div className="bg-brand-primary/5 rounded-[32px] p-8 text-center border border-brand-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="text-[10px] font-black text-(--muted-foreground) uppercase tracking-[0.2em] mb-4">
                  Projected Additional Revenue / Month
                </div>
                <div className="text-5xl sm:text-6xl font-black text-brand-primary tracking-tighter mb-4 transition-transform group-hover:scale-105 duration-500">
                  {formatMoney(projectedRevenue)}
                </div>
                <div className="text-[10px] text-(--muted-foreground) font-bold opacity-60">
                  *Based on conservative 30% increase in conversion with AI
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default ROICalculator;
