/* eslint-disable @next/next/no-img-element */

import HeaderTitle from "@/app/sections/HeaderTitle";
import { fetchHygraph } from "@/app/lib/gquery";
import Link from "next/link";

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
        articles(orderBy: publishDate_DESC, first: 5, skip: 1) {
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
        <div className="container md:px-44">
          {featuredArticles.map((article, i) => (
            <div
              key={i}
              className="featured-news grid grid-cols-2 gap-16 items-center"
            >
              {article?.featuredImage?.url && (
                <img
                  src={article.featuredImage.url}
                  className="object-cover h-[300px] w-full"
                  alt={article.title}
                />
              )}
              <div className="">
                <h1 className="font-libreb font-bold text-2xl text-dusk">
                  {article.title}
                </h1>
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

          <div className="news-item grid grid-cols-2 gap-16 items-center mt-16">
            {articles.map((article, i) => (
              <div key={i}>
                {article?.featuredImage?.url && (
                  <img
                    src={article.featuredImage.url}
                    className="object-cover h-[300px] w-full"
                    alt={article.title}
                  />
                )}
                <div className="mt-4">
                  <h1 className="font-libreb font-bold text-2xl text-dusk">
                    {article.title}
                  </h1>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-mustard font-bold mt-4"
                  >
                    Read more...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
