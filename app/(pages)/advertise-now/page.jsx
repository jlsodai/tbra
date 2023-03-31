import KeySection from "@/app/sections/KeySection";
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import PricingSection from "@/app/sections/PricingSection";
import TrustedBy from "@/app/components/TrustedBy";
import { advertisedClients } from "@/app/utils/options";

const page = () => {
	return (
		<>
			<HeaderTitle title="Let us help you find great leaders." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection heading="Let us help you find exceptional leaders">
						<p>
							We also work alongside other professional networks
							to ensure that we deliver high-calibre candidates
							across every industry. With each opportunity, we set
							out to disprove the myth that female talent is
							scarce. From our regional and global networks to our
							vibrant and diverse community, we know where to find
							the right candidates to bring to the table.
						</p>
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						className="object-[87%]"
						src="https://tbratest.my.canva.site/advertise-page/images/7d53a878ab0bb24ad5af998d901976c4.jpg"
					/>
				</div>
			</section>

			<PricingSection />

			<section className="bg-white" data-aos="fade-up">
				<div className="container my-28">
					<h2 className="text-center text-dusk">
						We&apos;ve worked with
					</h2>
					<TrustedBy logos={advertisedClients} />
				</div>
			</section>
		</>
	);
};
export default page;