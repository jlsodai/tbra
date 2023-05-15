import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { primePricing } from "@/app/utils/options";

const PrimePricing = () => {
	return (
		<section className="primeTable -sm:text-[12.5px] text-gray-700 body-font overflow-hidden border-t border-gray-200">
			<div className="container -sm:px-4 md:px-32 py-24 mx-auto flex flex-wrap">
				<div className="w-1/2 block">
					<div className="h-36 flex items-end">
						<h5 className="bg-dawn inline-block px-8 py-2 font-bold">
							All Access
						</h5>
					</div>
					<div className="mt-px border-t border-gray-300 border-b border-l rounded-bl-lg overflow-hidden">
						{primePricing.access.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} h-12 px-4 flex items-center justify-start ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.title}
							</p>
						))}
						<div className="h-16 flex items-end">
							<h5 className="bg-dawn inline-block px-8 py-2 font-bold">
								On-Demand
							</h5>
						</div>
						{primePricing.ondemand.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} h-12 px-4 flex items-center justify-start ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.title}
							</p>
						))}
						<div className="h-16 flex items-end">
							<h5 className="bg-dawn inline-block px-8 py-2 font-bold">
								Executive Development
							</h5>
						</div>
						{primePricing.exec.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} h-12 px-4 flex items-center justify-start ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.title}
							</p>
						))}
					</div>
				</div>
				<div className="flex w-1/2 flex-wrap lg:border border-gray-300 rounded-lg">
					<div className="w-1/2 lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
						<div className="px-2 text-center h-36 flex flex-col items-center justify-center">
							<h2 className="text-base text-dusk md:text-2xl font-medium flex items-center justify-center leading-none">
								Standard
							</h2>
						</div>
						{primePricing.access.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.standard === "yes" ? (
									<FaCheckCircle />
								) : (
									price.standard
								)}
							</p>
						))}
						<div className="h-16"></div>
						{primePricing.ondemand.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.standard === "yes" ? (
									<FaCheckCircle />
								) : (
									price.standard
								)}
							</p>
						))}
						<div className="h-16"></div>
						{primePricing.exec.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.standard === "yes" ? (
									<FaCheckCircle />
								) : (
									price.standard
								)}
							</p>
						))}
					</div>
					<div className="w-1/2 lg:-mt-px lg:mb-0 border-2 rounded-lg border-mustard relative">
						<div className="px-2 text-center h-36 flex flex-col items-center justify-center">
							<h2 className="text-base md:text-2xl font-medium flex items-center justify-center leading-none">
								Prime
							</h2>
							<h2 className="text-4xl -sm:text-base text-gray-900 font-medium flex -sm:flex-col items-center justify-center leading-none mb-2 mt-2">
								$500
								<span className="text-gray-600 text-base ml-1">
									/year
								</span>
							</h2>
							<span className="text-sm -sm:text-[10px] leading-none text-gray-600">
								For a $2,500 value
							</span>
						</div>
						{primePricing.access.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.prime === "yes" ? (
									<FaCheckCircle />
								) : (
									price.prime
								)}
							</p>
						))}
						<div className="h-16"></div>
						{primePricing.ondemand.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.prime === "yes" ? (
									<FaCheckCircle />
								) : (
									price.prime
								)}
							</p>
						))}
						<div className="h-16"></div>
						{primePricing.exec.map((price, i) => (
							<p
								key={i}
								className={`${
									i % 2 || "bg-gray-100"
								} text-gray-600 text-center h-12 flex items-center justify-center ${
									i === 0 && "-mt-px"
								}`}
							>
								{price.prime === "yes" ? (
									<FaCheckCircle />
								) : (
									price.prime
								)}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrimePricing;
