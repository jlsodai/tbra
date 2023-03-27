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
import InstructorSlides from "@/app/components/InstructorSlides";
import TestimonialSlider from "@/app/components/TestimonialSlider";
import TrustedBy from "@/app/components/TrustedBy";

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

			{/* <section className="bg-white pt-16 lg:py-24">
				<div className="pb-16 bg-darkblue lg:pb-0 lg:z-10 lg:relative"> */}
			<TestimonialSlider />
			{/* </div>
			</section> */}

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

			<InstructorSlides />

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

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-28">
					<h2 className="text-center text-dusk">
						Past delegates come from
					</h2>
					<TrustedBy />
				</div>
			</section>
		</>
	);
};
export default Page;
