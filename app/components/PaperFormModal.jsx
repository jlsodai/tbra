"use client";
import React from "react";
import PaperForm from "@/app/components/PaperForm";

export default function PaperFormModal({ btnText, paperform, className }) {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button
				className={`${className || "btn font-semibold mt-4 uppercase"}`}
				type="button"
				onClick={() => setShowModal(true)}
			>
				{btnText}
			</button>
			{showModal ? (
				<>
					<div
						className="relative z-10"
						aria-labelledby="modal-title"
						role="dialog"
						aria-modal="true"
					>
						<div className="fixed inset-0 bg-dusk bg-opacity-75 transition-opacity"></div>

						<div className="fixed inset-0 z-10 overflow-y-auto">
							<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
								<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all m-8 max-w-[800px] w-full">
									<button
										className="p-2 mr-2 !text-gray float-right text-3xl"
										onClick={() => setShowModal(false)}
										style={{ color: "#333333" }}
									>
										×
									</button>
									<div className="bg-white px-4 pt-12">
										<PaperForm formSlug={paperform} />
									</div>
									{/* <div className="bg-gray-50 px-4 py-3 flex justify-center">
										<button
											type="button"
											className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
											onClick={() => setShowModal(false)}
										>
											Cancel
										</button>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
