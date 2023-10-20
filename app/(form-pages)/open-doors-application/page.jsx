import PaperForm from "@/app/components/PaperForm";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Open Doors Application." />
			<section className="container my-10" data-aos="fade-up">
				<PaperForm formSlug="tbraopendoors2024" />
			</section>
		</>
	);
};

export default page;
