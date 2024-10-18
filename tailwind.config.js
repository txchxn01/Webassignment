/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cream: '#E8DCD0',
        kaki: '#C19E77',
      },
      fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
        von: ['"Vonique 92"', 'cursive'], // Add Vonique 92 font family
      },
    },
  },
  plugins: [],
};
