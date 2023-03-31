import { GoCalendar } from "react-icons/go";
const ProgramCard = ({ programme }) => {
	return (
		<div className="border border-dusk-200 hover:shadow-lg overflow-hidden md:flex">
			<div
				className={`bg-cover w-44 min-h-[185px] bg-top shrink-0`}
				style={{ backgroundImage: `url(${programme.imageUrl})` }}
			></div>
			<div className="py-4 px-6 flex flex-col justify-between">
				<h3 className="font-halyard text-2xl mb-2">
					{programme.title}
				</h3>
				<div>
					<div className="flex items-center gap-2">
						<GoCalendar className="text-2xl" />
						<p>{programme.date}</p>
					</div>

					<div className="flex gap-6 mt-4">
						{programme.learnMoreUrl && (
							<a
								href={programme.learnMoreUrl}
								className="btn font-normal text-white"
							>
								Learn More
							</a>
						)}
						{programme.registerUrl && (
							<>
								{programme.sold ? (
									<a className="btn-disabled font-normal cursor-not-allowed">
										Sold Out
									</a>
								) : (
									<a
										href={programme.registerUrl}
										className="btn font-normal bg-tender text-white"
									>
										Apply Now
									</a>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProgramCard;
