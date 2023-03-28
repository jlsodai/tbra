import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join the movement and access board opportunities." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection
						heading="Access board opportunities"
						linkTitle="Learn about membership"
						url="/membership"
					>
						<p>
							TBrA members form part of our trusted network. We
							proactively promote our members to boards while
							transforming their presence and influence in Africa
							and across the globe. Join our community to unlock
							new opportunities.
						</p>
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						imgClass="object-right"
						src="https://tbratest.my.canva.site/board-roles-individual-page/images/40a1c0cfce04c8c78e2edc7741812803.jpg"
					/>
				</div>
			</section>
		</>
	);
};
export default Page;
