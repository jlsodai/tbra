import PaperForm from "@/app/components/PaperForm";
import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      <HeaderTitle title="Open Doors Application" />
      <section className="container my-10" data-aos="fade-up">
        <PaperForm formSlug="open-doors-2025-interest-form" />
      </section>
    </>
  );
};

export default page;
