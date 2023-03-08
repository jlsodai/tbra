/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = withMT({
	content: [
		"./app/**/*.{html,js,jsx}",
		"./components/**/*.{html,js,ts,jsx,tsx}",
		"./sections/**/*.{html,js,jsx}",
		"./styles/**/*.{js,jsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				darkblue: "#202945",
				darkgray: "#4a4f54",
				gold: {
					DEFAULT: "#CDAD7D",
					50: "#FFFFFF",
					100: "#FAF7F3",
					200: "#EFE5D5",
					300: "#E4D2B8",
					400: "#D8C09A",
					500: "#CDAD7D",
					600: "#BD9354",
					700: "#9D773C",
					800: "#75582D",
					900: "#4C391D",
				},
			},
			fontFamily: {
				serif: ["Libre Baskerville", ...fontFamily.serif],
				sans: ["Inter", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
});
