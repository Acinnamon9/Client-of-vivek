import React from "react";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Comparison from "./lead-problem/Comparison";
import Timeline from "./lead-problem/Timeline";
import FailureCards from "./lead-problem/FailureCards";
import Funnel from "./lead-problem/Funnel";
import CTA from "./lead-problem/CTA";

const LeadProblem: React.FC = () => {
  return (
    <Section className="bg-linear-to-b from-[#faf8f5] to-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] animate-float-orb"></div>
        <div
          className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-success/2 rounded-full blur-[100px] animate-float-orb"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <Badge variant="brand" className="mb-8">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            The Sales System Problem
          </Badge>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-brand-dark leading-[1.1] mb-8 tracking-tighter">
            You're Still Bleeding Appointments
            <br />
            While Competitors Run{" "}
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent relative inline-block">
              Automated Revenue Machines
              <span
                className="absolute bottom-1 left-0 w-full h-1 bg-brand-primary/30 rounded-full scale-x-0 animate-expand-underline origin-left"
                style={{ animationDelay: "0.5s" }}
              ></span>
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-[#64748b] leading-relaxed max-w-3xl mx-auto font-medium">
            Think of your leads like milk from expensive cows — every second
            counts before it spoils. Here's exactly what's happening to your
            $100,000 ad spend:
          </p>
        </div>

        <Comparison />
        <Timeline />
        <FailureCards />
        <Funnel />
        <CTA />
      </Container>
    </Section>
  );
};

export default LeadProblem;
