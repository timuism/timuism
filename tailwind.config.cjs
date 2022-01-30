module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(255 255 255)',
      black: 'rgba(0 0 0)',
      gray: {
        'extra-light': 'rgb(238 238 238)',
        light: 'rgb(196 196 196)',
        DEFAULT: 'rgb(146 146 146)',
        dark: 'rgb(83 83 83)',
        'extra-dark': 'rgb(34 34 34)',
      },
      primary: {
        light: 'rgb(254 255 220)',
        DEFAULT: 'rgb(250 255 0)',
        dark: 'rgb(168 170 54)',
      },
      secondary: {
        light: 'rgb(156 194 250)',
        DEFAULT: 'rgb(0 102 255)',
        dark: 'rgb(14 71 155)',
      },
      accent: {
        light: 'rgb(241 184 255)',
        DEFAULT: 'rgb(174 78 198)',
        dark: 'rgb(127 38 150)',
      },
      action: {
        light: 'rgb(191 255 205)',
        DEFAULT: 'rgb(114 225 138)',
        dark: 'rgb(41 168 69)',
      },
      error: {
        light: 'rgb(255 169 190)',
        DEFAULT: 'rgb(241 91 127)',
        dark: 'rgb(176 20 57)',
      },
    },
    fontFamily: {
      'sen': ['Sen', 'Tahoma', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
