import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import AccordionSection from "@/app/sections/AccordionSection";
import KeySection from "@/app/sections/KeySection";
import {
	RiTeamFill,
	RiVideoFill,
	RiSmartphoneLine,
	RiArticleLine,
} from "react-icons/ri";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import InstructorSlides from "@/app/components/InstructorSlides";
import TestimonialSlider from "@/app/components/TestimonialSlider";
import TrustedBy from "@/app/components/TrustedBy";
import StatsSection from "@/app/sections/StatsSection";
import { esgIcons, instructorDetails } from "@/app/utils/options";
import { esgProgramme } from "@/app/lib/programmes";

const Page = () => {
	const { outlines, testimonials, testimonialImageUrl } = esgProgramme;
	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="ESG Certificate." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection heading="Prepare for the future">
						<p>
							The Environmental, Social and Governance (ESG)
							Certificate programme targets women directors and
							executives looking to develop their understanding of
							ESG issues and concepts, equipping them with the
							tools required to drive ESG agendas in their
							respective organisations.
						</p>
						<p>
							This expert-led curriculum incorporates ESG
							theoretical frameworks and trends, situating them
							within a global context, with practical inputs
							intended to support executives as they review their
							roles in driving the ESG agenda
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

			<TestimonialSlider
				testimonials={testimonials}
				imageUrl={testimonialImageUrl}
			/>

			<section data-aos="fade-up">
				<div className="container">
					<div className="grid grid-cols-2 gap-10 innerPadding">
						<CascadeImg
							src="https://theboardroomafrica.com/wp-content/uploads/2022/10/esg_introimg.jpg"
							className="w-[800px] object-[-242px]"
						/>
						<div className="">
							<KeySection
								heading="Browse course outline"
								keyPosition="right"
								className="py-0"
							/>
							<AccordionSection outlines={outlines} />
						</div>
					</div>
				</div>
			</section>

			<InstructorSlides instructors={instructorDetails.esg} />

			<section className="my-24" data-aos="fade-up">
				<div className="container">
					<h2 className="text-center text-gray-700">Key features</h2>
					<div className="grid grid-cols-6 text-center gap-10 text-xs mt-16">
						<div>&nbsp;</div>
						<Expectation title="Dedicated programme support team">
							<RiTeamFill className="text-6xl text-mustard" />
						</Expectation>
						<Expectation title="12 intensive and interactive sessions with world-class faculty">
							<RiVideoFill className="text-6xl text-mustard" />
						</Expectation>
						<Expectation title="Real-life case studies and scenarios">
							<RiArticleLine className="text-6xl text-mustard" />
						</Expectation>
						<Expectation title="Learning platform with mobile access">
							<RiSmartphoneLine className="text-6xl text-mustard" />
						</Expectation>
						<div>&nbsp;</div>
					</div>
				</div>
			</section>

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-28">
					<h2 className="text-center text-dusk">
						Some of the companies that trust our instructor&apos;s
						experience include:
					</h2>
					<TrustedBy logos={esgIcons} />
				</div>
			</section>

			{/* <StatsSection /> */}
		</>
	);
};
export default Page;

const Expectation = ({ title, children }) => {
	return (
		<div className="flex flex-col items-center">
			{children}
			<p className="mt-4">{title}</p>
		</div>
	);
};