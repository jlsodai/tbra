/** @type {import('tailwindcss').Config} */
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
		fontFamily: {
			display: ["Inter", "system-ui"],
			sans: [
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: [
				"Georgia",
				"Cambria",
				'"Times New Roman"',
				"Times",
				"serif",
			],
			mono: [
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace",
			],
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
			// fontFamily: {
			// 	sans: ["Roboto", "Arial", "sans-serif"],
			// },
		},
	},
	plugins: [],
};
