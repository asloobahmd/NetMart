import React from "react";
import Filter from "../Searching, Sorting & Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PageLayout = ({ products, backgroundImage }) => {
  return (
    <div className="w-full px-4">
      <img
        className="relative h-60 w-full rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
        src={backgroundImage}
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl mb-4">
        <div className="col-span-1 md:col-span-1 md:w-[1100px] w-auto">
          <Filter />
        </div>

        <div className="col-span-1 md:col-span-3 lg:mt-8 mt-2">
          <main className="grid grid-cols-2 gap-x-2 gap-y-6 px-6 pb-3 sm:grid-cols-3 sm:px-8 lg:mt-8 lg:grid-cols-4 lg:gap-x-2 lg:px-4">
            {products?.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  name={product.name}
                  brand={product.brand}
                  new_price={product.new_price}
                  old_price={product.old_price}
                  image={product.image}
                  size="medium"
                />
              );
            })}
          </main>
        </div>
      </div>
      {/* 
      <!-- Pagination --> */}
      <nav
        className="flex items-center justify-center -space-x-px mb-5"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Previous"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span className="hidden sm:block">Previous</span>
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          2
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          3
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          aria-label="Next"
        >
          <span className="hidden sm:block">Next</span>
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
      {/* <!-- End Pagination --> */}
    </div>
  );
};

export default PageLayout;
