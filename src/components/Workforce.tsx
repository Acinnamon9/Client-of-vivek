import React from "react";
import { workforceRoles } from "../constants/workforceData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import RoleCard from "./workforce/RoleCard";

const Workforce: React.FC = () => {
  return (
    <Section className="font-jakarta bg-slate-50/50">
      <Container className="max-w-[1400px]">
        <div className="text-center max-w-[900px] mx-auto mb-20">
          <Badge variant="brand" className="mb-8 animate-fade-in-down">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            The New Standard
          </Badge>
          <h2 className="text-5xl sm:text-6xl font-black text-brand-dark leading-tight mb-6 tracking-tight animate-fade-in-up">
            Your 24/7 AI Sales Workforce
          </h2>
          <p className="text-xl text-[#64748b] leading-relaxed animate-fade-in-up font-medium">
            Replace the chaos of human teams with the precision of AI. One
            integrated system handling every stage of your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {workforceRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Button
            size="xl"
            className="px-16"
            onClick={() =>
              window.open("https://myteam.ravan.ai/book", "_blank")
            }
          >
            BOOK A DEMO CALL
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Workforce;
