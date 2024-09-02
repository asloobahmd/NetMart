import React from "react";

const Brand = () => {
  return (
    <div class="px-4 pt-16 pb-16" id="faq">
      <h2 class="text-4xl font-bold text-center">Our Top Brands</h2>
      <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas
        fugiat tempore blanditiis, eveniet quia accusantium.
      </p>

      <div class="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/442910/brand-apple.svg"
          />
        </a>
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
          />
        </a>
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
          />
        </a>
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
          />
        </a>
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/443206/brand-line.svg"
          />
        </a>
        <a>
          <img
            alt=""
            class="h-20  mx-auto"
            src="https://www.svgrepo.com/show/519278/slack.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Brand;
