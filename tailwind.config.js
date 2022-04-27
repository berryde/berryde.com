module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        thunderstorm: "#1E3A8A",
        offwhite: "#F2F2F2",
        charcoal: "#1C1D25",
        cotton: "#A3B8F5",
        stone: "#404357",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" ? { cssnano: {} } : {},
  ],
};
