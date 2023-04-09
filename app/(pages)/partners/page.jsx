import KeySection from "@/app/sections/KeySection";
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import TrustedBy from "@/app/components/TrustedBy";
import { partnerLogos, clients } from "@/app/utils/options";

const page = () => {
	return (
		<>
			<HeaderTitle title="Support our efforts to create a world where we all thrive." />

			<section className="container" data-aos="fade-up">
				<div className="keySectionWrap">
					<KeySection
						heading="Partner with us to change the face of leadership"
						linkTitle="Become a partner"
						url="/get-in-touch"
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
					<CascadeImg
						position="right"
						negative
						top
						className="object-[87%]"
						src="https://tbratest.my.canva.site/partners-page/images/38dd4290a2f5da368729d75f54525a17.jpg"
					/>
				</div>
			</section>

			<section>
				<div className="container">
					<h3 className="font-halyard font-extralight text-5xl text-center">
						Our Partners
					</h3>
					<TrustedBy logos={partnerLogos} />
				</div>
			</section>
		</>
	);
};
export default page;
