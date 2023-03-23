import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import AccordionSection from "@/app/sections/AccordionSection";
import PointedArrow from "@/app/components/PointedArrow";
import SectionTitle from "@/app/components/SectionTitle";
import KeySection from "@/app/sections/KeySection";
import { RiCustomerService2Fill } from "react-icons/ri";
import BrochureDrawer from "@/app/components/BrochureDrawer";

const Page = () => {
	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="Certificate in Company Direction: Open Doors." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							className="col-span-4"
							heading="Course introduction"
							linkTitle="Learn about membership"
							url="/membership"
						>
							<p>
								Open Doors is the first globally accredited
								director certificate programme tailored to women
								across Africa and the diaspora. The programme
								runs three times annually, is designed by
								directors for directors, and encourages peer
								learning to help delegates build real and
								impactful lifetime connections.
							</p>
							<p>
								The programme leads to an accredited Certificate
								in Company Direction by the UK Institute of
								Directors, a Bachelors level (SCQF)
								qualification in its own right and the first
								stage in the Chartered Director qualification
								path. Beyond the core curriculum, the programme
								is supplemented with additional group workshops
								and a board simulation workshop. Open Doors
								alumnae include over 200+ women across the
								continent and the diaspora, with over 45+
								countries represented across 150+ companies.
							</p>
						</KeySection>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://tbratest.my.canva.site/open-doors-page/images/d14259c959fe4c98eacf9d8b308c88d9.jpg"
					/>
				</div>
			</section>

			<section data-aos="fade-up">
				<div className="container">
					<div className="grid grid-cols-2 gap-10 innerPadding">
						<CascadeImg src="https://placeholder.com/700x450" />
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

			<section data-aos="fade-up">
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
		</>
	);
};
export default Page;
