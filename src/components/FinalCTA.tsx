import React from "react";

const FinalCTA: React.FC = () => {
  const handleBookDemo = () => {
    window.location.href = "https://myteam.ravan.ai/book";
  };

  return (
    <section
      className="bg-[#1a1a1a] py-[120px] px-5 text-center text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden md:py-[80px]"
      id="section-final-cta"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,87,34,0.08)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,87,34,0.06)_0%,transparent_40%)]"></div>

      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 text-[#ff8a65] px-6 py-2.5 rounded-full font-bold text-[13px] uppercase tracking-[0.08em] mb-8 border border-[#ff5722]/20 backdrop-blur-[10px]">
          Limited Availability
        </div>

        <h2 className="text-[clamp(42px,5vw,64px)] font-black mb-8 leading-[1.1] tracking-[-0.02em]">
          Stop Losing Leads.
          <br />
          <span className="bg-linear-to-br from-[#ff5722] to-[#ff8a65] bg-clip-text text-transparent">
            Start Printing Revenue.
          </span>
        </h2>

        <p className="text-[clamp(20px,2.5vw,24px)] text-white/70 leading-[1.6] mb-14 font-normal">
          Join the top 1% of businesses using AI to dominate their market.
          <br />
          Your new sales team is ready to start tomorrow.
        </p>

        <div className="flex flex-col gap-4 items-center mb-[60px]">
          <button
            onClick={handleBookDemo}
            className="bg-linear-to-br from-[#ff5722] to-[#ff6a3d] text-white px-16 py-6 rounded-2xl text-[22px] font-extrabold transition-all duration-400 shadow-[0_20px_40px_-10px_rgba(255,87,34,0.4)] tracking-[-0.01em] relative overflow-hidden border-none cursor-pointer hover:-translate-y-1 hover:scale-102 hover:shadow-[0_30px_60px_-15px_rgba(255,87,34,0.5)]"
          >
            Book Your Free Demo Now
          </button>
          <button
            onClick={handleBookDemo}
            className="text-white/60 text-base font-semibold hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
          >
            View Live ROI Calculator
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-[60px]">
          {[
            { value: "48h", label: "Setup Time" },
            { value: "100%", label: "Automated" },
            { value: "30d", label: "Guarantee" },
          ].map((item, idx) => (
            <div key={idx} className="text-white">
              <span className="text-4xl font-black text-white mb-2 block">
                {item.value}
              </span>
              <span className="text-[13px] text-white/50 uppercase tracking-[0.08em] font-bold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
