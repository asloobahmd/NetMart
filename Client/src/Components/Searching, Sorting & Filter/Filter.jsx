import React from "react";

const Filter = () => {
  const textColors = "text-black dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-productbgdark";

  return (
    <div className="grid grid-cols-10">
      <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
        <div
          className={`mt-7 box rounded-xl border border-gray-300 p-6 w-full md:max-w-sm ${bgColors} ${textColors}`}
        >
          <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
            <p className="font-medium text-base leading-7">Filter Plans</p>
            <p className="font-medium text-xs cursor-pointer transition-all duration-500 hover:text-indigo-600">
              RESET
            </p>
          </div>

          {/* Brand */}
          <div classNameName="">
            <label for="Offer" className="font-semibold text-sm leading-6 mb-1">
              Brand
            </label>
            <div className="relative w-full mb-7">
              <select
                id="Offer"
                className="h-12 border border-gray-300  text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none"
              >
                <option selected>Moose</option>
                <option value="option 1">option 1</option>
                <option value="option 2">option 2</option>
                <option value="option 3">option 3</option>
                <option value="option 4">option 4</option>
              </select>
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-4 z-50 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                  stroke="#111827"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Price Range */}
          <div className="">
            <h6 className="font-semibold text-sm leading-6  mb-1">
              Price Range
            </h6>
            <div className="flex items-center mb-5 gap-1">
              <div className="relative w-full">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300  text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none"
                >
                  <option selected>Min</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
                <svg
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="px-1 font-normal text-sm leading-6 ">to</p>
              <div className="relative w-full">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300  text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none "
                >
                  <option selected>Max</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
                <svg
                  className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                    stroke="#111827"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Discount */}
          <div classNameName="">
            <p className="font-semibold text-sm leading-6  mb-1">Discount</p>
            <div className="box flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  id="checkbox-default-1"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  for="checkbox-default-1"
                  className="text-xs font-normal  leading-4 cursor-pointer"
                >
                  20% or more
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checkbox-default-2"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  for="checkbox-default-2"
                  className="text-xs font-normal leading-4 cursor-pointer"
                >
                  30% or more
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="checkbox-default-3"
                  type="checkbox"
                  value=""
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  for="checkbox-default-3"
                  className="text-xs font-normal  leading-4 cursor-pointer"
                >
                  50% or more
                </label>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9"></div>
    </div>
  );
};

export default Filter;
