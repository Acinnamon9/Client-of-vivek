import React from "react";

const LeadProblem: React.FC = () => {
  return (
    <section className="bg-linear-to-b from-[#faf8f5] to-white py-[120px] px-5 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden md:py-[80px]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,87,34,0.04)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,87,34,0.03)_0%,transparent_40%)] animate-[pulse-bg_8s_ease-in-out_infinite]"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-[90px] animate-[fadeInUp_0.8s_ease-out]">
          <span className="inline-flex items-center gap-2.5 bg-linear-to-br from-[#ff5722] to-[#ff8a65] text-white px-7 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-[0.1em] mb-7 shadow-[0_8px_24px_rgba(255,87,34,0.35)] animate-[badge-glow_3s_ease-in-out_infinite]">
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
          <h2 className="text-[clamp(36px,5vw,58px)] font-black text-black leading-[1.15] mb-7 tracking-[-0.03em]">
            You're Still Bleeding Appointments
            <br />
            While Competitors Run{" "}
            <span className="bg-linear-to-br from-[#ff5722] to-[#ff8a65] bg-clip-text text-transparent relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-1 after:bg-linear-to-r after:from-[#ff5722] after:to-[#ff8a65] after:rounded-sm after:scale-x-0 after:origin-left after:animate-[expand-underline_1.2s_ease-out_0.5s_forwards]">
              Automated Revenue Machines
            </span>
          </h2>
          <p className="text-[clamp(18px,2.5vw,22px)] text-[#666] leading-[1.7] max-w-[800px] mx-auto font-normal">
            Think of your leads like milk from expensive cows — every second
            counts before it spoils.
            <br />
            Here's exactly what's happening to your $100,000 ad spend:
          </p>
        </div>

        {/* Visual Flow Comparison */}
        <div className="bg-white rounded-[28px] p-[48px_32px] md:p-[70px] mb-[70px] shadow-[0_24px_70px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,87,34,0.08),inset_0_0_120px_rgba(255,87,34,0.02)] relative overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,87,34,0.12)_0%,transparent_70%)] animate-[float-orb_25s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(255,87,34,0.1)_0%,transparent_70%)] animate-[float-orb_25s_ease-in-out_infinite_reverse]"></div>

          <h3 className="text-[clamp(30px,4vw,38px)] font-black text-center mb-[70px] text-black tracking-[-0.02em] relative z-10">
            The Brutal Math of Your Current System
          </h3>

          {/* Math Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 mb-[70px] items-center relative z-10">
            {/* Current System */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.1)] relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.15)] border-[3px] border-[#ff0000] bg-linear-to-br from-[rgba(255,0,0,0.03)] to-white">
              <div className="text-center mb-9">
                <span className="text-sm font-extrabold tracking-[0.1em] uppercase text-[#ff0000]">
                  YOUR CURRENT SYSTEM
                </span>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { label: "5 SDRs Salary", value: "$25,000/mo" },
                  { label: "Appointments Booked", value: "250/mo" },
                  { label: "Show Rate", value: "60%" },
                  { label: "Actual Shows", value: "150/mo" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center pb-5 border-b border-black/8 last:border-b-0 last:pb-0"
                  >
                    <span className="text-base text-[#666] font-medium">
                      {item.label}
                    </span>
                    <span className="text-xl font-extrabold text-black">
                      {item.value}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-5 border-t-[3px] border-black/12 mt-3">
                  <span className="text-base text-[#666] font-medium">
                    Cost Per Show
                  </span>
                  <span className="text-[38px] font-extrabold text-[#ff0000]">
                    $166
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-full flex items-center justify-center text-white font-black text-[18px] md:text-[22px] shadow-[0_12px_32px_rgba(255,87,34,0.4)] animate-[vs-pulse_2s_ease-in-out_infinite] mx-auto z-20 relative">
              <span>VS</span>
            </div>

            {/* AI System */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.1)] relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.15)] border-[3px] border-[#00aa00] bg-linear-to-br from-[rgba(0,200,0,0.03)] to-white">
              <div className="text-center mb-9">
                <span className="text-sm font-extrabold tracking-[0.1em] uppercase text-[#00aa00]">
                  AI SALES SYSTEM
                </span>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { label: "AI Team Cost", value: "$497/mo" },
                  { label: "Appointments Booked", value: "500+/mo" },
                  { label: "Show Rate", value: "87%" },
                  { label: "Actual Shows", value: "435/mo" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center pb-5 border-b border-black/8 last:border-b-0 last:pb-0"
                  >
                    <span className="text-base text-[#666] font-medium">
                      {item.label}
                    </span>
                    <span className="text-xl font-extrabold text-black">
                      {item.value}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-5 border-t-[3px] border-black/12 mt-3">
                  <span className="text-base text-[#666] font-medium">
                    Cost Per Show
                  </span>
                  <span className="text-[38px] font-extrabold text-[#00aa00]">
                    $1.14
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-[clamp(22px,3vw,28px)] font-extrabold text-[#333] mb-[70px] relative z-10">
            You're paying{" "}
            <span className="text-[#ff5722] font-black">145x more</span> per
            appointment. Let that sink in.
          </div>

          {/* Timeline Visual */}
          <div className="bg-linear-to-br from-[#1a0f08] to-[#2c1810] rounded-[28px] p-[48px_24px] md:p-16 mb-[70px] relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,87,34,0.08)_0%,transparent_60%)] animate-[pulse-timeline_6s_ease-in-out_infinite]"></div>
            <h3 className="text-[clamp(28px,3.5vw,36px)] font-black text-white text-center mb-14 relative z-10">
              What Happens to Your Leads Right Now
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              {[
                {
                  time: "0 min",
                  event: "Lead Submits Form",
                  result: "AI calls immediately",
                  type: "won",
                },
                {
                  time: "3 min",
                  event: "Peak Interest Window",
                  result: "Your SDR hasn't seen it yet",
                  type: "lost",
                },
                {
                  time: "1 hour",
                  event: "Lead Goes Cold",
                  result: "21x less likely to convert",
                  type: "lost",
                },
                {
                  time: "24 hours",
                  event: "First Contact Attempt",
                  result: "Already bought from competitor",
                  type: "lost",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center relative transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl font-black bg-linear-to-br from-[#ff5722] to-[#ff8a65] bg-clip-text text-transparent mb-4 tracking-[-0.02em]">
                    {item.time}
                  </div>
                  <div className="text-lg font-bold text-white mb-2.5">
                    {item.event}
                  </div>
                  <div
                    className={`text-[15px] font-semibold ${item.type === "won" ? "text-[#4ade80]" : "text-[#ff5555]"}`}
                  >
                    {item.result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Failure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-[70px] relative z-10">
            {[
              {
                title: "Speed to Lead Failure",
                desc: "MIT research: Contact within 5 minutes = 21x more likely to convert. Your average: 3+ hours.",
                metric: "78%",
                label: "NEVER CONTACTED",
                icon: (
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
                ),
              },
              {
                title: "Follow-Up Failure",
                desc: "80% of sales require 12+ touches. Your team averages 2 before giving up.",
                metric: "12x",
                label: "MORE TOUCHES NEEDED",
                icon: (
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
                ),
              },
              {
                title: "Cost Per Appointment",
                desc: "You're paying $166 per show while AI delivers them for $1.14. That's 145x overpayment.",
                metric: "$166",
                label: "YOUR COST PER SHOW",
                icon: (
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
                ),
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-12 text-center relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-2 border-[#ff5722]/12 hover:-translate-y-2 hover:scale-102 hover:shadow-[0_20px_50px_rgba(255,87,34,0.2)] hover:border-[#ff5722]/40 group"
              >
                <div className="w-[90px] h-[90px] mx-auto mb-7 rounded-full flex items-center justify-center bg-linear-to-br from-[#ff5722] to-[#ff8a65] shadow-[0_12px_32px_rgba(255,87,34,0.4)]">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-black mb-4.5">
                  {card.title}
                </h3>
                <p className="text-[#666] leading-[1.6] mb-6 min-h-[72px]">
                  {card.desc}
                </p>
                <div className="text-[56px] font-black text-[#ff5722] mb-3">
                  {card.metric}
                </div>
                <div className="text-[13px] font-extrabold text-[#ff5722] tracking-[0.12em] uppercase">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Funnel Diagram */}
        <div className="bg-linear-to-br from-[#1a0f08] to-[#2c1810] rounded-[28px] p-[48px_24px] md:p-[70px] mb-[70px] relative overflow-hidden shadow-[0_32px_90px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]">
          <div className="absolute top-[-50%] right-[-25%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,87,34,0.18)_0%,transparent_60%)] animate-[rotate-slow_35s_linear_infinite]"></div>
          <div className="absolute bottom-[-50%] left-[-25%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,200,0,0.12)_0%,transparent_60%)] animate-[rotate-slow_45s_linear_infinite_reverse]"></div>

          <h3 className="text-[clamp(30px,4vw,38px)] font-black text-white text-center mb-14 relative z-10">
            The Leaky Bucket vs The Automated Pipeline
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 relative z-10">
            {/* Manual Funnel */}
            <div className="relative bg-white/6 rounded-3xl p-11 backdrop-blur-xl border border-white/12 transition-all duration-400 ease-out hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.25),0_0_70px_rgba(255,255,255,0.06)] border-[#ff0000]/35 bg-linear-to-br from-[rgba(255,0,0,0.04)] to-white/6 hover:shadow-[0_24px_48px_rgba(255,0,0,0.25),0_0_50px_rgba(255,0,0,0.12)]">
              <div className="text-center mb-9">
                <div className="text-2xl font-extrabold text-white mb-2.5 tracking-[-0.01em]">
                  Your Current System
                </div>
                <div className="text-sm text-white/65 uppercase tracking-[0.08em] font-semibold">
                  Manual Lead Processing
                </div>
              </div>
              <div className="w-full h-[400px] relative mx-auto pb-5">
                {[
                  {
                    width: "90%",
                    top: 0,
                    text: "1000 Leads",
                    sub: "$50K spent",
                  },
                  {
                    width: "50%",
                    top: 80,
                    text: "350 Contacted",
                    sub: "3+ hours delay",
                  },
                  {
                    width: "35%",
                    top: 160,
                    text: "200 Qualified",
                    sub: "2 follow-ups only",
                  },
                  { width: "20%", top: 240, text: "100 Booked", sub: "" },
                  { width: "12%", top: 320, text: "60 Shows", sub: "" },
                ].map((stage, idx) => (
                  <div
                    key={idx}
                    className="absolute left-1/2 -translate-x-1/2 text-center transition-all duration-300 flex flex-col items-center hover:scale-106 hover:z-10"
                    style={{ width: stage.width, top: stage.top }}
                  >
                    <div className="h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-base mb-2 relative shadow-[0_8px_20px_rgba(0,0,0,0.35)] tracking-[0.3px] px-6 min-w-[120px] w-full bg-linear-to-r from-[#ff0000] to-[#ff6666]">
                      {stage.text}
                    </div>
                    {stage.sub && (
                      <div className="text-xs text-white/80 leading-[1.3] font-medium mt-2 text-center whitespace-nowrap">
                        {stage.sub}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Funnel */}
            <div className="relative bg-white/6 rounded-3xl p-11 backdrop-blur-xl border border-white/12 transition-all duration-400 ease-out hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.25),0_0_70px_rgba(255,255,255,0.06)] border-[#00aa00]/35 bg-linear-to-br from-[rgba(0,200,0,0.1)] to-white/6 hover:shadow-[0_24px_48px_rgba(0,200,0,0.25),0_0_50px_rgba(0,200,0,0.12)]">
              <div className="text-center mb-9">
                <div className="text-2xl font-extrabold text-white mb-2.5 tracking-[-0.01em]">
                  AI Sales Team System
                </div>
                <div className="text-sm text-white/65 uppercase tracking-[0.08em] font-semibold">
                  Automated Lead-to-Appointment Engine
                </div>
              </div>
              <div className="w-full h-[400px] relative mx-auto pb-5">
                {[
                  {
                    width: "100%",
                    top: 0,
                    text: "3000 Leads",
                    sub: "$50K spent",
                    badge: "AI Influencer Ads",
                  },
                  {
                    width: "85%",
                    top: 80,
                    text: "2850 Contacted",
                    sub: "3 minutes",
                  },
                  {
                    width: "70%",
                    top: 160,
                    text: "600 Qualified",
                    sub: "12+ touches",
                  },
                  {
                    width: "55%",
                    top: 240,
                    text: "300 Booked",
                    sub: "Automated",
                  },
                  {
                    width: "40%",
                    top: 320,
                    text: "261 Shows",
                    sub: "87% attend",
                  },
                ].map((stage, idx) => (
                  <div
                    key={idx}
                    className="absolute left-1/2 -translate-x-1/2 text-center transition-all duration-300 flex flex-col items-center hover:scale-106 hover:z-10"
                    style={{ width: stage.width, top: stage.top }}
                  >
                    <div className="h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-base mb-2 relative shadow-[0_10px_28px_rgba(0,200,0,0.35)] tracking-[0.3px] px-6 min-w-[120px] w-full bg-linear-to-r from-[#00aa00] to-[#00dd00] overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-linear-to-r from-transparent via-white/35 to-transparent animate-[shine-slow_4s_infinite]"></div>
                      {stage.text}
                    </div>
                    {stage.sub && (
                      <div className="text-xs text-white/80 leading-[1.3] font-medium mt-2 text-center whitespace-nowrap">
                        {stage.sub}
                      </div>
                    )}
                    {stage.badge && (
                      <div className="absolute top-[-12px] right-[-70px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] text-white px-4 py-2 rounded-3xl text-[11px] font-extrabold tracking-[0.06em] shadow-[0_6px_16px_rgba(255,87,34,0.4)] animate-[float-badge-enhanced_3.5s_ease-in-out_infinite]">
                        {stage.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-[48px_24px] md:p-[70px] bg-linear-to-br from-white to-[#faf8f5] rounded-[28px] border-2 border-[#ff5722]/15 relative overflow-hidden shadow-[0_20px_60px_rgba(255,87,34,0.08)] mt-[70px]">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,87,34,0.06)_0%,transparent_70%)] animate-[rotate-slow_35s_linear_infinite_reverse] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-[clamp(30px,4.5vw,42px)] font-black text-black mb-5 tracking-[-0.02em]">
              Stop the Leak. Start the Flow.
            </h3>
            <p className="text-[clamp(18px,2.5vw,21px)] text-[#666] mb-10 leading-[1.6]">
              You're paying{" "}
              <strong className="text-[#ff5722] font-extrabold">
                4.3x more
              </strong>{" "}
              per appointment. Plus missing{" "}
              <strong className="text-[#ff5722] font-extrabold">
                3x the leads
              </strong>
              .
              <br />
              Let's fix that in 48 hours.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-3 bg-linear-to-br from-[#ff5722] to-[#ff6a3d] text-white px-[50px] py-[22px] rounded-xl text-[19px] font-extrabold no-underline transition-all duration-400 shadow-[0_16px_40px_rgba(255,87,34,0.35)] tracking-[-0.01em] hover:-translate-y-1 hover:scale-103 hover:shadow-[0_20px_50px_rgba(255,87,34,0.5)]"
            >
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
            <p className="mt-5.5 text-[#666] text-base font-medium">
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
