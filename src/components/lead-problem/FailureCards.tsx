import React from "react";
import { failureCards } from "../../constants/leadProblemData";
import { Card } from "../ui/Card";
import { Section, Container } from "../ui/Layout";

const FailureCards: React.FC = () => {
  return (
    <Section
      id="lead-problem-failure"
      className="bg-(--background) py-24 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {failureCards.map((card, idx) => (
            <Card
              key={idx}
              variant="white"
              className="p-10 text-center border-brand-primary/10 hover:border-brand-primary/40 hover:shadow-brand-primary/10 transition-all duration-500 group"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-xl shadow-brand-primary/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {card.icon}
              </div>
              <h4 className="text-2xl font-black text-(--foreground) mb-4 uppercase tracking-tight">
                {card.title}
              </h4>
              <p className="text-(--muted-foreground) font-medium leading-relaxed mb-8 min-h-[80px]">
                {card.desc}
              </p>
              <div className="text-5xl font-black text-brand-primary mb-2">
                {card.metric}
              </div>
              <div className="text-xs font-black text-brand-primary/60 tracking-widest uppercase">
                {card.label}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FailureCards;
