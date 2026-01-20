import React from "react";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const FinalCTA: React.FC = () => {
  const handleBookDemo = () => {
    window.open("https://myteam.ravan.ai/book", "_blank");
  };

  return (
    <Section
      dark
      className="font-['Plus_Jakarta_Sans',sans-serif]"
      id="section-final-cta"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,87,34,0.12)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,87,34,0.08)_0%,transparent_40%)]" />
      </div>

      <Container className="max-w-[900px] text-center">
        <Badge
          variant="outline"
          className="mb-8 border-white/20 text-[#ff8a65] backdrop-blur-md"
        >
          Limited Availability
        </Badge>

        <h2 className="text-[clamp(42px,5vw,64px)] font-black mb-8 leading-[1.1] tracking-tight">
          Stop Losing Leads.
          <br />
          <span className="bg-linear-to-br from-[#ff5722] to-[#ff8a65] bg-clip-text text-transparent">
            Start Printing Revenue.
          </span>
        </h2>

        <p className="text-[clamp(20px,2.5vw,24px)] text-white/70 leading-relaxed mb-14 font-medium max-w-2xl mx-auto">
          Join the top 1% of businesses using AI to dominate their market. Your
          new sales team is ready to start tomorrow.
        </p>

        <div className="flex flex-col gap-6 items-center mb-16">
          <Button size="xl" onClick={handleBookDemo} className="px-16">
            Book Your Free Demo Now
          </Button>
          <Button
            variant="ghost"
            className="text-white/60 hover:text-white"
            onClick={() =>
              document
                .getElementById("engine")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Live ROI Calculator
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-16">
          {[
            { value: "48h", label: "Setup Time" },
            { value: "100%", label: "Automated" },
            { value: "30d", label: "Guarantee" },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <span className="text-4xl sm:text-5xl font-black text-white mb-2 block transition-transform group-hover:scale-110">
                {item.value}
              </span>
              <span className="text-sm text-white/40 uppercase tracking-widest font-bold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTA;
