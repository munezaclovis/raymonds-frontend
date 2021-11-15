import ThemeProvider from "../store/themeContext/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
