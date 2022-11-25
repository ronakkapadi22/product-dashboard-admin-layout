/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    aspectRatio: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    variants: {
      aspectRatio: ['responsive']
    },
    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },
    extend: {
      screens: {
        "xs": "375px"
      },
      inset: {
        '4px': '-4px',
        '8px': '-8px',
      },
      animation: {
        'bounce-slow': 'up_down 1500ms linear infinite',
      },
      keyframes: {
        up_down: {
          '0%': {transform: 'translateY(0%)'},
          '25%':{transform: 'translateY(3%)'},
          '50%': {transform: 'translateY(5%)'},
          '75%': {transform: 'translateY(3%)'},
          '100%': {transform: 'translateY(0%)'},
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-aspect-ratio")
  ],
}