/* eslint-disable @next/next/no-img-element */
import GetQuestionnaireForm from "@/app/components/GetQuestionnaireForm";
import PaperForm from "@/app/components/PaperForm";
import ScrollToTopBtn from "@/app/components/ScrollToTopBtn";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const features = [
  {
    title: "Strategic Alignment",
    content:
      "Our assessment is crafted to align with your business goals. It helps you identify whether your board's decisions, actions, and structure are directly contributing to your strategic vision.",
  },
  {
    title: "In-Depth Insights",
    content:
      "Delve into the heart of your board's dynamics and operations. Uncover strengths that can be leveraged and areas that require attention, all while gaining a holistic view of your board's overall performance.",
  },
  {
    title: "Accelerate Growth",
    content:
      "For startups, a strong board can be a launchpad for growth. Our assessment equips you with insights to establish effective governance from the outset, setting the stage for sustainable success.",
  },
  {
    title: "Diverse Industries",
    content:
      "No matter your industry, TBrA's assessment transcends sectors. Our questions are designed to accommodate the unique needs and challenges of various fields, ensuring relevance across the board.",
  },
];
const Page = () => {
  return (
    <>
      <section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
        <div className="container transition-all ease-in-out duration-300">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-5/12 order-2 mb-10 lg:mb-0">
              <div className="flex items-end justify-center gap-4 my-4">
                <div className="bg-white rounded h-[500px] w-full p-10">
                  <p className="font-bold text-3xl text-center">
                    Get Your Free Governance Scorecard
                  </p>
                  <p className="mt-4 text-base">
                    Fill out the form below to receive the questionnaire via
                    email:
                  </p>
                  <PaperForm formSlug="opengdsp" />
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 mb-7 lg:mb-0">
              <h2
                className=" text-mustard mb-6 leading-normal"
                data-aos="fade-up"
                data-aos-delay=""
              >
                Your journey to Board Excellence <br />
                starts here
              </h2>
              <p
                className="mb-8 text-white text-opacity-80 leading-normal text-4xl font-bold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Are you ready to transform your board into a strategic
                powerhouse? Begin today.
              </p>
              <p
                className="mt-5 text-white text-base"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Powered by:
              </p>
              <div
                className="mt-4 flex gap-8 mb-2 h-[60px]"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <img
                  src="/images/logo-white.svg"
                  className="opacity-80"
                  alt=""
                />
                <img
                  src="https://board-excellence.com/wp-content/uploads/2019/01/white.svg"
                  alt=""
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container">
          <h3 className="text-center">
            Discover Your Board&apos;s Effectiveness
          </h3>
          <p className="text-center max-w-4xl mt-8 mx-auto">
            Whether you are a startup striving to establish a solid foundation
            or a well-established corporation aiming to stay ahead of the curve,
            the effectiveness of your board is a key determinant of your
            success. Welcome to TBrA-BEL&apos;s Board Effectiveness Assessment –
            a transformative tool designed to guide organizations of all sizes
            and industries towards optimal governance.
          </p>
        </div>

        <div className="overflow-hidden mt-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
              <div className="lg:pr-8">
                <div className="">
                  {features.map((feature, i) => (
                    <dl
                      key={i}
                      className={`${
                        i !== 0 ? "mt-6" : ""
                      } max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none`}
                    >
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <HiCheckCircle className="absolute left-1 top-1 h-5 w-5 text-tender" />
                          {feature.title}:
                        </dt>
                        <dd className="mt-2">{feature.content}</dd>
                      </div>
                    </dl>
                  ))}
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/tbra/image/upload/v1696344803/GDSP_Dashboard_ibq0wh.jpg"
                alt="GDSP Dashboard"
                className="w-[68rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[68rem] md:-ml-4 lg:-ml-0"
                width="1250"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mt-16 bg-white border border-gray-600 p-8 lg:flex justify-between items-center">
            <h3 className="text-3xl mb-0">
              Get Your Free Board Assessment Questionnaire Now.
            </h3>
            <ScrollToTopBtn />
          </div>
        </div>
      </section>

      <div className="container text-center mt-24">
        <h3 className=" lg:max-w-[80%] mx-auto">
          Propel your board towards strategic prowess and unparalleled success.
        </h3>
        <img
          src="https://res.cloudinary.com/tbra/image/upload/v1695743417/bulbProcess_hfizfp.png"
          alt=""
          className="mx-auto lg:max-w-[80%] mt-16"
        />
      </div>
    </>
  );
};
export default Page;
