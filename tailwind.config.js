/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Work Sans"', 'system-ui', 'sans-serif']
    },
    colors: {
      'white': {
        50: 'hsl(0, 0%, 100%)',
        100: 'hsl(0, 0%, 94%)',
        200: 'hsl(0, 0%, 86%)',
        300: 'hsl(0, 0%, 74%)',
        400: 'hsl(0, 0%, 60%)',
        500: 'hsl(0, 0%, 49%)',
        600: 'hsl(0, 0%, 40%)',
        700: 'hsl(0, 0%, 32%)',
        800: 'hsl(0, 0%, 27%)',
        900: 'hsl(0, 0%, 24%)',
        950: 'hsl(0, 0%, 16%)',
      },
      'magnolia': {
        50: 'hsl(276, 100%, 97%)',
        100: 'hsl(274, 100%, 95%)',
        200: 'hsl(275, 96%, 91%)',
        300: 'hsl(278, 93%, 83%)',
        400: 'hsl(279, 91%, 73%)',
        500: 'hsl(279, 84%, 61%)',
        600: 'hsl(280, 69%, 49%)',
        700: 'hsl(282, 72%, 40%)',
        800: 'hsl(282, 70%, 33%)',
        900: 'hsl(284, 64%, 28%)',
        950: 'hsl(284, 90%, 16%)',
      },
      'trendy-pink': {
        50: 'hsl(280, 27%, 98%)',
        100: 'hsl(288, 22%, 95%)',
        200: 'hsl(288, 21%, 91%)',
        300: 'hsl(291, 22%, 83%)',
        400: 'hsl(292, 21%, 73%)',
        500: 'hsl(291, 19%, 61%)',
        600: 'hsl(293, 16%, 49%)',
        700: 'hsl(293, 16%, 40%)',
        800: 'hsl(296, 17%, 33%)',
        900: 'hsl(297, 15%, 28%)',
        950: 'hsl(297, 22%, 16%)',
      },
      'revolver': {
        50: 'hsl(288, 45%, 98%)',
        100: 'hsl(284, 48%, 95%)',
        200: 'hsl(281, 46%, 91%)',
        300: 'hsl(287, 43%, 83%)',
        400: 'hsl(287, 43%, 73%)',
        500: 'hsl(287, 39%, 61%)',
        600: 'hsl(289, 32%, 49%)',
        700: 'hsl(290, 33%, 40%)',
        800: 'hsl(291, 32%, 33%)',
        900: 'hsl(292, 30%, 28%)',
        950: 'hsl(292, 42%, 14%)',
      },
    },
    extend: {},
  },
  plugins: [],
}