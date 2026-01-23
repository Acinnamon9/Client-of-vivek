import React from "react";
import { caseStudy } from "../constants/proofData";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";

import { Card } from "./ui/Card";

const Proof: React.FC = () => {
  return (
    <Section id="proof" className="bg-(--background) py-24 border-t border-(--border)">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="ghost" className="mb-6 border-(--border) bg-(--muted)/50">
            CASE STUDY 01: REAL ESTATE
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-(--foreground) tracking-tight mb-4">
            Results, Verified by Data.
          </h2>
          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-lg">
            We don't just promise leads. We deliver closed revenue.
          </p>
        </div>

        <Card
          variant="white"
          className="p-8 sm:p-12 shadow-2xl shadow-black/5 border-(--border) overflow-hidden relative"
        >
          {/* Minimal top border accent - Monochrome */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-depth opacity-10"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-(--border) pb-8">
            <div className="flex items-center gap-6">
              {caseStudy.sourceLogo ? (
                <img
                  src={caseStudy.sourceLogo}
                  alt={caseStudy.logo}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="text-3xl font-serif font-black text-(--foreground) tracking-tighter">
                  {caseStudy.logo}
                </div>
              )}
              <div className="h-8 w-px bg-(--border)"></div>
              <div className="text-sm font-medium text-(--muted-foreground)">
                Strategic Partnership <br /> Q3 2025 Report
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {caseStudy.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border border-(--border) relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-black/5 group-hover:bg-brand-depth transition-colors"></div>
                <span className="block text-4xl sm:text-5xl font-medium text-(--foreground) mb-2 tracking-tight">
                  {metric.value}
                </span>
                <span className="block text-xs font-bold text-(--muted-foreground) uppercase tracking-widest">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-(--muted-foreground) uppercase tracking-widest mb-3">The Challenge</h4>
                <p className="text-lg text-(--foreground) leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-(--muted-foreground) uppercase tracking-widest mb-3">The Ravan Solution</h4>
                <p className="text-lg text-(--foreground) leading-relaxed mb-4">
                  {caseStudy.solution}
                </p>
                <ul className="space-y-3">
                  {caseStudy.solutionPoints.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-(--foreground)/80 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-success shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-(--muted)/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-center border border-(--border)">
              <div className="mb-6 text-brand-primary">
                {/* Simple Quote Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>
              <blockquote className="text-xl font-medium text-(--foreground) italic leading-relaxed mb-6">
                "{caseStudy.testimonial}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center font-bold text-brand-primary">
                  {caseStudy.author.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-bold text-(--foreground) block">{caseStudy.author}</cite>
                  <span className="text-xs text-(--muted-foreground) uppercase tracking-wider">{caseStudy.role}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
};

export default Proof;
