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
        "sage":"#C7C7A6",
        "seasalt": "#F8F7F9",
        "navblue": "#92DCE5",
        // "primary": "#D81E5B",
        // "primary": "#0EB1D2",
        "primary": "#072ac8",
        "secondary": "#1e96fc",
        "tertiary": "#FDE74C"
      },
    },
  },
  plugins: [],
};
