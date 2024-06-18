/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import StatsSection from "@/app/sections/StatsSection";
import { fetchData } from "@/app/lib/fetchData";
import { filteredMeta } from "@/app/utils/options";
import { aboutData } from "@/app/lib/strapi";

// const pageData = async () => {
// 	return await fetchData("about-page?populate=*");
// };

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = aboutData;
  return filteredMeta(seo);
}

const About = async () => {
  // const data = await pageData();
  const { intro, heading } = aboutData;
  return (
    <>
      <HeaderTitle title={heading.title} />

      <section className="container" data-aos="fade-up">
        <div className="grid md:grid-cols-2 md:gap-20">
          <KeySection
            heading={intro.Title}
            linkTitle={intro.linkTitle}
            linkui={intro.btn && "btn"}
            url={intro.link}
          >
            {intro.content && (
              <>
                <p className="whitespace-pre-wrap">{intro.content}</p>{" "}
                <p>
                  Marcia Ashong <br />
                  Founder <TBRAKey size="xs" /> CEO, TheBoardroom Africa
                </p>
              </>
            )}
          </KeySection>
          <CascadeImg position="right" negative top src={intro.imageUrl} />
        </div>
      </section>

      <section className="mt-10 md:py-24" data-aos="fade-up">
        <div
          className="container keySectionWrap items-center"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-mustard">Mission</h3>
            <p>
              To accelerate the appointment of underrepresented talent on boards
              and build a growing pipeline of board-ready women, while inspiring
              and educating the business community on the power of diverse
              leadership.
            </p>
          </div>
          <img
            src="https://theboardroomafrica.com/wp-content/uploads/2020/05/Group-76-1.jpg"
            alt=""
            className="justify-self-end -sm:mt-8"
            width="330px"
          />
        </div>
        <div
          className="container keySectionWrap items-center mt-10"
          data-aos="fade-up"
        >
          <img
            src="https://theboardroomafrica.com/wp-content/uploads/2022/07/telescope.jpg"
            alt=""
            className="justify-self-start -sm:order-last -sm:mt-4"
            width="330px"
          />
          <div>
            <h3 className="text-mustard">Vision</h3>
            <p>
              To create a world where women and men have equal access to
              opportunity at the decision-making table.
            </p>
          </div>
        </div>

        <div
          className="container keySectionWrap items-center mt-10"
          data-aos="fade-up"
        >
          <div>
            <h3 className="text-mustard">Values</h3>
            <p>
              We cultivate a Community where women feel they belong by leading
              with Vision, Integrity and Excellence to create an environment for
              others to lead. We hold ourselves accountable for our commitments
              and actions to deliver on our promise of exceptional quality.
            </p>
          </div>
          <img
            src="https://theboardroomafrica.com/wp-content/uploads/2020/05/Group-1.jpg"
            alt=""
            className="justify-self-end -sm:mt-4"
            width="330px"
          />
        </div>
      </section>
      <StatsSection />
    </>
  );
};
export default About;
