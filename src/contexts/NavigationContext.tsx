import { createContext, useContext } from 'react';

type Page = 'home' | 'schedule-demo';

interface NavigationContextType {
    currentPath: Page;
    navigate: (path: Page) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
    currentPath: 'home',
    navigate: () => { },
});

export const useNavigation = () => useContext(NavigationContext);
