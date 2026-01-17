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
    <section className="calculator-section">
      <div className="calc-container">
        <div className="calc-content">
          <h2>Calculate Your Potential Revenue Uplift</h2>
          <p>
            See exactly how much revenue you're missing out on by relying on
            human-only sales teams. Our AI increases contact rates and
            follow-ups, leading to more closed deals.
          </p>
        </div>

        <div className="calculator-card">
          <div className="input-group">
            <div className="input-label">
              <span>Monthly Leads</span>
              <span className="input-value">{leads.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={leads}
              className="range-slider"
              onChange={(e) => setLeads(parseInt(e.target.value))}
            />
          </div>

          <div className="input-group">
            <div className="input-label">
              <span>Average Deal Value</span>
              <span className="input-value">${dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={dealValue}
              className="range-slider"
              onChange={(e) => setDealValue(parseInt(e.target.value))}
            />
          </div>

          <div className="input-group">
            <div className="input-label">
              <span>Current Close Rate</span>
              <span className="input-value">{closeRate}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={closeRate}
              className="range-slider"
              onChange={(e) => setCloseRate(parseFloat(e.target.value))}
            />
          </div>

          <div className="calc-results">
            <div className="result-label">
              Projected Additional Revenue (Month)
            </div>
            <div className="result-value">{formatMoney(projectedRevenue)}</div>
            <div className="calc-note">
              *Based on conservative 30% increase in conversion with AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
