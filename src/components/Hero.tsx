import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="premium-badge">
          <span className="badge-dot"></span>
          <div className="badge-text-wrapper">
            <div className="badge-rotating-container">
              <span className="badge-text badge-line-1">
                Proud to be Sponsoring Global AI Show
              </span>
              <span className="badge-text badge-line-2">
                Abu Dhabi • December 2025
              </span>
              <span className="badge-text badge-line-3">
                World's First AI Sales Workforce
              </span>
            </div>
          </div>
        </div>

        <h1 className="headline">
          Deploy a Full AI Sales & Marketing Team That Books
          <span className="headline-accent">
            {" "}
            300-500 Qualified Appointments{" "}
          </span>
          Every Month — On Autopilot
        </h1>

        <p className="subheadline">
          <strong>Never miss another lead.</strong> Your AI team calls within
          <span className="subheadline-strong"> 3 minutes</span>, follows up
          <span className="subheadline-strong"> 12+ times</span>, and books
          appointments
          <span className="subheadline-strong"> while you sleep</span> — all for
          80% less than hiring SDRs.
        </p>

        <div className="trust-numbers">
          <div className="trust-item">
            <div className="trust-value">100k+</div>
            <div className="trust-label">Leads Generated</div>
          </div>
          <div className="trust-item">
            <div className="trust-value">20,000</div>
            <div className="trust-label">Qualified Leads</div>
          </div>
          <div className="trust-item">
            <div className="trust-value">9,000</div>
            <div className="trust-label">Appointments</div>
          </div>
        </div>

        <div className="cta-group">
          <button className="btn-pill btn-primary">
            Enterprise Demo
            <span className="btn-dot"></span>
          </button>
          <button className="btn-pill btn-secondary">
            Join Waitlist
            <span className="btn-dot"></span>
          </button>
        </div>

        <ul className="benefits-list">
          <li className="benefit">
            <span className="benefit-icon">✓</span>
            Watch 3 real appointments get booked during your demo
          </li>
          <li className="benefit">
            <span className="benefit-icon">✓</span>
            Get your custom implementation plan in 48 hours
          </li>
          <li className="benefit">
            <span className="benefit-icon">✓</span>
            30-day money-back guarantee - zero risk
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
