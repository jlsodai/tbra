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
			// fontFamily: {
			// 	sans: ["Roboto", "Arial", "sans-serif"],
			// },
		},
	},
	plugins: [],
};
