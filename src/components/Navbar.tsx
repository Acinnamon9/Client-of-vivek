import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import SpotlightEffect from "./ui/SpotlightEffect";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Test Drive", href: "#demo" },
  { label: "Platform", href: "#workforce" },
  { label: "Solutions", href: "#industry" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 py-8 pointer-events-none font-jakarta">
      <SpotlightEffect
        id="navbar-container"
        spotlightSize={250}
        spotlightColor="rgba(255, 255, 255, 0.20)"
        className={`max-w-[1440px] mx-auto transition-all duration-500 pointer-events-auto ${
          isScrolled
            ? "glass-navbar-frosted rounded-[24px] px-12 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)]"
            : "bg-transparent border border-transparent px-6 py-3"
        }`}
      >
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <a
            href="/"
            className="text-(--foreground) text-2xl sm:text-3xl font-black no-underline tracking-tighter transition-colors"
          >
            Ravan<span className="text-brand-primary">.ai</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Button
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="glass"
                  size="lg"
                  className={cn(
                    "text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300",
                    isActive
                      ? "bg-white/10 border-white/20 text-white translate-y-[-1px] shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
                      : "border-white/5 opacity-70 hover:opacity-100",
                  )}
                >
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-brand-primary/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                </Button>
              );
            })}
            <div className="h-6 w-px bg-(--border) mx-4"></div>
            <Button
              variant="glass-primary"
              size="xl"
              className="px-10 rounded-[20px]"
              onClick={() =>
                window.open("https://atomicx.ravan.ai/book", "_blank")
              }
            >
              Book Demo
            </Button>
          </div>

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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden relative z-10"
            >
              <div className="flex flex-col gap-5 pb-4 border-t border-(--border) pt-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <Button
                      key={link.label}
                      as="a"
                      href={link.href}
                      variant="glass"
                      className={cn(
                        "w-full justify-start py-4 px-6 border-white/5",
                        isActive &&
                          "bg-white/10 text-brand-primary border-brand-primary/20",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Button>
                  );
                })}
                <Button
                  variant="glass-primary"
                  size="xl"
                  className="w-full rounded-[20px]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open("https://atomicx.ravan.ai/book", "_blank");
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SpotlightEffect>

      {/* SVG Filter for Glass Effect */}
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          pointerEvents: "none",
        }}
      >
        <filter id="frosted-filter" primitiveUnits="objectBoundingBox">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            result="noise"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0.005"
            result="blur"
          />
          <feDisplacementMap
            in="blur"
            in2="noise"
            scale="0.02"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              to="0.04"
              dur="0.3s"
              begin="navbar-container.mouseover"
              fill="freeze"
            />
            <animate
              attributeName="scale"
              to="0.02"
              dur="0.3s"
              begin="navbar-container.mouseout"
              fill="freeze"
            />
          </feDisplacementMap>
        </filter>
      </svg>
    </nav>
  );
};

export default Navbar;
