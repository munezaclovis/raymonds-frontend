import IPageProps from "../../../models/shared/IPageProps";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: IPageProps) => {
	return (
		<>
			<div id='App'>
				<Header />
				<Body>{children}</Body>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
