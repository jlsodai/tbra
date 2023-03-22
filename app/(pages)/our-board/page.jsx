import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { teams } from "@/app/utils/options";
import TBRAKey from "@/app/components/TBRAKey";
import SectionTitle from "@/app/components/SectionTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Our Team" />
			<section className="mt-16" data-aos="fade-up">
				<div className="container md:px-44">
					<SectionTitle title="Our Board" />
					<div className="grid grid-cols-3 gap-10 mt-10">
						<TeamCard teamInfo={teams} />
					</div>
				</div>
			</section>
		</>
	);
};
export default page;
