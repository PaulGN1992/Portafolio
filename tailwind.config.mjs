/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rojoPg': '#f22222',
				'naranjaPg': '#f4422a',
				'blancoPg': '#f2e2ce',
				'negroPg': '#161616',
				'grisPg': '#2f2f2f',
				'limaPg': '#C6F52A',

			  },
		},
	},
	plugins: [],
}
