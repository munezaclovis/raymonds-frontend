import React, { createContext, Dispatch, FC, useReducer } from 'react';
import { ThemeReducer, themeInitState } from './reducer';
import IAction from '../../models/shared/IAction';
import ITheme from '../../models/theme/ITheme';
import { IActionPayload, IActionType } from './IActionType';
import IPageProps from '../../models/shared/IPageProps';

type IContext = {
	theme: ITheme;
	setTheme: Dispatch<IAction<IActionType, IActionPayload>>;
};
export const ThemeContext = createContext<IContext>({
	theme: themeInitState,
	setTheme: () => {},
});

const ThemeProvider: FC<IPageProps> = ({ children }) => {
	const [theme, setTheme] = useReducer(ThemeReducer, themeInitState);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
