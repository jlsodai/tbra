"use client";

import { useEffect } from "react";
const Pagination = ({ className, pages, currentPage, setCurrentPage }) => {
	const firstPage = currentPage == 1;
	const lastPage = currentPage == pages.length;

	useEffect(() => {
		const scrollStep = -window.scrollY / (500 / 15);
		const scrollInterval = setInterval(() => {
			if (window.scrollY !== 0) {
				window.scrollBy(0, scrollStep);
			} else {
				clearInterval(scrollInterval);
			}
		}, 15);
		// window.scrollTo({ top: 0, left: 0 });
		// window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [currentPage]);

	return (
		<div className={`mt-16 flex justify-center ${className}`}>
			<nav aria-label="Page navigation example">
				<ul className="list-style-none flex gap-2">
					<li>
						<button
							onClick={() => setCurrentPage(currentPage - 1)}
							className={`rounded py-1.5 px-3 ${
								firstPage && "pointer-events-none"
							}`}
						>
							Previous
						</button>
					</li>
					{pages.map((e, i) => (
						<li key={i}>
							<button
								className={`rounded py-1.5 px-3 hover:bg-dawn-500 ${
									e === currentPage && "bg-dawn-500"
								}`}
								onClick={() => setCurrentPage(e)}
							>
								{e}
							</button>
						</li>
					))}
					<li>
						<button
							className={`rounded py-1.5 px-3 hover:bg-dawn-500 ${
								lastPage && "pointer-events-none"
							}`}
							onClick={() => setCurrentPage(currentPage + 1)}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Pagination;
