import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const navLinks = [
  { label: "Platform", href: "#workforce" },
  { label: "Solutions", href: "#industry" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none font-jakarta">
      <div
        className={`max-w-[1440px] mx-auto transition-all duration-500 pointer-events-auto ${
          isScrolled
            ? "bg-(--card)/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-[24px] px-12 py-4"
            : "bg-transparent border border-transparent px-6 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-(--foreground) text-2xl sm:text-3xl font-black no-underline tracking-tighter transition-colors"
          >
            Ravan<span className="text-brand-primary">.ai</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-(--foreground)/60 hover:text-brand-primary transition-colors no-underline uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <div className="h-6 w-px bg-(--border) mx-4"></div>
            <Button
              size="lg"
              className="px-10 shadow-xl shadow-brand-primary/15 rounded-2xl"
              onClick={() =>
                window.open("https://myteam.ravan.ai/book", "_blank")
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
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-5 pb-4 border-t border-(--border) pt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-bold text-(--foreground) no-underline hover:text-brand-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  size="lg"
                  className="w-full rounded-2xl"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open("https://myteam.ravan.ai/book", "_blank");
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
