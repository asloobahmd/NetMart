import React from "react";

const Stats = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Businesses Globally
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">
              Our platform is trusted by organizations worldwide to boost
              productivity, streamline operations, and enhance customer
              experiences.
            </p>
          </div>

          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Active Users
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                12,345
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Transactions Today
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                1.23M
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Total Revenue
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                $5.6B
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Happy Customers
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                98%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
