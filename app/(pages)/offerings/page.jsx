import HeaderTitle from "@/app/sections/HeaderTitle";
import OfferSection from "@/app/sections/OfferSection";
import { offers, newoffers } from "@/app/utils/options";

const page = () => {
	return (
		<>
			<HeaderTitle title="Membership Offerings" />
			{/* <OfferSection bg="mustard" /> */}
			{/* <OfferSection offers={offers.ondemand} />
			<OfferSection bg="tender" offers={offers.executive} /> */}
			<OfferSection bg="tender" offers={newoffers.access} />
			<OfferSection bg="mustard" offers={newoffers.network} />
			<OfferSection bg="tender" offers={newoffers.partner} />
			<OfferSection offers={newoffers.presence} />
			<OfferSection bg="mustard" offers={newoffers.thoughtLeadership} />
		</>
	);
};
export default page;
