import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { Section, Container } from "./ui/Layout";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const itemVariants = cva(
  "border border-black/5 rounded-2xl bg-[#fafafa] mb-4 overflow-hidden transition-all duration-300",
  {
    variants: {
      open: {
        true: "ring-2 ring-brand-primary/5",
        false: "",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

const iconVariants = cva(
  "text-2xl text-slate-400 transition-transform duration-300 font-medium",
  {
    variants: {
      open: {
        true: "rotate-180",
        false: "",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

const contentVariants = cva(
  "overflow-hidden transition-all duration-500 ease-in-out px-6 sm:px-8",
  {
    variants: {
      open: {
        true: "max-h-[800px] pb-8 opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={itemVariants({ open: isOpen })}>
      <button
        className="w-full text-left p-6 sm:p-7 bg-none border-none flex justify-between items-center cursor-pointer text-lg sm:text-xl font-bold text-brand-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={iconVariants({ open: isOpen })}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div className={contentVariants({ open: isOpen })}>
        <div className="leading-relaxed text-slate-600 space-y-4 font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <Section id="faq" className="font-['Plus_Jakarta_Sans',sans-serif]">
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
                  className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-brand-primary before:font-bold before:text-xl"
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
            <div className="text-xl font-bold mb-6 text-brand-dark">
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
