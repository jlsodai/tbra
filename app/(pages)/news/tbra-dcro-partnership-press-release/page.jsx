import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Press Release" />
			<section className="container mt-16">
				<div className="prose max-w-full md:mx-44">
					<Markdown>{pressrelease}</Markdown>
				</div>
			</section>
		</>
	);
};

export default page;