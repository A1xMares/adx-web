/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#21B692",
				secondary: "#515564",
				adxgray: "#ABAAAA",
				adxlight: "#F8F8F8",
			},
		},
	},
	plugins: [],
};
