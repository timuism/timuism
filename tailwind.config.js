module.exports = {
    content: ["./src/**/*.{html,js,ts,vue}"],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#000',
            'sand': {
                DEFAULT: 'hsl(50, 17%, 57%)',
                dark: 'hsl(50, 17%, 39%)'
            },
            'dt': {
                gray: 'hsl(223, 20%, 17%)',
                blue: 'hsl(223, 100%, 66%)',
                yellow: 'hsl(40, 100%, 70%)'
            },
            'sb': {
                gold: 'hsl(47, 40%, 48%)',
            }
        },
        fontFamily: {
            dmsans: ["'DM Sans'", 'tahoma', 'sans-serif'],
            dmserif: ["'DM Serif Display'", 'tahoma', 'sans-serif']
        },
      extend: {},
    },
    plugins: [],
  }