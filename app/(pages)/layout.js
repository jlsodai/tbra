import FooterSection from "@/app/sections/FooterSection";
import Navigation from "@/app/sections/Navigation";

export default function PageLayout({ children }) {
	return (
		<>
			<Navigation />
			{children}
			<FooterSection />
		</>
	);
}
