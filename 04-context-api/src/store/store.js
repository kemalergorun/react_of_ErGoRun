import { createContext } from "react";

// Create a context object bt using the createContext method
// We can pass a default value to the createContext method as an argument.
// We need to export context object to use.
export const ThemeContext = createContext("light");
