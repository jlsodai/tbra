import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import TrustedBy from "@/app/components/TrustedBy";
import StatsSection from "@/app/sections/StatsSection";
import { esgIcons, instructorDetails } from "@/app/utils/options";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";
import ProgrammeLogos from "@/app/components/ProgrammeLogos";

export default async function Page() {
	const data = await fetchData("programmes/2?populate=*");
	const attributes = data?.data?.attributes;

	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="Ontological Growth Experience" />

			<ProgramBlocks
				attributes={attributes}
				introImg="https://tbratest.my.canva.site/open-doors-page/images/d14259c959fe4c98eacf9d8b308c88d9.jpg"
			/>

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-28">
					<h2 className="text-center text-dusk">
					Rachel&apos;s work is trusted by organisations like:
					</h2>
					<ProgrammeLogos logos={attributes.trustedBy} />
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
