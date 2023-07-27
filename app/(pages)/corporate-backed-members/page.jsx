/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CiBatteryFull } from "react-icons/ci";
import CorporatePricing from "../../sections/CorporatePricing";

const CorporateBackedPaged = () => {
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CiBatteryFull,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: CiBatteryFull,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: CiBatteryFull,
    },
  ];

  return (
    <>
      <section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
        <div className="container transition-all ease-in-out duration-300">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
              <img src="https://via.placeholder.com/800x580" alt="" />
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
                Transform the way your women leaders show up. Our corporate
                members know that investing in women leaders is an investment in
                a more inclusive society, and a stronger business community.
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
        <h3 className="mb-16 text-center">Discover Corporate Membership</h3>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
          {[...Array(6)].map((item, i) => (
            <div class="relative pl-16" key={i}>
              <dt class="text-base font-semibold ">
                <div className="bg-indigo-600 absolute p-2 left-0 top-0 rounded-lg">
                  <CiBatteryFull className="text-white w-6 h-6" />
                </div>
                Push to deploy
              </dt>
              <dd class="mt-2 text-base ">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="overflow-hidden py-16 sm:py-32 bg-gray-100">
        <div className="container">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h3 className="">Transform your business leaders</h3>
                <p className="mt-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base  lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold ">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://via.placeholder.com/1200x700"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </section>

      <CorporatePricing />
    </>
  );
};
export default CorporateBackedPaged;
