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
      boxShadow: {
        "3xl": "0px 0px 0px 2px rgb(240, 242, 248)",
        "4xl": "0px 0px 0px 5px rgb(240, 242, 248)",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(1.000, 0.005, 1.000, -0.110)",
      },
    },
  },
  plugins: [],
};
