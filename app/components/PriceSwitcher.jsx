"use client";

import { useState } from "react";

const PriceSwitcher = () => {
  const [priceSwtch, setPriceSwtch] = useState(0);
  return (
    <div className="flex justify-center max-w-[24rem] m-auto mb-8 lg:mb-16">
      <div className="relative flex w-full p-1 bg-gray-200 dark:bg-slate-900 rounded-md">
        <span
          className="absolute inset-0 m-1 pointer-events-none"
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 w-1/3 bg-indigo-100 rounded-md shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
              priceSwtch === 0
                ? "translate-x-[0px]"
                : priceSwtch === 1
                ? "translate-x-[124px]"
                : "translate-x-[248px]"
            }`}
          ></span>
        </span>
        <button
          className="relative flex-1 font-medium h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 text-slate-500 transition-colors duration-150 ease-in-out"
          onClick={() => setPriceSwtch(0)}
        >
          Standard
        </button>
        <button
          className="relative flex-1 font-medium h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 text-slate-500 dark:text-slate-400 transition-colors duration-150 ease-in-out"
          onClick={() => setPriceSwtch(1)}
        >
          Prime
        </button>
        <button
          className="relative flex-1 font-medium h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 text-slate-500 dark:text-slate-400 transition-colors duration-150 ease-in-out"
          onClick={() => setPriceSwtch(2)}
        >
          Corporate
        </button>
      </div>
    </div>
  );
};
export default PriceSwitcher;
