/* eslint-disable @next/next/no-img-element */

import CascadeImg from "@/app/components/CascadeImg";
import HeroSection from "@/app/sections/HeroSection";
import KeySection from "@/app/sections/KeySection";
import Testimonial from "@/app/components/Testimonial";
import { clients, filteredMeta } from "@/app/utils/options";
import StatsSection from "@/app/sections/StatsSection";
import { fetchData } from "@/app/lib/fetchData";
import LogoSlides from "@/app/slides/LogoSlides";
import { homeData } from "../lib/strapi";

// const pageData = async () => {
//   return await fetchData("home-page?populate=*");
// };

export async function generateMetadata() {
  //   const data = await pageData();
  const { seo } = homeData;
  return filteredMeta(seo);
}

export default async function Home() {
  const { intro, connecting, programmes, partners, hero, testimonial } =
    homeData;
  return (
    <>
      <HeroSection hero={hero} />

      <section className="container" data-aos="fade-up">
        <div className="grid md:grid-cols-2 md:gap-20">
          <KeySection
            className="md:w-[80%]"
            heading={intro.Title}
            linkTitle={intro.linkTitle}
            linkui={intro.btn && "btn"}
            url={intro.link}
          />
          <CascadeImg position="right" src={intro.imageUrl} />
        </div>
      </section>

      <section className="bg-gray-100" data-aos="fade-up">
        <div className="container grid md:grid-cols-2 md:gap-20">
          <CascadeImg position="left" src={connecting.imageUrl} />
          <KeySection
            keyPosition="right"
            heading={connecting.Title}
            linkTitle={connecting.linkTitle}
            url={connecting.link}
          >
            {connecting.content && <p>{connecting.content}</p>}
          </KeySection>
        </div>
      </section>

      <section className="bg-white" data-aos="fade-up">
        <div className="container my-12 md:my-28">
          <h2 className="text-center -sm:mb-10">Trusted by:</h2>
          <LogoSlides logos={clients} />
        </div>
      </section>

      <section className="bg-gray-100" data-aos="fade-up">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20">
            <KeySection
              heading={programmes.Title}
              linkTitle={programmes.linkTitle}
              url={programmes.link}
            >
              {programmes.content && <p>{programmes.content}</p>}
            </KeySection>
            <CascadeImg position="right" src={programmes.imageUrl} />
          </div>
        </div>
      </section>

      <section className="container" data-aos="fade-up">
        <div className="grid md:grid-cols-2 md:gap-20">
          <Testimonial
            quote={testimonial.quote}
            author={testimonial.author}
            authorTitle={testimonial.title}
          />
          <KeySection
            heading={partners.Title}
            linkTitle={partners.linkTitle}
            url={partners.link}
            keyPosition="right"
            className="-sm:order-first"
          >
            {partners.content && <p>{partners.content}</p>}
          </KeySection>
        </div>
      </section>
      <StatsSection />
    </>
  );
}
