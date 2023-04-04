import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import TrustedBy from "@/app/components/TrustedBy";
import StatsSection from "@/app/sections/StatsSection";
import { esgIcons, instructorDetails } from "@/app/utils/options";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";

export default async function Page() {
	const data = await fetchData("programmes/3?populate=*");
	const attributes = data?.data?.attributes;

	return (
		<>
			<BrochureDrawer />
			<HeaderTitle title="ESG Certificate." />

			<ProgramBlocks
				attributes={attributes}
				introImg="https://tbratest.my.canva.site/esg-certificate-page/images/a93c22d45c08a6dd55c87e3a53cd14c4.png"
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
