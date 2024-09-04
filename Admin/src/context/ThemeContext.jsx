import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemContextProvider = ({ children }) => {
  const [themeMode, setthemeMode] = useState(
    localStorage.getItem("mode") || null
  );

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
      // document.documentElement.setAttribute("data-theme", "dark"); // this is needed to toggle daisy ui theme if used that
    } else {
      document.documentElement.classList.remove("dark");
      // document.documentElement.setAttribute("data-theme", "light");
    }
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("mode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setthemeMode(themeMode == "dark" ? "light" : "dark");
  };

  const value = { themeMode, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
