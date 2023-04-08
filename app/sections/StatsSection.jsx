import Stats from "@/app/components/Stats";
const StatsSection = () => {
	return (
		<>
			<section
				className="mt-16 -my-24 bg-gray-50 relative statsSectionWrap"
				data-aos="fade-up"
			>
				<div className="md:statsWrap">
					<div className="container py-10 bg-mustard bigborder md:statsSection">
						<h1 className="text-dawn-500 text-center md:text-left md:ml-[172px]">
							Our<span className="md:text-tender"> impact</span>
						</h1>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
							<Stats
								stat="2500+"
								info="community of women leaders"
							/>
							<Stats stat="100+" info="women placed on boards" />
							<Stats
								stat="350+"
								info=" executive leadership alumni"
							/>
							<Stats
								stat="65+"
								info="sectors and countries represented"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StatsSection;
