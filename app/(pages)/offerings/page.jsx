import HeaderTitle from "@/app/sections/HeaderTitle";
import OfferSection from "@/app/sections/OfferSection";
import { offers } from "@/app/utils/options";

const page = () => {
	return (
		<>
			<HeaderTitle title="Membership Offerings" />
			{/* <OfferSection bg="mustard" /> */}
			<OfferSection offers={offers.ondemand} />
			<OfferSection bg="tender" offers={offers.executive} />
		</>
	);
};
export default page;
