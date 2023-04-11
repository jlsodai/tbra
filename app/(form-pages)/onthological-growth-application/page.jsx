import PaperForm from "@/app/components/PaperForm";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Ontological Growth Experience Application." />
			<section className="container my-10" data-aos="fade-up">
				<PaperForm formSlug="iblcarxk" />;
			</section>
		</>
	);
};

export default page;
