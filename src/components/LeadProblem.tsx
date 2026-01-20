import React from "react";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";

const LeadProblem: React.FC = () => {
  return (
    <Section className="bg-(--background) relative overflow-hidden font-jakarta flex flex-col justify-center min-h-screen">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-linear-to-b from-(--muted)/20 to-transparent"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] animate-float-orb"></div>
        <div
          className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-success/2 rounded-full blur-[100px] animate-float-orb"
          style={{ animationDirection: "reverse" }}
        ></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center animate-fade-in-up">
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-(--foreground) leading-[1.05] mb-8 tracking-tighter uppercase px-4">
            The Problem:
            <br />
            You're Bleeding
            <br />
            <span className="bg-linear-to-r from-brand-primary to-brand-primary/60 bg-clip-text text-transparent italic">
              Appointments
            </span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-(--muted-foreground) leading-relaxed max-w-3xl mx-auto font-medium tracking-tight">
            Think of your leads like milk from expensive cows — every second
            counts before it spoils. Here's exactly what's happening to your
            $100,000 ad spend:
          </p>

          <div className="mt-16 animate-bounce">
            <div className="w-10 h-10 rounded-full border-2 border-(--border) flex items-center justify-center mx-auto opacity-30">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LeadProblem;
