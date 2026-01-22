import React, { useState } from "react";
import {
  industries,
  UNIVERSAL_BASELINE,
  type Industry,
} from "../constants/industryData";
import { Section, Container } from "./ui/Layout";
import Button from "./ui/Button";

const SectorCard: React.FC<{
  industry: Industry;
  onHover: (industry: Industry | null) => void;
}> = ({ industry, onHover }) => (
  <div
    className="relative group bg-(--card)/40 backdrop-blur-xl border border-(--border) rounded-[32px] p-8 flex flex-col h-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.05)] hover:bg-(--card)/60 transition-all duration-500 overflow-hidden"
    onMouseEnter={() => onHover(industry)}
    onMouseLeave={() => onHover(null)}
  >
    {/* Image Background */}
    <div className="absolute inset-0 z-0">
      <img
        src={industry.image}
        alt=""
        className="w-full h-full object-cover opacity-[0.08] group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0 mix-blend-multiply dark:mix-blend-normal"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--card)/50 to-(--card) opacity-90" />
    </div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-bold text-brand-link uppercase tracking-[0.2em] px-3 py-1 bg-brand-link/10 rounded-full backdrop-blur-md">
          {industry.label}
        </span>
        <div className="w-8 h-8 rounded-full bg-(--muted) flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-4 h-4 text-(--foreground)"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-black text-(--foreground) uppercase mb-6 leading-tight tracking-tight">
        {industry.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-8">
        {industry.tags.slice(0, 2).map((tag: string) => (
          <span
            key={tag}
            className="text-[9px] font-bold text-(--muted-foreground) flex items-center gap-1.5"
          >
            <span className="w-1 h-1 bg-brand-link rounded-full" />
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-(--border) space-y-5">
        {industry.metrics.map((metric: any, idx: number) => (
          <div key={idx} className="flex justify-between items-end">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold text-(--muted-foreground) uppercase tracking-widest">
                {metric.label}
              </span>
              {metric.mechanism && (
                <span className="text-[9px] text-(--muted-foreground)/70 italic font-medium">
                  {metric.mechanism}
                </span>
              )}
            </div>
            <span className="text-2xl font-black text-brand-success tracking-tighter">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CenterCard: React.FC<{ hoveredIndustry: Industry | null }> = ({
  hoveredIndustry,
}) => {
  const activeImage = hoveredIndustry
    ? hoveredIndustry.image
    : UNIVERSAL_BASELINE.image;

  return (
    <div className="relative overflow-hidden bg-brand-primary/5 backdrop-blur-2xl border border-brand-primary/20 rounded-[32px] p-8 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeImage}
          src={activeImage}
          alt=""
          className="w-full h-full object-cover opacity-10 transition-opacity duration-700 ease-in-out mix-blend-multiply dark:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-linear-to-br from-(--card) via-(--card)/90 to-(--card) opacity-90 dark:opacity-80" />
      </div>

      <div className="relative z-10 flex flex-col h-full text-center items-center justify-center">
        <h3 className="text-2xl font-black text-(--foreground) uppercase mb-2 tracking-tighter relative">
          {UNIVERSAL_BASELINE.title}
          <div className="h-1 w-12 bg-brand-primary mx-auto mt-4 rounded-full" />
        </h3>

        <p className="text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          {UNIVERSAL_BASELINE.tags.slice(0, 1).join("")}
        </p>

        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
          {UNIVERSAL_BASELINE.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl font-black text-(--foreground) tracking-tighter">
                {metric.value}
              </span>
              <span className="text-[9px] font-bold text-(--muted-foreground) uppercase tracking-widest mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <Button
          variant="primary"
          size="md"
          className="w-full mt-auto text-white dark:text-white"
          onClick={() => window.open("https://atomicx.ravan.ai/book", "_blank")}
        >
          {UNIVERSAL_BASELINE.buttonText}
        </Button>
      </div>
    </div>
  );
};

const IndustrySnapshots: React.FC = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<Industry | null>(null);

  // Split industries for grid placement
  const firstHalf = industries.slice(0, 4);
  const secondHalf = industries.slice(4, 8);

  return (
    <Section id="industry" className="font-jakarta py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-(--foreground) mb-4 tracking-tighter uppercase italic">
            Impact <span className="text-brand-link">In Scale</span>
          </h2>
          <p className="text-(--muted-foreground) text-lg font-medium max-w-2xl mx-auto">
            Our universal core provides the baseline. Our sector logic provides
            the power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstHalf.map((ind) => (
            <SectorCard
              key={ind.id}
              industry={ind}
              onHover={setHoveredIndustry}
            />
          ))}

          <CenterCard hoveredIndustry={hoveredIndustry} />

          {secondHalf.map((ind) => (
            <SectorCard
              key={ind.id}
              industry={ind}
              onHover={setHoveredIndustry}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default IndustrySnapshots;
