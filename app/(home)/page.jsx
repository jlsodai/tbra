/* eslint-disable @next/next/no-img-element */

import CascadeImg from "@/app/components/CascadeImg";
import HeroSection from "@/app/sections/HeroSection";
import KeySection from "@/app/sections/KeySection";
import Testimonial from "@/app/components/Testimonial";
import TrustedBy from "@/app/components/TrustedBy";
import { clients } from "@/app/utils/options";
import StatsSection from "@/app/sections/StatsSection";

export default function Home() {
	return (
		<>
			<HeroSection />

			<section className="container" data-aos="fade-up">
				<div className="md:grid md:grid-cols-2 md:gap-20">
					<KeySection
						className="md:w-[80%]"
						heading="The largest private network of women executives in Africa and the diaspora"
						linkTitle="About Membership"
						linkui="btn"
						url="/membership"
					/>
					<CascadeImg
						position="right"
						src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/29d039a30767dbcf5ee0736e92f32d98.jpg"
					/>
				</div>
			</section>

			<section className="bg-gray-100" data-aos="fade-up">
				<div className="container grid md:grid-cols-2 md:gap-20">
					<CascadeImg
						position="left"
						src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/ba7424f002729bc29109cb604fd1c70f.jpg"
					/>
					<KeySection
						heading="Connecting diverse talent with great boards"
						linkTitle="Learn more"
						keyPosition="right"
						url="/board-roles/company"
					>
						<p>
							We work with companies and organisations to help
							bridge the diversity gap on their boards by
							leveraging our robust network coupled with
							headhunter interventions to deliver a diverse range
							of top candidates across sectors.
						</p>
					</KeySection>
				</div>
			</section>

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-12 md:my-28">
					<h2 className="text-center">Trusted by.</h2>
					<TrustedBy logos={clients} />
				</div>
			</section>

			<section className="bg-gray-100" data-aos="fade-up">
				<div className="container">
					<div className="grid md:grid-cols-2 md:gap-20">
						<KeySection
							heading="Executive Programmes"
							linkTitle="Learn more"
							url="/executive-development"
						>
							<p>
								Whether you are looking to transform your
								presence in the boardroom or lead your business
								and teams to success in our new global context,
								we offer a range of immersive experiences suited
								to your professional development goals.
							</p>
						</KeySection>
						<CascadeImg
							position="right"
							src="https://tbratest.my.canva.site/marcia-s-colors-landing/images/2972e7d70b4352c286f0610b361b006a.jpg"
						/>
					</div>
				</div>
			</section>

			<section className="container" data-aos="fade-up">
				<div className="grid md:grid-cols-2 md:gap-20">
					<Testimonial
						quote="As investors and grantmakers, we believe in the critical value of equipping leaders with skills to build and scale talented, diverse teams. We are thrilled to partner with TheBoardroom Africa on its journey to increase the gender diversity of company boards and investment committees across the continent. We are especially proud to support its team as they evolve and launch a suite of professional trainings and member services for the organization’s most valuable asset – its community of accomplished women leaders."
						author="Liesel Pritzker Simmons"
						authorTitle="Co-founder and Principle, Blue Haven Initiative"
					/>
					<KeySection
						heading="Our Partners"
						linkTitle="Partners"
						keyPosition="right"
						url="/partners"
					>
						<p>
							Our donors provide invaluable support and share our
							vision for creating a gender-equal world. From
							foundations to corporations, our partners know that
							investing in women leaders is an investment in a
							more inclusive society, a stronger business
							community. We work with our donors and partners to
							achieve shared development objectives such as gender
							inclusion and jobs created.
						</p>
					</KeySection>
				</div>
			</section>
			<StatsSection />
		</>
	);
}
