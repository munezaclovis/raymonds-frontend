import { createContext, useReducer } from "react";
import { ThemeReducer, themeInitState } from "./reducer";

export const ThemeContext = createContext({
	theme: themeInitState,
	setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useReducer(ThemeReducer, themeInitState);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
