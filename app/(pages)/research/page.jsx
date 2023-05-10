import Article from "@/app/components/Article";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Pagination from "@/app/components/Pagination";
import { fetchData } from "@/app/lib/fetchData";
import HeroAlt from "@/app/sections/HeroAlt";

const pageData = async () => {
	return await fetchData("publications?populate=*&pagination[pageSize]=100");
};

export default async function Example() {
	const data = await pageData();
	const posts = data?.data;
	return (
		<>
			{/* <HeaderTitle title="Board Diversity Index" /> */}
			<HeroAlt title="Board Diversity Index">
				<p className="text-dawn font-light">
					Since 2017, TheBoardroom Africa has mapped the composition
					of Africa&apos;s listed boards to assess progress on gender
					diversity across the region. The index tracks the number of
					listed boards by country and identifies all board seats
					filled by women while also monitoring the number of women in
					Chair and other executive positions. Research to date covers
					publicly listed boards in 11 African countries.
				</p>
			</HeroAlt>
			<section className="my-16">
				<div className="container">
					{/* <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3"> */}
					<Article posts={posts} />
					{/* </div> */}
				</div>
			</section>
		</>
	);
}
