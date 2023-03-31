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
				<Venngage />
			</section>
		</>
	);
};
export default page;
