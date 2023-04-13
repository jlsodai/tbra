import { GoCalendar, GoLocation } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
const ProgramCard = ({ programme }) => {
	return (
		<div className="border border-dusk-200 hover:shadow-lg overflow-hidden md:flex">
			<div
				className={`bg-cover w-full md:w-44 min-h-[185px] bg-top shrink-0`}
				style={{ backgroundImage: `url(${programme.imageUrl})` }}
			></div>
			<div className="py-4 px-6 flex flex-col justify-between">
				<h3 className="font-libreb text-xl mb-2">{programme.title}</h3>
				<div>
					<div className="flex gap-4 font-halyard font-light">
						<div className="flex items-center gap-2">
							<GoCalendar className="text-2xl" />
							<p>{programme.date}</p>
						</div>
						<div className="flex items-center gap-2">
							<GoLocation className="text-2xl" />
							<p>{programme.venue}</p>
						</div>
						{/* <div className="flex items-center gap-2">
							<IoPeopleOutline className="text-2xl" />
							<p>10 remaining</p>
						</div> */}
						{/* <p className="text-xs rounded-full bg-dawn-300 py-1.5 px-3 font-medium">
							10 remaining
						</p> */}
					</div>

					<div className="flex gap-1 gap-y-3 mt-4 items-center -sm:flex-wrap">
						{programme.learnmoreBtnUrl && (
							<a
								href={programme.learnmoreBtnUrl}
								className="btn font-normal text-white shrink-0"
							>
								Learn More
							</a>
						)}
						{programme.applyBtnUrl && (
							<>
								{!programme.seatsRemaining ? (
									<a className="btn-disabled font-normal cursor-not-allowed shrink-0">
										Sold Out
									</a>
								) : (
									<a
										href={programme.applyBtnUrl}
										className="btn font-normal bg-tender text-white shrink-0"
									>
										Apply Now
									</a>
								)}
							</>
						)}
						{programme.seatsRemaining > 0 && (
							<p className="text-xs text-center rounded-full bg-dawn-300 py-1.5 px-3 font-medium">
								{programme.seatsRemaining} seats remaining
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProgramCard;
