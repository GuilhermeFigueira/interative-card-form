/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: { sans: ["Space Grotesk", "sans-serif"] },
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				red: "hsl(0, 100%, 66%)",
				violet: {
					light: "hsl(270, 3%, 87%)",
					gray: " hsl(279, 6%, 55%)",
					dark: "hsl(278, 68%, 11%)",
				},
				input_gradient: {
					left: "hsl(249, 99%, 64%)",
					right: "hsl(278, 94%, 30%)",
				},
			},
			backgroundImage: {
				background_desktop: "url('/bg-main-desktop.png')",
				background_mobile: "url('/bg-main-mobile.png')",
				front_card: "url('/bg-card-front.png')",
				back_card: "url('/bg-card-back.png')",
			},
		},
	},
	plugins: [],
};
