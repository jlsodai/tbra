import Article from "@/app/components/Article";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { posts } from "@/app/utils/options";
import Pagination from "@/app/components/Pagination";
import {
	publications,
	sortedPublications,
	filterPublicationYear,
} from "@/app/lib/publications";

export default function Example() {
	console.log(filterPublicationYear(2022));
	return (
		<>
			<HeaderTitle title="Board Diversity Index" />
			<section className="my-16">
				<div className="container">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
						<Article posts={sortedPublications} />
					</div>
					<Pagination />
				</div>
			</section>
		</>
	);
}
