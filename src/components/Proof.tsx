import React from "react";
import { caseStudy, trustedLogos } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card } from "./ui/Card";

const Proof: React.FC = () => {
  return (
    <Section id="proof" className="bg-(--background) py-20 sm:py-24">
      <Container>
        <div className="text-center mb-10">
          <Badge variant="ghost" className="mb-4">
            Direct Impact
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black text-(--foreground) tracking-tight">
            Real Revenue. Verified.
          </h2>
        </div>

        <Card
          variant="white"
          className="p-6 sm:p-10 shadow-xl border-(--border)"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            {caseStudy.sourceLogo ? (
              <img
                src={caseStudy.sourceLogo}
                alt={caseStudy.logo}
                className="h-16 w-auto object-contain rounded-xl"
              />
            ) : (
              <div className="text-2xl font-black text-brand-link opacity-20 tracking-tighter">
                {caseStudy.logo}
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl font-black text-(--foreground) leading-tight max-w-2xl text-left md:text-right">
              {caseStudy.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {caseStudy.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-(--muted)/20 p-6 sm:p-8 rounded-[24px] text-center border border-(--border) transition-all duration-300 hover:bg-(--muted)/40"
              >
                <span className="block text-3xl sm:text-4xl font-black text-(--foreground) mb-1">
                  {metric.value}
                </span>
                <span className="block text-[10px] font-black text-(--muted-foreground) uppercase tracking-widest">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-lg font-black text-brand-primary">
                  The Challenge
                </h4>
                <p className="text-base text-(--muted-foreground) leading-relaxed font-medium">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-lg font-black text-brand-success">
                  The Solution
                </h4>
                <p className="text-base text-(--muted-foreground) leading-relaxed font-medium">
                  {caseStudy.solution}
                </p>
                <ul className="space-y-2.5 mt-4">
                  {caseStudy.solutionPoints.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-(--foreground) font-semibold text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
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
              className="lg:col-span-12 xl:col-span-5 p-8 border-brand-link/10 bg-brand-link/5 relative group h-full flex flex-col justify-between"
            >
              <div className="absolute top-4 left-6 text-5xl text-brand-link/10 font-serif pointer-events-none select-none">
                "
              </div>
              <p className="text-lg italic leading-relaxed text-(--foreground) mb-8 relative z-10 font-medium opacity-90">
                {caseStudy.testimonial}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-linear-to-br from-brand-link to-brand-link/60 rounded-full shadow-lg shrink-0"></div>
                <div>
                  <h5 className="font-black text-(--foreground) text-base leading-none mb-1">
                    {caseStudy.author}
                  </h5>
                  <p className="text-xs text-(--muted-foreground) font-bold">
                    {caseStudy.role}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="px-10 rounded-2xl"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              Get Results Like Danube
            </Button>
          </div>
        </Card>

        {/* Logo Cloud */}
        <div className="mt-20">
          <div className="text-center text-[10px] font-black text-(--muted-foreground) mb-8 uppercase tracking-[0.3em] opacity-60">
            Trusted By Industry Leaders
          </div>
          <div className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap opacity-30 grayscale hover:opacity-50 transition-all duration-700">
            {trustedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="font-black text-xl sm:text-2xl text-(--foreground) tracking-tighter hover:scale-110 transition-transform cursor-default"
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
