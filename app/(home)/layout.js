import Navigation from "@/app/sections/Navigation";
import FooterSection from "@/app/sections/FooterSection";
import FooterMenu from "@/app/sections/FooterMenu";
export default function HomePageLayout({ children }) {
  return (
    <>
      {/* <div className="bg-tender">
        <div className="container py-3 text-white">
          TheBoardroom Africa membership now open to male candidates.{" "}
          <a href="#" className="text-mustard">
            Read CEO address.
          </a>
        </div>
      </div> */}
      <Navigation />
      {children}
      <FooterSection />
      <FooterMenu />
    </>
  );
}
