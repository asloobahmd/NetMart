import * as React from "react";
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
    <section
      id="Projects"
      className="w-fit mx-auto text-black  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center lg:gap-y-20 lg:gap-x-14 md:gap-y-20 gap-y-4 gap-x-4 md:gap-x-14 mt-10 mb-5"
    >
      {products?.map((product, i) => {
        return (
          <div
            key={i}
            className="sm:w-64 lg:w-64 w-40  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            {/* product image */}
            <a href="#">
              <img
                src={product.image}
                alt="Product"
                className="h-58 w-44 lg:h-72 lg:w-64 sm:h-72 sm:w-64 object-cover rounded-t-xl"
              />

              {/* product brand */}
              <div className="px-4 py-3 lg:w-64 sm:w-64 w-40">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.brand}
                </span>

                {/* product name */}
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                {/* product new price */}
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.new_price}
                  </p>
                  <del>
                    {/* product old price */}
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {product.old_price}
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </section>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
