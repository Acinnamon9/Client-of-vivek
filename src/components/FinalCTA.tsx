import React from "react";

const FinalCTA: React.FC = () => {
  const handleBookDemo = () => {
    window.location.href = "https://myteam.ravan.ai/book";
  };

  return (
    <section className="final-cta-section" id="section-final-cta">
      <div className="final-cta-content">
        <div className="final-cta-badge">Limited Availability</div>
        <h2 className="final-cta-title">
          Stop Losing Leads.
          <br />
          <span>Start Printing Revenue.</span>
        </h2>
        <p className="final-cta-subtitle">
          Join the top 1% of businesses using AI to dominate their market.
          <br />
          Your new sales team is ready to start tomorrow.
        </p>
        <div className="final-cta-buttons">
          <button onClick={handleBookDemo} className="final-primary-btn">
            Book Your Free Demo Now
          </button>
          <button onClick={handleBookDemo} className="final-secondary-btn">
            View Live ROI Calculator
          </button>
        </div>

        <div className="final-benefits">
          <div className="final-benefit-item">
            <span className="final-benefit-value">48h</span>
            <span className="final-benefit-label">Setup Time</span>
          </div>
          <div className="final-benefit-item">
            <span className="final-benefit-value">100%</span>
            <span className="final-benefit-label">Automated</span>
          </div>
          <div className="final-benefit-item">
            <span className="final-benefit-value">30d</span>
            <span className="final-benefit-label">Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
