import React from "react";
import Navbar from "../Components/Navbar";
import Navbar_2 from "../Components/Navbar_2";
import Banner_1 from "../Components/Home/Banner_1";
import SpecialOffers from "../Components/Home/SpecialOffers";
import Footer from "../Components/Footer";
import LatestArrival from "../Components/Home/LatestArrival";
import Brand from "../Components/Home/Brand";
import Stats from "../Components/Home/Stats";
import Promo_2 from "../Components/Home/Promo_2";
import Hero from "../Components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Banner_1 />
      {/* <Hero /> */}
      <Promo_2 />
      <SpecialOffers />
      <LatestArrival />
      <Brand />
      <Stats />
    </div>
  );
};

export default Home;
