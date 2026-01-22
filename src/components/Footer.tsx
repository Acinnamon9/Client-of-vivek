import React from "react";
import Button from "./ui/Button";
import { Container } from "./ui/Layout";
import { useTheme } from "../contexts/ThemeContext";
import {
  footerPlatformLinks,
  footerCompanyLinks,
  footerContactInfo,
  footerSocialLinks,
} from "../constants/footerData";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-(--background) border-t border-(--border) pt-24 pb-12 px-5 text-(--muted-foreground) text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          <div className="space-y-6">
            <a
              href="/"
              className="text-(--foreground) text-3xl font-black no-underline tracking-tighter transition-colors"
            >
              Ravan<span className="text-brand-primary">.ai</span>
            </a>
            <p className="leading-relaxed text-base font-medium max-w-xs transition-colors">
              Building the world's first truly autonomous AI sales workforce.
              Scale your business without scaling your headcount.
            </p>
          </div>

          <div>
            <h4 className="text-(--foreground) text-lg font-black mb-8 tracking-tight transition-colors">
              Platform
            </h4>
            <ul className="space-y-4">
              {footerPlatformLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    as="a"
                    href={link.href}
                    variant="link"
                    className="justify-start"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-(--foreground) text-lg font-black mb-8 tracking-tight transition-colors">
              Company
            </h4>
            <ul className="space-y-4">
              {footerCompanyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    as="a"
                    href={link.href}
                    variant="link"
                    className="justify-start"
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-(--foreground) text-lg font-black mb-8 tracking-tight transition-colors">
              Contact
            </h4>
            <ul className="space-y-4 font-bold">
              <li>
                <a
                  href={`mailto:${footerContactInfo.email}`}
                  className="hover:text-brand-primary transition-all duration-300 no-underline"
                >
                  {footerContactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerContactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-brand-primary transition-all duration-300 no-underline"
                >
                  {footerContactInfo.phone}
                </a>
              </li>
              <li>{footerContactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-(--border) flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-bold opacity-60 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            &copy; {currentYear} Ravan.ai. Built for Global Dominance.
          </p>

          <div className="flex items-center gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-(--muted) hover:bg-brand-primary/10 transition-all border border-(--border) group"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-5 h-5 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <div className="flex gap-8">
              {footerSocialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-brand-primary font-black transition-all no-underline text-xs uppercase tracking-widest text-(--foreground)"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
