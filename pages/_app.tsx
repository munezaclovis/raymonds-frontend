import Layout from "../components/layouts/front/Layout";
import IPageWithLayoutProps from "../models/shared/IPageWithLayoutProps";
import CartProvider from "../store/shoppingcart/context";
import ThemeProvider from "../store/themeContext/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: IPageWithLayoutProps) {
	return (
		<ThemeProvider>
			<CartProvider>
				{Component.Layout ? (
					<Component.Layout>
						<Component {...pageProps} />
					</Component.Layout>
				) : (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				)}
			</CartProvider>
		</ThemeProvider>
	);
}

export default MyApp;
