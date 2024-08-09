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

const perPage = 9;

const generateQuery = (pageNum, featuredId) => ({
  query: `query MyQuery {
    articlesConnection(
      orderBy: publishDate_DESC
      first: ${perPage}
      skip: ${(pageNum - 1) * perPage}
      where: {id_not: "${featuredId}"}
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
        endCursor
      }
      edges {
        node {
          title
          id
          publishDate
          slug
          featuredImage {
            url
          }
          excerpt
        }
      }
      aggregate {
        count
      }
    }
  }`,
});

const page = async ({ searchParams }) => {
  const { articles: featuredArticle } = await fetchHygraph(featuredQuery());

  const pageNum = searchParams.page || 1;
  const { articlesConnection } = await fetchHygraph(
    generateQuery(pageNum, featuredArticle[0].id)
  );
  const { edges: articlesList, pageInfo, aggregate } = articlesConnection;
  const pages = Math.ceil(aggregate.count / perPage);
  const pageItems = Array.from({ length: pages }, (_, index) => index + 1);

  console.log(featuredArticle[0].id);

  return (
    <>
      <HeaderTitle title="News" />
      <section className="my-16" data-aos="fade-up">
        <div className="container">
          {pageNum < 2 ? (
            <>
              {featuredArticle.map((article, i) => (
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
                    {article.excerpt && (
                      <p className="mt-4">{article.excerpt}</p>
                    )}
                    <Link
                      href={`/news/${article.slug}`}
                      className="text-mustard font-bold mt-4"
                    >
                      Read more...
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}

          <div className="news-item grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {articlesList.map((article, i) => (
              <Link
                href={`/news/${article.node.slug}`}
                key={i}
                className="bg-gray-100 hover:bg-tender-200"
              >
                {article.node?.featuredImage?.url && (
                  <img
                    src={article.node.featuredImage.url}
                    className="object-cover h-[250px] w-full"
                    alt={article.node.title}
                  />
                )}
                <div className="p-6">
                  <p>{formattedDate(article.node.publishDate)}</p>
                  <h1 className="font-libreb font-bold text-xl text-dusk mt-2">
                    {article.node.title}
                  </h1>
                  {/* <p className="text-mustard font-bold mt-4">Read more...</p> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="container flex justify-center">
          {/* Pagination */}

          <div className={`mt-8 md:mt-16 flex justify-center`}>
            <nav aria-label="Page navigation example">
              <ul className="list-style-none flex gap-2">
                {pageNum > 1 && (
                  <li>
                    <Link
                      href={`/news?page=${pages - 1}`}
                      className={`hidden md:inline-block rounded py-1.5 px-3 
                        }`}
                    >
                      Previous
                    </Link>
                  </li>
                )}

                {pageItems.map((i) => (
                  <li key={i}>
                    <Link
                      href={`/news?page=${i}`}
                      className={`rounded py-1.5 px-3 hover:bg-dawn-500 ${
                        pageNum == i && "bg-dawn-500"
                      }`}
                    >
                      {i}
                    </Link>
                  </li>
                ))}

                {pageNum < pages && (
                  <li>
                    <Link
                      href="#"
                      className={`hidden md:inline-block rounded py-1.5 px-3 hover:bg-dawn-500 pointer-events-none`}
                    >
                      Next
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
