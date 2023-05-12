/* eslint-disable @next/next/no-img-element */
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import LogoSlides from "@/app/slides/LogoSlides";
import { clients } from "@/app/utils/options";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<section className="bg-darkblue py-20 overflow-x-hidden text-xl font-light">
				<div className="container transition-all ease-in-out duration-300">
					<div className="lg:flex justify-between items-center">
						<div className="lg:w-6/12 order-2 mb-10 lg:mb-0">
							<div className="flex items-end justify-center gap-4 mb-4">
								<img
									className="object-cover w-[20%] h-40"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809545/img5_aesxw5.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="300"
								/>
								<img
									className="object-cover w-[40%] h-86"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img2_jus6me.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="0"
								/>
							</div>
							<div className="flex items-start justify-center gap-4">
								<img
									className="object-cover w-[25%] h-40"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img3_ppimgg.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="500"
								/>
								<img
									className="object-cover w-[40%]"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809206/img1_xukr7d.jpg"
									alt="freetailwindui.co"
									data-aos="fade-in"
									data-aos-delay="100"
								/>
								<img
									className="object-cover w-[26%] h-52"
									src="https://res.cloudinary.com/tbra/image/upload/v1683809545/img4_smhigy.jpg"
									alt="freetailwindui.co"
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
								Something Here
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
								is an enhanced premium membership experience to
								enable you to get the absolute best from your
								membership. Prime members can enjoy a wide range
								of perks and discounts on all member services,
								programmes and events.
								<br />
								<br />
								Learn more about the TBrA Prime experience, and
								upgrade today.
							</p>
							<p
								className="mt-5"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<Link
									className="btn transition-all ease-in-out duration-300 font-normal text-black rounded"
									href="#!"
								>
									Upgrade Now
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 mt-48 hidden lg:block">
						<div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
								Fingerstache disrupt
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Franzen hashtag
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Tilde art party
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Banh mi cornhole
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Waistcoat squid hexagon
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Pinterest occupy authentic
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Brooklyn helvetica
							</p>
							<p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Long Feature Two
							</p>
							<p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
								Feature One
							</p>
						</div>
					</div>
					<div className="flex lg:w-1/2 w-full flex-wrap lg:border border-gray-300 rounded-lg">
						<div className="lg:w-1/2 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
							<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
								POPULAR
							</span>
							<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 className="tracking-widest">PRO</h3>
								<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
									$38
									<span className="text-gray-600 text-base ml-1">
										/mo
									</span>
								</h2>
								<span className="text-sm text-gray-600">
									Charging $456 per year
								</span>
							</div>
							<p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
								Schlitz single-origin
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
								Feature
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div className="p-6 text-center border-t border-gray-300">
								<button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Button
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-auto"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p className="text-xs text-gray-500 mt-3">
									Literally you probably haven&apos;t heard of
									them jean shorts.
								</p>
							</div>
						</div>
						<div className="lg:w-1/2 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
							<div className="px-2 text-center h-48 flex flex-col items-center justify-center">
								<h3 className="tracking-widest">BUSINESS</h3>
								<h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
									$54
									<span className="text-gray-600 text-base ml-1">
										/mo
									</span>
								</h2>
								<span className="text-sm text-gray-600">
									Charging $648 per year
								</span>
							</div>
							<p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
								Schlitz single-origin
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
								Feature
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="3"
										className="w-3 h-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2.2"
									className="w-5 h-5 text-gray-500"
									viewBox="0 0 24 24"
								>
									<path d="M18 6L6 18M6 6l12 12"></path>
								</svg>
							</p>
							<div className="p-6 text-center border-t border-gray-300">
								<button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
									Button
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-auto"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</button>
								<p className="text-xs text-gray-500 mt-3">
									Literally you probably haven&apos;t heard of
									them jean shorts.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Page;
