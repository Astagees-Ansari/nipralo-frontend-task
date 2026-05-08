/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "vivid-yangelo": "#F06C30",
        "fiord": "#425462",
        "grey": "#808080",
        "smooth-grey": "#CCCCCC",
        "bold-grey": "#666666",
        "abstract-orange": "#F4986E",
      },
      fontFamily: {
        pacificoCursive: ["Pacifico", "cursive"],
      }
    },
  },
  plugins: [],
}