"use client";
/* eslint-disable @next/next/no-img-element */
import TbraLink from "@/app/components/TbraLink";
import _ from "lodash";
import Pagination from "@/app/components/Pagination";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Article = ({ posts, pageSize = 9 }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [articles, setArticles] = useState(posts);
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		let myPosts = posts;

		if (searchTerm.length >= 3) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(_.toLower(item.title), _.toLower(searchTerm))
			);
		}

		if (selectedYear) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.publicationYears.nodes[0].name, selectedYear)
			);
		}

		if (selectedCountry) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.pubCountries.nodes[0].name, selectedCountry)
			);
		}

		if (selectedType) {
			console.log(selectedType);
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.publicationTypes.nodes[0].name, selectedType)
			);
		}

		setArticles(myPosts);
	}, [selectedYear, selectedCountry, selectedType, searchTerm, posts]);

	const pageCount = Math.ceil(articles.length / pageSize);
	const pages = _.range(1, pageCount + 1);
	const startIndex = (currentPage - 1) * pageSize;

	const years = _.uniq(_.map(posts, "publicationYears.nodes[0].name")).sort();
	const pubtypes = _.uniq(
		_.map(posts, "publicationTypes.nodes[0].name")
	).sort();
	const countries = _.uniq(_.map(posts, "pubCountries.nodes[0].name")).sort();

	const data = _(articles).slice(startIndex).take(pageSize).value();

	return (
		<>
			<div className="flex justify-between items-center mb-8">
				<p>
					Showing: {startIndex + 1} to{" "}
					{Math.min(startIndex + pageSize + 1, articles.length)} of{" "}
					{articles.length} publications
				</p>
				<div className="flex gap-10">
					<SearchInput
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<SelectFilter
						options={years}
						value={selectedYear}
						setSelected={setSelectedYear}
						name="years"
					/>
					<SelectFilter
						options={countries}
						value={selectedCountry}
						setSelected={setSelectedCountry}
						name="countries"
					/>
					<SelectFilter
						options={pubtypes}
						value={selectedType}
						setSelected={setSelectedType}
						name="publications"
					/>
				</div>
			</div>
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

const SearchInput = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<HiOutlineSearch
					className="w-5 h-5 text-gray-500 dark:text-gray-400"
					value={searchTerm}
				/>
			</div>
			<input
				type="text"
				className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-dawn-500 focus:border-dawn-500 block pl-10 p-2.5 w-80"
				placeholder="Search Title"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};

const SelectFilter = ({ options, value, setSelected, name }) => {
	return (
		<select
			className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-dawn-500 focus:border-dawn-500 block pr-4 p-2.5"
			value={value}
			onChange={(e) => setSelected(e.target.value)}
		>
			<option value="">All {name}</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};
