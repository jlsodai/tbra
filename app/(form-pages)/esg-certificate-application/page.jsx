import PaperForm from "@/app/components/PaperForm";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="ESG Certificate Application." />
			<section className="container my-10" data-aos="fade-up">
				<PaperForm formSlug="esg-registration-web" />
			</section>
		</>
	);
};

export default page;
