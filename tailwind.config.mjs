/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/preline.js',],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
				comforter: ['Comforter'],
				laila: ['Laila'],
			},
		},
	},
	plugins: [
		require('preline/plugin'),
	],
}
