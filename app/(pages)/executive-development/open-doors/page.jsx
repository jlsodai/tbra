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
import { fetchData } from "@/app/lib/fetchData";

export default async function Page() {
	const data = await fetchData("programmes/1?populate=*");
	const attributes = data?.data?.attributes;

	const { testimonialImageUrl } = esgProgramme;

	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="Certificate in Company Direction" />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection heading={attributes.Intro.Title}>
						<p className="whitespace-pre-wrap">
							{attributes.Intro.content}
						</p>
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/open-doors-page/images/d14259c959fe4c98eacf9d8b308c88d9.jpg"
					/>
				</div>
			</section>

			<TestimonialSlider
				testimonials={attributes.Testimonial}
				imageUrl={attributes.testimonialImage}
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
							<AccordionSection
								outlines={attributes.CourseOutline}
							/>
						</div>
					</div>
				</div>
			</section>

			<InstructorSlides instructors={attributes.Instructors} />

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
}

const Expectation = ({ title, children }) => {
	return (
		<div className="flex flex-col items-center">
			{children}
			<p className="mt-4">{title}</p>
		</div>
	);
};
