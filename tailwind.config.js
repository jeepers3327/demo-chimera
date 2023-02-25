/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@chimera-ui/components/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@chimera-ui/tw-plugin")],
};
