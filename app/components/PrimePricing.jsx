"use client";

import { useState } from "react";
import { primePricing } from "@/app/utils/options";
import PriceItem from "@/app/components/PriceItem";

const PrimePricing = () => {
  const [priceSwtch, setPriceSwitch] = useState(0);
  return (
    <section className="primeTable -sm:text-[12.5px] text-gray-700 body-font overflow-hidden border-t border-gray-200">
      <div className="container -sm:px-4 py-24 mx-auto">
        <div className="flex lg:hidden justify-center max-w-[24rem] m-auto mb-8 lg:mb-16">
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
            <SwitchBtn
              title="Standard"
              val={0}
              setPriceSwitch={setPriceSwitch}
            />
            <SwitchBtn title="Prime" val={1} setPriceSwitch={setPriceSwitch} />
            <SwitchBtn
              title="Corporate"
              val={2}
              setPriceSwitch={setPriceSwitch}
            />
          </div>
        </div>
        <div className=" flex flex-wrap">
          <div className="w-2/3 lg:w-2/5 block">
            <div className="h-36 flex items-end">
              <h5 className="bg-dawn inline-block px-8 py-2 font-bold">
                All Access
              </h5>
            </div>
            <div className="mt-px border-t border-gray-300 border-b border-l rounded-bl-lg overflow-hidden">
              {primePricing.access.map((price, i) => (
                <PriceTitle key={i} id={i} title={price.title} />
              ))}
              <div className="h-16 flex items-end">
                <h5 className="bg-dawn inline-block px-8 py-2 font-bold">
                  On-Demand
                </h5>
              </div>
              {primePricing.ondemand.map((price, i) => (
                <PriceTitle key={i} id={i} title={price.title} />
              ))}
              <div className="h-16 flex items-end">
                <h5 className="bg-dawn inline-block px-8 py-2 font-bold">
                  Executive Development
                </h5>
              </div>
              {primePricing.exec.map((price, i) => (
                <PriceTitle key={i} id={i} title={price.title} />
              ))}
            </div>
          </div>
          <div className="flex w-1/3 lg:w-3/5 flex-wrap lg:border border-gray-300">
            <PriceItem
              title="Standard"
              pricing={primePricing}
              qry="standard"
              priceSwitch={priceSwtch !== 0}
            />
            <PriceItem
              title="Prime"
              priceValue="For a $3,000 value"
              amount="$500"
              qry="prime"
              pricing={primePricing}
              gold
              priceSwitch={priceSwtch !== 1}
            />
            <PriceItem
              title="Corporate"
              pricing={primePricing}
              qry="prime"
              priceSwitch={priceSwtch !== 2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SwitchBtn = ({ title, val, setPriceSwitch }) => {
  return (
    <button
      className="relative flex-1 font-medium h-8 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 text-slate-500 transition-colors duration-150 ease-in-out"
      onClick={() => setPriceSwitch(val)}
    >
      {title}
    </button>
  );
};

const PriceTitle = ({ title, id }) => {
  return (
    <p
      className={`${
        id % 2 || "bg-gray-100"
      } h-12 px-4 flex items-center justify-start ${id === 0 && "-mt-px"}`}
    >
      {title}
    </p>
  );
};

export default PrimePricing;
