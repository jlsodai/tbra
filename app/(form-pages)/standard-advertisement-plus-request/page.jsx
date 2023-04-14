import PaperForm from "@/app/components/PaperForm";

import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Standard Advertisement Plus Request" />
			<section className="container my-10" data-aos="fade-up">
				<PaperForm formSlug="standardadvertisementplus" />
			</section>
		</>
	);
};

export default page;
