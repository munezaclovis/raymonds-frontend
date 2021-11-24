import React, { createContext, Dispatch, useReducer } from "react";
import { ThemeReducer, themeInitState } from "./reducer";
import IAction from "../../models/shared/IAction";
import IThemeContext from "../../models/themecontext/IThemeContext";
import { IActionPayload, IActionType } from "./IActionType";
import IPageProps from "../../models/shared/IPageProps";

type IContext = {
	theme: IThemeContext;
	setTheme: Dispatch<IAction<IActionType, IActionPayload>>;
};
export const ThemeContext = createContext<IContext>({
	theme: themeInitState,
	setTheme: () => {},
});

const ThemeProvider = ({ children }: IPageProps) => {
	const [theme, setTheme] = useReducer(ThemeReducer, themeInitState);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
