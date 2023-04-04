import React from "react";
import KeySection from "@/app/sections/KeySection";
import CascadeImg from "@/app/components/CascadeImg";
import TestimonialSlider from "@/app/components/TestimonialSlider";
import InstructorSlides from "@/app/components/InstructorSlides";
import AccordionSection from "@/app/sections/AccordionSection";
import {
	RiTeamFill,
	RiVideoFill,
	RiSmartphoneLine,
	RiArticleLine,
} from "react-icons/ri";

const ProgramBlocks = ({ attributes, introImg }) => {
	return (
		<>
			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection heading={attributes.Intro.Title}>
						<p className="whitespace-pre-wrap">
							{attributes.Intro.content}
						</p>
					</KeySection>
					<CascadeImg position="right" src={introImg} />
				</div>
			</section>

			<TestimonialSlider
				testimonials={attributes.Testimonial}
				imageUrl={attributes.testimonialImage}
			/>

			<section data-aos="fade-up">
				<div className="container">
					<div className="grid grid-cols-[3fr_2fr] gap-10 innerPadding">
						{attributes.outlineVideoUrl ? (
							<iframe
								width="100%"
								height="505"
								src={attributes.outlineVideoUrl}
								title={attributes.Heading.title}
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						) : (
							<CascadeImg
								src={attributes.outlineImageUrl}
								className="w-[100%] h-[505px]"
							/>
						)}
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
		</>
	);
};

export default ProgramBlocks;

const Expectation = ({ title, children }) => {
	return (
		<div className="flex flex-col items-center">
			{children}
			<p className="mt-4">{title}</p>
		</div>
	);
};
