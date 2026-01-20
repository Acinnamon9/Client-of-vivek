import React from "react";
import {
  footerPlatformLinks,
  footerCompanyLinks,
  footerContactInfo,
  footerSocialLinks,
} from "../constants/footerData";
import { Container } from "./ui/Layout";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-24 pb-12 px-5 text-[#94a3b8] text-sm font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          <div className="space-y-6">
            <a
              href="/"
              className="text-white text-3xl font-black no-underline tracking-tighter"
            >
              Ravan<span className="text-brand-primary">.ai</span>
            </a>
            <p className="leading-relaxed text-base font-medium max-w-xs">
              Building the world's first truly autonomous AI sales workforce.
              Scale your business without scaling your headcount.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 tracking-tight">
              Platform
            </h4>
            <ul className="space-y-4">
              {footerPlatformLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-all duration-300 no-underline font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 tracking-tight">
              Company
            </h4>
            <ul className="space-y-4">
              {footerCompanyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-all duration-300 no-underline font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 tracking-tight">
              Contact
            </h4>
            <ul className="space-y-4 font-bold">
              <li>
                <a
                  href={`mailto:${footerContactInfo.email}`}
                  className="hover:text-white transition-all duration-300 no-underline"
                >
                  {footerContactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerContactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-all duration-300 no-underline"
                >
                  {footerContactInfo.phone}
                </a>
              </li>
              <li>{footerContactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-bold opacity-60 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            &copy; {currentYear} Ravan.ai. Built for Global Dominance.
          </p>
          <div className="flex gap-8">
            {footerSocialLinks.map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-white font-black transition-all no-underline text-xs uppercase tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
