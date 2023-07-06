/* eslint-disable @next/next/no-img-element */
const RolesPage = () => {
  return (
    <section className="lg:py-16 bg-gray-50">
      <div className="container p-8 lg:p-20 lg:border border-gray-400 rounded-lg max-w-5xl bg-white">
        <div className="flex justify-between items-start">
          <img
            src="/images/logo-primary.svg"
            className="h-8 lg:h-12"
            alt="Logo"
          />
          <img
            src="https://norsadcapital.com/wp-content/uploads/2022/08/nc-logo-retina.png"
            alt="Logo"
            className="h-8 lg:h-12"
          />
        </div>
        <div className="mt-12">
          <h2 className="mb-4">Norsad Capital</h2>
          <p>1 Non-Executive Director</p>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Company Background</h2>
          {/* <div className="prose max-w-full md:mx-44"> */}
          <p>
            Norsad was first established in 1990, a collaboration between the
            Nordic and Southern African Development Community (SADC)
            governments, and operates as a multilateral agency based in Lusaka,
            Zambia. In 2011, Norsad transformed into a limited liability
            company, Norsad Finance, incorporated in Botswana and accredited by
            the International Financial Services Centre. It rebranded to Norsad
            Capital in 2022 in line with the strategy to scale and deepen its
            impact in Africa.
          </p>
          <br />
          <p>
            Norsad Capital is an impact investor and private credit provider
            offering debt and mezzanine finance to mid-market growth companies
            in Africa. Its purpose is to build a better Africa by supporting the
            growth of profitable African companies through tailor-made debt
            finance solutions, enabling them to have substantial and ongoing
            social impact through the services and employment they provide. This
            is driven by an aspiration to positively impact the lives of 100
            million Africans by 2030.
          </p>
          <br />
          <p>
            Norsad Capital is searching for
            <b> 1 (one) Non-Executive Director</b> to join their board as a
            replacement for a retired director.
          </p>
          {/* </div> */}
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Current Board Composition</h2>
          <p>
            The board currently consists of 7 board members; 2 Co-Chairs and 5
            Non-Executive Directors.
          </p>
          <ul className="list-disc ml-8 mt-4">
            <li>
              <b>Dr. Frannie Léautier</b>, Board Chair
            </li>
            <li>
              <b>Jacob Hagerman</b>, Non-Executive Director
            </li>
            <li>
              <b>Jørgen Høholt</b>, Independent Non-Executive Director
            </li>
            <li>
              <b>Molefi Leqhaoe</b>, Non-Executive Director
            </li>
            <li>
              <b>Andrew Madeswi</b>, Independent Non-Executive Director
            </li>
            <li>
              <b>Yvonne Maitin</b>, Independent Non-Executive Director
            </li>
            <li>
              <b>Anastasia Soula Proxenos</b>, Independent Non-Executive
              Director
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Role Requirements</h2>
          <p>1 Non-Executive Directors</p>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Company Background</h2>
          <p>Successful candidates will have:</p>
          <ul className="list-disc ml-8 mt-4">
            <li>
              Experience in financial services or other sectors relevant to
              Norsad Capital&apos;s operations
            </li>
            <li>Africa markets experience</li>
            <li>
              Board experience or can demonstrate understanding of key
              governance principles
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Board Tenure</h2>
          <p>3 years</p>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Compensation</h2>
          <p>Yes</p>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-xl">Board meetings</h2>
          <p>
            Minimum of 2 virtual meetings and 2 physical board meetings (in
            Nordic and SADC locations) per year. There will be an average of 5
            committee meetings per year, which usually precede the board
            meetings. There are also standing ad-hoc meetings for final
            investment approval (about 4 or 5 a year).
          </p>
        </div>
      </div>
    </section>
  );
};
export default RolesPage;
