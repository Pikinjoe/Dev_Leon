/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dev/**/*.{html,js}"],
  theme: {
   
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#00aaff',
        'secondary': '#1f1f38',
        'grad': '#113648',
        'cards-primary': 'rgba(51, 20, 226, 0.494)'
      },
      backgroundImage: {
        'heading': "url('')"
      }
    },
 
  },
  plugins: [],
}

