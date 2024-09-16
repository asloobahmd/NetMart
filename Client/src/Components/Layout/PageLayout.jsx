import React from "react";
import Filter from "../Searching, Sorting & Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

import Pagination from "../Pagination";

const PageLayout = ({ products, backgroundImage }) => {
  const textColors = "text-grey-900 dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-bgdark";

  return (
    <div className={`w-full px-4 py-4  ${bgColors} ${textColors}`}>
      <img
        className="relative h-60 w-full rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
        src={backgroundImage}
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-screen-2xl mb-4">
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

      {/* <!-- Pagination --> */}
      <Pagination />
      {/* <!-- End Pagination --> */}
    </div>
  );
};

export default PageLayout;
