import React from "react";

const LeadProblem: React.FC = () => {
  return (
    <section className="lead-problem-section">
      <div className="lead-container">
        {/* Header */}
        <div className="lead-header">
          <span className="lead-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            The Sales System Problem
          </span>
          <h2 className="lead-title">
            You're Still Bleeding Appointments
            <br />
            While Competitors Run{" "}
            <span className="highlight">Automated Revenue Machines</span>
          </h2>
          <p className="lead-subtitle">
            Think of your leads like milk from expensive cows — every second
            counts before it spoils.
            <br />
            Here's exactly what's happening to your $100,000 ad spend:
          </p>
        </div>

        {/* Visual Flow Comparison */}
        <div className="flow-visual">
          <h3 className="flow-title">The Brutal Math of Your Current System</h3>

          {/* Math Comparison Cards */}
          <div className="math-comparison">
            <div className="math-card current">
              <div className="math-card-header">
                <span className="math-label">YOUR CURRENT SYSTEM</span>
              </div>
              <div className="math-items">
                <div className="math-item">
                  <span className="math-item-label">5 SDRs Salary</span>
                  <span className="math-item-value">$25,000/mo</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Appointments Booked</span>
                  <span className="math-item-value">250/mo</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Show Rate</span>
                  <span className="math-item-value">60%</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Actual Shows</span>
                  <span className="math-item-value">150/mo</span>
                </div>
                <div className="math-item highlight">
                  <span className="math-item-label">Cost Per Show</span>
                  <span className="math-item-value big">$166</span>
                </div>
              </div>
            </div>

            <div className="vs-circle">
              <span>VS</span>
            </div>

            <div className="math-card ai">
              <div className="math-card-header">
                <span className="math-label">AI SALES SYSTEM</span>
              </div>
              <div className="math-items">
                <div className="math-item">
                  <span className="math-item-label">AI Team Cost</span>
                  <span className="math-item-value">$497/mo</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Appointments Booked</span>
                  <span className="math-item-value">500+/mo</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Show Rate</span>
                  <span className="math-item-value">87%</span>
                </div>
                <div className="math-item">
                  <span className="math-item-label">Actual Shows</span>
                  <span className="math-item-value">435/mo</span>
                </div>
                <div className="math-item highlight">
                  <span className="math-item-label">Cost Per Show</span>
                  <span className="math-item-value big">$1.14</span>
                </div>
              </div>
            </div>
          </div>

          <div className="math-punchline">
            You're paying <span>145x more</span> per appointment. Let that sink
            in.
          </div>

          {/* Timeline Visual */}
          <div className="timeline-section">
            <h3 className="timeline-title">
              What Happens to Your Leads Right Now
            </h3>
            <div className="timeline-grid">
              <div className="timeline-item">
                <div className="timeline-time">0 min</div>
                <div className="timeline-event">Lead Submits Form</div>
                <div className="timeline-result won">AI calls immediately</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">3 min</div>
                <div className="timeline-event">Peak Interest Window</div>
                <div className="timeline-result lost">
                  Your SDR hasn't seen it yet
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">1 hour</div>
                <div className="timeline-event">Lead Goes Cold</div>
                <div className="timeline-result lost">
                  21x less likely to convert
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-time">24 hours</div>
                <div className="timeline-event">First Contact Attempt</div>
                <div className="timeline-result lost">
                  Already bought from competitor
                </div>
              </div>
            </div>
          </div>

          {/* Failure Cards */}
          <div className="failure-cards-grid">
            <div className="failure-card">
              <div className="failure-icon-box">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="failure-title">Speed to Lead Failure</h3>
              <p className="failure-description">
                MIT research: Contact within 5 minutes = 21x more likely to
                convert. Your average: 3+ hours.
              </p>
              <div className="failure-metric">78%</div>
              <div className="failure-metric-label">NEVER CONTACTED</div>
            </div>

            <div className="failure-card">
              <div className="failure-icon-box">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <h3 className="failure-title">Follow-Up Failure</h3>
              <p className="failure-description">
                80% of sales require 12+ touches. Your team averages 2 before
                giving up.
              </p>
              <div className="failure-metric">12x</div>
              <div className="failure-metric-label">MORE TOUCHES NEEDED</div>
            </div>

            <div className="failure-card">
              <div className="failure-icon-box">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="failure-title">Cost Per Appointment</h3>
              <p className="failure-description">
                You're paying $166 per show while AI delivers them for $1.14.
                That's 145x overpayment.
              </p>
              <div className="failure-metric">$166</div>
              <div className="failure-metric-label">YOUR COST PER SHOW</div>
            </div>
          </div>
        </div>

        {/* Visual Funnel Diagram */}
        <div className="diagram-section">
          <h3 className="diagram-title">
            The Leaky Bucket vs The Automated Pipeline
          </h3>
          <div className="funnel-diagram">
            {/* Manual Funnel */}
            <div className="funnel manual-funnel">
              <div className="funnel-header">
                <div className="funnel-name">Your Current System</div>
                <div className="funnel-type">Manual Lead Processing</div>
              </div>
              <div className="funnel-visual">
                <div className="funnel-stage stage-1">
                  <div className="stage-bar">1000 Leads</div>
                  <div className="stage-label">$50K spent</div>
                </div>
                <div className="funnel-stage stage-2">
                  <div className="stage-bar">350 Contacted</div>
                  <div className="stage-label">3+ hours delay</div>
                </div>
                <div className="funnel-stage stage-3">
                  <div className="stage-bar">200 Qualified</div>
                  <div className="stage-label">2 follow-ups only</div>
                </div>
                <div className="funnel-stage stage-4">
                  <div className="stage-bar">100 Booked</div>
                </div>
                <div className="funnel-stage stage-5">
                  <div className="stage-bar">60 Shows</div>
                </div>
              </div>
            </div>

            {/* AI Funnel */}
            <div className="funnel ai-funnel">
              <div className="funnel-header">
                <div className="funnel-name">AI Sales Team System</div>
                <div className="funnel-type">
                  Automated Lead-to-Appointment Engine
                </div>
              </div>
              <div className="funnel-visual">
                <div className="funnel-stage stage-1">
                  <div className="stage-bar">3000 Leads</div>
                  <div className="stage-label">$50K spent</div>
                  <div className="ai-badge-float">AI Influencer Ads</div>
                </div>
                <div className="funnel-stage stage-2">
                  <div className="stage-bar">2850 Contacted</div>
                  <div className="stage-label">3 minutes</div>
                </div>
                <div className="funnel-stage stage-3">
                  <div className="stage-bar">600 Qualified</div>
                  <div className="stage-label">12+ touches</div>
                </div>
                <div className="funnel-stage stage-4">
                  <div className="stage-bar">300 Booked</div>
                  <div className="stage-label">Automated</div>
                </div>
                <div className="funnel-stage stage-5">
                  <div className="stage-bar">261 Shows</div>
                  <div className="stage-label">87% attend</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="lead-cta">
          <div className="lead-cta-content">
            <h3 className="lead-cta-title">Stop the Leak. Start the Flow.</h3>
            <p className="lead-cta-text">
              You're paying <strong>4.3x more</strong> per appointment. Plus
              missing <strong>3x the leads</strong>.<br />
              Let's fix that in 48 hours.
            </p>
            <a href="#demo" className="lead-cta-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Book Your Free Demo</span>
            </a>
            <p
              style={{
                marginTop: "22px",
                color: "#666",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              ✓ See 3 leads turn into appointments live
              &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Get your custom ROI calculation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadProblem;
