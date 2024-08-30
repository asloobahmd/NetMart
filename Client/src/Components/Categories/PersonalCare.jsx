import React from "react";
import PageLayout from "../Layout/PageLayout";

const PersonalCare = () => {
  const products = [
    {
      name: "Product 01",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsUOONH3KvucqSs8ICzjO8F9MlZQt7vIMMw&s",
    },
    {
      name: "Product 02",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image: "https://m.media-amazon.com/images/I/51MF2J0Ly9L._SL1073_.jpg",
    },
    {
      name: "Product 03",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKaVY6pvvKtfwm2DiWha7CnCWmmIuDrcb4w&s",
    },
    {
      name: "Product 04",
      brand: "Brand",
      new_price: "100",
      old_price: "110",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEIzt8uFIw7vLWHa7rfSxJmYL7CZTctTUDw&s",
    },
  ];

  const backgroundImage =
    "https://t3.ftcdn.net/jpg/02/28/47/78/360_F_228477803_rvOdKapC3wLKWl8tYaYmvQOLXcxFYD3G.jpg";

  return <PageLayout products={products} backgroundImage={backgroundImage} />;
};

export default PersonalCare;
