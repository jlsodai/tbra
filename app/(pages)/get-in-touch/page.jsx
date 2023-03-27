import GetInTouch from "@/app/sections/GetInTouch";
import HeaderTitle from "@/app/sections/HeaderTitle";
const page = () => {
	return (
		<>
			<HeaderTitle title="Get in touch." />
			<section className="container my-10" data-aos="fade-up">
				<GetInTouch formSlug="cjjm4cj7" showSpinner="1" />;
			</section>
		</>
	);
};
export default page;
