export const themeInitState = {
	menuOpen: false,
	darkMode: true,
};

export const ThemeReducer = (state = themeInitState, action) => {
	switch (action.type) {
		case "SET_MENU":
			return { ...state, menuOpen: action.payload };
		case "SET_DARK_MODE":
			return { ...state, darkMode: action.payload };
		default:
			return state;
	}
};
