import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import FooterSection from "@/app/sections/FooterSection";
import { teams } from "@/app/utils/options";
import TBRAKey from "@/app/components/TBRAKey";

const page = () => {
	return (
		<>
			<HeaderTitle title="Our Team" />
			<section className="mt-16">
				<div className="container md:px-44">
					<div className="flex">
						<TBRAKey size="sm" className="mr-5" />
						<h3 className="inline-block">Our Board</h3>
					</div>
					<div className="grid grid-cols-3 gap-10 mt-10">
						<TeamCard teamInfo={teams} />
					</div>
				</div>
			</section>
			<FooterSection />
		</>
	);
};
export default page;
