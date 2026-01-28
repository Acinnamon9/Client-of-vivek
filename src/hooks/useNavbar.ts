import { useState, useEffect } from "react";
import { useWidgetContext } from "../contexts/WidgetContext";

export const navLinks = [
  { label: "Test Drive", href: "#demo" },
  { label: "Platform", href: "#ai-team" },
  { label: "Solutions", href: "#solutions" },
  { label: "Proof", href: "#social-proof" },
  { label: "FAQ", href: "#faq" },
];

export const useNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { shadowRoot } = useWidgetContext();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -70% 0px", // Detect when section is in the upper third
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

    const root = shadowRoot || document;

    const observeElements = () => {
      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const element = root.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Initial check
    observeElements();

    // Re-check when DOM changes (for lazy-loaded components)
    const mutationObserver = new MutationObserver(observeElements);

    // In shadow DOM mode, we observe the shadow root itself.
    // In document mode, we observe the body.
    const targetNode = shadowRoot || document.body;
    if (targetNode) {
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [shadowRoot]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const root = shadowRoot || document;
    const element = root.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // clear the hash in the url to avoid jumping
      window.history.pushState(null, "", href);
    }
  };

  return {
    isScrolled,
    mobileMenuOpen,
    setMobileMenuOpen,
    activeSection,
    navLinks,
    scrollToSection,
  };
};
