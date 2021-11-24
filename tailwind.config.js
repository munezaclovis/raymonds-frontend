const colors = require("tailwindcss/colors");
delete colors.lightBlue;

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
