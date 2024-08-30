import React from "react";

import image1 from "../../assets/Clothing/product_1.png";
import image2 from "../../assets/Clothing/product_13.png";
import image3 from "../../assets/Clothing/product_14.png";
import image4 from "../../assets/Clothing/product_27.png";
import PageLayout from "../Layout/PageLayout";

const Offers = () => {
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUEDWcK6ZN8y5p4V9BU-dxte8R-_Ohye86qF8h2ngQ6ISyEg1As2LPx-0ftFAtTllBg&usqp=CAU";

  return <PageLayout products={products} backgroundImage={backgroundImage} />;
};

export default Offers;
