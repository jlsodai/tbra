import FooterSection from "@/app/sections/FooterSection";
import Navigation from "@/app/sections/Navigation";
import FooterMenu from "@/app/sections/FooterMenu";

export default function PageLayout({ children }) {
	return (
		<>
			<Navigation />
			{children}
			<FooterSection />
			<FooterMenu />
		</>
	);
}
