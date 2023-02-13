/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      // ["dceed1","aac0aa","736372","a18276","7a918d"]
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
