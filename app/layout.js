import "@/styles/globals.css";
import { Inter, Libre_Baskerville, Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import AOSWrapper from "./wrappers/AOSWrapper";

import FooterMenu from "@/app/sections/FooterMenu";
import FooterSection from "./sections/FooterSection";

const noto = Noto_Serif_Display({
	weight: ["400", "700", "900"],
	subsets: ["latin"],
	variable: "--font-noto-serif-display",
});

// const inter = Inter({
// 	variable: "--font-inter",
// 	subsets: ["latin"],
// 	display: "swap",
// });

// const libreb = Libre_Baskerville({
// 	variable: "--font-libre-baskerville",
// 	subsets: ["latin"],
// 	weight: ["400", "700"],
// 	display: "swap",
// });

const inter = localFont({
	src: [
		{
			path: "../public/fonts/Inter-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Inter-Light.ttf",
			weight: "200",
			style: "light",
		},
		{
			path: "../public/fonts/Inter-Bold.ttf",
			weight: "700",
			style: "bold",
		},
	],
	variable: "--font-inter",
});

const libreb = localFont({
	src: [
		{
			path: "../public/fonts/LibreBaskerville-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/LibreBaskerville-Bold.ttf",
			weight: "700",
			style: "bold",
		},
	],
	variable: "--font-libre-baskerville",
});

const halyard = localFont({
	src: [
		{
			path: "../public/fonts/Halyard-Display-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Halyard-Display-Light.ttf",
			weight: "300",
			style: "light",
		},
		{
			path: "../public/fonts/Halyard-Display-ExtraLight.ttf",
			weight: "200",
			style: "extralight",
		},
	],
	variable: "--font-halyard-display",
});

export const metadata = {
	title: "TheBoardroom Africa",
	description:
		"TheBoardroom Africa officially launched in 2016, our goal is to improve board diversity by accelerating the appointment of women onto boards and building a growing pipeline of board-ready women while inspiring and educating the business community on the power of diverse leadership",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${libreb.variable} ${noto.variable} ${halyard.variable} text-dusk text-[16px]`}
		>
			<body className="font-sans">
				<main className="overflow-hidden">
					<AOSWrapper>{children}</AOSWrapper>
				</main>
			</body>
		</html>
	);
}
