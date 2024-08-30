import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import image1 from "../../assets/Clothing/product_1.png";
import image2 from "../../assets/Clothing/product_13.png";
import image3 from "../../assets/Clothing/product_14.png";
import image4 from "../../assets/Clothing/product_27.png";

const products = [
  {
    name: "Product 01",
    brand: "Brand",
    new_price: "100$",
    old_price: "110$",
    image: image1,
  },
  {
    name: "Product 02",
    brand: "Brand",
    new_price: "100$",
    old_price: "110$",
    image: image2,
  },
  {
    name: "Product 03",
    brand: "Brand",
    new_price: "100$",
    old_price: "110$",
    image: image3,
  },
  {
    name: "Product 04",
    brand: "Brand",
    new_price: "100$",
    old_price: "110$",
    image: image4,
  },
];

const HeroSection = () => {
  return (
    <div className="py-12 bg-white lg:py-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Special Offers
        </h2>
        <p className="mt-4 text-base font-normal leading-7 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          faucibus massa dignissim tempus.
        </p>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto text-black  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center lg:gap-y-20 lg:gap-x-14 md:gap-y-20 gap-y-4 gap-x-4 md:gap-x-14 mt-10 mb-5"
      >
        {products?.map((product, i) => {
          return (
            <ProductCard
              key={i}
              name={product.name}
              brand={product.brand}
              new_price={product.new_price}
              old_price={product.old_price}
              image={product.image}
              size="large"
            />
          );
        })}
      </section>
    </div>
  );
};

export default HeroSection;
