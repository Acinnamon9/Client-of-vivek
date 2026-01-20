import React, { useState, useEffect } from "react";

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(1000);
  const [dealValue, setDealValue] = useState(2000);
  const [closeRate, setCloseRate] = useState(5);
  const [projectedRevenue, setProjectedRevenue] = useState(0);

  useEffect(() => {
    // Logic:
    // Current Revenue = Leads * (Rate/100) * Deal
    // AI Revenue (Assumption: 30% uplift in conversion) = Leads * (Rate * 1.3 / 100) * Deal
    // Difference = AI Revenue - Current Revenue
    // Simplified: Difference = Current Revenue * 0.3
    const currentRevenue = leads * (closeRate / 100) * dealValue;
    const additionalRevenue = currentRevenue * 0.3;
    setProjectedRevenue(additionalRevenue);
  }, [leads, dealValue, closeRate]);

  const formatMoney = (number: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <section className="bg-linear-to-br from-[#1a1a1a] to-[#2d2d2d] py-[100px] px-5 text-white font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Calculate Your Potential Revenue Uplift
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            See exactly how much revenue you're missing out on by relying on
            human-only sales teams. Our AI increases contact rates and
            follow-ups, leading to more closed deals.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-10 text-[#1a1a1a] shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
          <div className="mb-[30px]">
            <div className="flex justify-between mb-3 font-bold text-[#1e293b]">
              <span>Monthly Leads</span>
              <span className="text-[#ff5722]">{leads.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={leads}
              className="w-full h-1.5 bg-[#eee] rounded-full appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ff5722] [&::-webkit-slider-thumb]:rounded-full"
              onChange={(e) => setLeads(parseInt(e.target.value))}
            />
          </div>

          <div className="mb-[30px]">
            <div className="flex justify-between mb-3 font-bold text-[#1e293b]">
              <span>Average Deal Value</span>
              <span className="text-[#ff5722]">
                ${dealValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={dealValue}
              className="w-full h-1.5 bg-[#eee] rounded-full appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ff5722] [&::-webkit-slider-thumb]:rounded-full"
              onChange={(e) => setDealValue(parseInt(e.target.value))}
            />
          </div>

          <div className="mb-[30px]">
            <div className="flex justify-between mb-3 font-bold text-[#1e293b]">
              <span>Current Close Rate</span>
              <span className="text-[#ff5722]">{closeRate}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={closeRate}
              className="w-full h-1.5 bg-[#eee] rounded-full appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ff5722] [&::-webkit-slider-thumb]:rounded-full"
              onChange={(e) => setCloseRate(parseFloat(e.target.value))}
            />
          </div>

          <div className="bg-[#fff5f2] rounded-2xl p-6 mt-10 text-center">
            <div className="text-sm font-bold text-[#64748b] uppercase tracking-[0.05em] mb-3">
              Projected Additional Revenue (Month)
            </div>
            <div className="text-5xl font-black text-[#ff5722]">
              {formatMoney(projectedRevenue)}
            </div>
            <div className="text-xs text-[#94a3b8] mt-4">
              *Based on conservative 30% increase in conversion with AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
