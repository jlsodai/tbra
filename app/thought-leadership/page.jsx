/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import PaperFormModal from "@/app/components/PaperFormModal";

const page = () => {
  return (
    <>
      <section className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1710757248/ThoughtLeadershipBanner_wbfomt.jpg')] bg-cover bg-[-400px] md:bg-top items-center min-h-screen flex relative">
        <div className="container grid md:grid-cols-2">
          <div className="py-8">
            <a href="/">
              <img
                src="/images/white-key.png"
                data-aos="flip-right"
                data-aos-delay="150"
                data-aos-once="false"
                className="md:block w-[50px] md:w-[70px] mb-32"
                alt=""
              />
            </a>
            <p
              className="text-white text-xl mt-8"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              THOUGHT LEADERSHIP
            </p>
            <h1
              className="!leading-tight text-4xl md:text-6xl text-white mt-4"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              Raise your digital profile in 2024
            </h1>
            <PaperFormModal
              btnText="Sign up"
              paperform="tbramemberoffers"
              prefill="sectionDisplay=thought"
              aosDelay="750"
              className="btn rounded-2xl bg-white px-16 text-darkblue font-bold mt-8"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#071A30]">
        <div className="container grid md:grid-cols-[1fr_2fr] gap-4 items-center py-16">
          <h1 className="text-white" data-aos="fade-up" data-aos-delay="150">
            Did you know?
          </h1>
          <p
            className="text-xl text-white"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Most business leaders don&apos;t write their own thought leadership
            content. They collaborate with skilled journalists and share their
            views – these journalists then craft a piece using their opinions
            and, of course, external research to contextualise the piece and
            evidence facts.
          </p>
        </div>
      </section>

      <section className="bg-[#DADEDA] flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16 items-center">
          <div className="self-end items-end justify-end flex md:order-last">
            <img
              data-aos="fade-up"
              data-aos-delay="850"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_700,h_910,c_fill,g_auto/v1710761845/lady_ipad_nzjvpy.jpg"
              className="-md:object-cover -md:h-60 w-full md:mt-32 md:w-[85%]"
              alt=""
            />
          </div>
          <div className="py-8 -md:mb-16">
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              Navigating executive responsibilities often leaves business
              leaders with limited time to cultivate a substantial LinkedIn
              presence. The challenge lies in articulating your story, crafting
              impactful content, and actively growing your follower base amid
              busy schedules.
            </p>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              In partnership with Meet the Leader, an award winning content
              agency, we bring you a tailored thought leadership service
              designed to amplify your personal brand and position you as an
              influential voice in your field. Your dedicated and experienced
              expert will work with you to optimise your LinkedIn profile and
              craft compelling thought leadership content for your platform to
              ensure your insights prompt critical thinking among your audience.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#071A30]">
        <div className="container grid md:grid-cols-[1fr_2fr] gap-4 items-center py-16">
          <h1 className="text-white" data-aos="fade-up" data-aos-delay="150">
            Did you know?
          </h1>
          <p
            className="text-xl text-white"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Most business leaders don&nbsp;t write their own thought leadership
            content. They collaborate with skilled journalists and share their
            views – these journalists then craft a piece using their opinions
            and, of course, external research to contextualise the piece and
            evidence facts.
          </p>
        </div>
      </section> */}

      <section className="bg-[#F8F8F8] flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16 items-center py-16">
          <img
            data-aos="fade-up"
            data-aos-delay="850"
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1710763067/Linkedin_woman_with_tablet_wvvc27.jpg"
            className="-md:object-cover -md:h-60 -md:w-full md:w-[75%]"
            alt=""
          />

          <div className="py-8 -md:mb-16">
            <h2
              className="mt-8 text-darkblue font-halyard text-4xl"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Why LinkedIn?
            </h2>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              In the digital age, social media can be noisy, where the loudest
              often seem to win. But there’s one exception: LinkedIn.
            </p>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              LinkedIn boasts 950 million members across 200 countries, with
              eight people hired on the platform every minute. It offers a
              unique space for leaders to showcase their authentic selves in an
              era dominated by automation.
            </p>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              Thought leadership on LinkedIn is a powerful content strategy that
              can:
            </p>

            <ul
              className="list-disc ml-8"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <li className="mt-8">
                Increase popularity: Leaders who post weekly content on LinkedIn
                have 5.6 times more followers.
              </li>
              <li className="mt-8">
                Change perceptions: 65% of respondents believe that thought
                leadership significantly changes their perception of a company
                or person for the better.
              </li>
            </ul>

            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              Reach your audience: 58% of buyers read one or more hours of
              thought leadership on LinkedIn weekly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071A30]">
        <div className="container grid md:grid-cols-[1fr_2fr] gap-4 items-center py-16">
          <h1 className="text-white" data-aos="fade-up" data-aos-delay="150">
            Get <br /> started
          </h1>
          <div>
            <p
              className="text-xl text-white"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Ready to transform your digital presence? Let us pair you with
              experts to help you brainstorm and share your ideas with the
              world.
            </p>
            <PaperFormModal
              btnText="Sign up now"
              paperform="tbramemberoffers"
              prefill="sectionDisplay=thought"
              aosDelay="550"
              className="btn bg-transparent hover:bg-white hover:text-dusk border px-16 mt-8 text-white font-bold"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
