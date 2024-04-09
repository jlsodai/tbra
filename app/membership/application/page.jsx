import PaperForm from "@/app/components/PaperForm";

import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      <section className="bg-[#202945] py-16">
        <PaperForm formSlug="membershipapplication" />
      </section>
    </>
  );
};

export default page;
