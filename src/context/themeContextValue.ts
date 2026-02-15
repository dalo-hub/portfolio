import { createContext } from "react";

type Theme = "dark" | "light";

export type { Theme };

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
