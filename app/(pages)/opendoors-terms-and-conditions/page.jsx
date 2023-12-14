import Markdown from "markdown-to-jsx";
import { odtocs } from "@/app/utils/odtocs";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      <HeaderTitle title="Open Doors Terms and Conditions" />
      <section className="container">
        <div className="prose max-w-full md:mx-44 mt-16">
          <Markdown>{odtocs}</Markdown>
        </div>
      </section>
    </>
  );
};

export default page;
