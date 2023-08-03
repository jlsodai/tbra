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
  ];

  const benefits = [
    {
      title: "A streamlined solution:",
      description:
        "Empower your women leaders with access to our cutting-edge platform, offering a seamless and tailored approach to support their professional growth. We understand the unique needs and ambitions of women executives and ensure  they have the resources and opportunities to excel in their careers.",
      icon: HiArrowRightCircle,
    },
    {
      title: "Executive  development suite:",
      description:
        "Unlock the full potential of your organisation with our executive development programmes led by a global faculty. Our programmes equip your leaders with the essential tools and strategies to conquer new heights. We focus on empowering women leaders by offering specialised programmes that navigate the complexities of strategic leadership In today's complex business environment and providing them with the necessary resources to inspire organisational excellence and drive success.",
      icon: HiArrowRightCircle,
    },
    {
      title: "Formal sponsorship:",
      description:
        "Take a courageous step by formally sponsoring your women leaders. By doing so,  you actively advocate for their career advancement. Prioritise the growth  of your leaders and give them access to leadership coaching, profile enhancement and structured thought leadership positioning. Join us in empowering women to thrive and succeed in their leadership roles.",
      icon: HiArrowRightCircle,
    },
  ];

  return (
    <>
      <section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
        <div className="container transition-all ease-in-out duration-300">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
              <img
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
                className="mb-8 text-white text-opacity-80 leading-7"
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
        </div>
      </section>
      <section class="container mx-auto my-16 sm:mt-20 lg:my-24">
        <div className="pl-6 max-w-5xl mx-auto text-center">
          <h3 className="mb-16 text-center">Discover Corporate Membership</h3>
          <p>
            Society thrives when women are equal decision-makers. Our corporate
            members know that investing in women leaders is an investment in a
            more inclusive society, and a stronger business community.
          </p>
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
              </dt>
              <dd class="mt-2 text-base ">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="overflow-hidden py-16 sm:py-32 bg-gray-100">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 pb-2">
              <div className="lg:max-w-lg">
                <h3 className="">Transform your business leaders</h3>
                <dl className="mt-10 max-w-xl space-y-4 text-base  lg:max-w-none">
                  {benefits.map((benefit) => (
                    <div key={benefit.name} className="relative pl-9">
                      <dt className="inline font-semibold ">
                        <benefit.icon
                          className="absolute left-1 top-1 h-5 w-5 text-mustard-600"
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
      </section>

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
