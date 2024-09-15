import React from "react";

const Filter = () => {
  return (
    <div class="w-full max-w-7xl mx-auto px-7 md:px-4">
      <svg
        class="my-7 w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="1216"
        height="2"
        viewBox="0 0 1216 2"
        fill="none"
      >
        <path d="M0 1H1216" stroke="#E5E7EB" />
      </svg>
      <div class="grid grid-cols-10">
        <div class="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
          <div class="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
            <div class="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
              <p class="font-medium text-base leading-7 text-black ">
                Filter Plans
              </p>
              <p class="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                RESET
              </p>
            </div>

            {/* Brand */}
            <div className="">
              <label
                for="Offer"
                class="font-semibold text-sm leading-6 text-black mb-1"
              >
                Brand
              </label>
              <div class="relative w-full mb-7">
                <select
                  id="Offer"
                  class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                >
                  <option selected>Moose</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
                <svg
                  class="absolute top-1/2 -translate-y-1/2 right-4 z-50"
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
            <div class="">
              <h6 class="font-semibold text-sm leading-6 text-black mb-1">
                Price Range
              </h6>
              <div class="flex items-center mb-5 gap-1">
                <div class="relative w-full">
                  <select
                    id="FROM"
                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Min</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                  <svg
                    class="absolute top-1/2 -translate-y-1/2 right-4 z-50"
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
                <p class="px-1 font-normal text-sm leading-6 text-gray-600">
                  to
                </p>
                <div class="relative w-full">
                  <select
                    id="FROM"
                    class="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Max</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                  <svg
                    class="absolute top-1/2 -translate-y-1/2 right-4 z-50"
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
            <div className="">
              <p class="font-semibold text-sm leading-6 text-black mb-1">
                Discount
              </p>
              <div class="box flex flex-col gap-2">
                <div class="flex items-center">
                  <input
                    id="checkbox-default-1"
                    type="checkbox"
                    value=""
                    class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    for="checkbox-default-1"
                    class="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                  >
                    20% or more
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="checkbox-default-2"
                    type="checkbox"
                    value=""
                    class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    for="checkbox-default-2"
                    class="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                  >
                    30% or more
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="checkbox-default-3"
                    type="checkbox"
                    value=""
                    class="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    for="checkbox-default-3"
                    class="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                  >
                    50% or more
                  </label>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        <div class="col-span-12 md:col-span-9"></div>
      </div>
    </div>
  );
};

export default Filter;
