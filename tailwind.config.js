module.exports = {
  purge: {
    content: ['./src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'logo': ["'Vampiro One'", 'Helvetica', 'Arial', 'sans-serif'],
      'display': ["'Courier Prime'"],
    },
    extend: {
      colors: {
        primary: {
          1: '#6c05d3',
          2: '#2e005b',
        },
        secondary: {
          1: '#ccff00',
        },
        gray: {
          1: '#585858',
          2: '#474747'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
