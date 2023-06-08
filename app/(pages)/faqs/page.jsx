import FAQAccordion from "@/app/components/FAQAccordion";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { faqs } from "@/app/utils/options";

const page = () => {
	return (
		<>
			<HeaderTitle title="Frequently Asked Questions" />
			<section className="container mt-16">
				<FAQAccordion faqs={faqs} />
			</section>
		</>
	);
};
export default page;
