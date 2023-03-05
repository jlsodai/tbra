/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./app/**/*.{html,js,jsx}",
		"./components/**/*.{html,js,ts,jsx,tsx}",
		"./sections/**/*.{html,js,jsx}",
		"./styles/**/*.{js,jsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			screens: {
				sm: "600px",
				md: "728px",
				lg: "984px",
				xl: "1240px",
			},
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				darkblue: "#202945",
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
};
