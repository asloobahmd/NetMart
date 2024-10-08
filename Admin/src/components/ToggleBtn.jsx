import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleBtn = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className="rounded-full relative block w-12 h-7 bg-blue-800"
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

export default ToggleBtn;
