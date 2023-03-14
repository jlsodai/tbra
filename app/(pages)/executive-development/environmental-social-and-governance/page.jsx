import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import AccordionSection from "@/app/sections/AccordionSection";
import PointedArrow from "@/app/components/PointedArrow";
import KeySection from "@/app/sections/KeySection";
import { RiCustomerService2Fill } from "react-icons/ri";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Environmental, social and governance certificate." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							className="col-span-4"
							heading="Course introduction"
							linkTitle="Learn about membership"
						>
							<p>
								As the impact of ESG becomes increasingly
								significant, leaders must have the necessary
								knowledge and tools to make informed decisions
								and support the sustainability agenda in their
								organisations.
							</p>
							<p>
								This expert-led certificate programme best suits
								female leaders looking to build their knowledge
								and competency in ESG-related matters. The
								intensive programme runs over five weeks and
								consists of 12 sessions covering the principles
								of ESG, global trends driving the agenda, and
								the practical approaches to develop and champion
								ESG agendas on an organisational and board
								level.
							</p>
						</KeySection>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://placeholder.com/400x500"
					/>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="grid grid-cols-2 gap-10 innerPadding">
						<CascadeImg
							negative
							src="https://placeholder.com/700x450"
						/>
						<div className="">
							<div className="grid grid-cols-5 gap-10">
								<KeySection
									heading="Browse course outline"
									keyPosition="right"
								/>
							</div>
							<AccordionSection />
						</div>
					</div>
				</div>
			</section>

			<section>
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

			<section className="mt-24">
				<div className="container">
					<div className="flex items-center ml-64">
						<h3 className="inline-block w-64">
							Why choose Open Doors?
						</h3>
						<TBRAKey className="ml-5" />
					</div>
					<div className="mt-8">
						<PointedArrow title="Globally recognised" />
						<PointedArrow
							size="sm"
							title="Accredited certificate"
						/>
						<PointedArrow
							size="md"
							title="Degree-level equivalent"
						/>
						<PointedArrow
							size="lg"
							title="Path to charthered director"
						/>
					</div>
				</div>
			</section>
		</>
	);
};
export default Page;
