"use client";
/* eslint-disable @next/next/no-img-element */
import _ from "lodash";
import Pagination from "@/app/components/Pagination";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";

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
				_.includes(
					_.toLower(item.attributes.title),
					_.toLower(searchTerm)
				)
			);
		}

		if (selectedYear) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.attributes.publication.year, selectedYear)
			);
		}

		if (selectedCountry) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.attributes.publication.country, selectedCountry)
			);
		}

		if (selectedType) {
			myPosts = _.filter(myPosts, (item) =>
				_.includes(item.attributes.publication.type, selectedType)
			);
		}

		setArticles(myPosts);
	}, [selectedYear, selectedCountry, selectedType, searchTerm, posts]);

	const pageCount = Math.ceil(articles.length / pageSize);
	const pages = _.range(1, pageCount + 1);
	const startIndex = (currentPage - 1) * pageSize;

	const years = _.uniq(_.map(posts, "attributes.publication.year")).sort();
	const pubtypes = _.uniq(_.map(posts, "attributes.publication.type")).sort();
	const countries = _.uniq(
		_.map(posts, "attributes.publication.country")
	).sort();

	const data = _(articles).slice(startIndex).take(pageSize).value();

	return (
		<>
			<div className="block md:flex justify-between items-center mb-8">
				{/* <p>
					Showing: {startIndex + 1} to{" "}
					{Math.min(currentPage * pageSize, articles.length)} of{" "}
					{articles.length} publications
				</p> */}
				<SearchInput
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<div className="grid grid-cols-2 gap-4 mt-4 md:mt-0 md:flex md:gap-10">
					<SelectFilter
						options={years}
						value={selectedYear}
						setSelected={setSelectedYear}
						name="Year"
					/>
					<SelectFilter
						options={countries}
						value={selectedCountry}
						setSelected={setSelectedCountry}
						name="Country"
					/>
					<SelectFilter
						options={pubtypes}
						value={selectedType}
						setSelected={setSelectedType}
						name="Type"
					/>
				</div>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 md:gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3 justify-items-center">
				{data.map((post, i) => (
					<article
						key={i}
						className="flex max-w-xl flex-col items-start justify-between rounded border p-4 hover:shadow-lg"
					>
						<img
							src={post.attributes.publication?.imageUrl}
							className="mb-4"
							alt=""
						/>
						<div className="flex items-center gap-x-2 text-xs">
							<p className="rounded-full bg-dawn py-1.5 px-3 font-medium text-white capitalize">
								{post.attributes.publication?.type}
							</p>
							<p className="rounded-full bg-tender py-1.5 px-3 font-medium text-white capitalize">
								{post.attributes.publication?.year}
							</p>
						</div>
						<div>
							<h3 className="mt-4 text-2xl font-semibold leading-6 group-hover:text-gray-600 mb-0">
								<a href={`/research/${post.attributes.slug}`}>
									{post.attributes.title}
								</a>
							</h3>
							{/* {post.attributes.content && (
							<p className="mt-2 leading-6 text-gray-600 line-clamp-3">
								{post.attributes.content}
							</p>
						)} */}
							<a
								href={`/research/${post.attributes.slug}`}
								className="inline-block mt-4 text-mustard font-bold"
							>
								Read More{" "}
								<CgArrowLongRight className="inline-block ml-4" />
							</a>
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
				className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-dawn-500 focus:border-dawn-500 block pl-10 p-2.5 w-full md:w-80"
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
			<option value="">{name}</option>
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};
