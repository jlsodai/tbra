import HeaderTitle from "@/app/sections/HeaderTitle";
import OfferSection from "@/app/sections/OfferSection";
import { newoffers } from "@/app/utils/options";
import NewOffer from "@/app/components/NewOffer";

const page = () => {
	return (
		<>
			<HeaderTitle title="Membership Offerings" />
			<NewOffer offerItem={newoffers.access} />
			<NewOffer offerItem={newoffers.network} />
			<NewOffer offerItem={newoffers.partner} />
			<NewOffer offerItem={newoffers.presence} />
			<NewOffer offerItem={newoffers.thoughtLeadership} />
		</>
	);
};
export default page;
