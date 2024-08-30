import React from "react";
import PageLayout from "../Layout/PageLayout";

import image1 from "../../assets/Clothing/product_1.png";
import image2 from "../../assets/Clothing/product_7.png";
import image3 from "../../assets/Clothing/product_12.png";
import image4 from "../../assets/Clothing/p1_product.png";

const Womens = () => {
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
    "https://www.shutterstock.com/image-vector/flyer-design-items-clothing-shopping-600nw-1780534835.jpg";

  return <PageLayout products={products} backgroundImage={backgroundImage} />;
};

export default Womens;
