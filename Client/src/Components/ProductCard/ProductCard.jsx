import { Link } from "react-router-dom";
import React from "react";

const Product = ({ size = "large", ...props }) => {
  const sizeClasses = {
    small: {
      container: "sm:w-32 lg:w-32 w-20",
      image: "h-32 w-20 lg:h-32 lg:w-32 sm:h-32 sm:w-32",
      details: "px-4 py-3 lg:w-64 sm:w-64 w-40",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-lg font-bold text-black truncate block capitalize",
      new_price: "text-lg font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
    medium: {
      container: "sm:w-48 lg:w-52 w-36",
      image: "h-48 w-32 lg:h-48 lg:w-48 sm:h-48 sm:w-48",
      details: "px-4 py-3 lg:w-52 sm:w-64 w-40",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-md font-bold text-black truncate block capitalize",
      new_price: "text-md font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
    large: {
      container: "sm:w-64 lg:w-64 w-40",
      image: "h-58 w-44 lg:h-72 lg:w-64 sm:h-72 sm:w-64",
      details: "px-4 py-3 lg:w-64 sm:w-64 w-40 ",
      brand: "text-gray-400 mr-3 uppercase text-xs",
      name: "text-lg font-bold text-black truncate block capitalize",
      new_price: "text-lg font-semibold text-black cursor-auto my-0",
      old_price: "text-sm text-gray-600  cursor-auto ml-2",
    },
  };

  return (
    <div
      className={`${sizeClasses[size].container} bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl`}
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
          <span className={`${sizeClasses[size].brand}`}>{props.brand}</span>

          {/* product name */}
          <p className={`${sizeClasses[size].name}`}>{props.name}</p>

          <div className="flex items-center">
            {/* product new price */}
            <p className={`${sizeClasses[size].new_price}`}>
              {props.new_price}
            </p>
            <del>
              {/* product old price */}
              <p className={`${sizeClasses[size].old_price}`}>
                {props.old_price}
              </p>
            </del>

            <div className="flex items-center mt-2.5 space-x-px">
              <svg
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            {/* <div className="ml-auto">
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
            </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
