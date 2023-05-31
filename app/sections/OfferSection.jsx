/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const offers = [
	{
		title: "Unlimited Access to Members' Forum",
	},
	{
		title: "Some Members' Forum Benefit",
	},
	{
		title: "Another Benefit",
	},
	{
		title: "Benefits to Standard Members",
	},
];

const OfferSection = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<section className="container mt-16 bg-tender-50 p-8">
			<h3 className="font-libreb text-2xl">All Access</h3>
			<div className="grid grid-cols-[1fr_3fr] gap-8">
				<ul className="flex flex-col gap-4">
					{offers.map((offer, i) => (
						<li
							className={`${
								activeTab === i
									? "border-l-tender rounded-r bg-tender-200"
									: "border-l-white rounded"
							} flex items-center border-l-[6px] bg-white h-[75px] px-6 cursor-pointer drop-shadow-sm hover:border-l-tender hover:rounded-l-none`}
							key={i}
							onClick={() => setActiveTab(i)}
						>
							{offer.title}
						</li>
					))}
				</ul>
				{offers.map((offer, i) => (
					<div
						className={`bg-white rounded p-6 prose max-w-full ${
							activeTab === i || "hidden"
						}`}
						key={i}
					>
						<h3>{offer.title}</h3>
						<img
							src="https://via.placeholder.com/130x140"
							alt=""
							className="float-left mr-4 my-2"
						/>
						<p className="mt-0">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo hic sint iure veritatis. Excepturi,
							totam rerum sed eum numquam et nulla eaque
							perspiciatis repellendus adipisci! Ab, esse fugit.
							Placeat, ducimus!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Explicabo hic sint iure veritatis. Excepturi,
							totam rerum sed eum numquam et nulla eaque
							perspiciatis repellendus adipisci! Ab, esse fugit.
							Placeat, ducimus!Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Explicabo hic sint
							iure veritatis. Excepturi, totam rerum sed eum
							numquam et nulla eaque perspiciatis repellendus
							adipisci! Ab, esse fugit. Placeat, ducimus!
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default OfferSection;
