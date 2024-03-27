/* eslint-disable @next/next/no-img-element */
import Markdown from "markdown-to-jsx";
import { pressrelease } from "@/app/utils/pressrelease";
import HeaderTitle from "@/app/sections/HeaderTitle";

export const metadata = {
  title:
    "African Risk Capacity Limited welcomes two new non-executive directors",
  //   openGraph: {
  //     images:
  //       "https://res.cloudinary.com/tbra/image/upload/v1698250891/TBRA-DCRO-Press-Release_bvmzjo.jpg",
  //   },
};

const page = () => {
  return (
    <>
      <HeaderTitle title="Press Release" />
      <section className="container mt-16">
        <div className="prose max-w-full lg:mx-16">
          <div className="flex items-center">
            <div className="">
              <h1>
                African Risk Capacity Limited welcomes two new non-executive
                directors
              </h1>
            </div>
            <img
              alt="ARC logo"
              className="mt-0 ml-16 self-baseline -sm:hidden"
              src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1711462722/ARC-Logo_web_4_mbokf7.png"
              width="200px"
            />
          </div>
          {/* <Markdown>{pressrelease}</Markdown> */}
          <div className="news-content">
            <div className="md:float-right bg-gray-50 border border-gray-400 p-4 md:ml-8 md:mb-4 w-[300px]">
              <img
                alt="Susan Kasinga"
                src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1711531322/susan_ixerow.jpg"
                className="m-0"
              />
              <p className="mt-2">Susan Kasinga</p>
              <img
                alt="Helen Amarquaye"
                src="https://res.cloudinary.com/dhhw72iwq/image/upload/v1711531322/helen_zrrj1y.jpg"
                className="m-0"
              />
              <p className="mt-2 mb-0">Helen Amarquaye</p>
            </div>
            <p>
              <strong>JOHANNESBURG, 12 March 2024</strong> – African Risk
              Capacity (ARC) Limited has appointed Susan Kasinga and Helen
              Amarquaye as non-executive directors to its Board. Both women
              bring specialised technical experience in finance and insurance
              with them.
            </p>
            <p>
              Susan Kasinga has over 30 years of experience in the financial
              industry and is a certified public accountant (CPA), certified
              public secretary (CS), and certified executive coach. She has
              expertise in raising capital through debt or equity for privately
              and publicly quoted companies. She also has a demonstrated track
              record of delivering growth, transformation, and return on
              investment for various stakeholders, including investors,
              shareholders, and pensioners.
            </p>
            <p>
              Susan has been a director on the boards of nine blue-chip
              companies over the past seven years. She is a former chair of CIC
              Asset Management and currently chairs the Audit Committee for UAP
              Insurance, Bank of Africa, and QBS Ltd.
            </p>
            <p>
              Susan has been a director on the boards of nine blue-chip
              companies over the past seven years. She currently chairs the
              audit and risk committee of Old Mutual General Insurance Kenya and
              the audit committee of QualiBasic Seed Company Limited. She is
              also a former chair of CIC Asset Management.
            </p>
            <p>
              She currently chairs the audit and risk committee of Old Mutual
              General Insurance Kenya and the audit committee of QualiBasic Seed
              Company Limited.
            </p>
            <p>
              Helen Amarquaye is a risk management and compliance professional
              with over 25 years of cross-industry experience in the insurance,
              telecommunications, and fast-moving consumer goods (FMCG)
              industries. She is also a qualified chartered insurer through the
              UK&apos;s Chartered Insurance Institute.
            </p>
            <p>
              Helen has held various senior management, risk management,
              underwriting, and audit roles across multiple organisations in the
              UK and Ghana, including her current role as the Board Chair for
              Old Mutual Insurance Ghana. She was formerly the controls,
              compliance, and ethics director at Guinness Ghana Breweries Plc,
              part of the Diageo group.
            </p>
            <p>
              &quot;We are pleased to welcome Susan and Helen to our Board of
              Directors. Their wealth of experience, unique expertise and
              understanding of our operating environment form a rare combination
              and will serve to complement the strength of our Board,” says ARC
              Ltd. CEO Lesley Ndlovu. “Their appointments also further reinforce
              our commitment to fostering diversity and inclusivity at the
              highest levels of leadership. We look forward to their strategic
              guidance and valuable contributions.&quot;
            </p>
            <p>
              TheBoardroom Africa was enlisted to fulfil the mandate of these
              appointments due to the recruitment company&apos;s expert, diverse
              approach to searching for talent. It is dedicated to promoting
              exceptional African talent to board and executive positions
              globally.
            </p>
            <p>
              The collaboration with ARC Ltd. for these recent appointments
              comes less than a year after the successful placement of two other
              non-executive directors on the Board.
            </p>
          </div>

          <hr className="bg-gray-700 h-[1px]" />

          <p>
            For more information about The African Risk Capacity (ARC) Limited,
            or to arrange an interview, please contact Sonnette at{" "}
            <a target="_blank" href="mailto:sonnette@bigambitions.co.za">
              sonnette@bigambitions.co.za
            </a>
            .
          </p>
          <p>
            <strong>About ARC Ltd.</strong>
          </p>
          <p>
            The African Risk Capacity Limited (ARC Ltd.) is a financial
            affiliate of the African Risk Capacity (ARC) Group, a specialised
            agency of the African Union (AU), an initiative designed to improve
            current responses to climate-related food security emergencies.
          </p>
          <p>
            ARC Ltd. is a mutual insurance facility comprised of its members,
            which have included Kenya, Mauritania, Niger, Senegal, Mali, Malawi,
            the Gambia, Burkina Faso, Chad, Zimbabwe, Togo, Madagascar, and
            Zambia.
          </p>
          <p>
            The membership also includes its capital contributors who have
            provided premium subsidies, including USAID, FCDO, SDC, KFW/BMZ,
            IFAD, AFDB, WFP and START NETWORK.
          </p>
          <p>
            <strong>About TheBoardroom Africa</strong>
          </p>
          <p>
            TheBoardroom Africa (TBrA) is the region&apos;s premier business
            dedicated to promoting exceptional, diverse talent to board and
            executive positions in Africa and across the globe. We are
            especially committed to addressing underrepresentation in leadership
            roles and transforming the presence and influence of African talent
            on a global stage. Our services are unique and comprehensive,
            offering a one-stop solution for talented executives seeking to
            advance their leadership careers and a sanctuary for businesses
            needing support in transforming their leadership spaces.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
