/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import MemberTestimonial from "../components/MemberTestimonial";
import { membershipData } from "@/app/lib/strapi";
import { communityLogos, filteredMeta } from "@/app/utils/options";
import PaperFormModal from "@/app/components/PaperFormModal";

export async function generateMetadata() {
  // const data = await pageData();
  const { seo } = membershipData;
  return filteredMeta(seo);
}

const page = async () => {
  const testimonials = [
    {
      id: 11,
      quote:
        'In TBrA, I found my "stiletto network", a group of powerful women willing to share their expertise, life lessons, a sounding board for ideas, and good for a hearty laugh.  The reunion in Marrakesh cemented friendships, created new bonds, and I am truly honoured to be in a community of influencers and leaders impacting the world.',
      author: "Jackie Namara Rukare",
      title: "Managing Consultant, Iguru Consult Ltd",
    },
    {
      id: 10,
      quote:
        "TBrA has been a great catalyst in my board journey. From providing me with a Boardroom mentor to subsidising my IoD training and connecting me with peers in my profession who have become a lifelong network of support. TBrA is the network to belong if you are a woman seeking to accelerate your board career. I have gained support, recognition and relevance in positioning myself as the right fit for board roles.",
      author: "Yvonne Ofosu Appiah",
      title: "Chief Investment Officer, Wangara Green Ventures",
    },
    {
      id: 12,
      quote:
        "My boardroom journey truly started with TBrA. I not only gained skills and strategies but also the courage to pursue my board goals. More specifically, I met phenomenal women in my cohort that now serve as industry contacts, cheerleaders, and accountability partners. TBrA demystified the boardroom journey and established the perfect enabling environment for me.",
      author: "Chinwe Ajene-Sagna",
      title: "Founder & Managing Partner, Catalyst Realty Solutions (CRS)",
    },
  ];
  return (
    <div className="text-xl">
      <section className="bg-[linear-gradient(rgba(19,30,61,0.75),rgba(19,30,61,0.75)),url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1708510120/member-services-herobg_dpdh7z.jpg')] bg-cover bg-[-400px] md:bg-top items-center min-h-screen flex relative">
        <div className="container grid md:grid-cols-2">
          <div className="py-8">
            <Link href="/">
              <img
                src="/images/logo-primary.svg"
                className="img-white mb-12"
                width="150px"
                alt="Logo"
              />
            </Link>
            <h1
              className="!leading-tight text-4xl md:text-6xl"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Membership to support your leadership journey
            </h1>
            <p
              className="mt-8 md:text-2xl text-[#EEEAD6]"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              From personal branding and executive presence to thought
              leadership positioning, we&apos;ve curated an experience to
              elevate every facet of your professional journey.
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="550">
              <p className="md:text-2xl text-[#EEEAD6] mb-8">
                Become a member and access more services
              </p>
              <div className="mt-12 flex gap-12 items-center">
                <Link href="/membership/application" className="btn bg-mustard">
                  Apply Now
                </Link>
                <a href="/membership" className="text-white">
                  Learn more &nbsp;→
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <a href="/">
              <img
                src="/images/white-key.png"
                data-aos="flip-right"
                data-aos-delay="1950"
                data-aos-once="false"
                className="md:block w-[60px] md:w-[100px] absolute bottom-14"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#DADEDA] flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16 items-center">
          <div className="self-end items-end justify-end flex md:order-last">
            <img
              data-aos="fade-up"
              data-aos-delay="850"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1708961780/linkedInMakeover_eoq9jr.jpg"
              className="-md:object-cover -md:h-60 -md:w-full md:w-[75%] md:mt-32"
              alt=""
            />
          </div>
          <div className="py-8 -md:mb-16">
            <h1
              className="!leading-tight text-2xl md:text-5xl text-darkblue"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Get a complete <br /> LinkedIn Makeover
            </h1>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              Have your LinkedIn profile evaluated by our professional coaches
              who will provide customised advice to boost your visibility. They
              are also ready to apply those improvements on your behalf.
            </p>

            <PaperFormModal
              btnText="Sign up"
              paperform="tbramemberoffers"
              prefill="sectionDisplay=linkedin"
              aosDelay="550"
              className="btn bg-mustard px-16 text-darkblue font-bold mt-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EC] flex">
        <div className="md:container grid md:grid-cols-2 gap-x-16">
          <div className=" bg-white" data-aos="fade-up" data-aos-delay="150">
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
          <div className="px-8 py-16 md:p-16 flex flex-col justify-center md:h-screen md:max-h-[800px]">
            <h2
              className="!leading-tight text-2xl md:text-5xl text-darkblue"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Establish your thought leadership presence.
            </h2>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              With the backing of a global network of researchers, our
              specialists will transform your distinct viewpoints into engaging
              opinion articles and LinkedIn posts that position you as a top
              voice, and leading authority in your field.
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="550">
              <Link
                href="/thought-leadership"
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
            <h1
              className="!leading-tight text-2xl md:text-5xl"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Do more with Prime
            </h1>
            <p
              className="mt-8 text-white"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              TBrA Prime is an enhanced premium membership experience, crafted
              to enable you to get the absolute best from your membership. Enjoy
              6 complimentary group coaching sessions, priority access to member
              services, exclusive discounts, and more.
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="550">
              <Link
                href="/tbraprime"
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

      <section className="bg-[#DADEDA] flex items-center">
        <div className="container grid md:grid-cols-2 gap-x-16 items-center">
          <div className="py-8">
            <img
              data-aos="fade-up"
              data-aos-delay="150"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_500,h_500,g_east,c_fill/v1709022763/woman-sitting_p1vxfb.jpg"
              className="md:hidden -md:my-8"
              alt=""
            />
            <h1
              className="!leading-tight text-2xl md:text-5xl text-darkblue"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Prepare for your next board or executive interview
            </h1>
            <p className="mt-8" data-aos="fade-up" data-aos-delay="350">
              Collaborate with skilled professionals to strategically
              differentiate yourself for prestigious board positions and
              executive roles.
            </p>
            <div className="mt-8 flex flex-col gap-y-3">
              <p
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:946F38,e_colorize:100/v1705057028/bulb_xzxuqw.png"
                  className="mr-4"
                  width="30px"
                  alt=""
                />
                Discover your strengths, weaknesses, and unique selling points
              </p>
              <p
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:946F38,e_colorize:100/v1705057028/bulb_xzxuqw.png"
                  className="mr-4"
                  width="30px"
                  alt=""
                />
                Master strategies to tackle diverse interview questions
              </p>
              <p
                className="flex items-center"
                data-aos="fade-up"
                data-aos-delay="550"
              >
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
          <div className="md:flex flex-col justify-center items-center md:my-32">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/w_500,h_500,g_east,c_fill/v1709022763/woman-sitting_p1vxfb.jpg"
              className="-md:hidden"
              data-aos="fade-up"
              data-aos-delay="150"
              alt=""
            />
            <PaperFormModal
              btnText="Learn more"
              paperform="tbramemberoffers"
              prefill="sectionDisplay=interview"
              aosDelay="350"
              className="btn bg-mustard px-16 text-darkblue font-bold -md:mb-16 md:mt-8"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EC] flex flex-col justify-end">
        <div className="container mt-16 md:mt-24">
          <h1
            className="!leading-tight text-2xl md:text-5xl text-darkblue max-w-xl md:mt-32"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Unlock Your Potential with Our Tailored Executive CV Services
          </h1>
          <PaperFormModal
            btnText="Sign up"
            paperform="tbramemberoffers"
            prefill="sectionDisplay=cv"
            aosDelay="550"
            className="btn bg-transparent border px-16 border-darkblue text-darkblue font-bold mt-8"
          />
        </div>
        <div className="md:container grid md:grid-cols-3 items-center md:mt-24">
          <div
            className="text-darkblue bg-[#DADEDA] p-12 md:p-20 h-full"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <h2 className="text-darkblue">Executive CV Consultation</h2>
            <p className="mt-8">
              Stand out when applying for executive roles with a professionally
              crafted CV. Our hour-long CV consultation uncovers strengths and
              guides you through areas for improvement.
            </p>
          </div>
          <div
            className="text-darkblue bg-[#C3CBC3] p-12 md:p-20 h-full"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            <h2 className="text-darkblue">Executive CV Makeover</h2>
            <p className="mt-8">
              Elevate your profile further with an intensive 3-hour makeover led
              by an Executive Search expert, leaving you with an expertly
              crafted draft for an impactful leadership profile.
            </p>
          </div>
          <div
            className="text-darkblue bg-[#AAB6AA] p-12 md:p-20 h-full"
            data-aos="fade-up"
            data-aos-delay="750"
          >
            <h2 className="text-darkblue">
              Role Application Supporting Statement
            </h2>
            <p className="mt-8">
              Craft a compelling narrative that highlights your skills and
              goals, maximising your chances of securing board positions or
              executive roles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1708521754/member-services-gcbg_aucprn.jpg')] bg-cover bg-top items-end h-screen max-h-[900px] flex">
        <div className="container md:mb-32">
          <span
            className="bg-[#4A4F54]/60 text-white px-16 py-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            GROUP COACHING
          </span>
          <p
            className="text-white text-6xl max-w-3xl mt-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Embark on a journey of growth and self-discovery
          </p>
          <div className="flex gap-8 items-center mt-8">
            <PaperFormModal
              btnText="Sign up"
              paperform="tbramemberoffers"
              prefill="sectionDisplay=gc"
              aosDelay="550"
              className="btn bg-transparent hover:bg-white hover:text-dusk border px-16 text-white font-bold"
            />
            <Link
              target="_blank"
              href="https://web.theboardroomafrica.com/wp-content/uploads/2023/11/Group-Coaching-2024-Brochure.pdf"
              className="text-white font-bold hover:text-dawn"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="member-services-testimonial bg-[linear-gradient(rgba(19,30,61,0.75),rgba(19,30,61,0.75)),url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1710162724/woman-holding-ipad_rc8oa6.jpg')] bg-cover">
        <div className="flex flex-col container md:min-h-screen relative py-28 justify-center items-center gap-y-10">
          <img
            src="/images/white-key.png"
            className="absolute left-0 h-[75%] -z-1 opacity-3"
            alt=""
          />
          <div className="text-mustard md:max-w-[60%] text-center">
            <h4
              className="text-3xl md:text-6xl font-libreb"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Testimonials
            </h4>
          </div>

          <div className="grid gap-10 text-white md:max-w-[80%]">
            <MemberTestimonial testimonials={testimonials} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
