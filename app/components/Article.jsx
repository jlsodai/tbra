/* eslint-disable @next/next/no-img-element */
import TbraLink from "@/app/components/TbraLink";
const Article = ({ posts }) => {
	return (
		<>
			{posts.map((post, i) => (
				<article
					key={post.id}
					className="flex max-w-xl flex-col items-start justify-between rounded border p-4 hover:shadow-lg"
				>
					<img src={post.imageUrl} className="mb-4" alt="" />
					<div className="flex items-center gap-x-4 text-xs">
						<time
							dateTime={post.datetime}
							className="text-gray-500"
						>
							{post.date}
						</time>
						<a
							href={post.category.href}
							className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
						>
							{post.category.title}
						</a>
					</div>
					<div className="group relative">
						<h3 className="mt-2 text-2xl font-semibold leading-6 group-hover:text-gray-600">
							<a href={post.href}>
								<span className="absolute inset-0" />
								{post.title}
							</a>
						</h3>
						{post.description && (
							<p className="mt-2 leading-6 text-gray-600 line-clamp-3">
								{post.description}
							</p>
						)}
						<TbraLink
							linkTitle="Read More"
							url={`/research/${post.href}`}
						/>
					</div>
				</article>
			))}
		</>
	);
};
export default Article;
