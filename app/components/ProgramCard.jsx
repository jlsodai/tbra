import { GoCalendar } from "react-icons/go";
const ProgramCard = ({ programme }) => {
	return (
		<div className="border border-dusk-200 hover:shadow-lg rounded overflow-hidden md:flex">
			<div
				className={`bg-cover w-56 bg-top`}
				style={{ backgroundImage: `url(${programme.imageUrl})` }}
			></div>
			<div>
				<div className="py-4 px-6">
					<h3 className="font-halyard text-2xl mb-2">
						{programme.title}
					</h3>
					<div className="flex items-center gap-2">
						<GoCalendar className="text-2xl" />
						<p>{programme.date}</p>
					</div>
					<div className="flex gap-6">
						{programme.learnMoreUrl && (
							<a
								href={programme.learnMoreUrl}
								className="btn font-normal text-white mt-4"
							>
								Learn More
							</a>
						)}
						{programme.registerUrl && (
							<a
								href={programme.registerUrl}
								className="btn font-normal bg-tender text-white mt-4"
							>
								Register Now
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProgramCard;
