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
		extend: {
			colors: {
				darkblue: "#202945",
				gold: {
					900: "#CDAD7D",
					500: "#EEEAD6",
					100: "#F4F1EC",
				},
			},
			// fontFamily: {
			// 	sans: ["Roboto", "Arial", "sans-serif"],
			// },
		},
	},
	plugins: [],
};
