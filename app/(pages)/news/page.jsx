/* eslint-disable @next/next/no-img-element */

import HeaderTitle from "@/app/sections/HeaderTitle";
import { fetchHygraph } from "@/app/lib/gquery";
import Link from "next/link";
import { formattedDate } from "@/app/lib/utils";

const featuredQuery = () => ({
  query: `query MyQuery {
        articles(orderBy: publishDate_DESC, first: 1) {
            title
            id
            publishDate
            slug
            featuredImage {
              url
            }
            excerpt
        }
    }`,
});

const generateQuery = () => ({
  query: `query MyQuery {
        articles(orderBy: publishDate_DESC, skip: 1) {
            title
            id
            publishDate
            slug
            featuredImage {
              url
            }
            excerpt
        }
    }`,
});

const page = async () => {
  const { articles } = await fetchHygraph(generateQuery());
  const { articles: featuredArticles } = await fetchHygraph(featuredQuery());

  // console.log(articles);

  return (
    <>
      <HeaderTitle title="News" />
      <section className="my-16" data-aos="fade-up">
        <div className="container">
          {featuredArticles.map((article, i) => (
            <div
              key={i}
              className="featured-news grid md:grid-cols-2 items-center"
            >
              {article?.featuredImage?.url && (
                <img
                  src={article.featuredImage.url}
                  className="object-cover h-[400px] w-full"
                  alt={article.title}
                />
              )}
              <div className="flex flex-col justify-between h-full p-12 lg:p-16 bg-gray-100 md:order-first">
                <p>{formattedDate(article.publishDate)}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="font-libreb font-bold text-xl lg:text-2xl text-dusk mt-4"
                >
                  {article.title}
                </Link>
                {article.excerpt && <p className="mt-4">{article.excerpt}</p>}
                <Link
                  href={`/news/${article.slug}`}
                  className="text-mustard font-bold mt-4"
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}

          <div className="news-item grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {articles.map((article, i) => (
              <Link
                href={`/news/${article.slug}`}
                key={i}
                className="bg-gray-100 hover:bg-tender-200"
              >
                {article?.featuredImage?.url && (
                  <img
                    src={article.featuredImage.url}
                    className="object-cover h-[250px] w-full"
                    alt={article.title}
                  />
                )}
                <div className="p-6">
                  <p>{formattedDate(article.publishDate)}</p>
                  <h1 className="font-libreb font-bold text-xl text-dusk mt-2">
                    {article.title}
                  </h1>
                  {/* <p className="text-mustard font-bold mt-4">Read more...</p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
