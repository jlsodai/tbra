import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
const FooterSection = () => {
	return (
		<>
			<section className="mt-10 impact py-10">
				<div className="container">
					<h1 className="text-dusk text-center">Our Impact</h1>
					<div className="grid grid-cols-4 gap-10 mx-20 mt-10">
						<Stats
							stat="14"
							info="Important statistics displayed here"
						/>
						<Stats
							stat="14"
							info="Important statistics displayed here"
						/>
						<Stats
							stat="14"
							info="Important statistics displayed here"
						/>
						<Stats
							stat="14"
							info="Important statistics displayed here"
						/>
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="container">
					<div className="text-center mx-auto max-w-sm">
						<h2 className="text-dusk text-center inline-block mr-8 mt-4">
							Join Us
						</h2>
						<TBRAKey size="sm" />
						<p className="mt-4">
							Become a member of the leading community for female
							executives working in Africa. Build your network,
							enhance your profile, and seize new opportunities.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};
export default FooterSection;
