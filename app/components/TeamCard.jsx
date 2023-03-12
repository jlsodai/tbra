/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const TeamCard = ({ teamInfo }) => {
	return (
		<>
			{teamInfo.map((team, i) => (
				<div key={i} className="group relative rounded overflow-hidden">
					<div className="min-h-60 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60">
						<img
							src={team.imageSrc}
							alt={team.imageAlt}
							className="h-full w-full object-cover object-center lg:h-full lg:w-full"
						/>
					</div>
					<div className="flex flex-col absolute z-10 top-2 right-2 text-3xl">
						{team.linkedin && (
							<Link href="#">
								<RiLinkedinFill className=" text-white bg-dusk hover:bg-blue-700 mb-2 p-1 opacity-70 hover:opacity-100" />
							</Link>
						)}
						{team.twitter && (
							<Link href="#">
								<RiTwitterFill className="bg-dusk hover:bg-blue-700 text-white p-1 opacity-70 hover:opacity-100" />
							</Link>
						)}
					</div>
					<div className="flex">
						<div className="py-2 bg-dawn text-center flex-1">
							{/* <Link className="block" href={team.href}> */}
							<p className="font-serif">{team.name}</p>
							<p>{team.title}</p>
							{/* </Link> */}
						</div>
					</div>
				</div>
			))}
		</>
	);
};
export default TeamCard;
