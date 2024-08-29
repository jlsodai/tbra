/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import RelatedArticle from "@/app/components/RelatedArticle";

export const metadata = {
  title: "Board Journeys: Marjorie Ngwenya da Silva",
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
            <h1 className="text-4xl md:text-6xl">Board Journeys</h1>
          </div>
        </div>
      </section>
      <section className="container mt-16">
        <p className="text-center text-3xl md:text-6xl text-tender font-thin">
          Marjorie Ngwenya da Silva&apos;s Board Journey
        </p>

        <div className="h-[2px] mx-auto max-w-[400px] bg-mustard my-12"></div>

        <div className="max-w-5xl grid md:grid-cols-[3fr_5fr] md:p-8 mx-auto md:gap-8 bg-[#F4F4F5] mb-16">
          <div className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1724854316/Majorie__xdk0t0.jpg')] bg-cover bg-center relative">
            <p className="absolute bottom-0 text-white bg-darkblue bg-opacity-75 p-4">
              External Member, Prudential Regulation Committee, Bank of England
            </p>
          </div>
          <div className="font-libreb text-md md:text-3xl p-8 bg-[#EBE5DB]">
            <img
              className="float-left mr-4"
              width="35px"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:A6A6A6,e_colorize:100,a_hflip/v1718114500/QuoteMark_xyjb2g.png"
              alt=""
            />
            Transitioning from executive management to board leadership came
            earlier than I anticipated. By openly sharing my aspirations and
            leveraging my network, I was able to secure valuable opportunities
            and build a diverse board portfolio across different sectors and
            regions.
          </div>
        </div>
        <div className="prose max-w-full lg:mx-16">
          <h2>Summary/Timeline of Board Experience to Date</h2>
          <p>
            <b>Current:</b>
          </p>
          <ul>
            <li>
              External Member, Prudential Regulation Committee, Bank of England
              (UK)
            </li>
            <li>
              Member, Audit &amp; Assurance Group, Hymans Robertson LLP (UK)
            </li>
            <li>Trustee, Canon Collins Trust (UK)</li>
            <li>NED, Legal Resources Centre (South Africa)</li>
            <li>Advisor, United Against Malnutrition and Hunger (UK)</li>
            <li>Advisor, Unisure Ltd (UK)</li>
            <li>
              Advisor, Corporate Board, Hult International Business School (UK)
            </li>
          </ul>
          <p>
            <b>Former roles:</b>
          </p>
          <ul>
            <li>Chairperson, Canon Collins Trust (UK)</li>
            <li>Chairperson, Institute and Faculty of Actuaries (UK)</li>
            <li>
              NED and Committee Chair, Tangerine Financial (UK) and Tangerine
              Life (Nigeria)
            </li>
            <li>
              NED and Committee Chair, Rand Mutual Assurance (South Africa)
            </li>
            <li>NED and Committee Chair, Bidvest Life/FMI (South Africa)</li>
            <li>NED and Committee Member, African Bank (South Africa)</li>
            <li>NED, South African Maths Foundation (South Africa)</li>
            <li>NED, Common Purpose International (UK)</li>
          </ul>
          <h2>What initially drew you to pursue board leadership?</h2>
          <p>
            I had always imagined I would be a board director at the end of my
            career, but the opportunity presented itself much sooner, about
            seven years ago, after I transitioned out of executive management
            roles. I wanted to lend my experience to organisations in a
            strategic way, and I was pleased to also gain flexibility in my work
            schedule.
          </p>
          <h2>
            What were the foundational steps you took in your journey towards
            your first board appointment?
          </h2>
          <p>
            Shortly after leaving my executive position, I was approached by
            headhunters in the financial services sector. My network played a
            crucial role, as contacts within it had informed the headhunters
            that I was open to board opportunities, leading to valuable
            introductions. Additionally, former colleagues reached out with
            positions they thought might interest me. While it might seem that
            these open doors appeared fortuitously, I believe that voicing my
            aspirations to people close to these opportunities got the ball
            rolling.
          </p>
          <h2>
            How have you built and diversified your board portfolio over the
            years?
          </h2>
          <p>
            Since securing my first board position, I have taken on various
            roles across the financial services and charity sectors, as well as
            in different geographic regions. To diversify my portfolio,
            I&apos;ve proactively expanded my connections with search firms in
            multiple countries, joined relevant membership bodies, and
            participated in conferences where I had to establish new networks
            from scratch. Additionally, I&apos;ve received invitations from
            within my existing networks, thanks to consistently sharing my
            aspirations and future goals.
          </p>
          <h2>
            Could you highlight one or two key milestones in your board career
            and how you achieved them?
          </h2>
          <p>
            My current role with the Bank of England is a significant career
            milestone. Serving on the Prudential Regulation Committee, which is
            a statutory committee similar to the Monetary Policy Committee, we
            are responsible for making the most critical decisions of the
            Prudential Regulation Authority (PRA). The PRA&apos;s primary
            objective is to ensure the safety and soundness of PRA-regulated
            firms.
          </p>
          <p>
            I was informed about the vacancy by a headhunter firm handling the
            mandate and decided to apply. The interview and selection process
            was rigorous, spanning nearly a year and culminating in a hearing
            before the HM Treasury Select Committee. It was, without a doubt,
            the most challenging interview process of my life. The work we do
            directly impacts the UK&apos;s financial sector, it is both weighty
            work and an honour to be a part of this committee. I believe my
            sector-relevant board and executive experience, along with my
            diverse geographical exposure, made me a strong candidate for this
            role.
          </p>
          <p>
            Another milestone was my election as President of the Institute and
            Faculty of Actuaries (IFoA). At the time, I was the youngest person
            ever to hold the position, and by a significant margin. I was also
            the third woman and the first person of colour to serve as President
            in the organisation&apos;s nearly two-century history.
          </p>
          <p>
            My election came as a surprise given my career stage, and I wish I
            could say I took deliberate steps to achieve it. However, I believe
            that the trust I built with my peers and my years of service as an
            IFoA volunteer, including my time on the Council, were crucial in
            earning their confidence and ultimately securing the role.{" "}
          </p>
          <h2>
            What advice would you give to someone aspiring to their first board
            position?
          </h2>
          <p>
            Focus on building genuine relationships and connections, especially
            with people in fields that interest you. Approach networking with
            curiosity rather than with an agenda, transactional networking can
            be draining and often doesn&apos;t yield the desired results. As you
            engage in these conversations, make your aspirations known and be
            open to what opportunities may arise. Additionally, take the time to
            understand what skills and experiences boards are currently seeking,
            and position yourself accordingly to meet those needs.
          </p>
        </div>

        <div className="h-[2px] mx-auto max-w-[400px] bg-mustard my-16"></div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[2fr_3fr]">
          <div className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1719399608/CVImg_wf70st.jpg')] bg-cover">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1719399608/CVImg_wf70st.jpg"
              className="w-full md:hidden aspect-square object-cover"
              alt=""
            />
          </div>
          <div className="bg-darkblue p-8">
            <h2 className="text-white mb-4 leading-normal text-xl md:text-3xl">
              Need to craft a distinctive value proposition for your Executive
              CV?
            </h2>
            <p className="text-white text-2xl font-thin">Let us assist you</p>

            <Link
              href="/professional-development#cv"
              className="text-white btn bg-mustard mt-8"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
