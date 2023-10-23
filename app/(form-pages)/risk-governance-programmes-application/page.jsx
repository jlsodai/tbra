import PaperForm from "@/app/components/PaperForm";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Risk Governance Programmes" />
			<section className="container my-10" data-aos="fade-up">
				<PaperForm formSlug="risk-gov-web" />
			</section>
		</>
	);
};

export default page;
