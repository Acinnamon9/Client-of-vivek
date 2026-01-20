import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] pt-20 pb-10 px-5 text-white/40 text-sm">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-[60px]">
        <div className="col-span-1">
          <a
            href="/"
            className="text-white text-2xl font-extrabold no-underline mb-4 inline-block"
          >
            Ravan.ai
          </a>
          <p className="leading-[1.6] mt-3">
            Building the world's first truly autonomous AI sales workforce.
            Scale your business without scaling your headcount.
          </p>
        </div>

        <div>
          <h4 className="text-white text-base font-bold mb-6">Platform</h4>
          <ul className="list-none">
            {[
              { label: "Features", href: "#features" },
              { label: "AI Influencer", href: "#ai-influencer" },
              { label: "AI Sales Rep", href: "#ai-sales-rep" },
              { label: "Integrations", href: "#integrations" },
            ].map((link, idx) => (
              <li key={idx} className="mb-3">
                <a
                  href={link.href}
                  className="text-white/40 hover:text-white transition-colors duration-300 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-bold mb-6">Company</h4>
          <ul className="list-none">
            {[
              { label: "About Us", href: "#about" },
              { label: "Case Studies", href: "#case-studies" },
              { label: "Privacy Policy", href: "#privacy" },
              { label: "Terms of Service", href: "#terms" },
            ].map((link, idx) => (
              <li key={idx} className="mb-3">
                <a
                  href={link.href}
                  className="text-white/40 hover:text-white transition-colors duration-300 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-base font-bold mb-6">Contact</h4>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="mailto:support@ravan.ai"
                className="text-white/40 hover:text-white transition-colors duration-300 no-underline"
              >
                support@ravan.ai
              </a>
            </li>
            <li className="mb-3">
              <a
                href="tel:+1234567890"
                className="text-white/40 hover:text-white transition-colors duration-300 no-underline"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li className="mb-3">Dubai, UAE</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-5">
          <p>&copy; {currentYear} Ravan.ai. All rights reserved.</p>
          <div className="flex gap-6">
            {["LinkedIn", "Twitter", "Instagram"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="text-white/40 hover:text-white font-semibold transition-colors no-underline"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
