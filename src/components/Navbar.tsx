import React from "react";
import { useNavbar } from "../hooks/useNavbar";
import SpotlightEffect from "./ui/SpotlightEffect";
import NavbarGlassFilter from "./navbar/NavbarGlassFilter";
import NavbarDesktopLinks from "./navbar/NavbarDesktopLinks";
import NavbarMobileMenu from "./navbar/NavbarMobileMenu";

const Navbar: React.FC = () => {
  const {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeSection,
    navLinks,
    scrollToSection,
  } = useNavbar();

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 py-8 pointer-events-none">
      <SpotlightEffect
        id="navbar-container"
        spotlightSize={250}
        spotlightColor="rgba(255, 255, 255, 0.20)"
        className={`max-w-360 mx-auto transition-all duration-500 pointer-events-auto ${
          isScrolled
            ? "glass-navbar-frosted rounded-3xl px-12 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)]"
            : "bg-transparent border border-transparent px-6 py-3"
        }`}
      >
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <a href="/" className="transition-opacity hover:opacity-80">
            <img
              src="https://vite-react-knv2dkr5t-abhijeets-projects-1922facd.vercel.app//assets/AX_logo_transparent.png"
              alt="Ravan.ai"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <NavbarDesktopLinks
            navLinks={navLinks}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-(--foreground) focus:outline-none bg-(--muted)/20 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <NavbarMobileMenu
          mobileMenuOpen={mobileMenuOpen}
          navLinks={navLinks}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </SpotlightEffect>

      {/* SVG Filter for Glass Effect */}
      <NavbarGlassFilter />
    </nav>
  );
};

export default Navbar;
