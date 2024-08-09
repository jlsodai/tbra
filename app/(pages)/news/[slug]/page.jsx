/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { fetchHygraph } from "@/app/lib/gquery";
import { notFound } from "next/navigation";
import Link from "next/link";

const generateQuery = ({ slug }) => ({
  query: `query MyQuery {
    article(where: {slug: "${slug}"}) {
      heading
      id
      publishDate
      title
      logo {
        url
      }
      profiles {
        profileName
        profilePicture {
          url
        }
      }
      content {
        html
        markdown
      }
      imageAlignment
    }
  }`,
});

const generateNextQuery = (date, id) => ({
  query: `query relatedArticles {
    articles(
      orderBy: publishDate_DESC
      first: 1
      where: {publishDate_gte: "${date}", id_not: "${id}"}
    ) {
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

const generatePreviousQuery = (date, id) => ({
  query: `query relatedArticles {
    articles(
      orderBy: publishDate_DESC
      first: 1
      where: {publishDate_lte: "${date}", id_not: "${id}"}
    ) {
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

const Page = async ({ params }) => {
  const { article } = await fetchHygraph(generateQuery(params));
  const { articles: nextArticle } = await fetchHygraph(
    generatePreviousQuery(article.publishDate, article.id)
  );
  const { articles: previousArticle } = await fetchHygraph(
    generatePreviousQuery(article.publishDate, article.id)
  );

  if (!article) return notFound();

  return (
    <>
      <HeaderTitle title={article.heading || "News"} />

      <section className="container mt-16">
        <div className="prose max-w-full lg:mx-16">
          <div className="flex items-center">
            <div className="">
              <h1>{article.title}</h1>
            </div>
            {article.logo?.url && (
              <img
                alt="ARC logo"
                className="mt-0 ml-16 self-baseline -sm:hidden"
                src={article.logo.url}
                width="200px"
              />
            )}
          </div>
          <div className="news-content">
            {article.profiles.length ? (
              <div className="md:float-right bg-gray-50 border border-gray-400 p-4 md:ml-8 md:mb-4 w-[300px]">
                {article.profiles.map((profile, i) => (
                  <div className={`${i ? "mt-4" : ""}`} key={i}>
                    <img
                      key={i}
                      alt={profile.profileName}
                      src={profile.profilePicture.url}
                      className="m-0"
                    />
                    <p className="text-center my-0">{profile.profileName}</p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            <div className="leftalign rightalign centeralign blockquote"></div>
            <div className={`${article.imageAlignment ?? "centeralign"}`}>
              <div
                dangerouslySetInnerHTML={{ __html: article.content.html }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div>
              {nextArticle.length && (
                <Link
                  className="rounded py-1.5 px-3 hover:bg-dawn-500 bg-dawn-500 no-underline"
                  href={`/news/${previousArticle[0].slug}`}
                >
                  ← Previous
                </Link>
              )}
            </div>
            <div>
              <Link href="/news" className="rounded py-1.5 px-3 underline">
                View all articles
              </Link>
            </div>
            <div>
              {previousArticle.length && (
                <Link
                  className="rounded py-1.5 px-3 hover:bg-dawn-500 bg-dawn-500 no-underline"
                  href={`/news/${previousArticle[0].slug}`}
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
