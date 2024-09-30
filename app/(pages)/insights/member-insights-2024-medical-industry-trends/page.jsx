/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import RelatedArticle from "@/app/components/RelatedArticle";

export const metadata = {
  title: "Member Insights: 2024 Medical Industry Trends",
  // openGraph: {
  // 	images: 'https://res.cloudinary.com/tbra/image/upload/v1698250891/TBRA-DCRO-Press-Release_bvmzjo.jpg'
  // },
};

const page = () => {
  return (
    <>
      <section className="bg-darkblue bigborder">
        <div className="flex container min-h-[280px] md:min-h-[380px] relative justify-center items-center">
          <img
            src="/images/white-key.png"
            className="absolute left-0 h-[75%] -z-1 opacity-5"
            alt=""
          />
          <div className="md:max-w-[90%] py-16">
            <h1 className="text-4xl md:text-6xl">
              Member Insights: <br />
              <span className="text-white">2024 Medical Industry Trends</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="container mt-16">
        <div className="prose max-w-full lg:mx-16">
          <img
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1727710384/totimehInsight_fcj6ig.jpg"
            className="float-left mr-6 mb-2 w-60"
            alt=""
          />
          <h2>
            &quot;Medical entrepreneurship is going to be more impactful on our
            future than any other industry.&quot;
          </h2>
          <p>
            The future of medical specialty development in Ghana is private. The
            top killers of Ghanaians in the productive age bracket are optimally
            treated by specialists. Medical entrepreneurship is going to be more
            impactful on our future than any other industry. I am privileged to
            contribute my quota in the fastest growing surgical specialty:
            neurosurgery.
          </p>
          <h2>
            &quot;Small, agile surgical specialty centres are the way forward,
            but philanthropic support is key to reducing financial pressures and
            advancing research.&quot;
          </h2>
          <p>
            Small, agile surgical specialty centres are the way to go for now.
            Advocacy for philanthropists who can use corporate initiative to
            fund specific disease interventions and research, reduces the
            financial burdens on these centres, freeing practitioners to hone
            their craft and to train.
          </p>
          <h2>
            &quot;Banks need to innovate and engage with specialists to
            transform healthcare into a value-generating business.&quot;
          </h2>
          <p>
            Financing medical specialty care is the biggest challenge. Banks
            must find new ways of engaging specialists to form multidisciplinary
            groups which can function as businesses, using healthcare to
            generate value.
          </p>
        </div>
        <div className="max-w-2xl lg:mx-16">
          <hr className="my-12 max-w-md h-1 bg-dawn-500" />
          <p className="font-bold mb-4">About the author</p>
          <p className="text-tender text-4xl font-bold">DR TEDDY TOTIMEH</p>
          <p className="font-bold mb-2">
            Consultant Neurosurgeon, Lucca Health Medical Centre
          </p>
          <p>
            Dr Teddy Totimeh is a Consultant Neurosurgeon and Medical Director
            at Lucca Health, specialising in paediatric neurosurgery. He trained
            at the University of Ghana and Korle Bu Teaching Hospital, with a
            fellowship at Alder Hey Children’s Hospital. He is an advocate for
            neurosurgery across Africa, holding leadership roles in
            organisations like the International Society of Paediatric
            Neurosurgery, and serves as a Senior Lecturer in Neuroanatomy.
          </p>
        </div>
      </section>

      <RelatedArticle omit={3} />
    </>
  );
};

export default page;
