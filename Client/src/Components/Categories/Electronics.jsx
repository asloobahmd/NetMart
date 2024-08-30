import React from "react";
import PageLayout from "../Layout/PageLayout";

const Electronics = () => {
  const products = [
    {
      name: "Product 01",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://ae-pic-a1.aliexpress-media.com/kf/S6a4fb421c53e44c39585a06cda80169cA.jpg_640x640Q90.jpg_.webp",
    },
    {
      name: "Product 02",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4ACGbt8WjqGkYB2GvJg4Tl8pEuhxPuWDxA&s",
    },
    {
      name: "Product 03",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPedd2REv0BD57-HMgzhZftTB09f9w-PIpAw&s",
    },
    {
      name: "Product 04",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-4rGPea_ssA1y48p0cd0xtcIqo4PDkfn1w&s",
    },
  ];

  const backgroundImage =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronics-sale-design-template-6b72cebe2269fa223c789f0728c99e9b_screen.jpg?ts=1635771976";

  return <PageLayout products={products} backgroundImage={backgroundImage} />;
};

export default Electronics;
