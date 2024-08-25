import React from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const menus = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="bg-white fixed w-full z-[999]">
      {/* Top Menu */}
      <div className=" bg-white py-2 m-2 rounded-sm">
        <nav class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
          <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg
              class="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />
          <div
            class="hidden lg:flex lg:items-center lg:w-auto w-full"
            id="menu"
          >
            <nav className="">
              <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                {menus?.map((menu, i) => {
                  return (
                    <li key={i} class="py-2 lg:py-0">
                      <a
                        class="hover:pb-4 hover:border-b-4 hover:border-yellow-400"
                        href={menu.link}
                      >
                        {menu.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </nav>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <img className="w-24 h-10 md:h-14" src={logo} alt="Logo" />
        </div>

        {/* Search */}
        <div className="w-full  max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md xl:flex items-center">
          <select className="bg-transparent uppercase font-bold text-sm p-4 mr-4">
            <option>Category 1</option>
            <option>Category 1</option>
            <option>Category 1</option>
          </select>
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <svg
            className="ml-auto h-5 px-4 text-gray-500"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
        </div>

        {/* Phone number */}
        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold md:text-xl">8 800 332 65-66</span>
          <span className="font-semibold text-sm text-gray-400">
            Support 24/7
          </span>
        </div>

        {/* Buttons */}
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a href="">
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                  ></path>
                </svg>
              </a>
            </li>

            <li className="ml-2 lg:ml-4 relative inline-block">
              <a href="">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C579.346 79.17 565.422 64 547.465 64H140.36l-9.6-43.319A48 48 0 0084.04 0H12A12 12 0 000 12v8a12 12 0 0012 12h55.178l66.083 298.76C72.436 336.435 32 382.45 32 439.986 32 498.717 81.268 544 136 544c52.993 0 95.624-39.012 103.443-88h195.114c7.819 48.988 50.45 88 103.443 88 54.732 0 104-45.283 104-104 0-47.271-33.077-87.224-79.88-98.681zM174.603 128h312.041l-39.273 176H207.876l-33.273-176zM136 480c-30.928 0-56-25.072-56-56s25.072-56 56-56c30.928 0 56 25.072 56 56s-25.072 56-56 56zm360 0c-30.928 0-56-25.072-56-56s25.072-56 56-56c30.928 0 56 25.072 56 56s-25.072 56-56 56z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
