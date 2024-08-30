import React from "react";
import PageLayout from "../Layout/PageLayout";

import image1 from "../../assets/Clothing/product_22.png";
import image2 from "../../assets/Clothing/product_13.png";
import image3 from "../../assets/Clothing/product_14.png";
import image4 from "../../assets/Clothing/product_24.png";

const Mens = () => {
  const products = [
    {
      name: "Product 01",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image1,
    },
    {
      name: "Product 02",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image2,
    },
    {
      name: "Product 03",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image3,
    },
    {
      name: "Product 04",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image4,
    },
    {
      name: "Product 01",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image1,
    },
    {
      name: "Product 02",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image2,
    },
    {
      name: "Product 03",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image3,
    },
    {
      name: "Product 04",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: image4,
    },
  ];

  const backgroundImage =
    "https://t3.ftcdn.net/jpg/03/16/37/64/240_F_316376413_nYL2jpLONPQPOsy31DE86n7FPpSxPIi3.jpg";

  return <PageLayout products={products} backgroundImage={backgroundImage} />;
};

export default Mens;
