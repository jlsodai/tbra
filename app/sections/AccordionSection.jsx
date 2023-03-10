"use client";

import { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

const accordionTitles = [
	"International role of the director",
	"Finance for directors",
	"Leadership for directors",
	"Strategy for directors",
];

const AccordionSection = () => {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<>
			{accordionTitles.map((accordionTitle, i) => (
				<Accordion key={i} open={open === i + 1}>
					<button
						onClick={() => handleOpen(i + 1)}
						className="flex justify-between items-center border border-gold text-center p-4 w-full mt-4"
					>
						<div>&nbsp;</div>
						<div>{accordionTitle}</div>
						{open === i + 1 ? <CgChevronDown /> : <CgChevronUp />}
					</button>
					<AccordionBody>
						Delivering an essential understanding of the board’s
						role in corporate governance and risk management, this
						introduction to the duties and legal responsibilities of
						a director will enable you to tackle the challenges of
						the boardroom with fresh confidence. Whether you’re a
						newly appointed director, aspiring to a position on the
						board, or looking to improve your performance with fresh
						insight, this practical two-day module will equip you
						with the crucial knowledge and skill-set to fulfil your
						role successfully.
					</AccordionBody>
				</Accordion>
			))}
		</>
	);
};

export default AccordionSection;
