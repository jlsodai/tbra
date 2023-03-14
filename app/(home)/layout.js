import Navigation from "@/app/sections/Navigation";
export default function HomePageLayout({ children }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}
