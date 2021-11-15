import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";
import { ThemeContext } from "../store/themeContext/context";
import { useContext, useLayoutEffect } from "react";
import { SET_DARK_MODE } from "../store/themeContext/actions";

export default function Home() {
	const {
		theme: { darkMode },
		setTheme,
	} = useContext(ThemeContext);

	useLayoutEffect(() => {
		setTheme(SET_DARK_MODE(localStorage.getItem("darkMode") ?? false));
	}, []);

	useLayoutEffect(() => {
		darkMode === true
			? (document.body.className = "dark")
			: document.body.classList.remove("dark");
	}, [darkMode]);

	return (
		<div id='App'>
			<Head>
				<title>Raymonds Clothing | Home</title>
				<meta name='developer' content='Clovis Muneza' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* Header */}
			<Header />
			{/* Body */}
			<Body />
		</div>
	);
}
