/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        laBlue: '#454863',
        laGreen: '#81A29B',
        laGreenLight: '#AEC2BE',
        laYellow: '#F2BA60',
        laPink: '#F2C8C2',
        laOrange: '#C8816B',
      },
      animation: {
        fadeOut: "fadeOut 1s ease-in forwards"
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}