import React, { useState } from "react";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-black/5 rounded-2xl bg-[#fafafa] mb-4 overflow-hidden transition-all duration-300 ${isOpen ? "ring-2 ring-[#ff5722]/5" : ""}`}
    >
      <button
        className="w-full text-left p-6 sm:p-7 bg-none border-none flex justify-between items-center cursor-pointer text-lg sm:text-xl font-bold text-[#1a1a1a]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span
          className={`text-2xl text-[#94a3b8] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out px-6 sm:px-8 ${isOpen ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="leading-relaxed text-[#4b5563] space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <Section className="font-['Plus_Jakarta_Sans',sans-serif]">
      <Container className="max-w-[900px]">
        <div className="text-center mb-16">
          <Badge variant="secondary">Everything You Need to Know</Badge>
          <h2 className="text-4xl sm:text-5xl font-black mt-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#64748b] mt-4 max-w-2xl mx-auto">
            Common questions about deploying your AI workforce.
          </p>
        </div>

        <div className="space-y-4">
          <FAQItem question="How does the AI compare to a human SDR?">
            <p>
              Our AI outperforms human SDRs in speed, consistency, and cost.
              While a human takes 3+ hours to respond and gives up after 2
              calls, our AI calls within 3 minutes and follows up 12+ times.
            </p>
            <p>
              Plus, it never sleeps, takes breaks, or has "bad days." It follows
              your script perfectly every single time.
            </p>
          </FAQItem>

          <FAQItem question="Is it difficult to set up?">
            <p>
              Not at all. We handle the entire implementation for you. We
              typically have clients live within 48 to 72 hours.
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4">
              {[
                "We clone your voice (optional)",
                "We upload your scripts and knowledge base",
                "We connect it to your CRM and calendar",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-[#ff5722] before:font-bold before:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FAQItem>

          <FAQItem question="Does it integrate with my CRM?">
            <p>
              Yes, we integrate natively with HighLevel (GHL), Salesforce,
              HubSpot, and 3,000+ other apps via Zapier.
            </p>
          </FAQItem>

          <FAQItem question="What if I don't like the results?">
            <p>
              We offer a 30-day money-back guarantee. We are so confident in our
              system that if you don't see value, we don't want your money.
            </p>
          </FAQItem>
        </div>

        <Card className="mt-16 text-center border-none shadow-none bg-[#f8fafc]">
          <CardContent className="pt-10">
            <div className="text-xl font-bold mb-6 text-[#1a1a1a]">
              Still have questions?
            </div>
            <Button
              onClick={() =>
                window.open("https://myteam.ravan.ai/book", "_blank")
              }
            >
              Book a Free Demo Call
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
};

export default FAQ;
