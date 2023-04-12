import KeySection from "@/app/sections/KeySection";
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import TrustedBy from "@/app/components/TrustedBy";
import { partnerLogos, clients } from "@/app/utils/options";
import { fetchData } from "@/app/lib/fetchData";

const page = async () => {
	const data = await fetchData("partner?populate=*");
	const { intro } = data?.data?.attributes;

	return (
		<>
			<HeaderTitle title="Support our efforts to create a world where we all thrive." />

			<section className="container" data-aos="fade-up">
				<div className="keySectionWrap">
					<KeySection
						heading={intro.Title}
						linkTitle={intro.linkTitle}
						url={intro.link}
					>
						{intro.content && <p>{intro.content}</p>}
					</KeySection>
					<CascadeImg
						position="right"
						negative
						top
						className="object-[87%]"
						src={intro.imageUrl}
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
