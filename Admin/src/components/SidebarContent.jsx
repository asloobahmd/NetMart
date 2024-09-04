import React from "react";
import { SidebarLinks } from "../constants";
import { Link, useLocation } from "react-router-dom";

const SidebarContent = () => {
  const { pathname } = useLocation();

  return (
    <div className="p-6 mt-8">
      <div className="flex flex-col gap-2">
        {SidebarLinks.map((item, i) => (
          <Link
            className={`block py-2.5 px-4 rounded transition duration-200  hover:bg-[#313D4A] hover:dark:bg-[#333A48] text-white 
              ${pathname == item.link ? "bg-[#313D4A] dark:bg-[#333A48]" : ""}`}
            to={`${item.link}`}
            key={i}
          >
            <div className="flex items-center gap-x-2">
              <span className="">{item.icon}</span>
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarContent;
