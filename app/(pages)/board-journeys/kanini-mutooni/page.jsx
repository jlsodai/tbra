/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";
import Link from "next/link";
import RelatedArticle from "@/app/components/RelatedArticle";

export const metadata = {
  title: "Board Journeys: 2024 Management Consultancy Industry Trends",
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
          Kanini Mutooni&apos;s Board Journey
        </p>

        <div className="h-[2px] mx-auto max-w-[400px] bg-mustard my-12"></div>

        <div className="max-w-5xl grid md:grid-cols-[3fr_5fr] p-8 mx-auto md:gap-8 bg-[#F4F4F5] mb-16">
          <div className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1719396919/Kanini_wjjsuw.jpg')] bg-cover bg-left-bottom">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1719396919/Kanini_wjjsuw.jpg"
              className="w-full md:hidden"
              alt=""
            />
          </div>
          <div className="font-libreb text-2xl md:text-3xl p-8 bg-[#EBE5DB]">
            <img
              className="float-left mr-4"
              width="35px"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/co_rgb:A6A6A6,e_colorize:100,a_hflip/v1718114500/QuoteMark_xyjb2g.png"
              alt=""
            />
            Diversification is key in any board journey and my advice is that
            once one is able to identify their value proposition at board level,
            those skills then become highly transferable irrespective of the
            sector that the organisation represents.
          </div>
        </div>
        <div className="prose max-w-full lg:mx-16">
          <h2>Summary of board experience to date</h2>
          <p>
            My board experience spans over 12 years and started off in the
            non-profit world and eventually led me to listed corporate boards.
            My board journey has been gradual and I currently chair 3
            organisations as well as Chair the Audit and Nominations committees
            of these organisations. I cover Telcoms, Agriculture, Insurance and
            the early stage fintech sector in both Africa, Europe and the US. My
            greatest impact has been in the early stage sector where I have
            supported over 15 organisations build up their boards and improve
            their governance as they grow and scale.
          </p>
          <h2>
            Can you share what initially drew you to pursue board leadership?
          </h2>
          <p>
            I&apos;m excited about strategy and supporting the management of an
            organisation to identify risks and innovative strategies to help
            them succeed. Board leadership exposes me to multiple industries and
            networks that I wouldn&apos;t have had access to. I feel completely
            comfortable in a boardroom set-up and believe that I add real value
            in the boards that I serve.
          </p>
          <h2>
            What were the foundational steps you took in your journey towards
            your first board appointment?
          </h2>
          <p>
            My foundational steps were mainly around talking to my mentor circle
            and understanding what it takes to be a high impact board member.
            When I joined my first board I watched seasoned members and
            understood the best way to be effective in a board setting. I also
            took steps to understand which forums I had to join in order to find
            board roles that were a good fit for my experience and growth path.
            My first boards were in the non-profit sector and served to hone my
            board competencies and allow me to understand how best I could
            create impact in the boardroom.
          </p>
          <h2>
            How have you built and diversified your board portfolio over the
            years?
          </h2>
          <p>
            I look out for boards in new thematic areas and just apply for them.
            My focus over the last 2 years has been the corporate listed boards
            and I have been lucky to join 2 listed companies. I started off
            serving in non-profits boards then graduated to serving in boards in
            the early stage ecosystem and continued to diversify my portfolio to
            listed corporate boards. Diversification is key in any board journey
            and my advice is that once one is able to identify their value
            proposition at board level, those skills then become highly
            transferable irrespective of the sector that the organisation
            represents.
          </p>
          <h2>
            From your experience, what are some unexpected insights you&apos;ve
            gained from serving on different boards?
          </h2>
          <ul>
            <li>
              Emotional intelligence is the most important board quality not the
              level of one&apos;s qualifications, age or experience.
            </li>
            <li>
              The most effective board Chair listens more than they speak. The
              role of a board Chair is exactly that: to be the ear of the board.
            </li>
            <li>
              Risk-aware boards are rare and most boards focus on the rear view
              mirror rather than looking at future emergent risks and asking
              what it is that will come up to bite them next.
            </li>
          </ul>

          <h2>
            How has serving on boards impacted your personal and professional
            development?
          </h2>

          <p>
            The key result of serving on boards for the last 11 years has been
            that my networks have expanded exponentially and I&apos;m also very
            comfortable helping set up and challenge strategy. I also bring rich
            experience to my day job as a result of the boards that I serve on,
            plus I have learned to manage my time skillfully to be effective in
            my day job and my board roles. Finally, my personal brand has grown
            over the last 11 years as a result of the boards I have served on
            and I feel that I have personally grown and learned to listen and
            interact with all manner of individuals as a result.
          </p>
        </div>

        <div className="h-[2px] mx-auto max-w-[400px] bg-mustard my-16"></div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[2fr_3fr]">
          <div className="bg-[url('https://res.cloudinary.com/dhhw72iwq/image/upload/v1719399608/CVImg_wf70st.jpg')] bg-cover">
            <img
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1719399608/CVImg_wf70st.jpg"
              className="w-full md:hidden"
              alt=""
            />
          </div>
          <div className="bg-darkblue p-8">
            <h2 className="text-white mb-4 leading-normal text-3xl">
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
