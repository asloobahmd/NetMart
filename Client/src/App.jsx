import { Heading } from "@chakra-ui/react";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import Bot from "./Components/Bot";
import Navbar from "./Components/Navbar_2";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "8rem" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
