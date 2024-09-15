import React from "react";

const Promo_2 = () => {
  const textColors = "text-grey-900 dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-bgdark";

  const products = [
    {
      id: 1,
      title: "Beoplay M5 Bluetooth Speaker",
      price: "$99.00",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
      label: "New",
      rating: 4.5,
      labelColor: "bg-white text-black",
    },
    {
      id: 2,
      title: "Apple Smart Watch 6 - Special Edition",
      price: "$299.00",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
      label: "Sale",
      rating: 4.8,
      labelColor: "bg-gray-900 text-white",
    },
    {
      id: 3,
      title: "Beylob 90 Speaker",
      price: "$199.00",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
      label: "Discount",
      rating: 4.0,
      labelColor: "bg-red-500 text-white",
    },
    {
      id: 4,
      title: "Apple iPhone 12 Pro Max",
      price: "$999.00",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
      label: "Featured",
      rating: 4.9,
      labelColor: "bg-blue-500 text-white",
    },
  ];

  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={index}
            className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map(
          (_, index) => (
            <svg
              key={index}
              className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        )}
      </>
    );
  };

  return (
    <section
      className={`py-12 bg-white sm:py-16 lg:py-14 ${bgColors} ${textColors}`}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Our featured items</h2>
          <p className="mt-4 text-base font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-8 lg:gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src={product.imageUrl}
                  alt={product.title}
                />
              </div>
              <div className="absolute left-3 top-3">
                <p
                  className={`sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide uppercase rounded-full ${product.labelColor}`}
                >
                  {product.label}
                </p>
              </div>
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold sm:text-sm md:text-base">
                    <a href="#" title="">
                      {product.title}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </h3>
                  <div className="flex items-center mt-2.5 space-x-px">
                    {renderStars(product.rating)}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold sm:text-sm md:text-base">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo_2;
