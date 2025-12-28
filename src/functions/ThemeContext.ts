import type { ThemeContextType } from "../functions/types";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);