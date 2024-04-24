/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        layout: "#FFFFFF",
        shadow: "##E0E0E0",
        dark: "#1E1F21",
        primary: "#01959F",
      },
    },
  },
  plugins: [],
};
