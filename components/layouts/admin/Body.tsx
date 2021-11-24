import React from "react";
import IPageProps from "../../../models/shared/IPageProps";

const Body = ({ children }: IPageProps) => {
	return (
		<div className='flex-grow'>
			<div className='flex h-full'>{children}</div>
		</div>
	);
};

export default Body;
