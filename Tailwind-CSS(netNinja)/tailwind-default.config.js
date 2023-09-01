/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //Add the paths to all of your template files in your tailwind.config.js file.
  theme: {
    extend: {},
    fontSize: {
      mammoth: "8rem", // me
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  plugins: [],
};
