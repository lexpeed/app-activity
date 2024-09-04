/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#7230fe",
  secondary: "#90ff4c",
  tertiary: "#38A3A5",
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  safelist: [
    // Add all bg- and text- classes to the safelist
    ...Object.keys(colors).map((color) => `bg-${color}`),
    ...Object.keys(colors).map((color) => `text-${color}`),
  ],
};
