/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import StatsSection from "@/app/sections/StatsSection";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";
import ProgrammeLogos from "@/app/components/ProgrammeLogos";
import { filteredMeta } from "@/app/utils/options";
import { programmesData } from "@/app/lib/strapi";

// const pageData = async () => {
// 	return await fetchData("programmes/1?populate=*");
// };

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = programmesData[0].attributes;
  return filteredMeta(seo);
}

export default async function Page() {
  const attributes = programmesData[0].attributes;

  return (
    <>
      <BrochureDrawer brochureDetails={attributes.brochureInfo} />

      <section className="bg-darkblue bigborder" data-aos="fade-up">
        <div className="flex container min-h-[280px] md:min-h-[380px] relative justify-center items-center">
          <img
            src="/images/white-key.png"
            className="absolute left-0 h-[75%] -z-1 opacity-5"
            alt=""
          />
          <h1 className="md:max-w-[80%] py-16">
            Open Doors: Certificate <br />
            in Company Direction
          </h1>
        </div>
      </section>

      <ProgramBlocks
        attributes={attributes}
        certifiedImg="https://web.theboardroomafrica.com/wp-content/uploads/2022/02/IoD_Black_transparent.png"
        certifiedText="The Boardroom Africa’s Open Doors programme is delivered in collaboration with the Institute of Directors (IoD). Upon completing the programme, graduates will receive an accredited certificate in Company Direction awarded by the IoD, UK."
        certified
      />

      <section className="bg-white" data-aos="fade-up">
        <div className="container my-28">
          <h2 className="text-center text-dusk">
            Past delegates have come from the following companies:
          </h2>
          <ProgrammeLogos logos={attributes.trustedBy} />
        </div>
      </section>

      <StatsSection />
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
