/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { createClient } from "@/app/lib/contento";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }, parent) {
  // read route params
  const post = await createClient(draftMode().isEnabled)
    .getContentBySlug(params.slug, "news")
    .catch(() => {
      notFound();
    });

  return {
    title: post.fields.title.text,
  };
}

const page = async ({ params }) => {
  const post = await createClient(draftMode().isEnabled)
    .getContentBySlug(params.slug, "news")
    .catch(() => {
      notFound();
    });
  const fields = post.fields;

  // console.log(fields.content);

  return (
    <>
      <HeaderTitle title="Press Release" />
      <section className="container mt-16">
        <div className="prose max-w-full lg:mx-16">
          <div className="flex items-center">
            <div className="">
              <h1>{fields.title.text}</h1>
            </div>
            {fields.logo.assets[0] && (
              <img
                alt="ARC logo"
                className="mt-0 ml-16 self-baseline -sm:hidden"
                src={fields.logo.assets[0]?.asset.url}
                width="200px"
              />
            )}
          </div>
          <div className="news-content">
            <div className="md:float-right bg-gray-50 border border-gray-400 p-4 md:ml-8 md:mb-4 w-[300px]">
              {fields.profiles.blocks.map((profile, i) => (
                <div className={`${i ? "mt-4" : ""}`} key={i}>
                  <img
                    key={i}
                    alt={profile.fields.title.text}
                    src={profile.fields.profile_image.assets[0]?.asset.url}
                    className="m-0"
                  />
                  <p className="text-center my-0">
                    {profile.fields.title.text}
                  </p>
                </div>
              ))}
            </div>
            <Markdown>{fields.content.text}</Markdown>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
