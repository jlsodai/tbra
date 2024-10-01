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
            src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1727791965/totimeh1_tlpuyk.jpg"
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
            impactful on our future than any other industry.
          </p>
          <p>
            I am privileged to contribute my quota in the fastest growing
            surgical specialty: neurosurgery. There are only 26 neurosurgeons
            for 36 million people in Ghana, but the top killers of young people
            at the moment include conditions that need neurosurgeons for good
            outcomes. Lifestyle changes with attendant increased motor vehicular
            movement and sedentariness, have pushed hypertensive haemorrhage and
            traumatic brain injury into the top causes of mortality for a young
            population.
          </p>
          <p>
            Ghana has the special privilege in our subregion, of being a go-to
            place for all West Africa. Developing a medical industry therefore,
            is mainly for a market that is West Africa-wide and not limited to
            our borders. This profitability therefore, bypasses the economic
            variables that our country has, because compensation for this
            service is usually going to be in dollars. The medical industry
            therefore has the potential to bring in foreign exchange with
            minimal input, because most of the infrastructure and personnel
            needed to develop high end specialty medical care exists.
          </p>
          <h2>
            &quot;Entrepreneurs must invest into advocacy that tells the story
            of good health care in ways that big business finds inviting.&quot;
          </h2>
          <p>
            Small, agile surgical specialty centres are the way to go for now.
            Advocacy for philanthropists who can use corporate initiative to
            fund specific disease interventions and research, reduces the
            financial burdens on these centres, freeing practitioners to hone
            their craft and to train.
          </p>
          <p>
            The difficulty with capital in Ghana springs from an economy in
            which the government has crowded out formal businesses, overwhelming
            investors with tax regimes that mandate returns in irrespective of
            profit or loss. There is a general apprehension with funding
            especially greenfield projects, but this is mainly fueled by
            ignorance about the profitability of health, and the dire picture of
            zero progress portrayed by public hospitals.
          </p>
          <p>
            Entrepreneurs must invest into advocacy that tells the story of good
            health care in ways that big business finds inviting. In addition,
            advocacy must delve into the hearts of a public that is used to
            putting more of their money into the funeral industry than into
            healthcare. The message of specialised health care and its impact
            must be amplified, to compete with the deafening sound of herbalist
            and charlatans.
          </p>
          <p>
            I produce a radio programme which is dedicated to health, and is the
            only 30 minute session of its type in prime time on a breakfast show
            of a major station in Accra. It is self-financed at the moment and
            delves into the science of medicine, explaining various trends of
            medical practice, and the implications of lifestyle and behaviour on
            health and wellness. It is a rewarding period of the week and a lot
            of interesting discussions on multiple health matters focus on the
            power of knowledge of health matters. Generating an awareness of the
            power of good health care is important fuel for an ecosystem of
            wellness.
          </p>
          <p>
            As much as training is needed for curative medicine, even more
            attention must be put on the preventive aspects that ensure minimal
            expenditure for optimal health. In an environment where very little
            structure exists for institutions to optimise health care delivery,
            it is important that entrepreneurs build ecosystems that sustain
            centres of excellence that treat illness in capital efficient ways.
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
          <p>
            A lot of the money that is being invested into health care at the
            moment, especially in the private sector, is put into building and
            equipping, and not enough is put into human resource development.
            This wrong prioritisation of capital investment creates medical
            shells with the word hospital inscribed on their outer walls, devoid
            of social impact. There are all kinds of explanations given for this
            vacuum of care, top among these is the lack of money.
          </p>
          <p>
            The true reasons however lie somewhere between a lack of innovation
            for human resource management and a lack of knowledge of the
            principles that prosper medical technology into well oiled machines
            that make more money than entire countries. There is a role in this
            process that only medical professionals can play. There are certain
            trends in medical treatment and its industry that only practitioners
            can identify and capitalise on.
          </p>
          <p>
            Only in such partnerships can capital injection be harnessed for
            growth of medical services which meet a significant need in ways
            that can be monetised. Only such partnerships will bring the capital
            and the expertise together in synergistic ways that create value.
            Our banking sector must grow and evolve to see healthcare in new
            ways. Only the weapons industry is bigger than the healthcare
            industry in the developed world. Our banks must investigate the
            reasons why, and actualise this success in our context.
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
