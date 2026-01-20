import React from "react";

const Proof: React.FC = () => {
  return (
    <section className="bg-white py-[100px] px-5 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[60px]">
          <span className="inline-block bg-[#ff5722] text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase">
            Case Study
          </span>
          <h2 className="text-5xl font-black mt-6 text-[#1e293b]">
            Real Results, Real Revenue.
          </h2>
          <p className="text-lg text-[#64748b] mt-4">
            See how top companies are scaling with Ravan.ai
          </p>
        </div>

        <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.04)] p-12">
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-black text-[#e2e8f0]">LOGO</div>
            <div>
              <h2 className="text-[32px] font-extrabold text-[#1e293b]">
                How Danube Properties Generated $5 Million+ in Sales in 30 Days
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[60px]">
            <div className="bg-[#f8fafc] p-8 rounded-[20px] text-center transition-transform hover:-translate-y-1">
              <span className="block text-[42px] font-black text-[#1e293b] my-2">
                $5.2M
              </span>
              <span className="block mt-2 text-sm font-bold text-[#64748b] uppercase">
                Revenue Generated
              </span>
            </div>
            <div className="bg-[#f8fafc] p-8 rounded-[20px] text-center transition-transform hover:-translate-y-1">
              <span className="block text-[42px] font-black text-[#1e293b] my-2">
                1,240
              </span>
              <span className="block mt-2 text-sm font-bold text-[#64748b] uppercase">
                Qualified Leads
              </span>
            </div>
            <div className="bg-[#f8fafc] p-8 rounded-[20px] text-center transition-transform hover:-translate-y-1">
              <span className="block text-[42px] font-black text-[#1e293b] my-2">
                480
              </span>
              <span className="block mt-2 text-sm font-bold text-[#64748b] uppercase">
                Appointments Booked
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mt-10">
            <div>
              <h3 className="flex items-center gap-3 text-xl font-extrabold mt-8 mb-4">
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
              <p className="text-[#475569] leading-relaxed">
                Danube was drowning in leads but converting poorly. Their sales
                team couldn't follow up fast enough, resulting in wasted ad
                spend and lost opportunities.
              </p>

              <h3 className="flex items-center gap-3 text-xl font-extrabold mt-8 mb-4">
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
              <p className="text-[#475569] leading-relaxed">
                They deployed Ravan.ai's AI Sales Rep to handle initial outreach
                and qualification.
              </p>
              <ul className="list-none mt-4">
                {[
                  "Instant lead response (under 2 mins)",
                  "24/7 qualification of prospects",
                  "Automated booking directly to sales calendars",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="relative pl-6 py-2 text-[#475569] leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-[#00c853] before:font-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f8fafc] p-10 rounded-[24px] border border-[#e2e8f0]">
              <div className="text-lg italic leading-[1.6] mb-8 text-[#334155]">
                "We were skeptical at first, but the results are undeniable.
                Ravan.ai didn't just replace our SDRs, it outperformed them by a
                factor of 10. Our sales team now only talks to qualified leads."
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#475569] rounded-full"></div>
                <div>
                  <h4 className="font-extrabold text-base text-[#1e293b]">
                    Sarah J.
                  </h4>
                  <p className="text-sm text-[#94a3b8]">
                    VP of Sales, Danube Properties
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[60px] text-center">
            <a
              href="https://myteam.ravan.ai/book"
              className="inline-block bg-[#1a1a1a] text-white px-9 py-[18px] rounded-xl font-bold no-underline transition-colors duration-300 hover:bg-[#333]"
            >
              Get Results Like Danube
            </a>
          </div>
        </div>

        <div className="mt-[100px]">
          <div className="text-center text-sm font-bold text-[#94a3b8] mb-8 uppercase tracking-widest">
            Trusted By Industry Leaders
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {["DANUBE", "EMAAR", "DAMAC", "SOBHA", "NAKHEEL"].map(
              (logo, idx) => (
                <div
                  key={idx}
                  className="font-black text-2xl text-[#cbd5e1] tracking-widest"
                >
                  {logo}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
