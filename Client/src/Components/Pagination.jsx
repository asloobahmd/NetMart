import React from "react";

const Pagination = () => {
  const textColors = "text-grey-900 dark:text-white text-gray-600";
  const bgColors = "bg-white dark:bg-bgdark";

  return (
    <nav
      className={`flex items-center justify-center -space-x-px mb-5 ${bgColors} ${textColors}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span className="hidden sm:block">Previous</span>
      </button>

      <button
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700 dark:focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
        aria-current="page"
      >
        1
      </button>

      <button
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        2
      </button>

      <button
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        3
      </button>

      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
