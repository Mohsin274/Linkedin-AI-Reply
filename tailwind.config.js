/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["assets/**", "entrypoints/**", "components/**"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
