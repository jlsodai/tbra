import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";
import ProgrammeLogos from "@/app/components/ProgrammeLogos";
import { filteredMeta } from "@/app/utils/options";
import { programmesData } from "@/app/lib/strapi";

// const pageData = async () => {
// 	return await fetchData("programmes/2?populate=*");
// };

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = programmesData[1].attributes;
  return filteredMeta(seo);
}

export default async function Page() {
  // const data = await pageData();
  const attributes = programmesData[1].attributes;

  return (
    <>
      <BrochureDrawer brochureDetails={attributes.brochureInfo} />
      <HeaderTitle title="Ontological Growth Experience" />

      <ProgramBlocks attributes={attributes} />

      <section className="bg-white" data-aos="fade-up">
        <div className="container my-28">
          <h2 className="text-center text-dusk">
            Rachel&apos;s work is trusted by organisations like:
          </h2>
          <ProgrammeLogos logos={attributes.trustedBy} />
        </div>
      </section>

      {/* <StatsSection /> */}
    </>
  );
}

const Expectation = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center">
      {children}
      <p className="mt-4">{title}</p>
    </div>
  );
};
