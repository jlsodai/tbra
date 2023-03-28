import Stats from "@/app/components/Stats";
const StatsSection = () => {
	return (
		<>
			<section
				className="mt-16 -my-24 bg-gray-50 relative"
				style={styles.sectionWrap}
				data-aos="fade-up"
			>
				<div style={styles.bgWrap}>
					<div
						className="container py-10"
						style={styles.containerStyle}
					>
						<h1 className="text-tender ml-[172px]">
							<span className="text-dawn-500">Our</span> impact
						</h1>
						<div className="grid grid-cols-4 gap-10 mt-10">
							<Stats
								stat="2500+"
								info="community of women leaders"
							/>
							<Stats stat="100+" info="women placed on boards" />
							<Stats
								stat="350+"
								info=" executive leadership alumni"
							/>
							<Stats stat="65+" info="countries represented" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StatsSection;

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
