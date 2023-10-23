/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import { HiOutlineCalendar } from "react-icons/hi2";
import { GoCalendar } from "react-icons/go";
import ProgramCard from "@/app/components/ProgramCard";
import { certificates } from "@/app/lib/programmes";
import { fetchData } from "@/app/lib/fetchData";
import { filteredMeta } from "@/app/utils/options";
import { execData } from "@/app/lib/strapi";

// const pageData = async () => {
// 	return await fetchData("executive-dev?populate=*");
// };

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = execData;
  return filteredMeta(seo);
}

const Page = async () => {
  // const data = await pageData();
  const { intro, Programmes } = execData;
  return (
    <>
      <HeaderTitle title="Explore powerful executive programmes as you expand your influence at the table." />

      <section className="container" data-aos="fade-up">
        <div className="keySectionWrap py-16">
          <KeySection heading={intro.Title} className="!py-0">
            <p>{intro.content}</p>
          </KeySection>
          {/* <CascadeImg
						position="right"
						negative
						top
						imgClass="object-right"
						src="https://tbratest.my.canva.site/board-roles-individual-page/images/40a1c0cfce04c8c78e2edc7741812803.jpg"
					/> */}
          <div className="text-center flex justify-center items-center">
            <img
              className="sm:m-0 -sm:mb-4 -sm:mt-0 justify-center mx-auto  -sm:mx-auto"
              src="https://res.cloudinary.com/tbra/image/upload/v1690439782/cpdCertified_ysk3a2.png"
              alt="CPD Certified"
              width="200px"
            />
          </div>
          {/* <div className="md:flex item-center items-center justify-between gap-8 px-8 py-6 mt-6"></div> */}
        </div>
      </section>

      <section>
        <div className="container grid md:grid-cols-2 gap-8 md:gap-20">
          {Programmes.map((programme, i) => (
            <ProgramCard key={i} programme={programme} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Page;
