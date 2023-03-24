import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import AccordionSection from "@/app/sections/AccordionSection";
import PointedArrow from "@/app/components/PointedArrow";
import KeySection from "@/app/sections/KeySection";
import { RiCustomerService2Fill } from "react-icons/ri";
import Testimonial from "@/app/components/Testimonial";
import SectionTitle from "@/app/components/SectionTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import Slides from "@/app/components/Slides";

const Page = () => {
	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="Environmental, social and governance certificate." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<KeySection
						heading="Course introduction"
						linkTitle="Learn about membership"
						url="/membership"
					>
						<p>
							As the impact of ESG becomes increasingly
							significant, leaders must have the necessary
							knowledge and tools to make informed decisions and
							support the sustainability agenda in their
							organisations.
						</p>
						<p>
							This expert-led certificate programme best suits
							female leaders looking to build their knowledge and
							competency in ESG-related matters. The intensive
							programme runs over five weeks and consists of 12
							sessions covering the principles of ESG, global
							trends driving the agenda, and the practical
							approaches to develop and champion ESG agendas on an
							organisational and board level.
						</p>
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/esg-certificate-page/images/a93c22d45c08a6dd55c87e3a53cd14c4.png"
					/>
				</div>
			</section>

			{/* <section className="container">
				<div className="grid grid-cols-2 gap-20">
					<Testimonial
						quote="Our partners and donors provide invaluable support and share our vision for creating a gender-equal world. From foundations to corporations, our partners know that investing in TheBoardroom Africa is an investment in a more inclusive society, a stronger business community and Africa’s development objectives. We work with our donors and partners to achieve shared development objectives such as gender inclusion and jobs created. We work with our donors and partners to achieve shared development objectives such as gender inclusion and jobs created."
						author="Liesel Pritzker Simmons"
						authorTitle="Co-founder and Principle, Blue Haven Initiative"
					/>
					<div className="grid grid-cols-5 gap-10 self-center">
						<div>&nbsp;</div>
						<KeySection
							heading="What they say about us"
							keyPosition="right"
						/>
					</div>
				</div>
			</section> */}

			<section className="bg-white pt-16 lg:py-24">
				<div className="pb-16 bg-darkblue lg:pb-0 lg:z-10 lg:relative">
					<div className="container lg:grid lg:grid-cols-3 lg:gap-8">
						<div className="relative lg:-my-8">
							<div
								aria-hidden="true"
								className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
							></div>
							<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
								<div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
									<img
										className="object-cover lg:h-full lg:w-full"
										src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
							<div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
								<blockquote>
									<div>
										<svg
											className="h-12 w-12 text-white opacity-25"
											fill="currentColor"
											viewBox="0 0 32 32"
											aria-hidden="true"
										>
											<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
										</svg>
										<p className="mt-6 text-2xl font-medium text-white">
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit. Sed
											urna nulla vitae laoreet augue. Amet
											feugiat est integer dolor auctor
											adipiscing nunc urna, sit.
										</p>
									</div>
									<footer className="mt-6">
										<p className="text-base font-medium text-white">
											Judith Black
										</p>
										<p className="text-base font-medium text-indigo-100">
											CEO at PureInsights
										</p>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="grid grid-cols-2 gap-10 innerPadding">
						<CascadeImg src="https://placeholder.com/700x450" />
						<div className="">
							<KeySection
								heading="Browse course outline"
								keyPosition="right"
								className="py-0"
							/>
							<AccordionSection />
						</div>
					</div>
				</div>
			</section>

			<Slides />

			<section className="my-24">
				<div className="container">
					<h2 className="text-center text-gray-700">Key features</h2>
					<div className="grid grid-cols-7 text-center gap-10 text-xs mt-16">
						<div>&nbsp;</div>
						{[1, 2, 3, 4, 5].map((e, i) => (
							<div key={i} className="flex flex-col items-center">
								<RiCustomerService2Fill className="text-6xl text-mustard" />
								<p className="mt-4">
									Dedicated programme support team
								</p>
							</div>
						))}
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="text-center">Past delegates come from</section>
		</>
	);
};
export default Page;
