const HeroSection = () => {
	return (
		<div className="bg-darkblue">
			<div className="flex container min-h-[calc(100dvh-75px)] px-4 justify-center items-center">
				<div>
					<h1 className="text-gold text-6xl">
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
