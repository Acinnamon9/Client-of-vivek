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
    <section className="bg-white py-[100px] px-5 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-[#1a1a1a] mb-[30px] tracking-[-0.02em]">
            ROI Snapshot by Industry
          </h2>
          <div className="flex justify-center gap-3 flex-wrap mb-[60px]">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`px-7 py-3.5 rounded-full border-none font-semibold text-[15px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeTab === industry.id
                    ? "bg-[#4361ee] text-white shadow-[0_10px_20px_rgba(67,97,238,0.2)]"
                    : "bg-[#f5f7f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1e293b]"
                }`}
                onClick={() => setActiveTab(industry.id)}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center min-h-[500px]">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] h-full">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="relative min-h-[500px]">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-300 ease-linear ${
                  activeTab === ind.id
                    ? "opacity-100 relative pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div
                  className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    activeTab === ind.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <h3 className="text-[28px] font-extrabold text-[#1a1a1a] mb-6 leading-[1.3]">
                    {ind.title}
                  </h3>
                  <div className="flex gap-2.5 mb-10 flex-wrap">
                    {ind.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-full text-[13px] font-semibold text-[#64748b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-[30px] mb-10 pt-[30px] border-t border-[#f1f5f9]">
                    {ind.metrics.map((metric, idx) => (
                      <div className="flex flex-col gap-2" key={idx}>
                        <span className="text-4xl font-extrabold text-[#22c55e] flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="w-6 h-6"
                          >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                          </svg>
                          {metric.value}
                        </span>
                        <span className="text-sm font-semibold text-[#64748b]">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white border border-[#f1f5f9] rounded-[20px] p-6 flex items-center gap-5 mb-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-transform duration-300 ease-linear hover:translate-x-2.5">
                    <div className="w-12 h-12 bg-[#ef4444] rounded-full flex items-center justify-center text-white shrink-0">
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
                      <h4 className="text-base font-bold text-[#1e293b] mb-1">
                        {ind.action.title}
                      </h4>
                      <p className="text-sm text-[#64748b]">
                        {ind.action.time}
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#1a1a1a] text-white px-9 py-[18px] rounded-xl text-base font-bold w-full border-none cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#333]">
                    {ind.buttonText}
                  </button>
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
