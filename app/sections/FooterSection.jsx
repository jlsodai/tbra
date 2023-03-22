import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
const FooterSection = () => {
	return (
		<>
			<section
				className="mt-10 bg-gray-50 relative"
				style={styles.sectionWrap}
				data-aos="fade-up"
			>
				<div style={styles.bgWrap}>
					<div
						className="container py-10"
						style={styles.containerStyle}
					>
						<h1 className="text-tender ml-[172px]">
							<span className="text-dawn-500">Our</span> Impact
						</h1>
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

const styles = {
	containerStyle: {
		background: "linear-gradient(90deg, #cdae7d 350px, #fafafa 0%)",
		borderWidth: "8px",
		borderStyle: "solid",
		borderImageSlice: 1,
		borderImageSource: "linear-gradient(90deg, #bac2ba 350px, #fafafa 0%)",
		borderLeft: 0,
		borderRight: 0,
		borderTop: 0,
	},
	bgWrap: {
		background: "linear-gradient(270deg, #fafafa 350px, transparent 0%)",
	},
	sectionWrap: {
		background: "linear-gradient(0deg, #bac2ba 8px, #cdae7d 0%)",
	},
};
