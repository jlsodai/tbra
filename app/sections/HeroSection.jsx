/* eslint-disable @next/next/no-img-element */
const HeroSection = () => {
	return (
		<div className="bg-darkblue border-b-8 border-dawn">
			<div className="flex container min-h-[600px] relative px-4 justify-center items-center ">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-5"
					alt=""
				/>
				<div className="z-10 text-xl flex flex-col gap-6">
					<h1 className="text-mustard">
						Society thrives when women are equal decision makers.
					</h1>
					<p className=" text-dawn md:max-w-[65%]">
						TheBoardroom Africa is Africa's leading private
						membership network that promotes exceptional female
						talent to boards and executive teams while transforming
						the presence and influence of African women on a global
						stage.
					</p>
					<div>
						<a href="#" className="btn bg-dawn font-normal">
							Join Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
