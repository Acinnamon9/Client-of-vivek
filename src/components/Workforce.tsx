import React from "react";

const Workforce: React.FC = () => {
  return (
    <section className="bg-white py-[100px] px-5 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center max-w-[900px] mx-auto mb-[90px]">
          <span className="inline-flex items-center gap-2 bg-linear-to-br from-[#ff5722] to-[#ff8a65] text-white px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-[0.08em] mb-8 shadow-[0_8px_20px_rgba(255,87,34,0.25)] animate-[fadeInDown_0.8s_ease-out]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            The New Standard
          </span>
          <h2 className="text-[56px] font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-[-0.02em] animate-[fadeInUp_0.8s_ease-out_0.2s_backwards] text-center">
            Your 24/7 AI Sales Workforce
          </h2>
          <p className="text-xl text-[#666] leading-[1.6] animate-[fadeInUp_0.8s_ease-out_0.4s_backwards] text-center max-w-[800px] mx-auto mb-0">
            Replace the chaos of human teams with the precision of AI. One
            integrated system handling every stage of your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Role 1: Influencer (Ads) */}
          <div className="bg-white/90 border border-black/4 backdrop-blur-[20px] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:border-[#ff5722]/15 group">
            <div className="p-10 bg-linear-to-r from-white/50 to-transparent border-b border-black/3 flex justify-between items-start">
              <div className="w-[72px] h-[72px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-2xl flex items-center justify-center text-white text-[32px] shadow-[0_16px_32px_rgba(255,87,34,0.2)] mr-6 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[5deg]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3 className="text-[28px] font-extrabold text-[#1a1a1a] mb-2 tracking-[-0.01em]">
                  AI Social Media Influencer
                </h3>
                <div className="inline-block px-3 py-1.5 bg-[#f0fdf4] text-[#166534] rounded-lg text-sm font-bold border border-[#dcfce7]">
                  Replaces: Ad Agency ($5k/mo)
                </div>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <div className="grid gap-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Creates & posts viral content daily</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Manages paid ad campaigns 24/7</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Generates high-intent inbound leads</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-black/4">
                <div className="text-center p-4 bg-white rounded-2xl border border-black/4">
                  <span className="block text-2xl font-extrabold text-[#ff5722] mb-1">
                    10k+
                  </span>
                  <span className="text-xs text-[#6b7280] font-semibold uppercase">
                    Views/Day
                  </span>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-black/4">
                  <span className="block text-2xl font-extrabold text-[#ff5722] mb-1">
                    3.5%
                  </span>
                  <span className="text-xs text-[#6b7280] font-semibold uppercase">
                    CTR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 2: Sales Rep */}
          <div className="bg-white/90 border border-black/4 backdrop-blur-[20px] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:border-[#ff5722]/15 group">
            <div className="p-10 bg-linear-to-r from-white/50 to-transparent border-b border-black/3 flex justify-between items-start">
              <div className="w-[72px] h-[72px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-2xl flex items-center justify-center text-white text-[32px] shadow-[0_16px_32px_rgba(255,87,34,0.2)] mr-6 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[5deg]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3 className="text-[28px] font-extrabold text-[#1a1a1a] mb-2 tracking-[-0.01em]">
                  AI Sales Representative
                </h3>
                <div className="inline-block px-3 py-1.5 bg-[#f0fdf4] text-[#166534] rounded-lg text-sm font-bold border border-[#dcfce7]">
                  Replaces: 3 SDRs ($15k/mo)
                </div>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <div className="grid gap-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Calls leads within 3 minutes</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Qualifies prospects via SMS/Call</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Books appointments on your calendar</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-black/4">
                <div className="text-center p-4 bg-white rounded-2xl border border-black/4">
                  <span className="block text-2xl font-extrabold text-[#ff5722] mb-1">
                    24/7
                  </span>
                  <span className="text-xs text-[#6b7280] font-semibold uppercase">
                    Availability
                  </span>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl border border-black/4">
                  <span className="block text-2xl font-extrabold text-[#ff5722] mb-1">
                    5m
                  </span>
                  <span className="text-xs text-[#6b7280] font-semibold uppercase">
                    Response Time
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 3: Receptionist */}
          <div className="bg-white/90 border border-black/4 backdrop-blur-[20px] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:border-[#ff5722]/15 group">
            <div className="p-10 bg-linear-to-r from-white/50 to-transparent border-b border-black/3 flex justify-between items-start">
              <div className="w-[72px] h-[72px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-2xl flex items-center justify-center text-white text-[32px] shadow-[0_16px_32px_rgba(255,87,34,0.2)] mr-6 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[5deg]">
                <svg
                  width="32"
                  height="32"
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
              </div>
              <div className="workforce-role-info">
                <h3 className="text-[28px] font-extrabold text-[#1a1a1a] mb-2 tracking-[-0.01em]">
                  AI Receptionist
                </h3>
                <div className="inline-block px-3 py-1.5 bg-[#f0fdf4] text-[#166534] rounded-lg text-sm font-bold border border-[#dcfce7]">
                  Replaces: Front Desk ($4k/mo)
                </div>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <div className="grid gap-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Answers inbound calls instantly</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Routes calls to appropriate staff</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Handles scheduling & inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Role 4: Customer Service */}
          <div className="bg-white/90 border border-black/4 backdrop-blur-[20px] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] hover:border-[#ff5722]/15 group">
            <div className="p-10 bg-linear-to-r from-white/50 to-transparent border-b border-black/3 flex justify-between items-start">
              <div className="w-[72px] h-[72px] bg-linear-to-br from-[#ff5722] to-[#ff8a65] rounded-2xl flex items-center justify-center text-white text-[32px] shadow-[0_16px_32px_rgba(255,87,34,0.2)] mr-6 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[5deg]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="workforce-role-info">
                <h3 className="text-[28px] font-extrabold text-[#1a1a1a] mb-2 tracking-[-0.01em]">
                  AI Customer Service
                </h3>
                <div className="inline-block px-3 py-1.5 bg-[#f0fdf4] text-[#166534] rounded-lg text-sm font-bold border border-[#dcfce7]">
                  Replaces: Support Rep ($4k/mo)
                </div>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <div className="grid gap-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Resolves common issues instantly</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Available across Chat, SMS, Email</div>
                </div>
                <div className="flex items-start gap-3 text-[#4b5563] text-base leading-relaxed p-3 bg-[#f9fafb] rounded-xl transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:translate-x-1">
                  <span className="text-[#ff5722] font-black text-lg mt-[1px]">
                    ✓
                  </span>
                  <div>Escalates complex issues to humans</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]">
          <a
            href="https://myteam.ravan.ai/book"
            className="inline-flex items-center justify-center bg-linear-to-br from-[#ff5722] to-[#ff8a65] text-white text-xl font-extrabold px-14 py-6 rounded-2xl no-underline transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_20px_40px_-10px_rgba(255,87,34,0.4)] tracking-[-0.01em] hover:-translate-y-1 hover:scale-102 hover:shadow-[0_30px_60px_-15px_rgba(255,87,34,0.5)] cursor-pointer"
          >
            BOOK A DEMO CALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workforce;
