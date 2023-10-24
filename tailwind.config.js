/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				container: "1535px",
			},
			colors: {
				amazon_background_bg: "#131921",
				amazon_white_text: "#FFFFFF",
				amazon_light_text: "#7E797F",
				amazon_grey_text: "#F3F3F3",
				amazon_text_dark: "#000084",
				amazon_footer_top: "#f9fc50",
			},
			animation: {
				transition: "transition 0.7s ease",
			},
		},
	},
	plugins: [],
};
