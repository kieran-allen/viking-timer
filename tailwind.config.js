module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Norse", "Quintessential"],
      },
      animation: { "spin-slow": "spin 3s linear infinite" },
    },
  },
  plugins: [],
};
