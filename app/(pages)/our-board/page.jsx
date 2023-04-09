import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import SectionTitle from "@/app/components/SectionTitle";
import { fetchData } from "@/app/lib/fetchData";

const page = async () => {
	const data = await fetchData("teams/2?populate=*");
	const attributes = data?.data?.attributes;

	return (
		<>
			<HeaderTitle title={attributes.Heading.title} />
			<section className="my-16" data-aos="fade-up">
				<div className="container md:px-44">
					<SectionTitle title={attributes.Heading.title} />
					<div className="grid md:grid-cols-3 md:gap-10 mt-10">
						<TeamCard teamInfo={attributes.TeamMember} />
					</div>
				</div>
			</section>
		</>
	);
};
export default page;
