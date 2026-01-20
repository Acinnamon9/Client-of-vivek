import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { industries } from "../constants/industryData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const tabVariants = cva(
  "px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300",
  {
    variants: {
      active: {
        true: "bg-brand-link text-white shadow-lg shadow-brand-link/25",
        false:
          "bg-(--muted)/20 text-(--muted-foreground) hover:bg-(--muted)/40 hover:text-(--foreground)",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

const paneVariants = cva("transition-all duration-500 absolute w-full", {
  variants: {
    active: {
      true: "opacity-100 translate-y-0 relative z-10",
      false: "opacity-0 translate-y-8 pointer-events-none",
    },
  },
  defaultVariants: {
    active: false,
  },
});

const IndustrySnapshots: React.FC = () => {
  const [activeTab, setActiveTab] = useState("global");

  const activeIndustry =
    industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <Section id="industry" className="font-jakarta">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-(--foreground) mb-8 tracking-tight">
            ROI Snapshot by Industry
          </h2>

          <div className="flex justify-center gap-3 flex-wrap mb-16">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={tabVariants({ active: activeTab === industry.id })}
                onClick={() => setActiveTab(industry.id)}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[500px]">
          {/* Image Pane */}
          <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] md:h-full group border border-(--border)">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Info Pane */}
          <div className="relative min-h-[500px] flex flex-col justify-center">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={paneVariants({ active: activeTab === ind.id })}
              >
                <h3 className="text-3xl sm:text-4xl font-black text-(--foreground) mb-6 leading-tight uppercase tracking-tighter">
                  {ind.title}
                </h3>

                <div className="flex gap-2.5 mb-10 flex-wrap">
                  {ind.tags.map((tag) => (
                    <Badge key={tag} variant="ghost" size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10 pt-8 border-t border-(--border)">
                  {ind.metrics.map((metric, idx) => (
                    <div className="flex flex-col gap-2" key={idx}>
                      <span className="text-3xl sm:text-4xl font-black text-brand-success flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          className="w-6 h-6 shrink-0"
                        >
                          <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                        {metric.value}
                      </span>
                      <span className="text-sm font-bold text-(--muted-foreground) uppercase tracking-wider">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="black"
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    window.open("https://atomicx.ravan.ai/book", "_blank")
                  }
                >
                  {ind.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IndustrySnapshots;
