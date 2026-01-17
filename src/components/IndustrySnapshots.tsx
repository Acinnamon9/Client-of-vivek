import React, { useState } from "react";

const IndustrySnapshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState("global");

  const industries = [
    { id: "global", label: "Global Stats" },
    { id: "real-estate", label: "Real Estate" },
    { id: "gaming", label: "Gaming & Casinos" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Lending & Finance" },
    { id: "logistics", label: "Transportation & Logistics" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "global":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,analytics,data"
                alt="Global ROI Snapshot"
              />
            </div>
            <div className="snapshot-info">
              <h3>Real-Time Infrastructure Performance</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">Global API Hub</span>
                <span className="industry-tag">Multi-Channel Sync</span>
                <span className="industry-tag">Live Analytics</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    1.2M+
                  </span>
                  <span className="metric-label">API Calls/Mo</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    99.9%
                  </span>
                  <span className="metric-label">Uptime Reliability</span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>System Deep Dive</h4>
                  <p>03:12 • Infrastructure Overview</p>
                </div>
              </div>
              <button className="snapshot-cta">Explore the Platform</button>
            </div>
          </div>
        );
      case "real-estate":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,realestate,data"
                alt="Real Estate Industry"
              />
            </div>
            <div className="snapshot-info">
              <h3>Your Always-On Property Concierge</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">Qualified Leads</span>
                <span className="industry-tag">FAQ on Listings</span>
                <span className="industry-tag">Event Confirmation</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    400%
                  </span>
                  <span className="metric-label">in CVR</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    25–35%
                  </span>
                  <span className="metric-label">in show-up rate</span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>Hear It In Action</h4>
                  <p>01:53 • Real Estate AI Rep</p>
                </div>
              </div>
              <button className="snapshot-cta">Book a Meeting</button>
            </div>
          </div>
        );
      case "gaming":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,casino,poker"
                alt="Gaming & Casinos"
              />
            </div>
            <div className="snapshot-info">
              <h3>High-Stakes Player Engagement</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">VIP Concierge</span>
                <span className="industry-tag">Retention SMS</span>
                <span className="industry-tag">Prizing Notifications</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    3.2x
                  </span>
                  <span className="metric-label">LTV increase</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    55%
                  </span>
                  <span className="metric-label">in reactivation rate</span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>Hear It In Action</h4>
                  <p>02:15 • Casino VIP Rep</p>
                </div>
              </div>
              <button className="snapshot-cta">Book a Meeting</button>
            </div>
          </div>
        );
      case "healthcare":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,medical,clinic"
                alt="Healthcare Industry"
              />
            </div>
            <div className="snapshot-info">
              <h3>Patient Care Coordination</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">Pre-Qualification</span>
                <span className="industry-tag">Appointment Reminders</span>
                <span className="industry-tag">Post-Op Follow-up</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    92%
                  </span>
                  <span className="metric-label">show-up rate</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    60%
                  </span>
                  <span className="metric-label">reduction in no-shows</span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>Hear It In Action</h4>
                  <p>01:42 • Clinic AI Assistant</p>
                </div>
              </div>
              <button className="snapshot-cta">Book a Meeting</button>
            </div>
          </div>
        );
      case "finance":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,finance,bank"
                alt="Lending & Finance"
              />
            </div>
            <div className="snapshot-info">
              <h3>Lending & Finance Velocity</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">Credit Pre-Check</span>
                <span className="industry-tag">Doc Collection</span>
                <span className="industry-tag">Rate Inquiries</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    3x
                  </span>
                  <span className="metric-label">Faster Underwriting</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    $45k
                  </span>
                  <span className="metric-label">saved in ops cost</span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>Hear It In Action</h4>
                  <p>02:30 • Finance AI Broker</p>
                </div>
              </div>
              <button className="snapshot-cta">Book a Meeting</button>
            </div>
          </div>
        );
      case "logistics":
        return (
          <div className="snapshot-content active">
            <div className="snapshot-image-box">
              <img
                src="https://loremflickr.com/800/600/dashboard,logistics,truck"
                alt="Transportation & Logistics"
              />
            </div>
            <div className="snapshot-info">
              <h3>Global Logistics Efficiency</h3>
              <div className="industry-tag-list">
                <span className="industry-tag">Fleet Updates</span>
                <span className="industry-tag">Route Inquiries</span>
                <span className="industry-tag">Delivery Alerts</span>
              </div>
              <div className="metric-row">
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    24/7
                  </span>
                  <span className="metric-label">Fleet Coverage</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    48%
                  </span>
                  <span className="metric-label">
                    reduction in dispatch errors
                  </span>
                </div>
              </div>
              <div className="action-card">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="action-text">
                  <h4>Hear It In Action</h4>
                  <p>01:58 • Logistics Dispatch AI</p>
                </div>
              </div>
              <button className="snapshot-cta">Book a Meeting</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="roi-snapshot-section">
      <div className="roi-snapshot-container">
        <div className="roi-snapshot-header">
          <h2>ROI Snapshot by Industry</h2>
          <div className="industry-tabs">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`tab-btn ${activeTab === industry.id ? "active" : ""}`}
                onClick={() => setActiveTab(industry.id)}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        <div className="snapshot-content-wrapper">{renderContent()}</div>
      </div>
    </section>
  );
};

export default IndustrySnapshots;
