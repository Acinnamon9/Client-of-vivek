import React from "react";
import Button from "../ui/Button";

interface FooterLink {
  label: string;
  href: string;
}

interface ExternalLink {
  email?: string;
  phone?: string;
  address?: string;
}

interface FooterNavProps {
  platformLinks: FooterLink[];
  companyLinks: FooterLink[];
  contactInfo: ExternalLink;
}

/**
 * FooterNav Component
 * Renders the navigation columns for Platform, Company, and Contact info.
 */
const FooterNav: React.FC<FooterNavProps> = ({
  platformLinks,
  companyLinks,
  contactInfo,
}) => {
  return (
    <>
      <div>
        <h4 className="text-(--foreground) text-lg font-black mb-8 tracking-tight transition-colors">
          Platform
        </h4>
        <ul className="space-y-4">
          {platformLinks.map((link, idx) => (
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
          {companyLinks.map((link, idx) => (
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
          {contactInfo.email && (
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-brand-primary transition-all duration-300 no-underline"
              >
                {contactInfo.email}
              </a>
            </li>
          )}
          {contactInfo.phone && (
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="hover:text-brand-primary transition-all duration-300 no-underline"
              >
                {contactInfo.phone}
              </a>
            </li>
          )}
          {contactInfo.address && <li>{contactInfo.address}</li>}
        </ul>
      </div>
    </>
  );
};

export default FooterNav;
