import "@/styles/globals.css";
import Navigation from "@/app/sections/Navigation";
import { menuLinks } from "@/app/utils/options";

export const metadata = {
	title: "TheBoardroom Africa",
	description: "Accelerating Boardroom Gender Diversity",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-sans">
				<Navigation menuLinks={menuLinks} />
				{children}
			</body>
		</html>
	);
}
