import IAction from "../../models/shared/IAction";
import IThemeContext from "../../models/themecontext/IThemeContext";

export const themeInitState:IThemeContext = {
	menuOpen: false,
	darkMode: true,
};

export const ThemeReducer = (state = themeInitState, action: IAction): IThemeContext => {
	switch (action.type) {
		case "SET_MENU":
			return { ...state, menuOpen: action.payload };
		case "SET_DARK_MODE":
			return { ...state, darkMode: action.payload };
		default:
			return state;
	}
};
