import React from "react";
import Logo from "../assets/Logo.png";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ clicked, setClicked }) => {
  return (
    <aside className="overflow-hidden">
      <div
        onClick={() => setClicked(false)}
        className={`absolute lg:static lg:translate-x-0 z-50 w-full lg:w-72 duration-700  ${
          clicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-72 bg-[#1C2434] dark:bg-primary h-screen overflow-y-auto your-class">
          <div className="sticky top-0 h-20 flex items-center bg-[#1C2434] dark:bg-primary gap-x-3 pl-6 p-3">
            <img src={Logo} className="w-8 h-8" alt="" />
            <h1 className="font-semibold text-3xl text-white">NetMart</h1>
            <button
              className="lg:hidden absolute right-5"
              onClick={() => setClicked(false)}
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
                className="lucide lucide-arrow-left text-white"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
