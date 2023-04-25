import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import SectionTitle from "@/app/components/SectionTitle";
import { fetchData } from "@/app/lib/fetchData";
import { filteredMeta } from "@/app/utils/options";

const pageData = async () => {
	return await fetchData("teams/1?populate=*");
};

export async function generateMetadata() {
	const data = await pageData();
	const { seo } = data?.data?.attributes;
	return filteredMeta(seo);
}

const page = async () => {
	const data = await pageData();
	const attributes = data?.data?.attributes;

	return (
		<>
			<HeaderTitle title="Our Team" />
			<section className="my-16" data-aos="fade-up">
				<div className="container md:px-44">
					<SectionTitle title={attributes.Heading.title} />
					<div className="grid md:grid-cols-3 gap-10 mt-10">
						<TeamCard teamInfo={attributes.TeamMember} />
					</div>
				</div>
			</section>
		</>
	);
};
export default page;
