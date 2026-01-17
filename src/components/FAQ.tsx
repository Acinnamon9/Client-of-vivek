import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`faq-answer`}
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
      >
        <div className="faq-answer-content">{children}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="faq-main-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">Everything You Need to Know</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Common questions about deploying your AI workforce.
          </p>
        </div>

        <div className="faq-grid">
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
            <ul className="faq-list">
              <li>We clone your voice (optional)</li>
              <li>We upload your scripts and knowledge base</li>
              <li>We connect it to your CRM and calendar</li>
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

        <div className="faq-cta-section">
          <div className="faq-cta-text">Still have questions?</div>
          <a href="https://myteam.ravan.ai/book" className="faq-cta-button">
            Book a Free Demo Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
