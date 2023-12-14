/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image":"url(/image1.jpg)",
      }
    },
  },
  plugins: [],
}

