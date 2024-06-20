import FAQAccordion from "@/app/components/FAQAccordion";
import HeaderTitle from "@/app/sections/HeaderTitle";
import { maleFaqs } from "@/app/utils/options";

const page = () => {
  return (
    <>
      <HeaderTitle title="Frequently Asked Questions" />
      <section className="container mt-16">
        <FAQAccordion faqs={maleFaqs} />
      </section>
    </>
  );
};
export default page;
