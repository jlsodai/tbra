/* eslint-disable @next/next/no-img-element */
import PaperForm from "@/app/components/PaperForm";
import Link from "next/link";

const features = [];
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
                    Get Your Free Board Assessment Questionnaire
                  </p>
                  <p className="mt-4 text-base">
                    Fill out the form below to receive the questionnaire via
                    email:
                  </p>
                  <form className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
                    <div>
                      <label
                        for="full_name"
                        className="block mb-2 text-base font-medium"
                      >
                        Full name *
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email_address"
                        className="block mb-2 text-base font-medium"
                      >
                        Email address *
                      </label>
                      <input
                        type="text"
                        id="email_address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="full_name"
                        className="block mb-2 text-base font-medium"
                      >
                        Phone number *
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email_address"
                        className="block mb-2 text-base font-medium"
                      >
                        Organisation *
                      </label>
                      <input
                        type="text"
                        id="email_address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <button
                      className="mt-4 col-span-2 btn transition-all ease-in-out duration-300 font-normal text-black rounded"
                      href="/tbraprime-upgrade"
                      target="_blank"
                    >
                      Get Questionnaire
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 mb-7 lg:mb-0">
              {/* <p
                className="text-tender font-libreb mb-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                A new experience
              </p> */}
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
                className="mt-5 text-white"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Powered by:
              </p>
              <div className="mt-4 flex gap-8 mb-2">
                <img src="https://via.placeholder.com/150x60" alt="" />
                <img src="https://via.placeholder.com/150x60" alt="" />
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
                  {[...Array(4)].map((e, i) => (
                    <dl
                      key={i}
                      className={`${
                        i !== 0 ? "mt-6" : ""
                      } max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none`}
                    >
                      <div className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <svg
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Strategic Alignment:
                        </dt>
                        <dd className="mt-2">
                          Our assessment is crafted to align with your business
                          goals. It helps you identify whether your board&apos;s
                          decisions, actions, and structure are directly
                          contributing to your strategic vision.
                        </dd>
                      </div>
                    </dl>
                  ))}
                </div>
              </div>
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Product screenshot"
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
            <Link
              className="btn transition-all ease-in-out duration-300 font-normal text-black rounded text-lg"
              href="/tbraprime-upgrade"
              target="_blank"
            >
              Get Questionnaire
            </Link>
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
