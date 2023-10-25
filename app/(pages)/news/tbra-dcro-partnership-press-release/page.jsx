import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
	return (
		<>
			<HeaderTitle title="Press Release" />
			<section className="container mt-16">

				<div className="prose max-w-full lg:mx-44">
					<div className="flex items-center">
						<h1>Empowering Women and Elevating Risk Governance: <br/>The DCRO Institute and TheBoardroom Africa Join Forces</h1>
						<img className="mt-0 ml-16 self-baseline" src="https://res.cloudinary.com/tbra/image/upload/v1698241406/dcro_slumhm.jpg" width="200px" />
					</div>
					<Markdown>{pressrelease}</Markdown>
				</div>
			</section>
		</>
	);
};

export default page;