import React from "react";
import { workforceRoles } from "../constants/workforceData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card, CardHeader, CardContent } from "./ui/Card";

const Workforce: React.FC = () => {
  return (
    <Section className="font-['Plus_Jakarta_Sans',sans-serif] bg-slate-50/50">
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
            <Card
              key={role.id}
              variant="glass"
              className="group hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 h-full flex flex-col"
            >
              <CardHeader className="flex flex-row items-center justify-between border-b border-black/3 bg-linear-to-r from-black/1 to-transparent">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shrink-0">
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-dark tracking-tight">
                      {role.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-success/10 text-brand-success-deep rounded-lg text-xs font-black uppercase tracking-wider mt-1 border border-brand-success/10">
                      Replaces: {role.replaces} ({role.replacesValue})
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grow flex flex-col justify-between pt-8">
                <div className="space-y-4 mb-8">
                  {role.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-3.5 bg-black/2 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:shadow-sm"
                    >
                      <span className="text-brand-primary font-black text-xl leading-none">
                        ✓
                      </span>
                      <p className="text-[#4b5563] font-medium leading-tight">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {role.metrics && (
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/5">
                    {role.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-4 bg-white/50 rounded-2xl border border-black/3"
                      >
                        <span className="block text-2xl font-black text-brand-primary mb-0.5">
                          {metric.value}
                        </span>
                        <span className="text-[10px] text-[#94a3b8] font-black uppercase tracking-widest">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
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
