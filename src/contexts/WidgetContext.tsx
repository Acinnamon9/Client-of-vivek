/**
 * WidgetContext.tsx
 *
 * Provides configuration and environment context for the embedded widget.
 * Stores agent details, styling schemas, and reference to the Shadow DOM root.
 * This context is essential for components to know their operational environment.
 */
import { createContext, useContext } from "react";

type WidgetContextType = {
  agent_id: string;
  schema: string;
  type: string;
  shadowRoot: ShadowRoot | null;
};

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const useWidgetContext = () => {
  const context = useContext(WidgetContext);
  // Return default values if used outside of provider (standalone mode)
  if (!context) {
    return {
      agent_id: "",
      schema: "",
      type: "",
      shadowRoot: null,
    };
  }
  return context;
};

type WidgetProviderProps = {
  children: React.ReactNode;
  agent_id: string;
  schema: string;
  type: string;
  shadowRoot: ShadowRoot | null;
};

export const WidgetProvider: React.FC<WidgetProviderProps> = ({
  children,
  agent_id,
  schema,
  type,
  shadowRoot,
}) => {
  return (
    <WidgetContext.Provider value={{ agent_id, schema, type, shadowRoot }}>
      {children}
    </WidgetContext.Provider>
  );
};
