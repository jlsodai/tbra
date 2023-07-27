import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { corporateBacked } from "@/app/utils/options";
import Link from "next/link";

const CorporatePricing = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h3 className="text-5xl font-halyard text-center">
          Corporate Membership Packages
        </h3>
        <div className="flex flex-wrap items-stretch -mx-4 mt-16">
          {corporateBacked.map((pricing, i) => (
            <div
              key={i}
              className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
            >
              <div
                className={`flex flex-col p-6 space-y-6 rounded shadow sm:p-8 ${
                  pricing.colored ? "bg-tender text-gray-50" : "bg-gray-50"
                } `}
              >
                <div className="space-y-2 text-center">
                  <h4 className="text-2xl font-bold">{pricing.title}</h4>
                </div>
                <ul className="flex-1 mb-6">
                  {pricing.list.map((list, i) => (
                    <li key={i} className="flex mb-2 gap-4">
                      <FaCheckCircle className="text-lg shrink-0 mt-[5px]" />
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
                {/* <Link
                  href={pricing.formUrl}
                  className={`inline-block px-5 py-3 font-semibold tracking-wider text-center rounded ${
                    pricing.colored
                      ? "bg-white text-tender"
                      : "bg-tender text-gray-50"
                  }`}
                >
                  Get Started
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePricing;
