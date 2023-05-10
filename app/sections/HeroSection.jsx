/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HeroSection = ({ hero }) => {
	return (
		<div className="bg-darkblue bigborder" data-aos="fade-up">
			<div className="flex container min-h-[calc(100dvh-75px)] relative justify-center items-center ">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-4"
					alt=""
				/>
				<div className="z-10 text-xl flex flex-col gap-6 my-16 md:my-28">
					<h1 className="text-mustard">{hero.title}</h1>
					<div className="md:max-w-[65%]">
						<p className=" text-dawn">{hero.details}</p>
						<div className="mt-10">
							<Link
								href="/membership"
								className="btn bg-dawn font-normal"
							>
								Membership
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
