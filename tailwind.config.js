/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Jungle Blog Logo font
        logo: [
          "Pacifico", // Google Font (handwritten style)
          "Brush Script MT", // fallback (system cursive)
          "Comic Sans MS", // fallback playful style
          "cursive", // generic
        ],
        // Navbar Links font
        links: [
          "Fredoka", // Google Font (rounded modern)
          "Arial Rounded MT Bold", // fallback rounded
          "Verdana", // fallback clean
          "sans-serif", // generic
        ],
      },
    },
  },
  plugins: [],
};
