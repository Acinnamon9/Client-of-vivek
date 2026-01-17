import React from "react";

const Proof: React.FC = () => {
  return (
    <section className="proof-main-section">
      <div className="proof-container">
        <div className="proof-header">
          <span className="proof-badge">Case Study</span>
          <h2 className="proof-title">Real Results, Real Revenue.</h2>
          <p className="proof-subtitle">
            See how top companies are scaling with Ravan.ai
          </p>
        </div>

        <div className="proof-case-study">
          <div className="proof-case-header">
            <div className="company-logo">LOGO</div>
            <div>
              <h2 className="proof-case-title">
                How Danube Properties Generated $5 Million+ in Sales in 30 Days
              </h2>
            </div>
          </div>

          <div className="proof-metrics-grid">
            <div className="proof-metric-card">
              <span className="proof-metric-value">$5.2M</span>
              <span className="proof-metric-label">Revenue Generated</span>
            </div>
            <div className="proof-metric-card">
              <span className="proof-metric-value">1,240</span>
              <span className="proof-metric-label">Qualified Leads</span>
            </div>
            <div className="proof-metric-card">
              <span className="proof-metric-value">480</span>
              <span className="proof-metric-label">Appointments Booked</span>
            </div>
          </div>

          <div className="proof-content-grid">
            <div className="proof-section">
              <h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff5722"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                The Challenge
              </h3>
              <p>
                Danube was drowning in leads but converting poorly. Their sales
                team couldn't follow up fast enough, resulting in wasted ad
                spend and lost opportunities.
              </p>

              <h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00c853"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                The Solution
              </h3>
              <p>
                They deployed Ravan.ai's AI Sales Rep to handle initial outreach
                and qualification.
              </p>
              <ul className="proof-list">
                <li>Instant lead response (under 2 mins)</li>
                <li>24/7 qualification of prospects</li>
                <li>Automated booking directly to sales calendars</li>
              </ul>
            </div>

            <div className="proof-testimonial">
              <div className="testimonial-text">
                "We were skeptical at first, but the results are undeniable.
                Ravan.ai didn't just replace our SDRs, it outperformed them by a
                factor of 10. Our sales team now only talks to qualified leads."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Sarah J.</h4>
                  <p>VP of Sales, Danube Properties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="proof-cta-wrapper">
            <a href="https://myteam.ravan.ai/book" className="proof-cta-btn">
              Get Results Like Danube
            </a>
          </div>
        </div>

        <div className="trusted-section">
          <div className="trusted-label">Trusted By Industry Leaders</div>
          <div className="logos-grid">
            <div className="logo-item">DANUBE</div>
            <div className="logo-item">EMAAR</div>
            <div className="logo-item">DAMAC</div>
            <div className="logo-item">SOBHA</div>
            <div className="logo-item">NAKHEEL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
