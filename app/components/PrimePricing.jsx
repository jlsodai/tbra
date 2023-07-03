"use client";

import { useState } from "react";
import { primePricing } from "@/app/utils/options";
import PriceItem from "@/app/components/PriceItem";

const PrimePricing = () => {
  const [priceSwtch, setPriceSwitch] = useState(0);
  return (
    <section className="primeTable -sm:text-[12.5px] text-gray-700 body-font overflow-hidden border-t border-gray-200">
      <div className="container -sm:px-4 py-24 mx-auto">
        <div className="flex lg:hidden justify-center">
          <div className="bg-gray-300 rounded-lg p-1 mb-8 -sm:w-full">
            <SwitchBtn
              title="Standard"
              active={priceSwtch === 0}
              val={0}
              onClick={() => setPriceSwitch(0)}
            />
            <SwitchBtn
              title="Prime"
              active={priceSwtch === 1}
              val={1}
              onClick={() => setPriceSwitch(1)}
            />
            <SwitchBtn
              title="Corporate"
              val={2}
              onClick={() => setPriceSwitch(2)}
              active={priceSwtch === 2}
            />
          </div>
        </div>
        <div className=" flex flex-wrap">
          <div className="w-2/3 lg:w-2/5 block">
            <div className={`h-36 flex items-end`}>
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
              subtitle="For a $3,000 value"
              amount="$500"
              qry="prime"
              pricing={primePricing}
              gold
              priceSwitch={priceSwtch !== 1}
            />
            <PriceItem
              title="Corporate"
              pricing={primePricing}
              qry="corporate"
              subtitle="Corporate-backed membership"
              priceSwitch={priceSwtch !== 2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SwitchBtn = ({ title, active = false, onClick }) => {
  return (
    <button
      type="button"
      className={`w-1/3 ${
        active ? "bg-white border-gray-200 text-gray-900" : "text-gray-700"
      } rounded-md shadow-sm py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-transparent focus:z-10 sm:w-auto px-4 sm:px-8`}
      onClick={onClick}
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
