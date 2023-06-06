import HeaderTitle from "@/app/sections/HeaderTitle";
import OfferSection from "@/app/sections/OfferSection";
import { offers, newoffers } from "@/app/utils/options";
import PaperFormModal from "@/app/components/PaperFormModal";

const page = () => {
	return (
		<>
			<HeaderTitle
				title="Member Offers"
				paperForm={
					<PaperFormModal
						btnText="Get Started"
						paperform="memberoffers"
						className="btn mt-4 rounded font-normal bg-tender text-white"
					/>
				}
			/>
			<div className="mt-16">
				<OfferSection
					bg="tender"
					offers={newoffers.access}
					accordionOpen={true}
				/>
				<OfferSection bg="mustard" offers={newoffers.network} />
				<OfferSection bg="tender" offers={newoffers.partner} />
				<OfferSection offers={newoffers.presence} />
				<OfferSection
					bg="mustard"
					offers={newoffers.thoughtLeadership}
				/>
			</div>
			<section className="container mt-8 text-center">
				<PaperFormModal
					btnText="Get Started"
					paperform="memberoffers"
					// className="btn mt-4 rounded text-white"
				/>
			</section>
		</>
	);
};
export default page;
