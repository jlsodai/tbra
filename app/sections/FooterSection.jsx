import TBRAKey from "../components/TBRAKey";
import Stats from "../components/Stats";
import Forminput from "@/app/ui/Forminput";
import Link from "next/link";
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
						<div className="grid grid-cols-4 gap-10 mt-10">
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

			<section className="py-16">
				<div className="container grid grid-cols-2 lg:px-60 gap-24">
					<div className="max-w-md">
						<div className="flex items-center">
							<h2 className="text-dusk text-center inline-block mr-8 text-4xl">
								Join Us
							</h2>
							<TBRAKey size="sm" />
						</div>
						<p className="mt-4">
							Become a member of the leading community for female
							executives working in Africa. Build your network,
							enhance your profile, and seize new opportunities.
						</p>
					</div>
					<div>
						<p className="mb-4">
							Learn more about our community and activities by
							signing up to receive updates
						</p>
						<Forminput label="Email Address" />
						<div className="grid grid-cols-2 gap-4">
							<Forminput label="First Name" />
							<Forminput label="Last Name" />
						</div>
						<Link
							href="#"
							className="btn font-normal text-white mt-4"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</section>

			<section className="bg-darkblue">
				<div className="container h-[350px] flex justify-center items-center text-center">
					<h1>Footer Menu Here</h1>
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
