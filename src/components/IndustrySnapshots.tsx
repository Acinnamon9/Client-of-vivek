import React, { useState } from "react";

const IndustrySnapshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState("global");

  const industries = [
    {
      id: "global",
      label: "Global Stats",
      title: "Real-Time Infrastructure Performance",
      tags: ["Global API Hub", "Multi-Channel Sync", "Live Analytics"],
      metrics: [
        { value: "1.2M+", label: "API Calls/Mo" },
        { value: "99.9%", label: "Uptime Reliability" },
      ],
      action: {
        title: "System Deep Dive",
        time: "03:12 • Infrastructure Overview",
      },
      buttonText: "Explore the Platform",
      image: "https://loremflickr.com/800/600/dashboard,analytics,data",
    },
    {
      id: "real-estate",
      label: "Real Estate",
      title: "Your Always-On Property Concierge",
      tags: ["Qualified Leads", "FAQ on Listings", "Event Confirmation"],
      metrics: [
        { value: "400%", label: "in CVR" },
        { value: "25–35%", label: "in show-up rate" },
      ],
      action: {
        title: "Hear It In Action",
        time: "01:53 • Real Estate AI Rep",
      },
      buttonText: "Book a Meeting",
      image: "https://loremflickr.com/800/600/dashboard,realestate,data",
    },
    {
      id: "gaming",
      label: "Gaming & Casinos",
      title: "High-Stakes Player Engagement",
      tags: ["VIP Concierge", "Retention SMS", "Prizing Notifications"],
      metrics: [
        { value: "3.2x", label: "LTV increase" },
        { value: "55%", label: "in reactivation rate" },
      ],
      action: { title: "Hear It In Action", time: "02:15 • Casino VIP Rep" },
      buttonText: "Book a Meeting",
      image: "https://loremflickr.com/800/600/dashboard,casino,poker",
    },
    {
      id: "healthcare",
      label: "Healthcare",
      title: "Patient Care Coordination",
      tags: ["Pre-Qualification", "Appointment Reminders", "Post-Op Follow-up"],
      metrics: [
        { value: "92%", label: "show-up rate" },
        { value: "60%", label: "reduction in no-shows" },
      ],
      action: {
        title: "Hear It In Action",
        time: "01:42 • Clinic AI Assistant",
      },
      buttonText: "Book a Meeting",
      image: "https://loremflickr.com/800/600/dashboard,medical,clinic",
    },
    {
      id: "finance",
      label: "Lending & Finance",
      title: "Lending & Finance Velocity",
      tags: ["Credit Pre-Check", "Doc Collection", "Rate Inquiries"],
      metrics: [
        { value: "3x", label: "Faster Underwriting" },
        { value: "$45k", label: "saved in ops cost" },
      ],
      action: { title: "Hear It In Action", time: "02:30 • Finance AI Broker" },
      buttonText: "Book a Meeting",
      image: "https://loremflickr.com/800/600/dashboard,finance,bank",
    },
    {
      id: "logistics",
      label: "Transportation & Logistics",
      title: "Global Logistics Efficiency",
      tags: ["Fleet Updates", "Route Inquiries", "Delivery Alerts"],
      metrics: [
        { value: "24/7", label: "Fleet Coverage" },
        { value: "48%", label: "reduction in dispatch errors" },
      ],
      action: {
        title: "Hear It In Action",
        time: "01:58 • Logistics Dispatch AI",
      },
      buttonText: "Book a Meeting",
      image: "https://loremflickr.com/800/600/dashboard,logistics,truck",
    },
  ];

  const activeIndustry =
    industries.find((i) => i.id === activeTab) || industries[0];

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

        <div className="snapshot-content-wrapper">
          <div className="snapshot-image-box">
            <img src={activeIndustry.image} alt={activeIndustry.title} />
          </div>
          <div className="snapshot-info-stack">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`snapshot-info-pane ${activeTab === ind.id ? "active" : ""}`}
              >
                <div className="snapshot-info">
                  <h3>{ind.title}</h3>
                  <div className="industry-tag-list">
                    {ind.tags.map((tag) => (
                      <span key={tag} className="industry-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="metric-row">
                    {ind.metrics.map((metric, idx) => (
                      <div className="metric-item" key={idx}>
                        <span className="metric-value">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                          </svg>
                          {metric.value}
                        </span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
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
                      <h4>{ind.action.title}</h4>
                      <p>{ind.action.time}</p>
                    </div>
                  </div>
                  <button className="snapshot-cta">{ind.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySnapshots;
