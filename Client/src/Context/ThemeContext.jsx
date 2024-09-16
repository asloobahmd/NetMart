import { createContext, useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("mode") || "light"
  );
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
      if (colorMode !== "dark") toggleColorMode();
    } else {
      document.documentElement.classList.remove("dark");
      if (colorMode !== "light") toggleColorMode();
    }
  }, [themeMode, colorMode, toggleColorMode]);

  useEffect(() => {
    localStorage.setItem("mode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  const value = { themeMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
