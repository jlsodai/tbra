import HeaderTitle from "@/app/sections/HeaderTitle";
import Venngage from "../../../components/Venngage";
import _ from "lodash";
import { publications } from "@/app/lib/publications";

const page = ({ params }) => {
	const post = _.find(publications, {
		slug: params.slug,
	});
	return (
		<>
			<HeaderTitle title={post.title} />
			<section>
				<div className="container mt-16">
					{post.publicationTypes.nodes[0].name === "Infographic" ? (
						<div
							dangerouslySetInnerHTML={{
								__html: post.infog.venngageCode,
							}}
						></div>
					) : (
						<div className="prose max-w-full mx-44">
							<div
								dangerouslySetInnerHTML={{
									__html: post.content,
								}}
							></div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};
export default page;
