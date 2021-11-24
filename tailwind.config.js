const colors = require("tailwindcss/colors");
delete colors.lightBlue;

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./styles/**/*.css",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sora: "'Sora', sans-serif",
				ubuntu: "'Ubuntu', sans-serif",
				"ubuntu-mono": "Ubuntu mono",
				"jet-brains": "'JetBrains Mono', monospace",
			},
			colors: colors,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
