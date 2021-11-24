import React from "react";
import IPageProps from "../../../models/shared/IPageProps";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }: IPageProps) => {
	return (
		<>
			<div className='flex h-screen'>
				<SideBar />
				<div className='flex flex-col'>
					<Body>
						<Header />
						{children}
					</Body>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
