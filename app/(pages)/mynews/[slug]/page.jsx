/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { fetchHygraph } from "@/app/lib/gquery";
import { notFound } from "next/navigation";

const generateQuery = ({ slug }) => ({
  query: `query MyQuery {
        article(where: {slug: "${slug}"}) {
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

const Page = async ({ params }) => {
  const { article } = await fetchHygraph(generateQuery(params));
  console.log(article);
  if (!article) return notFound();

  return (
    <>
      <HeaderTitle title="Press Release" />
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
            <div className="leftalign rightalign centeralign blockquote"></div>
            <div
              className={`${article.imageAlignment || ""}`}
              dangerouslySetInnerHTML={{ __html: article.content.html }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
