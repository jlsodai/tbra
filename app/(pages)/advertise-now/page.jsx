import KeySection from "@/app/sections/KeySection";
import HeaderTitle from "@/app/sections/HeaderTitle";
import CascadeImg from "@/app/components/CascadeImg";
import PricingSection from "@/app/sections/PricingSection";
import { clients } from "@/app/utils/options";
import LogoSlides from "@/app/slides/LogoSlides";

const page = () => {
  return (
    <>
      <HeaderTitle title="Let us help you find great leaders." />

      <section className="container" data-aos="fade-up">
        <div className="keySectionWrap">
          <KeySection heading="Let us help you find exceptional leaders">
            <p>
              We work to deliver high-calibre candidates across every industry.
              With each opportunity, we seek out diverse and exceptional talent.
              From our regional and global networks to our vibrant community of
              3500+ executives, and diverse community, we know where to find and
              attract the right candidates to bring to the table. Explore our
              range of advertisement options, or get in touch to learn more
              about our tailored recruitment service.
            </p>
          </KeySection>
          <CascadeImg
            position="right"
            className="object-[87%]"
            src="https://tbratest.my.canva.site/advertise-page/images/7d53a878ab0bb24ad5af998d901976c4.jpg"
          />
        </div>
      </section>

      <PricingSection />

      <section className="bg-white" data-aos="fade-up">
        <div className="container my-28">
          <h2 className="text-center text-dusk">We&apos;ve worked with</h2>
          <LogoSlides logos={clients} />
        </div>
      </section>
    </>
  );
};
export default page;
