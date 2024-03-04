/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import MemberTestimonial from "../components/MemberTestimonial";

const page = () => {
  return (
    <>
      <section className="bg-[linear-gradient(rgba(19,30,61,0.75),rgba(19,30,61,0.75)),url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1708510120/member-services-herobg_dpdh7z.jpg')] bg-cover bg-[-400px] md:bg-top items-center min-h-screen flex relative">
        <div className="container grid md:grid-cols-2">
          <div className="py-8">
            <h1 className="leading-tight text-4xl md:text-6xl">
              Membership to support your leadership journey
            </h1>
            <p className="mt-8 md:text-2xl text-[#EEEAD6]">
              From personal branding and executive presence to thought
              leadership positioning, we&apos;ve curated an experience to
              elevate every facet of your professional journey.
            </p>
            <div className="mt-8">
              <Link
                href="https://tbramemberoffers.paperform.co/?sectionDisplay=linkedin"
                className="btn bg-mustard md:text-xl uppercase text-darkblue font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <img
              src="/images/white-key.png"
              data-aos="flip-right"
              data-aos-delay="450"
              data-aos-once="false"
              className="md:block w-[60px] md:w-[100px] absolute bottom-14"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#DADEDA] flex items-center">
        <div className="min-h-screen container grid md:grid-cols-2 gap-x-16 items-center">
          <div className="self-end items-end justify-end flex md:order-last">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1708961780/linkedInMakeover_eoq9jr.jpg"
              className="-md:object-cover -md:h-60 -md:w-full md:w-[75%]"
              alt=""
            />
          </div>
          <div className="py-8 -md:mb-16">
            <h1 className="leading-tight text-2xl md:text-5xl text-darkblue">
              Get a complete <br /> LinkedIn Makeover
            </h1>
            <p className="mt-8">
              Have your LinkedIn profile evaluated by our professional coaches
              who will provide customised advice to boost your visibility. They
              are also ready to apply those improvements on your behalf.
            </p>
            <div className="mt-8">
              <Link
                href="https://tbramemberoffers.paperform.co/?sectionDisplay=linkedin"
                className="btn bg-mustard px-16 text-darkblue font-bold"
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EC] flex">
        <div className="md:container grid md:grid-cols-2 gap-x-16">
          <div className=" bg-white">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_800,h_434,c_fill,g_north/v1708962811/tell-story_fafqbn.jpg"
              alt=""
            />
            <div className="px-8 py-16 md:px-32">
              <h4 className="text-5xl font-normal">
                Let us help you tell your story
              </h4>
              {/* <p className="mt-8">Lorem ipsum dolor</p> */}
            </div>
          </div>
          <div className="px-8 py-16 md:p-16 flex flex-col justify-center">
            <h2 className="leading-tight text-2xl md:text-5xl text-darkblue">
              Establish your thought leadership presence.
            </h2>
            <p className="mt-8">
              With the backing of a global network of researchers, our
              specialists will transform your distinct viewpoints into engaging
              opinion articles and LinkedIn posts that position you as a top
              voice, and leading authority in your field.
            </p>
            <div className="mt-8">
              <Link
                href="https://tbramemberoffers.paperform.co/?sectionDisplay=thought"
                className="btn bg-transparent border border-darkblue text-darkblue font-medium"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1708963279/more-with-prime-bulbs_vxdjmc.jpg')] bg-cover flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16">
          <div className="py-24">
            <h1 className="leading-tight text-2xl md:text-5xl">
              Do more with Prime
            </h1>
            <p className="mt-8 text-white">
              TBrA Prime is an enhanced premium membership experience, crafted
              to enable you to get the absolute best from your membership. Enjoy
              6 complimentary group coaching sessions, priority access to member
              services, exclusive discounts, and more.
            </p>
            <div className="mt-8">
              <Link
                href="https://theboardroomafrica.com/tbraprime"
                className="btn bg-transparent hover:bg-white hover:text-dusk border px-16 text-white font-bold"
              >
                Discover prime
              </Link>
            </div>
          </div>
          <div className="flex justify-end items-end">
            {/* <img src="/images/white-key.png" width="100px" alt="" /> */}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#DADEDA] flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16 items-center">
          <div className="py-8">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_500,h_500,g_east,c_fill/v1709022763/woman-sitting_p1vxfb.jpg"
              className="md:hidden -md:my-8"
              alt=""
            />
            <h1 className="leading-tight text-2xl md:text-5xl text-darkblue">
              Prepare for your next board or executive interview
            </h1>
            <p className="mt-8">
              Collaborate with skilled professionals to strategically
              differentiate yourself for prestigious board positions and
              executive roles.
            </p>
            <div className="mt-8 flex flex-col gap-y-3">
              <p className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:946F38,e_colorize:100/v1705057028/bulb_xzxuqw.png"
                  className="mr-4"
                  width="30px"
                  alt=""
                />
                Discover your strengths, weaknesses, and unique selling points
              </p>
              <p className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:946F38,e_colorize:100/v1705057028/bulb_xzxuqw.png"
                  className="mr-4"
                  width="30px"
                  alt=""
                />
                Master strategies to tackle diverse interview questions
              </p>
              <p className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:946F38,e_colorize:100/v1705057028/bulb_xzxuqw.png"
                  className="mr-4"
                  width="30px"
                  alt=""
                />
                Boost confidence with refined communication and presentation
                skills
              </p>
            </div>
          </div>
          <div className="md:flex flex-col justify-center items-center">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_500,h_500,g_east,c_fill/v1709022763/woman-sitting_p1vxfb.jpg"
              className="-md:hidden"
              alt=""
            />
            <Link
              href="https://tbramemberoffers.paperform.co/?sectionDisplay=thought"
              className="btn bg-mustard px-16 text-darkblue font-bold -md:mb-16 md:mt-8"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EC] md:min-h-screen flex flex-col justify-end">
        <div className="container mt-16 md:mt-24">
          <h1 className="leading-tight text-2xl md:text-5xl text-darkblue max-w-xl">
            Unlock Your Potential with Our Tailored Executive CV Services
          </h1>
        </div>
        <div className="md:container grid md:grid-cols-3 items-center md:mt-24">
          <div className="-md:mb-16 mt-8 text-center">
            <Link
              href="https://tbramemberoffers.paperform.co/?sectionDisplay=cv"
              className="btn bg-transparent border px-16 border-darkblue text-darkblue font-bold"
            >
              SIGN UP
            </Link>
          </div>
          <div className="text-darkblue bg-[#DADEDA] p-12 md:p-20 h-full">
            <h2 className="text-darkblue">Executive CV Consultation</h2>
            <p className="mt-8">
              Stand out when applying for executive roles with a professionally
              crafted CV. Our hour-long CV consultation uncovers strengths and
              guides you through areas for improvement.
            </p>
          </div>
          <div className="text-darkblue bg-[#C3CBC3] p-12 md:p-20 h-full">
            <h2 className="text-darkblue">Executive CV Makeover</h2>
            <p className="mt-8">
              Elevate your profile further with an intensive 3-hour makeover led
              by an Executive Search expert, leaving you with an expertly
              crafted draft for an impactful leadership profile.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1708521754/member-services-gcbg_aucprn.jpg')] bg-cover bg-top items-center min-h-screen flex">
        <div className="container">
          <span className="bg-[#4A4F54]/60 text-white px-16 py-3">
            GROUP COACHING
          </span>
          <p className="text-white text-6xl max-w-3xl mt-8">
            Embark on a journey of growth and self-discovery
          </p>
          <Link
            href="https://tbramemberoffers.paperform.co/?sectionDisplay=gc"
            className="btn bg-transparent hover:bg-white hover:text-dusk border px-16 mt-8 text-white font-bold"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* <section className="bg-black py-16">
        <div className="container">
          <div className="grid grid-cols-3 gap-16">
            <MemberTestimonial />
            <MemberTestimonial />
            <MemberTestimonial />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default page;
