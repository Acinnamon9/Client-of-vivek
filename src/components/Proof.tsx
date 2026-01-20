import React from "react";
import { caseStudy, trustedLogos } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card } from "./ui/Card";

const Proof: React.FC = () => {
  return (
    <Section className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="brand" className="mb-6">
            Case Study
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-brand-dark tracking-tight">
            Real Results, Real Revenue.
          </h2>
          <p className="text-xl text-[#64748b] mt-6 font-medium">
            See how top companies are scaling with Ravan.ai
          </p>
        </div>

        <Card variant="white" className="p-4 sm:p-12 shadow-2xl border-black/3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="text-3xl font-black text-brand-link opacity-20 tracking-tighter">
              {caseStudy.logo}
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-brand-dark leading-tight max-w-3xl">
              {caseStudy.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {caseStudy.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] p-10 rounded-[28px] text-center border border-black/2 transition-transform hover:-translate-y-2"
              >
                <span className="block text-4xl sm:text-5xl font-black text-brand-dark mb-2">
                  {metric.value}
                </span>
                <span className="block text-xs font-black text-[#94a3b8] uppercase tracking-widest leading-none">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="flex items-center gap-3 text-xl font-black text-brand-primary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  The Challenge
                </h4>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center gap-3 text-xl font-black text-brand-success">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  The Solution
                </h4>
                <p className="text-lg text-[#475569] leading-relaxed font-medium mb-6">
                  {caseStudy.solution}
                </p>
                <ul className="space-y-4">
                  {caseStudy.solutionPoints.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#475569] font-semibold"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center text-sm font-black shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card
              variant="glass"
              className="p-10 border-brand-link/5 bg-brand-link/2 relative group"
            >
              <div className="absolute top-8 left-8 text-6xl text-brand-link/10 font-serif pointer-events-none select-none">
                "
              </div>
              <p className="text-xl italic leading-relaxed text-[#334155] mb-10 relative z-10 font-medium">
                {caseStudy.testimonial}
              </p>
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-linear-to-br from-brand-link to-brand-link/60 rounded-full shadow-lg"></div>
                <div>
                  <h5 className="font-black text-brand-dark text-lg leading-none mb-1">
                    {caseStudy.author}
                  </h5>
                  <p className="text-sm text-[#94a3b8] font-bold">
                    {caseStudy.role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-20 text-center">
            <Button
              size="xl"
              className="px-12"
              onClick={() =>
                window.open("https://myteam.ravan.ai/book", "_blank")
              }
            >
              Get Results Like Danube
            </Button>
          </div>
        </Card>

        {/* Logo Cloud */}
        <div className="mt-32">
          <div className="text-center text-[10px] font-black text-[#94a3b8] mb-12 uppercase tracking-[0.3em]">
            Trusted By Industry Leaders
          </div>
          <div className="flex justify-center items-center gap-12 sm:gap-20 flex-wrap opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {trustedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="font-black text-2xl sm:text-3xl text-brand-dark tracking-tighter hover:scale-110 transition-transform cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Proof;
