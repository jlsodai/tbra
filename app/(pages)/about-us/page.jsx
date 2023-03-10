import HeaderTitle from "@/app/sections/HeaderTitle";
import TBRAKey from "@/app/components/TBRAKey";
import CascadeImg from "@/app/components/CascadeImg";
import FooterSection from "@/app/sections/FooterSection";
import KeySection from "@/app/sections/KeySection";

const About = () => {
	return (
		<>
			<HeaderTitle title="We've created a movement." />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection heading="Our Story" className="col-span-4">
							<p>
								TheBoardroom Africa officially launched in 2016,
								but in many ways, this community has been years
								in the making. My own journey navigating
								corporate ranks as a young executive inspired
								the desire to build what has now become Africa’s
								most vibrant private community of female
								executives.
							</p>
							<p>
								What started with a handful of women across a
								few countries has now developed into a
								continent-wide movement for change.
							</p>
							<p>
								Today, TBrA is enhancing and amplifying the
								potential of Africa’s exceptional female
								leaders. We also support companies hoping to
								unlock the power of diversity and improve
								business performance by connecting them with
								exceptional female leaders. And we work with
								women to equip them with the resources they need
								as they navigate their journeys in and outside
								the boardroom. We invite you to join us to build
								better boardrooms and more inclusive leadership
								spaces.
							</p>
							<p>
								Marcia Ashong <br />
								Founder <TBRAKey size="xs" /> CEO, TheBoardroom
								Africa
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

			<FooterSection />
		</>
	);
};
export default About;
