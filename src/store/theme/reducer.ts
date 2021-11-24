import IAction from '../../models/shared/IAction';
import ITheme from '../../models/theme/ITheme';

export const themeInitState: ITheme = {
	menuOpen: false,
	darkMode: true,
};

export const ThemeReducer = (
	state = themeInitState,
	action: IAction
): ITheme => {
	switch (action.type) {
		case 'SET_MENU':
			return { ...state, menuOpen: action.payload };
		case 'SET_DARK_MODE':
			return { ...state, darkMode: action.payload };
		default:
			return state;
	}
};
