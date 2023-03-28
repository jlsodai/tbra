const Pagination = ({ className }) => {
	return (
		<div className={`mt-16 flex justify-center ${className}`}>
			<nav aria-label="Page navigation example">
				<ul className="list-style-none flex gap-2">
					<li>
						<a className="pointer-events-none rounded py-1.5 px-3">
							Previous
						</a>
					</li>
					{[...Array(10)].map((e, i) => (
						<li key={i}>
							<a
								className={`rounded py-1.5 px-3 hover:bg-dawn-500 ${
									i === 2 && "bg-dawn-500"
								}`}
								href="#!"
							>
								{i + 1}
							</a>
						</li>
					))}
					<li>
						<a
							className="rounded py-1.5 px-3 hover:bg-dawn-500"
							href="#!"
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Pagination;
