import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className={`rounded-full relative block w-12 h-7  ${
          themeMode == "dark" ? "bg-gray-400" : "bg-black"
        }`}
      >
        <div
          className={`bg-white rounded-full w-5 h-5 absolute top-[4px] transition-all duration-500 ${
            themeMode == "dark" ? "left-1" : "left-6"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
