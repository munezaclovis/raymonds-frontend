const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
