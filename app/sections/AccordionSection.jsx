"use client";

import { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

const AccordionSection = ({ outlines = [] }) => {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="v-scroll max-h-[425px] flex flex-col space-y-3 pr-6 mt-4">
			{outlines.map((outline, i) => (
				<Accordion key={i} open={open === i + 1}>
					<button
						onClick={() => handleOpen(i + 1)}
						className="flex justify-between items-center border border-mustard text-center w-full p-4"
					>
						<div>&nbsp;</div>
						<div>{outline.title}</div>
						{open === i + 1 ? <CgChevronDown /> : <CgChevronUp />}
					</button>
					<AccordionBody>{outline.description}</AccordionBody>
				</Accordion>
			))}
		</div>
	);
};

export default AccordionSection;
