import HeaderTitle from "@/app/sections/HeaderTitle";
import BrochureDrawer from "@/app/components/BrochureDrawer";
import TrustedBy from "@/app/components/TrustedBy";
import StatsSection from "@/app/sections/StatsSection";
import { fetchData } from "@/app/lib/fetchData";
import ProgramBlocks from "@/app/sections/ProgramBlocks";
import ProgrammeLogos from "@/app/components/ProgrammeLogos";
import { filteredMeta } from "@/app/utils/options";

const pageData = async () => {
	return await fetchData("programmes/3?populate=*");
};

export async function generateMetadata() {
	const data = await pageData();
	const { seo } = data?.data?.attributes;
	return filteredMeta(seo);
}

export default async function Page() {
	const data = await pageData();
	const attributes = data?.data?.attributes;

	return (
		<>
			<BrochureDrawer brochureDetails={attributes.brochureInfo} />
			<HeaderTitle title="ESG Certificate" />

			<ProgramBlocks attributes={attributes} certified={true} />

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-28">
					<h2 className="text-center text-dusk">
						Some of the companies that trust our instructor&apos;s
						experience include:
					</h2>
					<ProgrammeLogos logos={attributes.trustedBy} />
				</div>
			</section>

			<StatsSection />
		</>
	);
}
