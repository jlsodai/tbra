/* eslint-disable @next/next/no-img-element */
import TbraLink from "@/app/components/TbraLink";
const Article = ({ posts }) => {
	return (
		<>
			{posts.map((post, i) => (
				<article
					key={i}
					className="flex max-w-xl flex-col items-start justify-between rounded border p-4 hover:shadow-lg"
				>
					<img
						src={post.featuredImage?.node?.sourceUrl}
						className="mb-4"
						alt=""
					/>
					<div className="flex items-center gap-x-2 text-xs">
						<p className="rounded-full bg-dawn py-1.5 px-3 font-medium text-white capitalize">
							{post.publicationTypes?.nodes[0]?.name}
						</p>
						<p className="rounded-full bg-tender py-1.5 px-3 font-medium text-white capitalize">
							{post.publicationYears?.nodes[0]?.name}
						</p>
					</div>
					<div>
						<h3 className="mt-4 text-2xl font-semibold leading-6 group-hover:text-gray-600 mb-0">
							<a href={`/research/${post.slug}`}>{post.title}</a>
						</h3>
						{/* {post.content && (
							<p className="mt-2 leading-6 text-gray-600 line-clamp-3">
								{post.content}
							</p>
						)} */}
						<TbraLink
							linkTitle="Read More"
							url={`/research/${post.slug}`}
						/>
					</div>
				</article>
			))}
		</>
	);
};
export default Article;
