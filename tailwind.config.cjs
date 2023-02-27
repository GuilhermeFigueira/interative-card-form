/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: { sans: ["Space Grotesk", "sans-serif"] },
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				violet: {
					light: "hsl(270, 3%, 87%)",
					gray: " hsl(279, 6%, 55%)",
					dark: "hsl(278, 68%, 11%)",
				},
			},
			backgroundImage: {
				background_desktop: "url('/bg-main-desktop.png')",
				background_mobile: "url('/bg-main-mobile.png')",
			},
		},
	},
	plugins: [],
};
