import { useContext } from "react";
import { ThemeContext } from "../store/themeContext/context";

const Body = () => {
	const { theme } = useContext(ThemeContext);
	return <div className=''>{JSON.stringify(theme.menuOpen)}</div>;
};

export default Body;
