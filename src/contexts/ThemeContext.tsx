/**
 * ThemeContext.tsx
 *
 * Manages the application's visual theme (light vs dark mode).
 * Handles persistent storage of theme preferences in localStorage,
 * detects system-level theme settings, and applies theme attributes
 * to the document root for CSS styling.
 */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useWidgetContext } from "./WidgetContext.tsx";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 1. Check localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    // 2. Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  const { shadowRoot } = useWidgetContext();

  useEffect(() => {
    // Determine the target element for the theme attribute
    // If in a Shadow DOM (web component), apply to the root container
    // Otherwise, apply to document.documentElement
    let target: HTMLElement | null = null;

    if (shadowRoot) {
      // Apply to the custom element itself
      target = shadowRoot.host as HTMLElement;
    } else {
      target = document.documentElement;
    }

    if (target) {
      target.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme, shadowRoot]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
