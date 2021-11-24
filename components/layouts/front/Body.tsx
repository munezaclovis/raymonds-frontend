import IPageProps from "../../../models/shared/IPageProps";
import CategoryMenu from "./CategoryMenu";

const Body = ({ children }: IPageProps) => {
	return (
		<div className='flex-grow'>
			<CategoryMenu />
			{children}
		</div>
	);
};

export default Body;
