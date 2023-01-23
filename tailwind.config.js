/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        avatar: "#eae7e2",
        banner: "#fed1aa",
        "button-default": "#f3f2f3",
      },
    },
  },
  plugins: [],
};
