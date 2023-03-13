import FooterSection from "@/app/sections/FooterSection";

export default function RootLayout({ children }) {
	return (
		<>
			{children}
			<FooterSection />
		</>
	);
}
