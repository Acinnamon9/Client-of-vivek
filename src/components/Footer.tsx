import React from "react";
import { Container } from "./ui/Layout";
import { useTheme } from "../contexts/ThemeContext";
import {
  footerPlatformLinks,
  footerCompanyLinks,
  footerContactInfo,
  footerSocialLinks,
} from "../constants/footerData";
import FooterBrand from "./footer/FooterBrand";
import FooterNav from "./footer/FooterNav";
import FooterBottom from "./footer/FooterBottom";

/**
 * Footer Component
 * Main footer section with navigation, branding, and theme controls.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer
      data-theme="dark"
      className="bg-brand-depth border-t border-(--border) pt-24 pb-12 px-5 text-(--muted-foreground) text-sm"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          <FooterBrand />
          <FooterNav
            platformLinks={footerPlatformLinks}
            companyLinks={footerCompanyLinks}
            contactInfo={footerContactInfo}
          />
        </div>

        <FooterBottom
          currentYear={currentYear}
          theme={theme}
          toggleTheme={toggleTheme}
          socialLinks={footerSocialLinks}
        />
      </Container>
    </footer>
  );
};

export default Footer;
