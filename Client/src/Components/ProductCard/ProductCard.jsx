import { Link } from "react-router-dom";
import React from "react";

const Product = ({ size = "large", ...props }) => {
  const sizeClasses = {
    medium: {
      container: "sm:w-48 lg:w-52 w-36",
      image: "h-48 w-32 lg:h-48 lg:w-48 sm:h-48 sm:w-48",
      details: "px-4 py-3 lg:w-52 sm:w-64 w-40",
      brand: "uppercase text-xs",
      name: "text-md font-bold truncate block capitalize",
      new_price: "text-md font-semibold cursor-auto my-0",
      old_price: "text-sm cursor-auto ml-2",
    },
    large: {
      container: "sm:w-64 lg:w-64 w-40",
      image: "h-58 w-44 lg:h-72 lg:w-64 sm:h-72 sm:w-64",
      details: "px-4 py-3 lg:w-64 sm:w-64 w-40",
      brand: "uppercase text-md",
      name: "text-lg font-bold truncate block capitalize",
      new_price: "text-lg font-semibold cursor-auto my-0",
      old_price: "text-sm cursor-auto ml-2",
    },
  };

  // Universal color styles
  const textColors = "text-black dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-productbgdark";

  return (
    <div
      className={`${sizeClasses[size].container} bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ${bgColors}`}
    >
      {/* product image */}
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="Product"
          className={`${sizeClasses[size]} object-cover rounded-t-xl`}
        />

        <div className={`${sizeClasses[size].details}`}>
          {/* product brand */}
          <span className={`${sizeClasses[size].brand} ${textColors}`}>
            {props.brand}
          </span>

          {/* product name */}
          <p className={`${sizeClasses[size].name} ${textColors}`}>
            {props.name}
          </p>

          <div className="flex items-center">
            {/* product new price */}
            <p className={`${sizeClasses[size].new_price} ${textColors}`}>
              {props.new_price}
            </p>
            <del>
              {/* product old price */}
              <p className={`${sizeClasses[size].old_price} ${textColors}`}>
                {props.old_price}
              </p>
            </del>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
