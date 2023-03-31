"use client";
/* eslint-disable @next/next/no-img-element */
import TbraLink from "@/app/components/TbraLink";
import _ from "lodash";
import Pagination from "@/app/components/Pagination";
import { useState } from "react";

const Article = ({ posts }) => {
	const [currentPage, setCurrentPage] = useState(1);
	// const { itemsCount, pageSize, currentPage, onPageChange } = props;
	const pageSize = 9;
	const pageCount = Math.ceil(posts.length / pageSize);
	// if (pageCount === 1) return null;
	const pages = _.range(1, pageCount + 1);
	// console.log(pages);
	const startIndex = (currentPage - 1) * pageSize;

	const data = _(posts).slice(startIndex).take(pageSize).value();

	// console.log(data);

	return (
		<>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
				{data.map((post, i) => (
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
								<a href={`/research/${post.slug}`}>
									{post.title}
								</a>
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
			</div>
			<Pagination
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
};
export default Article;
