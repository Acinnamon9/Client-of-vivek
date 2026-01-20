import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-black/6 rounded-[20px] bg-[#fcfcfc] mb-5 overflow-hidden ${isOpen ? "active" : ""}`}
    >
      <button
        className="w-full text-left p-7 bg-none border-none flex justify-between items-center cursor-pointer text-[19px] font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-2xl text-[#94a3b8]">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out px-8 ${isOpen ? "max-h-[500px] pb-8" : "max-h-0"}`}
      >
        <div className="leading-[1.6] text-[#475569] space-y-4">{children}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="bg-white py-[100px] px-5 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-[60px]">
          <span className="bg-[#f1f5f9] text-[#475569] px-4 py-1.5 rounded-full text-sm font-bold">
            Everything You Need to Know
          </span>
          <h2 className="text-[40px] font-black mt-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#64748b] mt-4">
            Common questions about deploying your AI workforce.
          </p>
        </div>

        <div>
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
            <ul className="list-none pl-0">
              {[
                "We clone your voice (optional)",
                "We upload your scripts and knowledge base",
                "We connect it to your CRM and calendar",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="py-2 relative pl-6 before:content-['•'] before:absolute before:left-2 before:text-[#ff5722] before:font-black"
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

        <div className="mt-[60px] text-center p-10 bg-[#f8fafc] rounded-[24px]">
          <div className="text-lg font-bold mb-6">Still have questions?</div>
          <a
            href="https://myteam.ravan.ai/book"
            className="inline-block bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold no-underline transition-transform duration-300 ease-out hover:-translate-y-0.5"
          >
            Book a Free Demo Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
