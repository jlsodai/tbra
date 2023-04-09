/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className="bg-darkblue bigborder" data-aos="fade-up">
			<div className="flex container min-h-[calc(100dvh-75px)] relative justify-center items-center ">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-4"
					alt=""
				/>
				<div className="z-10 text-xl flex flex-col gap-6 my-16 md:my-28">
					<h1 className="text-mustard">
						Society thrives when women are equal decision makers.
					</h1>
					<div className="md:max-w-[65%]">
						<p className=" text-dawn">
							TheBoardroom Africa is the continent&apos;s leading
							private membership network that promotes exceptional
							female talent to boards and executive teams while
							transforming the presence and influence of African
							women on a global stage.
						</p>
						<div className="text-center mt-10">
							<Link
								href="/membership"
								className="btn bg-dawn font-normal"
							>
								Join Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
