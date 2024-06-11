/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {sans: ['italic']},
      colors: {
        'primary': 'rgb(224 97 96)',
        'secundary': 'rgb(229 231 235)',
        'complementary': 'rgb(239 239 236 / 98%)',
        'black-modal': 'rgb(0 0 0 / 0.8)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

