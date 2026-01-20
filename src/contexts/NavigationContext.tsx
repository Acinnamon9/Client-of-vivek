/**
 * NavigationContext.tsx
 *
 * A simple state-based routing context for managing page navigation.
 * Used when a full routing library (like React Router) is not necessary,
 * or for high-level application state management between "pages" or "screens".
 */
import { createContext, useContext } from "react";

type Page = "home" | "schedule-demo";

interface NavigationContextType {
  currentPath: Page;
  navigate: (path: Page) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  currentPath: "home",
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);
