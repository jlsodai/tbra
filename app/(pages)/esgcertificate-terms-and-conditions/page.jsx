import Markdown from "markdown-to-jsx";
import { esgtacs } from "@/app/utils/esgtacs";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      <HeaderTitle title="ESG Certificate Terms & Conditions" />
      <section className="container">
        <div className="prose max-w-full md:mx-44 mt-16">
          <Markdown>{esgtacs}</Markdown>
        </div>
      </section>
    </>
  );
};

export default page;
