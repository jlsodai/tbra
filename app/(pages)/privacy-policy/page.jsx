import Markdown from "markdown-to-jsx";
import { privacy } from "@/app/utils/privacy";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Privacy Policy" />
			<section className="container">
				<div className="prose max-w-full md:mx-44">
					<Markdown>{privacy}</Markdown>
				</div>
			</section>
		</>
	);
};

export default page;
