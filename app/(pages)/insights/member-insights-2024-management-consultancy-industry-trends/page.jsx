/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import RelatedArticle from "@/app/components/RelatedArticle";

export const metadata = {
  title: "Member Insights: 2024 Management Consultancy Industry Trends",
  // openGraph: {
  // 	images: 'https://res.cloudinary.com/tbra/image/upload/v1698250891/TBRA-DCRO-Press-Release_bvmzjo.jpg'
  // },
};

const page = () => {
  return (
    <>
      <section className="bg-darkblue bigborder">
        <div className="flex container min-h-[280px] md:min-h-[380px] relative justify-center items-center">
          <img
            src="/images/white-key.png"
            className="absolute left-0 h-[75%] -z-1 opacity-5"
            alt=""
          />
          <div className="md:max-w-[90%] py-16">
            <h1 className="text-4xl md:text-6xl">
              Member Insights: <br />
              <span className="text-white">
                2024 Management Consultancy Industry Trends
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="container mt-16">
        <div className="prose max-w-full lg:mx-16">
          <img
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1711463514/miranda_naiman_xlxc23.jpg"
            className="float-left mr-6 mb-6 w-60"
            alt=""
          />
          <h2>
            &quot;More companies are adopting digital solutions to stay
            competitive&quot;
          </h2>
          <p>
            <b>Digital Transformation:</b> The rapid pace of technological
            advancement is pushing companies to adopt digital solutions to stay
            competitive. We are increasingly focusing on guiding organisations
            through digital transformation, which includes implementing new
            technologies, digitising business processes, and fostering a digital
            culture amongst their people.
          </p>
          <h2>
            &quot;...companies are increasingly establishing SMOs to enhance
            strategic execution.&quot;
          </h2>
          <p>
            <b>Strategy Management Offices (SMOs):</b> We have observed that
            companies are increasingly establishing SMOs to enhance strategic
            execution. These SMOs often incorporate critical functions such as
            brand experience, innovation, social impact, and analytics. A
            notable trend we have picked up is that People & Culture is assuming
            a more strategic position within these offices, reflecting the
            growing recognition of human capital as a key driver of
            organisational success. This holistic approach ensures that strategy
            is not only aligned with business objectives but also with evolving
            market demands and workforce dynamics.
          </p>
          <h2>
            &quot;... companies are adapting their workplaces to better align
            with Gen Z&apos;s preferences for flexibility, technology
            integration, and purpose-driven work.&quot;
          </h2>
          <p>
            <b>Adaptation of Workplaces to Gen Z Preferences and Strengths:</b>{" "}
            Organisations are increasingly recognising the unique skills and
            perspectives that Gen Z brings to the workforce. As a result,
            companies are adapting their workplaces to better align with Gen
            Z&apos;s preferences for flexibility, technology integration, and
            purpose-driven work. This includes offering more remote and hybrid
            work options, leveraging digital tools and platforms for
            collaboration, and focusing on sustainability and social impact
            initiatives. By creating an environment that resonates with Gen
            Z&apos;s values and leveraging their digital fluency, organisations
            are harnessing their capabilities to drive innovation and stay
            competitive in the evolving business landscape.
          </p>
        </div>
        <div className="max-w-2xl lg:mx-16">
          <hr className="my-12 max-w-md h-1 bg-dawn-500" />
          <p className="font-bold mb-4">About the author</p>
          <p className="text-tender text-4xl font-bold">MIRANDA NAIMAN</p>
          <p className="font-bold mb-2">Founder & CEO, Empower</p>
          <p>
            Miranda Naiman is the visionary behind Empower, a transformative
            consulting firm advancing businesses across Africa. Honoured by
            Forbes, her transition from education to eminent entrepreneurship
            has led her to significant board positions and advocacy for
            women&apos;s entrepreneurship. Based in Tanzania, Miranda is a key
            player in shaping Africa&apos;s next generation of leaders.
          </p>
        </div>
      </section>

      <RelatedArticle omit={1} />
    </>
  );
};

export default page;
