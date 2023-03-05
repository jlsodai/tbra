const HeroSection = () => {
	return (
		<div className="bg-darkblue">
			<div className="flex container min-h-[600px] relative px-4 justify-center items-center ">
				<img
					src="/images/white-key.png"
					className="absolute left-0 h-[75%] -z-1 opacity-5"
					alt=""
				/>
				<div className="z-10">
					<h1 className="text-gold">
						Society thrives when women are equal decision makers.
					</h1>
					<p className="mt-4 text-gold-300 md:max-w-[65%]">
						TheBoardroom Africa is Africa's leading private
						membership network that promotes exceptional female
						talent to boards and executive teams while transforming
						the presence and influence of African women on a global
						stage.
					</p>
					<a href="#" className="btn mt-4 text-white">
						Join Now
					</a>
				</div>
			</div>
		</div>
	);
};
export default HeroSection;
