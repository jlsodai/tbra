import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import TrustedBy from "@/app/components/TrustedBy";
import StatsSection from "@/app/sections/StatsSection";
import { esgIcons, instructorDetails } from "@/app/utils/options";
import { esgProgramme } from "@/app/lib/programmes";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";

export default async function Page() {
	const data = await fetchData("programmes/1?populate=*");
	const attributes = data?.data?.attributes;

	const { testimonialImageUrl } = esgProgramme;

	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="Certificate in Company Direction" />

			<ProgramBlocks
				attributes={attributes}
				introImg="https://tbratest.my.canva.site/open-doors-page/images/d14259c959fe4c98eacf9d8b308c88d9.jpg"
			/>

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
