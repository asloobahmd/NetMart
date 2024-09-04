import React from "react";
import ToggleBtn from "./ToggleBtn";

const Navbar = ({ clicked, setClicked }) => {
  return (
    <nav className="py-3 sticky top-0 bg-white navbar-shadow dark:bg-primary">
      <div className="h-[56px] p-6 max-sm:p-4 max-lg:pl-14 flex items-center justify-between">
        <button
          className="lg:hidden absolute left-6"
          onClick={() => setClicked(!clicked)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
        <div>
          <input
            type="text"
            className="p-4 dark:bg-primary outline-none"
            placeholder="Type to search..."
          />
        </div>
        <div className="flex items-center gap-x-4">
          <ToggleBtn />
          user profile
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
