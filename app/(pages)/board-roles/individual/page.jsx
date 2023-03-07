import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import ArrowLink from "@/app/components/ArrowLink";
import FooterSection from "@/app/sections/FooterSection";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Join the movement and access board opportunities." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<TBRAKey />
						<div className="col-span-3">
							<h3>Access board opportunities</h3>
							<p>
								TBrA members are part of a network of trusted
								female executives. We proactively promote
								members to board opportunities and support their
								leadership journeys.
							</p>
							<p className="mt-4">
								Join our community to unlock new board roles and
								access a network of other women leaders as well
								as other resources to support your board career.
							</p>
							<ArrowLink
								href="#"
								title="Learn about membership"
							/>
						</div>
					</div>
					<CascadeImg
						position="right"
						negative
						top
						src="https://placeholder.com/400x500"
					/>
				</div>
			</section>

			<FooterSection />
		</>
	);
};
export default Page;
