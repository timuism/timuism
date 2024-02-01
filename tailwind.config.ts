import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#efe5ee',
      'black': '#020202',
      'gray': {
        100: '#cfcfcf',
        300: '#a0a0a0',
        500: '#515151',
        900: '#171717'
      },
      'secondary': '#dc9300',
    },
    fontFamily: {
      'sans': ['Barlow', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Courier', "'Courier New'", 'Georgia'],
      'display': ["'Courier Prime'", 'Courier', "'Courier New'", 'Arial', 'sans-serif']
    },
		extend: {},
	},
  plugins: [],
} satisfies Config

