/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiArrowRightOnRectangle,
  HiOutlineTrophy,
  HiArrowRightCircle,
} from "react-icons/hi2";
import CorporatePricing from "../../sections/CorporatePricing";

const CorporateBackedPaged = () => {
  const features = [
    {
      name: "Access:",
      description:
        "Exclusive access to a member-only community of leaders, priority access to board opportunities, and leadership webinars. ",
      icon: HiArrowRightOnRectangle,
    },
    {
      name: "Professional Branding:",
      description:
        "An enhanced professional presence. From LinkedIn profile audits to thought leadership positioning, we ensure their expertise shines in the industry.",
      icon: HiOutlineBriefcase,
    },
    {
      name: "Executive Development:",
      description:
        "Whether it's specialised certificates or transformative growth experiences, we provide the tools and knowledge they need to lead today.",
      icon: HiOutlineTrophy,
    },
    {
      name: "Access:",
      description:
        "Exclusive access to a member-only community of leaders, priority access to board opportunities, and leadership webinars. ",
      icon: HiArrowRightOnRectangle,
    },
    {
      name: "Professional Branding:",
      description:
        "An enhanced professional presence. From LinkedIn profile audits to thought leadership positioning, we ensure their expertise shines in the industry.",
      icon: HiOutlineBriefcase,
    },
    {
      name: "Executive Development:",
      description:
        "Whether it's specialised certificates or transformative growth experiences, we provide the tools and knowledge they need to lead today.",
      icon: HiOutlineTrophy,
    },
  ];

  const benefits = [
    {
      title: "Streamlined solution:",
      description:
        "Empower women leaders with our cutting-edge platform, tailored to support their professional growth. We understand their unique needs and ambitions, providing the resources and opportunities to excel in their careers.",
      icon: HiArrowRightCircle,
    },
    {
      title: "Executive  development suite:",
      description:
        "Unleash your organisation's potential with our global faculty-led executive development programs that empower women leaders to navigate strategic leadership complexities and inspire organisational excellence.",
      icon: HiArrowRightCircle,
    },
    {
      title: "Formal sponsorship:",
      description:
        "Courageously sponsor your women leaders to actively advocate for their career advancement. Prioritise their growth with leadership coaching, profile enhancement, and structured thought leadership. Empower women to thrive and succeed in leadership roles with us.",
      icon: HiArrowRightCircle,
    },
  ];

  return (
    <>
      <section className="py-20 overflow-x-hidden text-xl font-light border-b border-gray-400">
        <div className="container transition-all ease-in-out duration-300">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/tbra/image/upload/v1691058076/corporate1_tekxek.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-5/12 mb-7 lg:mb-0">
              <p
                className="text-tender font-libreb mb-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                A new experience
              </p>
              <h2
                className="text-4xl text-mustard mb-6"
                data-aos="fade-up"
                data-aos-delay=""
              >
                Take the Lead on Diversity
              </h2>
              <p
                className="mb-8 text-opacity-80 leading-7"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Revolutionise the way your women leaders make a lasting impact.
                Our corporate membership offering empowers and uplifts women
                executives within your organisation, nurturing a corporate
                environment that embraces diversity and inclusion at its highest
                echelons.
              </p>
              <p className="mt-5" data-aos="fade-up" data-aos-delay="200">
                <Link
                  className="btn transition-all ease-in-out duration-300 font-normal text-black rounded text-center"
                  href="/tbraprime-upgrade"
                  target="_blank"
                >
                  Get Started
                </Link>
              </p>
            </div>
          </div>
          <dl class="grid grid-cols-2 gap-x-px text-center lg:grid-cols-4 rounded-2xl overflow-hidden mt-16">
            {[...Array(4)].map((stat, i) => (
              <div
                key={i}
                class={`mx-auto py-8 flex w-full flex-col gap-y-4 bg-tender px-4`}
              >
                <dt class="text-base text-gray-50">
                  Transactions every 24 hours
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  38K
                </dd>
              </div>
            ))}
          </dl>
          {/* <div className="grid grid-cols-4">
            <div className="text-center">
              
            </div>
          </div> */}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mb-16">
          <h3 className="text-center">
            Let us help you transform your business leaders
          </h3>
          <div className="lg:grid grid-cols-2 gap-32 items-center mt-16">
            <img
              src="https://res.cloudinary.com/tbra/image/upload/v1691058076/corporate1_tekxek.jpg"
              className="h-[300px] w-full object-cover rounded-lg -lg:mb-8"
              alt=""
            />
            <div className="lg:px-16">
              <p className="font-semibold text-xl mb-4">Some title</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                tenetur nostrum mollitia iste assumenda commodi consequuntur
                accusantium, eligendi, provident cupiditate, reiciendis error
                pariatur? Suscipit eligendi, itaque repudiandae aperiam eaque
                laudantium.
              </p>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 gap-32 items-center mt-12">
            <img
              src="https://res.cloudinary.com/tbra/image/upload/v1691058076/corporate1_tekxek.jpg"
              className="h-[300px] w-full object-cover rounded-lg -lg:mb-8"
              alt=""
            />
            <div className="lg:px-16 order-first">
              <p className="font-semibold text-xl mb-4">Some title</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                tenetur nostrum mollitia iste assumenda commodi consequuntur
                accusantium, eligendi, provident cupiditate, reiciendis error
                pariatur? Suscipit eligendi, itaque repudiandae aperiam eaque
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-auto py-16 sm:pt-20 lg:py-24 bg-gray-200">
        <div className="container">
          <div className="pl-6 max-w-5xl mx-auto text-center">
            <h3 className="mb-16 text-center">Discover Corporate Membership</h3>
            <p className="mt-4">
              Our community of over 2,700 women leaders spans 70+ countries with
              sectoral expertise from energy to information technology, consumer
              goods, healthcare and more. We are an incubator and accelerator of
              strategies that centre diverse perspectives as fundamental to
              business performance. We support our talent community by
              facilitating access to the boardroom and catalysing systems that
              enable talented women executives to wield influence and sustain
              their impact globally.
            </p>
          </div>
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16 mt-16">
            {features.map((feature, i) => (
              <div class="relative pl-16" key={i}>
                <dt class="text-base font-semibold ">
                  <div className="bg-mustard-600 absolute p-2 left-0 top-0 rounded-lg">
                    <feature.icon className="text-white w-6 h-6" />
                  </div>
                  {feature.name}
                  <br />
                </dt>
                <dd class="mt-2 text-base ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pt-16">
        <div className="container">
          <h3 className="text-center mb-12">How we work with you</h3>
        </div>
        <div className="container bg-gray-200 px-16">
          <div className="flex flex-col divide-y divide-gray-400  ">
            {[...Array(3)].map((e, i) => (
              <div
                key={i}
                className="lg:grid grid-cols-[2fr_5fr] py-12 lg:px-8"
              >
                <h4 className="font-semibold mb-4 lg:px-8">
                  Streamlined Solution
                </h4>
                <p>
                  At TheBoardroom Africa, we recognise the unique challenges
                  faced by women leaders in their professional journeys. Our
                  Corporate Membership showcases your organisation&apos;s
                  commitment to gender diversity.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="overflow-hidden py-16 sm:py-32 bg-gray-100">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 pb-2">
              <div className="lg:max-w-xl">
                <h3 className="">Transform your business leaders</h3>
                <dl className="mt-10 max-w-xl space-y-4 text-base  lg:max-w-none">
                  {benefits.map((benefit) => (
                    <div key={benefit.name} className="relative pl-12">
                      <dt className="inline font-semibold ">
                        <benefit.icon
                          className="absolute left-1 top-0 h-8 w-8 text-mustard-600"
                          aria-hidden="true"
                        />
                        {benefit.title}
                      </dt>{" "}
                      <dd className="inline">{benefit.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/tbra/image/upload/v1691058076/corporate2_rfxxsl.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </section> */}

      <CorporatePricing />

      <div className="text-center">
        <Link
          className="btn transition-all ease-in-out duration-300 font-normal text-black rounded text-center"
          href="/tbraprime-upgrade"
          target="_blank"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};
export default CorporateBackedPaged;
