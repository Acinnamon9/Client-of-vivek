import React from "react";
import Button from "../ui/Button";
import { Card } from "../ui/Card";
import { Section, Container } from "../ui/Layout";

const CTA: React.FC = () => {
  return (
    <Section id="lead-problem-cta" className="bg-(--background) py-24 sm:py-32">
      <Container className="max-w-[1000px]">
        <Card
          variant="white"
          className="p-12 sm:p-20 text-center border-brand-primary/20 shadow-2xl relative overflow-hidden animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.03),transparent)]"></div>
          <div className="relative z-10">
            <h3 className="text-4xl sm:text-5xl font-black text-(--foreground) mb-6 tracking-tight uppercase">
              Stop the Leak. Start the Flow.
            </h3>
            <p className="text-xl sm:text-2xl text-(--muted-foreground) mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              You're paying{" "}
              <strong className="text-brand-primary font-black">
                4.3x more
              </strong>{" "}
              per appointment. Plus missing{" "}
              <strong className="text-brand-primary font-black">
                3x the leads
              </strong>
              . Let's fix that in 48 hours.
            </p>
            <Button
              size="xl"
              className="px-12"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="mr-3"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book Your Free Demo
            </Button>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-(--muted-foreground) font-black uppercase text-xs tracking-widest opacity-60">
              <span>✓ Live AI Demo</span>
              <span className="hidden sm:block opacity-20">|</span>
              <span>✓ Custom ROI Audit</span>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

export default CTA;
