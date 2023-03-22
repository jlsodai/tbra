/* eslint-disable @next/next/no-img-element */

import CascadeImg from "@/app/components/CascadeImg";
import HeroSection from "@/app/sections/HeroSection";
import KeySection from "@/app/sections/KeySection";
import Testimonial from "@/app/components/Testimonial";
import FooterLine from "@/app/sections/FooterLine";
import TrustedBy from "@/app/components/TrustedBy";

export default function Home() {
	return (
		<>
			<HeroSection />

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="The largest private network of women executives."
							linkTitle="About Membership"
							linkui="btn"
							url="/membership"
						/>
					</div>
					<CascadeImg
						position="right"
						src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/29d039a30767dbcf5ee0736e92f32d98.jpg"
					/>
				</div>
			</section>

			<section className="bg-gray-100">
				<div className="container grid grid-cols-2 gap-20">
					<CascadeImg
						position="left"
						src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/ba7424f002729bc29109cb604fd1c70f.jpg"
					/>
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="Board opportunities"
							linkTitle="Learn more"
							keyPosition="right"
						>
							<p>
								We work with companies and organisations to help
								bridge the diversity gap on their boards by
								sharing vacant roles with our network, providing
								a shortlist of qualified candidates that meet
								their criteria, or through our bespoke search
								service.
							</p>
						</KeySection>
					</div>
				</div>
			</section>

			<section className="bg-white">
				<div className="container my-28">
					<h2
						className="text-center capitalize"
						style={{ fontVariant: "small-caps" }}
					>
						trusted by.
					</h2>
					<TrustedBy />
				</div>
			</section>

			<section className="bg-gray-100">
				<div className="container">
					<div className="grid grid-cols-2 gap-20">
						<div className="grid grid-cols-5 innerPadding gap-10">
							<KeySection
								heading="Executive Development"
								linkTitle="Learn more"
							>
								<p>
									Whether you are looking to transform your
									presence in the boardroom or lead your
									business and teams to success in our new
									global context, we offer a range of
									immersive experiences suited to your
									professional development goals.
								</p>
							</KeySection>
						</div>
						<CascadeImg
							position="right"
							src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/2972e7d70b4352c286f0610b361b006a.jpg"
						/>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="grid grid-cols-2 gap-20">
					<Testimonial
						quote="Our partners and donors provide invaluable support and share our vision for creating a gender-equal world. From foundations to corporations, our partners know that investing in TheBoardroom Africa is an investment in a more inclusive society, a stronger business community and Africa’s development objectives. We work with our donors and partners to achieve shared development objectives such as gender inclusion and jobs created. We work with our donors and partners to achieve shared development objectives such as gender inclusion and jobs created."
						author="Liesel Pritzker Simmons"
						authorTitle="Co-founder and Principle, Blue Haven Initiative"
					/>
					<div className="grid grid-cols-5 innerPadding gap-10">
						<KeySection
							heading="Our Partners"
							linkTitle="Partners"
							keyPosition="right"
						>
							<p>
								Our partners and donors provide invaluable
								support and share our vision for creating a
								gender-equal world. From foundations to
								corporations, our partners know that investing
								in TheBoardroom Africa is an investment in a
								more inclusive society, a stronger business
								community and Africa&apos;s development
								objectives. We work with our donors and partners
								to achieve shared development objectives such as
								gender inclusion and jobs created.
							</p>
						</KeySection>
					</div>
				</div>
			</section>

			<FooterLine />
		</>
	);
}
