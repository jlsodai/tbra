import TeamCard from "@/app/components/TeamCard";
import HeaderTitle from "@/app/sections/HeaderTitle";
import SectionTitle from "@/app/components/SectionTitle";
import { fetchData } from "@/app/lib/fetchData";
import { filteredMeta } from "@/app/utils/options";
import { boardData } from "@/app/lib/strapi";

// const pageData = async () => {
// 	return await fetchData("teams/2?populate=*");
// };

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = boardData;
  return filteredMeta(seo);
}

const page = async () => {
  // const data = await pageData();
  const attributes = boardData;

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
