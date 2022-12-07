/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      fontFamily: { 
        inter: "Inter",
        raleway: "Raleway" 
      } 
    },
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        "100": "#f7f7f7",
        "200": "#d9d9d9",
        "300": "#82a284",
        "400": "#2b2b2b",
        "500": "rgba(130, 162, 132, 0.2)",
        "600": "rgba(226, 226, 226, 0.15)",
        "700": "rgba(217, 217, 217, 0.3)",
        "800": "#2b2b2b",
        "900": "rgba(130, 162, 132, 0.2)",
        "1000": "rgba(226, 226, 226, 0.15)",
        "1100": "rgba(217, 217, 217, 0.3)",
        "1200": "rgba(130, 162, 132, 0.1)",
      },
      red: { "100": "#ff472e", "200": "rgba(255, 31, 0, 0.2)" },
      black: "#000",
      blackish: '#324054',
      turquoise: { "100": "#41ebc1", "200": "#22bc96" },
      orange: "rgba(255, 168, 0, 0.2)",
      brown: "rgba(255, 92, 141, 0.2)",
    },
    fontSize: {
      xs: "8px",
      sm: "10px",
      base: "11px",
      lg: "12px",
      xl: "15px",
      "2xl": "16px",
      "3xl": "32px",
      "4xl": "24px",
      "5xl": "30px",
      "6xl": "32px",
      "7xl": "36px",
      "big": "72px"
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  corePlugins: { preflight: false },
  variants: { scrollbar: ['rounded']}
};


