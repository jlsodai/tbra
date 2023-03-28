import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import KeySection from "@/app/sections/KeySection";
import { HiOutlineCalendar } from "react-icons/hi2";
import { GoCalendar } from "react-icons/go";
import ProgramCard from "@/app/components/ProgramCard";
import { programmes } from "@/app/utils/options";

const Page = () => {
	return (
		<>
			<HeaderTitle title="Explore powerful executive programmes as you expand your influence at the table." />

			<section className="container" data-aos="fade-up">
				<div className="grid grid-cols-2 gap-20">
					<KeySection heading="Programmes Designed for today's leaders">
						<p>
							Whether you are looking to transform your presence
							in the boardroom or lead your business and teams to
							success in our new global context, we offer a range
							of immersive experiences suited to your professional
							development goals. Navigate the complexities of
							strategic leadership with our suite of Executive
							Programmes.
						</p>
					</KeySection>
					{/* <CascadeImg
						position="right"
						negative
						top
						imgClass="object-right"
						src="https://tbratest.my.canva.site/board-roles-individual-page/images/40a1c0cfce04c8c78e2edc7741812803.jpg"
					/> */}
				</div>
			</section>

			<section>
				<div className="container grid grid-cols-2 gap-20">
					{programmes.map((programme, i) => (
						<ProgramCard key={i} programme={programme} />
					))}
				</div>
			</section>
		</>
	);
};
export default Page;
