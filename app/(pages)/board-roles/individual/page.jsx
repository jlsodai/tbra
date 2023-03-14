import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join the movement and access board opportunities." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="Access board opportunities"
							linkTitle="Learn about membership"
							url="/membership"
						>
							<p>
								TBrA members are part of a network of trusted
								female executives. We proactively promote
								members to board opportunities and support their
								leadership journeys.
							</p>
							<p>
								Join our community to unlock new board roles and
								access a network of other women leaders as well
								as other resources to support your board career.
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
		</>
	);
};
export default Page;
