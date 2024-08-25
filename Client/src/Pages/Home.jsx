import React from "react";
import Navbar from "../Components/Navbar";
import Navbar_2 from "../Components/Navbar_2";
import Hero_1 from "../Components/Home/Hero_1";
import Hero_2 from "../Components/Home/Hero_2";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar_2 />
      <Hero_1 />
      <Hero_2 />
      <Footer />
    </div>
  );
};

export default Home;
