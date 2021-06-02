module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgmain: "#50a3a2",
      },
      margin: {
        120: "27rem",
        200: "60rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
