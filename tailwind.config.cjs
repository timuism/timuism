/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#efe5ee',
      'black': '#020202',
      'primary': '#349980',
      'secondary': '#dc9300',
    },
    fontFamily: {
      'sans': ['Barlow', 'Helvetica', 'Arial', 'sans-serif'],
      'display': ["'Barlow Condensed'", 'Helvetica', 'Arial', 'sans-serif']
    },
		extend: {},
	},
	plugins: [],
}
