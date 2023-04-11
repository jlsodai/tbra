"use client";
import { useState, useEffect } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import Link from "next/link";
import PaperFormModal from "@/app/components/PaperFormModal";

const BrochureDrawer = ({ brochureDetails }) => {
	const [brochure, setBrochure] = useState(false);
	const [deactivate, setDeactivate] = useState(false);

	const handleBrochure = () => {
		setDeactivate(!deactivate);
		setBrochure(!brochure);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				if (!deactivate) {
					setBrochure(true);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<>
			{deactivate && (
				<div className="text-center fixed top-0 left-0 right-0 z-30">
					<div className="px-4 bg-dusk inline-block text-2xl text-white">
						<RxCaretDown
							className="mx-auto"
							onClick={() => handleBrochure()}
						/>
					</div>
				</div>
			)}
			<section
				className={`brochure-wrap fixed top-0 left-0 right-0 z-40 transition-transform ${
					brochure ? "transform-none" : "-translate-y-full"
				}`}
			>
				<div className="bg-dusk w-full py-8">
					<button
						type="button"
						data-drawer-hide="drawer-top-example"
						aria-controls="drawer-top-example"
						onClick={() => handleBrochure()}
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
					>
						<svg
							// aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Close menu</span>
					</button>
					<div className="container grid grid-cols-4 text-white gap-10 text-sm">
						<div className="">
							<h2 className="text-sm">Upcoming Cohorts</h2>
							<p className="whitespace-pre-wrap">
								{brochureDetails.upcoming}
							</p>
						</div>
						<div className="">
							<h2 className="text-sm">Structure</h2>
							<p>{brochureDetails.structure}</p>
						</div>
						{/* <div className="col-span-2">
							<h2 className="text-sm">Delivery Method</h2>
							<p>Virtual</p>
						</div> */}
						<div className="col-span-2 ml-20">
							{/* <p className="text-sm">
								Subsidies and flexible payment plans available
								<br />
								<span className="underline">
									opendoors@theboardroomafrica.com
								</span>
							</p> */}
							<p className="text-sm">
								{brochureDetails.subsidyText}
								<br />
								<a
									className="underline"
									href={`mailto:${brochureDetails.subsidyEmail}`}
								>
									{brochureDetails.subsidyEmail}
								</a>
							</p>
							<div className="flex gap-2">
								{brochureDetails.brochureFormUrl && (
									<PaperFormModal
										btnText="Download Brochure"
										paperform={
											brochureDetails.brochureFormUrl
										}
									/>
								)}
								{brochureDetails.applyUrl && (
									<Link
										href={brochureDetails.applyUrl}
										className="btn bg-tender uppercase text-white mt-4"
									>
										Apply Now
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="text-center" onClick={() => handleBrochure()}>
					<div className="px-4 bg-dusk inline-block text-2xl text-white mx-auto">
						{brochure ? <RxCaretUp /> : <RxCaretDown />}
					</div>
				</div>
			</section>
		</>
	);
};
export default BrochureDrawer;
