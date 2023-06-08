"use client";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import Markdown from "markdown-to-jsx";

const FAQAccordion = ({ faqs }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			{faqs.map((faq, i) => (
				<div key={i} className="container mt-6 px-8">
					<button
						onClick={() => setActiveTab(i === activeTab ? null : i)}
						className="flex text-lg leading-tight mb-0 w-full text-left py-4 px-6 bg-tender items-start text-white"
					>
						{activeTab === i ? (
							<BiMinus className="mr-4 mt-[2px]" />
						) : (
							<BiPlus className="mr-4 mt-[2px]" />
						)}
						{faq.title}
					</button>
					<div
						className={`${
							activeTab === i || "hidden"
						} prose py-4 px-8 border max-w-full`}
					>
						<Markdown>{faq?.text}</Markdown>
					</div>
				</div>
			))}
		</>
	);
};

export default FAQAccordion;
