/* eslint-disable @next/next/no-img-element */
"use client";
import { cva } from "class-variance-authority";
import { useState } from "react";
import Markdown from "markdown-to-jsx";

const OfferVariants = cva("", {
	variants: {
		bg: {
			default: "bg-gray-100",
			tender: "bg-tender-50",
			mustard: "bg-mustard-50",
		},
	},

	defaultVariants: {
		bg: "default",
		hover: "default",
	},
});

const BorderVariants = cva("", {
	variants: {
		border: {
			default: "border-l-gray-600 bg-gray-300",
			tender: "border-l-tender bg-tender-200",
			mustard: "border-l-mustard bg-mustard-200",
		},
	},

	defaultVariants: {
		border: "default",
	},
});

const HoverVariants = cva("", {
	variants: {
		hover: {
			default: "hover:border-l-gray-600",
			tender: "hover:border-l-tender",
			mustard: "hover:border-l-mustard",
		},
	},
	defaultVariants: {
		hover: "default",
	},
});

const OfferSection = ({ bg, offers }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<section className={`${OfferVariants({ bg })} container mt-16 p-8`}>
			<h3 className="font-libreb text-2xl">{offers.heading}</h3>
			<div className="grid lg:grid-cols-[1fr_3fr] gap-8">
				<ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
					{offers?.offering.map((offer, i) => (
						<li
							className={`${
								activeTab === i
									? `${BorderVariants({
											border: bg,
									  })} rounded-r`
									: "border-l-white rounded bg-white"
							} flex items-center border-l-[6px] py-6 lg:h-[75px] px-6 cursor-pointer drop-shadow-sm  hover:rounded-l-none ${HoverVariants(
								{ hover: bg }
							)}`}
							key={i}
							onClick={() => setActiveTab(i)}
						>
							{offer.title}
						</li>
					))}
				</ul>
				{offers?.offering.map((offer, i) => (
					<div
						className={`bg-white rounded p-6 prose max-w-full ${
							activeTab === i || "hidden"
						}`}
						key={i}
					>
						<h3>{offer.title}</h3>
						<div className="prose max-w-full">
							<Markdown>{offer.text}</Markdown>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OfferSection;
