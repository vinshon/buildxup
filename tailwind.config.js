module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        darkBlue: "#2563EB",
        fadetext: "#6C757D",
        bgfadeColor: "#F7F5F0",
        menuHover: "#F9FAFB",
      },
      screens: {
        'xs': '375px',   // small mobile
        'sm': '640px',   // default Tailwind sm
        'md': '768px',   // default Tailwind md
        'lg': '1024px',  // default Tailwind lg
        'xl': '1280px',  // default Tailwind xl
        '2xl': '1536px', // default Tailwind 2xl
      },
    },
  },
  plugins: [],
};
