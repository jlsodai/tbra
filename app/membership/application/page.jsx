import PaperForm from "@/app/components/PaperForm";

import HeaderTitle from "@/app/sections/HeaderTitle";

const page = () => {
  return (
    <>
      {/* <HeaderTitle title="Upgrade to TBrA Prime" /> */}
      {/* <section className="container my-10" data-aos="fade-up">
        <PaperForm formSlug="tbra-membership-application" />
      </section> */}
      <section className="bg-[#202945] py-16">
        <PaperForm formSlug="membershipapplication" />
      </section>
    </>
  );
};

export default page;
