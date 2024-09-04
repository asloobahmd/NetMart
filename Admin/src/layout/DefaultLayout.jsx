import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar setClicked={setClicked} clicked={clicked} />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-auto">
            <Navbar setClicked={setClicked} clicked={clicked} />
            <main className="bg-bglight dark:bg-bgdark">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
