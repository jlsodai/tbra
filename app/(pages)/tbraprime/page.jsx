/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PrimePricing from "@/app/components/PrimePricing";
import PaperFormModal from "@/app/components/PaperFormModal";

const Page = () => {
  return (
    <>
      <section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
        <div className="container transition-all ease-in-out duration-300">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
              <div className="flex items-end justify-center gap-4 mb-4">
                <img
                  className="object-cover w-[20%]"
                  src="https://res.cloudinary.com/tbra/image/upload/v1683941319/maryanne_qrubww.jpg"
                  alt="TBrA Prime Images"
                  data-aos="fade-in"
                  data-aos-delay="300"
                />
                <img
                  className="object-cover w-[40%]"
                  src="https://res.cloudinary.com/tbra/image/upload/v1683941318/Annabelle_ozusnw.jpg"
                  alt="TBrA Prime Images"
                  data-aos="fade-in"
                  data-aos-delay="0"
                />
              </div>
              <div className="flex items-start justify-center gap-4">
                <img
                  className="object-cover w-[25%]"
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1722247612/primeImg_av58ij.jpg"
                  alt="TBrA Prime Images"
                  data-aos="fade-in"
                  data-aos-delay="500"
                />
                <img
                  className="object-cover w-[40%]"
                  src="https://res.cloudinary.com/tbra/image/upload/v1683941138/rachel_eknkqi.jpg"
                  alt="TBrA Prime Images"
                  data-aos="fade-in"
                  data-aos-delay="100"
                />
                <img
                  className="object-cover w-[26%]"
                  src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1722247613/primeImg2_ekigsh.jpg"
                  alt="TBrA Prime Images"
                  data-aos="fade-in"
                  data-aos-delay="400"
                />
              </div>
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
                Upgrade to TBrA Prime
              </h2>
              <p
                className="mb-8 text-white text-opacity-80 leading-7"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <b className="font-semibold">
                  <i>TBrA Prime</i>
                </b>{" "}
                is an enhanced premium membership experience to enable you to
                get the absolute best from your membership. Prime members can
                enjoy a wide range of perks and discounts on all member
                services, programmes and events.
                <br />
                <br />
                Learn more about the TBrA Prime experience, and upgrade today.
              </p>
              <p className="mt-5" data-aos="fade-up" data-aos-delay="200">
                <Link
                  className="btn transition-all ease-in-out duration-300 font-normal text-black rounded text-center"
                  href="/tbraprime-upgrade"
                  target="_blank"
                >
                  Upgrade Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <PrimePricing />

      <section className="container text-center">
        <PaperFormModal
          btnText="Upgrade Now"
          paperform="tbraprime"
          className="btn transition-all ease-in-out duration-300 font-normal text-black rounded text-center text-xl"
        />
      </section>
    </>
  );
};
export default Page;
