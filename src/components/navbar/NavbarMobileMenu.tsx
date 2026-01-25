import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

interface NavbarMobileMenuProps {
  mobileMenuOpen: boolean;
  navLinks: { label: string; href: string }[];
  activeSection: string;
  scrollToSection: (href: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  mobileMenuOpen,
  navLinks,
  activeSection,
  scrollToSection,
  setMobileMenuOpen,
}) => {
  return (
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
                      "bg-(--foreground)/5 text-brand-primary border-brand-primary/20",
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                    setMobileMenuOpen(false);
                  }}
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
  );
};

export default NavbarMobileMenu;
