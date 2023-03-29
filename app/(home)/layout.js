import Navigation from "@/app/sections/Navigation";
import FooterSection from "@/app/sections/FooterSection";
import FooterMenu from "@/app/sections/FooterMenu";
export default function HomePageLayout({ children }) {
	return (
		<>
			<Navigation />
			{children}
			<FooterSection />
			<FooterMenu />
		</>
	);
}
