/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const TeamCard = ({ teamInfo }) => {
	return (
		<>
			{teamInfo.map((team, i) => (
				<div
					key={i}
					className="group relative rounded overflow-hidden"
					data-aos="fade-up"
				>
					<div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
						<img
							src={
								team.imageUrl ||
								"https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg"
							}
							alt={team.name}
							className="h-full w-full object-cover object-center lg:h-full lg:w-full"
						/>
					</div>

					<div className="flex">
						<div className="py-4 bg-dawn text-center flex-1">
							<p className="font-serif font-bold">{team.name}</p>
							<p className="text-sm">{team.title}</p>
							{team.companyName && (
								<p className="text-sm">{team.companyName}</p>
							)}
						</div>
					</div>

					<div className="flex text-3xl gap-2 justify-center mt-4">
						{team.linkedInUrl && (
							<Link href="#">
								<RiLinkedinFill className="rounded-full text-white bg-mustard hover:mustard-700 mb-2 p-1" />
							</Link>
						)}
						{team.twitterUrl && (
							<Link href="#">
								<RiTwitterFill className="rounded-full bg-mustard hover:mustard-700 text-white p-1" />
							</Link>
						)}
					</div>
				</div>
			))}
		</>
	);
};
export default TeamCard;
