import HeaderTitle from "@/app/sections/HeaderTitle";
import Venngage from "../../../components/Venngage";
import _ from "lodash";
import { publications } from "@/app/lib/publications";

const page = ({ params }) => {
	console.log(params);
	const post = _.find(publications, {
		slug: "board-diversity-index-ghana-2022-edition-5",
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
