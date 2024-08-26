import Markdown from "markdown-to-jsx";
import { termsofservice } from "@/app/utils/termsofservice";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      <HeaderTitle title="Terms of service" />
      <section className="container">
        <div className="prose max-w-full md:mx-44 mt-16">
          <Markdown>{termsofservice}</Markdown>
        </div>
      </section>
    </>
  );
};

export default page;
