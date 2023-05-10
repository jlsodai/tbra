import HeaderTitle from "@/app/sections/HeaderTitle";
import { fetchData } from "@/app/lib/fetchData";
import Markdown from "markdown-to-jsx";
import Venngage from "@/app/components/Venngage";

const page = async ({ params }) => {
	const data = await fetchData(
		`publications?populate=*&filters[slug][$eq]=${params.slug}`
	);
	const post = data.data[0]?.attributes;

	return (
		<>
			{post ? (
				<>
					<HeaderTitle title={post.title} />
					<section>
						<div className="container mt-16">
							{post.publication?.type === "infographic" ? (
								<Venngage
									code={post.publication.venngageCode}
								/>
							) : (
								<>
									<div className="prose max-w-full md:mx-44">
										<Markdown>
											{post.publication?.content}
										</Markdown>
									</div>
									{post.publication?.pdfUrl && (
										<div className="text-center">
											<a
												target="_blank"
												className="btn font-normal text-white mt-8 rounded"
												href={post.publication?.pdfUrl}
											>
												Download report
											</a>
										</div>
									)}
								</>
							)}
						</div>
					</section>
				</>
			) : (
				<p>No Article Found</p>
			)}
		</>
	);
};
export default page;
